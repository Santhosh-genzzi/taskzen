import { registerService } from "../service/authService.js";

export const register = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await registerService({
      username,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });

  } catch (err) {

    return res.status(400).json({
      success: false,
      message: err.message,
    });

  }
};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const {
      user,
      accessToken,
      refreshToken,
    } = await loginService(email, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      accessToken,
      user,
    });

  } catch (err) {

    return res.status(400).json({
      success: false,
      message: err.message,
    });

  }

};


export const refreshToken = async (req, res) => {
  try {

    const refreshToken = req.cookies.refreshToken;

    const result = await refreshTokenService(refreshToken);

    return res.status(200).json(result);

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message,
    });

  }
};

export const logout = async (req, res) => {
  try {

    const refreshToken = req.cookies.refreshToken;

    const result = await logoutService(refreshToken);

    res.clearCookie("refreshToken");

    return res.status(200).json(result);

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message,
    });

  }
};

export const forgotPassword = async (req, res) => {

  try {

    const { email } = req.body;

    const result = await forgotPasswordService(email);

    return res.status(200).json({
      success: true,
      message: result.message,
    });

  } catch (error) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

export const resetPassword = async (req, res) => {

  try {

    const { token } = req.params;
    const { password } = req.body;

    const result = await resetPasswordService(
      token,
      password
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });

  } catch (error) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};