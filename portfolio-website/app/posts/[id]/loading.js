// app/posts/[id]/loading.js
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto pt-32 px-12 min-h-screen animate-pulse">
      <div className="h-10 w-2/3 bg-white/10 rounded mb-6" />
      <div className="h-4 w-1/4 bg-white/10 rounded mb-12" />
      <div className="space-y-4">
        <div className="h-4 w-full bg-white/5 rounded" />
        <div className="h-4 w-full bg-white/5 rounded" />
        <div className="h-4 w-3/4 bg-white/5 rounded" />
      </div>
    </div>
  );
}
