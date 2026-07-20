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
    return (
      <p className="text-center text-gray-500">Loading today's quote...</p>
    );
  if (error)
    return <p className="text-center text-red-500">Failed to load quote.</p>;

  return (
    <div
      className="fixed z-50 transition-all duration-300 font-serif
               
               /* Mobile (Default): Bottom Center */
               bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm
               p-4 bg-amber-50/95 backdrop-blur-sm rounded-xl border border-amber-200/50 text-center shadow-lg
               
               /* Small Screens (sm: 640px) & Above: Bottom Right */
               sm:bottom-6 sm:right-6 sm:left-auto sm:translate-x-0 sm:w-auto sm:max-w-xs
               sm:p-5 sm:rounded-2xl sm:border-amber-200/60 sm:shadow-lg sm:text-center"
    >
      <p className="text-lg text-gray-800 mb-4 leading-relaxed">
        "{quoteData?.content}"
      </p>
      <p className="text-sm text-gray-600 font-sans italic">
        - {quoteData?.author}
      </p>

      <button
        onClick={fetchQuote}
        className="mt-6 px-4 py-2 text-xs bg-amber-200 hover:bg-amber-300 rounded-full font-sans transition-colors"
      >
        🔄 New Quote
      </button>
    </div>
  );
}
