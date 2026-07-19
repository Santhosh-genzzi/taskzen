import axiosInstance from "./axiosInstance";

// Register API
export const registerUser = (data) => {
  return axiosInstance.post("/register", data);
};

// Login API
export const loginUser = (data) => {
  return axiosInstance.post("/login", data);
};

// Refresh Token API
export const refreshToken = () => {
  return axiosInstance.post("/refresh-token");
};

// Logout API
export const logoutUser = () => {
  return axiosInstance.post("/logout");
};

// Forgot Password
export const forgotPassword = (data) => {
  return axiosInstance.post("/forgot-password", data);
};

// Reset Password


export const resetPassword = (token, data) => {
  return axiosInstance.post(
    `/reset-password/${token}`,
    data
  );
};


