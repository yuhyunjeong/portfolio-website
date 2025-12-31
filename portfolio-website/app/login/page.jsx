"use client";
import { useState } from "react";
import { supabase } from "../util/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else {
      alert("welcome, yuhyun!");
      router.push("/posts");
      router.refresh();
    }
  };

  return (
    <div className="max-w-md mx-auto pt-40 text-white px-6">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 bg-white/10 p-8 rounded-2xl backdrop-blur-md"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-white/5 border border-white/20"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-white/5 border border-white/20"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black py-3 rounded-lg font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
