"use client";

import { supabase } from "../../util/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Confirm deletion: Are you sure?")) return;

    setIsDeleting(true);
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      alert("Failed to delete: " + error.message);
      setIsDeleting(false);
    } else {
      alert("Post deleted successfully.");
      router.push("/posts");
      router.refresh(); // Refresh the list view
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className={`px-4 py-1.5 rounded-lg text-sm transition-all border 
        ${
          isDeleting
            ? "bg-gray-500/20 text-gray-400 border-transparent cursor-not-allowed"
            : "bg-red-500/10 hover:bg-red-500/20 active:scale-95 text-red-400 border-red-500/20"
        }`}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
