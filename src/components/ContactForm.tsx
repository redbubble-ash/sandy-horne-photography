"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitContactForm } from "@/lib/actions";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, {
    success: false,
  });

  if (state.success) {
    return (
      <div className="border border-[#4a7a3c] bg-[#4a7a3c]/10 p-8 text-center">
        <p className="font-serif text-2xl text-[#0F4C81] mb-2">Thank you!</p>
        <p className="text-sm text-[#3a4e3c] font-sans">
          Your message has been received. I&apos;ll be in touch within a couple of days.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-xs tracking-[0.2em] uppercase font-sans text-[#4a7a3c] hover:text-[#0F4C81] transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#6b7869] mb-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-[#f7f4ef] border border-[#d6d0c6] px-4 py-3 text-sm font-sans text-[#1a2e1c] placeholder:text-[#6b7869]/50 focus:outline-none focus:border-[#4a7a3c] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#6b7869] mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full bg-[#f7f4ef] border border-[#d6d0c6] px-4 py-3 text-sm font-sans text-[#1a2e1c] placeholder:text-[#6b7869]/50 focus:outline-none focus:border-[#4a7a3c] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#6b7869] mb-2"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full bg-[#f7f4ef] border border-[#d6d0c6] px-4 py-3 text-sm font-sans text-[#1a2e1c] focus:outline-none focus:border-[#4a7a3c] transition-colors appearance-none"
        >
          <option value="">Select a subject</option>
          <option value="print-enquiry">Print Enquiry</option>
          <option value="licensing">Image Licensing</option>
          <option value="workshop">Workshop Booking</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#6b7869] mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell me what you have in mind…"
          className="w-full bg-[#f7f4ef] border border-[#d6d0c6] px-4 py-3 text-sm font-sans text-[#1a2e1c] placeholder:text-[#6b7869]/50 focus:outline-none focus:border-[#4a7a3c] transition-colors resize-none"
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-700 font-sans">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-[#0F4C81] text-[#f7f4ef] text-xs tracking-[0.25em] uppercase font-sans px-10 py-4 hover:bg-[#1a6aad] transition-colors duration-300 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
