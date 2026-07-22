"use client";

import { useEffect, useState } from "react";

const FALLBACK_QUOTE = {
  quote: "The expert in anything was once a beginner.",
  author: "Helen Hayes",
};

export function QuoteCard() {
  const [quote, setQuote] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let ignore = false;

    async function fetchQuote() {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
          throw new Error("Quote request failed");
        }

        const data = await response.json();

        if (!ignore) {
          setQuote({ quote: data.quote, author: data.author });
          setStatus("success");
        }
      } catch {
        if (!ignore) {
          setQuote(FALLBACK_QUOTE);
          setStatus("fallback");
        }
      }
    }

    fetchQuote();

    return () => {
      ignore = true;
    };
  }, []);

  if (status === "loading") {
    return <p className="mt-4 text-gray-500">Loading your quote…</p>;
  }

  return (
    <figure className="mt-4 rounded-xl border-l-4 border-blue-600 bg-white p-5 text-gray-800 shadow">
      <blockquote className="italic">“{quote.quote}”</blockquote>
      <figcaption className="mt-2 text-sm text-gray-500">
        — {quote.author}
      </figcaption>
      {status === "fallback" && (
        <p className="mt-3 text-xs text-amber-700">
          Live quote unavailable—showing an offline fallback.
        </p>
      )}
    </figure>
  );
}
