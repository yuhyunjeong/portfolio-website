"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { supabase } from "../util/supabase/client";

export default function Editor({ onChange, initialContent = "" }) {
  // add initialContent
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg shadow-md my-4",
        },
      }),
    ],
    content: initialContent, // Load existing content into the editor
    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        // 1. Generate a unique filename to prevent duplicates
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 7)}.${fileExt}`;

        // Set file path to save in the bucket root
        const filePath = `${fileName}`;

        // 2. Upload to Supabase Storage 'posting' bucket
        const { data, error } = await supabase.storage
          .from("posting") // Update completed: changed from 'posts' to 'posting'
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          console.error("Storage upload error details:", error);
          alert(`Upload failed: ${error.message}`);
          return;
        }

        // 3. Generate Public URL (Verify bucket name 'posting')
        const {
          data: { publicUrl },
        } = supabase.storage.from("posting").getPublicUrl(filePath);

        // 4. Insert into the editor
        if (publicUrl) {
          editor.chain().focus().setImage({ src: publicUrl }).run();
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    input.click();
  };

  if (!editor) return null;

  return (
    <div className="w-full text-black font-sans">
      <div className="flex flex-wrap gap-2 p-2 bg-gray-100 border border-b-0 rounded-t-xl">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 bg-white border rounded hover:bg-gray-50 ${
            editor.isActive("bold")
              ? "border-blue-500 font-bold text-blue-600"
              : "text-gray-700"
          }`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 bg-white border rounded hover:bg-gray-50 ${
            editor.isActive("heading", { level: 2 })
              ? "border-blue-500 font-bold text-blue-600"
              : "text-gray-700"
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={addImage}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition shadow-sm ml-auto"
        >
          📷 Add Image
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
