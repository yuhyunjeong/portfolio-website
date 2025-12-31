import { createClient } from "../../../util/supabase/server";
import { notFound } from "next/navigation";
import EditForm from "./EditForm"; // Separate the form into a Client Component

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const supabase = createClient();

  // Fetch existing post data
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-20 px-12 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10">Edit Post</h1>
      {/* Pass existing post data to the form component */}
      <EditForm post={post} />
    </div>
  );
}
