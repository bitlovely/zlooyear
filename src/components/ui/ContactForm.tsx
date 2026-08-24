"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { budgetRanges, projectTypes } from "@/lib/data/content";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";

const inputClasses =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-foreground";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // TODO: Integrate with email service or API endpoint when backend is configured.
    // Example: await fetch('/api/contact', { method: 'POST', body: formData })
    await new Promise((resolve) => setTimeout(resolve, 800));

    setState("success");
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 text-center">
        <h3 className="text-xl font-semibold text-foreground">
          Inquiry received
        </h3>
        <p className="mt-3 text-muted-foreground">
          Thank you for reaching out. We&apos;ll review your project details and
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
          placeholder="you@company.com"
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className={cn(inputClasses, "appearance-none")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            className={cn(inputClasses, "appearance-none")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="description" className={labelClasses}>
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={cn(inputClasses, "resize-y min-h-[120px]")}
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      <div className="mt-8">
        <Button type="submit" className="w-full sm:w-auto">
          {state === "submitting" ? "Sending..." : "Send Project Inquiry"}
        </Button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Prefer email?{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          Contact us directly
        </a>
        .
      </p>
    </form>
  );
}
