"use client";

import { useMemo, useState } from "react";

type Testimonial = {
  id: string;
  branch: string;
  quote: string;
  name: string;
  username: string;
  rating: number;
  source: string;
};

const allBranchesLabel = "All branches";
const defaultBranch = "Tadika Bir Ali Alam Impian Tari";

const Star = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="testimonial-star">
    <path d="m10 1.7 2.55 5.16 5.7.83-4.13 4.02.98 5.68L10 14.7l-5.1 2.69.98-5.68-4.13-4.02 5.7-.83L10 1.7Z" />
  </svg>
);

export function TestimonialsDirectory({ testimonials }: { testimonials: Testimonial[] }) {
  const branches = useMemo(
    () => Array.from(new Set(testimonials.map((testimonial) => testimonial.branch))),
    [testimonials],
  );
  const [activeBranch, setActiveBranch] = useState(defaultBranch);
  const visibleTestimonials =
    activeBranch === allBranchesLabel
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.branch === activeBranch);

  return (
    <section className="site-section testimonials-page-section">
      <div className="testimonials-page-inner">
        <div className="testimonials-toolbar">
          <div>
            <p className="testimonials-count-label">
              {visibleTestimonials.length}{" "}
              {visibleTestimonials.length === 1 ? "testimonial" : "testimonials"}
            </p>
            <p className="testimonials-source-note">Top-rated Google Business Profile excerpts</p>
          </div>
          <div
            className="testimonials-filter"
            role="tablist"
            aria-label="Filter testimonials by branch"
          >
            {branches.map((branch) => (
              <button
                type="button"
                role="tab"
                key={branch}
                aria-selected={activeBranch === branch}
                className={activeBranch === branch ? "is-active" : ""}
                onClick={() => setActiveBranch(branch)}
              >
                {branch.replace("Tadika Bir Ali ", "")}
              </button>
            ))}
            <button
              type="button"
              role="tab"
              aria-selected={activeBranch === allBranchesLabel}
              className={activeBranch === allBranchesLabel ? "is-active" : ""}
              onClick={() => setActiveBranch(allBranchesLabel)}
            >
              {allBranchesLabel}
            </button>
          </div>
        </div>

        <div className="testimonial-card-grid">
          {visibleTestimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-card-topline">
                <span className="testimonial-platform">Google review</span>
                <span
                  className="testimonial-stars"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <Star key={index} />
                  ))}
                </span>
              </div>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-card-footer">
                <div>
                  <p className="testimonial-name">{testimonial.username}</p>
                  <p className="testimonial-branch">{testimonial.branch}</p>
                </div>
                <a
                  href={testimonial.source}
                  target="_blank"
                  rel="noreferrer"
                  className="testimonial-source-link"
                >
                  View source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
