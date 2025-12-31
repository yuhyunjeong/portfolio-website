import { createClient } from "../../util/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

// ✅ 1. Set page to hybrid static/dynamic mode to improve speed
export const dynamic = "force-dynamic";

export default async function PostDetailPage({ params }) {
  // ✅ 2. Await params for Next.js 14/15 compatibility (Stability)
  const { id } = await params;
  const supabase = createClient();

  // ✅ 3. Use getSession() for faster performance than getUser() (Reduces server load)
  const authPromise = supabase.auth.getSession();
  const postPromise = supabase
    .from("posts")
    .select("id, title, content, created_at, is_published") // Specify only necessary columns to increase speed
    .eq("id", id)
    .single();

  const [sessionRes, postRes] = await Promise.all([authPromise, postPromise]);

  const user = sessionRes.data?.session?.user;
  const post = postRes.data;
  const error = postRes.error;

  const isAdmin = user?.email === "yuhyunjadedev@gmail.com";

  if (error || !post || (!isAdmin && post.is_published === false)) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto pt-32 pb-20 px-12 min-h-screen text-white font-sans">
      <header className="mb-10 border-b border-white/20 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-2xl md:text-4xl leading-tight font-mono">
            {post.title}
          </h1>
          {/* ✅ Display visibility status (Fixed truncated part) */}
          {isAdmin && post.is_published === false && (
            <span className="text-[10px] font-bold bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/20 uppercase tracking-wider">
              Draft
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-white/60">
            {new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {isAdmin && (
            <div className="flex items-center gap-3">
              <Link
                href={`/posts/${id}/edit`}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 active:scale-95 rounded-lg text-sm transition-all border border-white/10"
              >
                Edit
              </Link>
              <DeleteButton id={id} />
            </div>
          )}
        </div>
      </header>

      {/* Render post content */}
      <div
        className="prose prose-invert prose-lg max-w-none text-white/90 
                   prose-headings:text-white prose-a:text-teal-400 prose-strong:text-white font-mono"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link
          href="/posts"
          className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to Blog
        </Link>
      </div>
    </article>
  );
}
