import { createClient } from "../util/supabase/server"; // Supabase client for Server Components
import LogoutButton from "../components/LogoutButton";
import Link from "next/link";

export default async function PostsPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isAdmin = user?.email === "yuhyunjadedev@gmail.com";

  // Fetch all posts from Supabase ordered by latest
  // 1. Create base query
  let query = supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  // 2. [Core] If not admin, fetch only posts where 'is_published' is true
  if (!isAdmin) {
    query = query.eq("is_published", true);
  }

  const { data: posts, error } = await query;

  if (error) return <div>error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-12 px-12 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-10 text-teal-100">Blog</h1>

        <div className="flex gap-4">
          {/* Show Write and Logout buttons only for admin */}
          {isAdmin && (
            <>
              <Link
                href="/posts/write"
                className="px-4 py-1.5 text-white bg-white/10 hover:bg-white/20 active:scale-95 rounded-lg text-sm transition-all border border-white/10"
              >
                New Post
              </Link>
              <LogoutButton />
            </>
          )}
        </div>
      </div>

      <div className="grid gap-8">
        {posts?.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            {/* Glassmorphism style card to match the purple background */}
            <div
              className="p-8 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 
                         hover:bg-white/30 
                         active:bg-white/40 active:scale-[0.98]
                         transition-all duration-200 shadow-xl cursor-pointer
                         select-none touch-manipulation"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-lg md:text-2xl text-white mb-2">
                  {post.title}
                </h2>

                {/* 3. Show visibility status only to admin */}
                {isAdmin && !post.is_published && (
                  <span className="text-[10px] font-bold bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/20 uppercase tracking-wider">
                    DRAFT
                  </span>
                )}
              </div>
              <p className="text-white/70 text-sm">
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
