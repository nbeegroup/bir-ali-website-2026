"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Branch } from "@/resources/data.types";

import { BranchImage } from "./BranchImage";

type BranchesDirectoryProps = {
  branches: Branch[];
};

const allStatesLabel = "All branches";

export function BranchesDirectory({ branches }: BranchesDirectoryProps) {
  const states = useMemo(
    () => [...Array.from(new Set(branches.map((branch) => branch.state))), allStatesLabel],
    [branches],
  );
  const [activeState, setActiveState] = useState("Selangor");
  const visibleBranches =
    activeState === allStatesLabel
      ? branches
      : branches.filter((branch) => branch.state === activeState);

  return (
    <div className="branches-directory">
      <div className="branch-tabs" role="tablist" aria-label="Filter branches by state">
        {states.map((state) => {
          const isActive = activeState === state;
          const count =
            state === allStatesLabel
              ? branches.length
              : branches.filter((branch) => branch.state === state).length;

          return (
            <button
              key={state}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="branches-panel"
              className={isActive ? "branch-tab active" : "branch-tab"}
              onClick={() => setActiveState(state)}
            >
              <span>{state}</span>
              <span
                className="branch-tab-count"
                aria-label={`${count} ${count === 1 ? "branch" : "branches"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div id="branches-panel" role="tabpanel" aria-live="polite" className="branch-card-grid">
        {visibleBranches.map((branch) => (
          <Link
            key={branch.slug}
            href={`/branches/${branch.slug}`}
            className="branch-directory-card"
          >
            <span className="branch-card-media">
              <BranchImage
                src={branch.preview_photo}
                alt={`${branch.name} branch`}
                className="branch-card-image"
              />
              <span className="branch-year-pill">Since {branch.year}</span>
            </span>
            <span className="branch-card-content">
              <span>
                <span className="branch-card-title">{branch.name}</span>
                <span className="branch-card-description">{branch.state}</span>
              </span>
              <span className="branch-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
