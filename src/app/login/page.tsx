
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/api/authApi";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await loginUser({
        email,
        password,
      });

      alert(res.data.message);

      // Navigate after successful login
      router.push("/dashboard");
    } catch (error: any) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center  px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-black mb-8">
          Login to your account
        </p>

        <div className="space-y-5">

          <div>
            <label className="block text-black mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border text-black rounded-lg p-3 focus:outline-none "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block  text-black mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border text-black rounded-lg p-3 focus:outline-none "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-primary/60 text-black py-3 rounded-lg font-semibold disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-primary  hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center">
            <span className="text-primary">
              Don't have an account?{" "}
            </span>

            <Link
              href="/register"
              className=" font-semibold hover:underline text-black"
            >
              Create Account
            </Link>
          </div>

        </div>

      </div>

    </main>
  );
}

