"use client";

import { useState, useEffect } from "react";

export default function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(false);
    try {
      // Fetch random quote from the stable DummyJSON Quotes API
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();

      // Map response structure to local state (data.quote, data.author)
      setQuoteData({
        content: data.quote,
        author: data.author,
      });
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading)
    return <p className="text-center text-teal-100">Loading the quote...</p>;
  if (error)
    return <p className="text-center text-white">Failed to load quote.</p>;

  return (
    <div
      className="relative z-10 transition-all duration-300 font-serif mx-auto my-6
             /* Mobile (Default) */
             w-[calc(100%-2.5rem)] max-w-xs
             p-3.5 bg-purple-50/85 backdrop-blur-sm rounded-xl border border-purple-200 shadow-lg text-center
             
             /* Desktop (sm+) */
             sm:w-auto sm:max-w-xs sm:p-5 sm:rounded-2xl"
    >
      {/* Quote content: Base size on mobile, larger on desktop */}
      <p className="text-base sm:text-lg text-purple-950 font-medium mb-2.5 sm:mb-4 leading-relaxed font-serif">
        "{quoteData?.content}"
      </p>

      {/* Author name */}
      <p className="text-xs sm:text-sm text-purple-900 font-sans italic font-medium">
        - {quoteData?.author}
      </p>

      {/* Next button: Compact icon style */}
      <button
        onClick={fetchQuote}
        aria-label="Next Quote"
        className="mt-3.5 sm:mt-6 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs bg-teal-200 hover:bg-teal-300 text-teal-500 font-semibold rounded-full font-sans transition-colors shadow-sm"
      >
        ▷▷
      </button>
    </div>
  );
}
