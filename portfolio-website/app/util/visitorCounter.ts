// util/visitorCounter.ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const trackAllHits = async () => {
  // Debug: Log request during development
  if (process.env.NODE_ENV === "development") {
    console.log(
      "--- 로컬 테스트: 카운트 업 요청 보냄 Development Mode: Sending hit increment request ---"
    );
  }

  // Execute RPC without client-side deduplication
  await supabase.rpc("increment_all_hits");
};
