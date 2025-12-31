"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../util/supabase/client";
import Editor from "../../components/Editor";

export default function MyPostClient() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // 1. Add visibility state (Default true: Public)
  const [isPublished, setIsPublished] = useState(true);
  const router = useRouter();

  const handlePublish = async () => {
    if (!title || !content) return alert("Please enter a title and content.");

    // 2. Include 'is_published' column on insert
    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        is_published: isPublished,
      },
    ]);

    if (error) {
      alert("Failed to save: " + error.message);
    } else {
      alert(isPublished ? "Published successfully!" : "Saved privately!");
      router.push("/posts");
      router.refresh();
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-12 px-4 min-h-screen text-black">
      <div className="mb-6">
        <input
          type="text"
          placeholder="title"
          className="w-full text-4xl font-bold outline-none border-b-2 border-transparent focus:border-gray-200 py-2 transition-all placeholder:text-gray-300 bg-transparent text-white" // 배경이 어두울 경우 대비 text-white 추가 확인 필요
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Editor onChange={setContent} />
      </div>

      <div className="mt-8 flex justify-end items-center gap-6">
        {/* 3. Visibility checkbox UI */}
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="w-4 h-4 accent-black cursor-pointer"
          />
          <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition">
            {isPublished ? "Public" : "Private (Draft)"}
          </span>
        </label>

        <button
          onClick={() => router.back()}
          className="text-gray-500 hover:text-gray-300 font-medium transition"
        >
          cancel
        </button>
        <button
          onClick={handlePublish}
          className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg active:scale-95"
        >
          {isPublished ? "Publish" : "Save Draft"}
        </button>
      </div>
    </div>
  );
}
