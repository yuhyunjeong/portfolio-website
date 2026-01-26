// components/AdminStats.tsx
"use client";
import { useEffect, useState, Suspense } from "react";
import { createClient } from "@supabase/supabase-js";

import { trackAllHits } from "../util/visitorCounter";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function StatsContent() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({ today: 0, total: 0 });

  useEffect(() => {
    // Debug: Check if component is loaded
    console.log("StatsContent component loaded.");

    const fetchStats = async () => {
      // Fetch visitor data sorted by date in descending order
      const { data, error } = await supabase
        .from("visitors")
        .select("display_date, count")
        .order("display_date", { ascending: false });

      if (error) {
        console.error("Failed to load visitor stats:", error);
        return;
      }

      if (data && data.length > 0) {
        // 1. Treat the most recent entry as 'Today' to avoid timezone issues
        const latestEntry = data[0];
        const todayCount = latestEntry.count;

        // 2. Calculate total sum of visitors
        const totalCount = data.reduce((acc, cur) => acc + (cur.count || 0), 0);

        setStats({
          today: todayCount,
          total: totalCount,
        });

        // Debug: Check DB date reference
        console.log("Latest DB date:", latestEntry.display_date);
      }
    };

    const checkStatus = async () => {
      // 1. Get current session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Debug: Log session info
      console.log("Current session:", session);

      // 2. Admin verification
      const myEmail = "yuhyunjadedev@gmail.com";
      if (session?.user?.email?.trim() === myEmail.trim()) {
        console.log("Admin verified successfully.");
        setIsAdmin(true);
        fetchStats();
      }

      // 3. Increment visitor count (runs on every page load)
      //await supabase.rpc("increment_all_hits");
      await trackAllHits();
    };

    checkStatus();

    // 4. Listen for auth state changes (login/logout events)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", _event);
      const myEmail = "yuhyunjadedev@gmail.com";

      if (session?.user?.email?.trim() === myEmail.trim()) {
        setIsAdmin(true);
        fetchStats();
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Return null if not admin to hide the UI from regular visitors
  if (!isAdmin) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "15px",
        borderRadius: "8px",
        fontSize: "12px",
        zIndex: 9999,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(4px)",
      }}
    >
      <p style={{ margin: 0 }}>
        📊 <b>Visitors</b>
      </p>
      <hr
        style={{ margin: "5px 0", borderColor: "rgba(255, 255, 255, 0.2)" }}
      />
      <p style={{ margin: "2px 0" }}>Today: {stats.today}</p>
      <p style={{ margin: "2px 0" }}>Total: {stats.total}</p>
    </div>
  );
}

export default function AdminStats() {
  return (
    <Suspense fallback={null}>
      <StatsContent />
    </Suspense>
  );
}
