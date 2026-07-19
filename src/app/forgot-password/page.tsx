
"use client";

import { useState } from "react";
import Link from "next/link";
import { forgotPassword } from "@/api/authApi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleForgot = async () => {
    try {
      setLoading(true);

      const res = await forgotPassword({
        email,
      });

      alert(res.data.message);

      setEmail("");
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
        "Failed to send reset link"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        <h1 className="text-3xl  text-black font-bold text-center">
          Forgot Password
        </h1>

        <p className="text-center text-black mt-2 mb-8">
          Enter your email to receive a password reset link.
        </p>

        <div className="space-y-5">

          <div>
            <label className="block text-black mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 text-black focus:outline-none "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            onClick={handleForgot}
            disabled={loading}
            className="w-full bg-primary text-text py-3 rounded-lg font-semibold "
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="text-center">
            <Link
              href="/login"
              className="text-primary hover:underline"
            >
              Back to Login
            </Link>
          </div>

        </div>

      </div>

    </main>
  );
}
