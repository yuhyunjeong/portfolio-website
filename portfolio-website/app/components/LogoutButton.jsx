"use client";

import { supabase } from "../util/supabase/client"; // Use client-side Supabase client
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Failed to log out:", error.message);
    } else {
      alert("Logged out successfully.");
      // Refresh page and redirect to home to reset session
      router.refresh();
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg text-sm transition-all border border-red-500/20"
    >
      Logout
    </button>
  );
}
