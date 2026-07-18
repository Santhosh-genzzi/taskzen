import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import {transporter} from "../utils/nodemailer.js"
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
} from "../utils/jwt.js";
import { redisClient } from "../utils/redis.js";

const prisma = new PrismaClient();


export const registerService = async ({ username, email, password }) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export const loginService = async (email, password) => {

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Password");
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await redisClient.set(
    `refresh:${user.id}`,
    refreshToken,
    { EX: 7 * 24 * 60 * 60 }
  );

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Login Successful",
    html: `<h2>Hello ${user.username}</h2>`,
  });

  return {
    user,
    accessToken,
    refreshToken,
  };
};


export const refreshTokenService = async (refreshToken) => {

  if (!refreshToken) {
    throw new Error("Refresh Token Missing");
  }

  const decoded = verifyRefreshToken(refreshToken);

  const savedToken = await redisClient.get(
    `refresh:${decoded.id}`
  );

  if (savedToken !== refreshToken) {
    throw new Error("Invalid Refresh Token");
  }

  const accessToken = generateAccessToken(decoded);

  return {
    accessToken,
  };
};

export const logoutService = async (refreshToken) => {

  if (!refreshToken) {
    throw new Error("Refresh Token Missing");
  }

  const decoded = verifyRefreshToken(refreshToken);

  await redisClient.del(
    `refresh:${decoded.id}`
  );

  return {
    message: "Logout Successful",
  };
};

export const forgotPasswordService = async (email) => {

  if (!email) {
    throw new Error("Email is required");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const resetToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.RESET_PASSWORD_SECRET,
    {
      expiresIn: "15m",
    }
  );

  const resetLink =
    `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Reset Password",
    html: `
      <h2>Hello ${user.username}</h2>

      <p>You requested a password reset.</p>

      <p>Click the link below to reset your password.</p>

      <a href="${resetLink}">
        Reset Password
      </a>

      <p>This link will expire in 15 minutes.</p>
    `,
  });

  return {
    message: "Password reset link sent to your email.",
  };
};

export const resetPasswordService = async (token, password) => {

  if (!password) {
    throw new Error("Password is required");
  }

  const decoded = jwt.verify(
    token,
    process.env.RESET_PASSWORD_SECRET
  );

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  await prisma.user.update({
    where: {
      id: decoded.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  return {
    message: "Password reset successful.",
  };
};