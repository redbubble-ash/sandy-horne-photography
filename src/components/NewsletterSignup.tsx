"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/lib/actions";

export default function NewsletterSignup() {
  const [state, action, pending] = useActionState(subscribeNewsletter, {
    success: false,
  });

  return (
    <section className="bg-[#ede8df] py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#4a7a3c] mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-[#1e3520] mb-4">
          Join the flock
        </h2>
        <p className="text-sm text-[#6b7869] font-sans leading-relaxed mb-8 max-w-sm mx-auto">
          New prints, gallery updates, and stories from the field — direct to
          your inbox. No spam, ever.
        </p>

        {state.success ? (
          <div className="border border-[#4a7a3c] bg-[#4a7a3c]/10 text-[#1e3520] px-6 py-4 text-sm font-sans">
            Thank you for subscribing! You&apos;ll hear from me soon.
          </div>
        ) : (
          <form action={action} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com.au"
              className="flex-1 bg-[#f7f4ef] border border-[#d6d0c6] px-4 py-3 text-sm font-sans text-[#1a2e1c] placeholder:text-[#6b7869]/50 focus:outline-none focus:border-[#4a7a3c] transition-colors"
            />
            <button
              type="submit"
              disabled={pending}
              className="bg-[#1e3520] text-[#f7f4ef] text-xs tracking-[0.2em] uppercase font-sans px-8 py-3 hover:bg-[#4a7a3c] transition-colors duration-300 disabled:opacity-60"
            >
              {pending ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}

        {state.error && (
          <p className="mt-3 text-sm text-red-700 font-sans">{state.error}</p>
        )}
      </div>
    </section>
  );
}
