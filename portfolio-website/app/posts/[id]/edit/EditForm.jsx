"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../util/supabase/client";
import Editor from "../../../components/Editor"; // Path to the existing Editor component

export default function EditForm({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content); // Existing HTML content
  const [isUpdating, setIsUpdating] = useState(false);
  const [isPublished, setIsPublished] = useState(post.is_published);
  const router = useRouter();

  const handleUpdate = async () => {
    if (!title || !content) return alert("Please enter a title and content");

    setIsUpdating(true);
    const { error } = await supabase
      .from("posts")
      .update({ title, content, is_published: isPublished })
      .eq("id", post.id);

    if (error) {
      alert("Failed to update: " + error.message);
      setIsUpdating(false);
    } else {
      alert("Changes saved!");
      router.push(`/posts/${post.id}`);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-4xl font-bold bg-transparent outline-none border-b border-white/20 pb-2 focus:border-white transition"
        placeholder="title"
      />

      {/* Pass initialContent to the Editor component. Minor changes to existing editor code required. */}
      <div className="bg-white rounded-xl overflow-hidden text-black">
        <Editor initialContent={content} onChange={setContent} />
      </div>

      <div className="flex justify-end items-center gap-6 mt-4">
        {/* ✅ Add visibility toggle */}
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="w-4 h-4 accent-white cursor-pointer"
          />
          <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition">
            {isPublished ? "Public" : "Private (Draft)"}
          </span>
        </label>

        <div className="flex gap-3">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 text-white/60 hover:text-white transition"
          >
            cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-gray-200 active:scale-95 transition-all disabled:bg-gray-400 min-w-[140px]"
          >
            {isUpdating
              ? "Updating..."
              : isPublished
              ? "Edit Complete"
              : "Save as Draft"}
          </button>
        </div>
      </div>
    </div>
  );
}
