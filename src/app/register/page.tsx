
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {registerUser} from "@/api/authApi"
import { LuLock, LuLockOpen } from "react-icons/lu";
import login from "../login/page";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [form, setForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleRegister = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await registerUser(form);

    alert(res.data.message);

    router.push("/login");
  } catch (error: any) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      error.message ||
      "Registration Failed"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-black  flex items-center justify-center mt-2 px-4 py-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-3 sm:p-8">

        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Create Account
          </h1>

          <p className="text-black mt-2">
            Register to continue
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm text-black font-medium mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-sm text-black font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none text-black"
            />
          </div>

          <div>
            <label className="block text-sm  text-black font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                className="w-full border border-gray-300 rounded-lg p-3 pr-20 focus:outline-none text-black"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600"
              >
                {showPassword ? <LuLockOpen/> : <LuLock/>}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full  text-black bg-primary py-3 rounded-lg font-semibold  "
          >
            {loading
              ? "Registering..."
              : "Register"}
          </button>
        </form>

        <div className="mt-3 text-center  flex  items-center justify-center">
          <p className="text-gray-500">
            Already have an account?
          </p>

         <button className="text-black" onClick={() => router.push("/login")}>
  Login
</button>
        </div>

      </div>
    </main>
  );
}

