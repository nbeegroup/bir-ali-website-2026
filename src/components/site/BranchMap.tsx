"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type BranchMapProps = {
  branchName: string;
  location?: string | null;
};

type MapStatus = "loading" | "ready" | "error";

function getMapQuery(branchName: string, location?: string | null) {
  const locationQuery = location?.trim();

  if (locationQuery) {
    return locationQuery;
  }

  const normalizedName = branchName.trim().replace(/,\s*KL$/i, " Kuala Lumpur");

  if (!normalizedName) {
    return "";
  }

  return normalizedName.toLowerCase().startsWith("bir ali")
    ? `Tadika ${normalizedName}`
    : `Tadika Bir Ali ${normalizedName}`;
}

export function BranchMap({ branchName, location }: BranchMapProps) {
  const query = useMemo(() => getMapQuery(branchName, location), [branchName, location]);
  const [status, setStatus] = useState<MapStatus>(query ? "loading" : "error");
  const failureTimer = useRef<number | null>(null);
  const encodedQuery = encodeURIComponent(query);
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed&hl=en`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

  useEffect(() => {
    if (!query) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    failureTimer.current = window.setTimeout(() => setStatus("error"), 12000);

    return () => {
      if (failureTimer.current !== null) {
        window.clearTimeout(failureTimer.current);
      }
    };
  }, [query]);

  const finishLoading = (nextStatus: MapStatus) => {
    if (failureTimer.current !== null) {
      window.clearTimeout(failureTimer.current);
      failureTimer.current = null;
    }

    setStatus(nextStatus);
  };

  if (!query || status === "error") {
    return (
      <div className="branch-map-fallback" role="status">
        <span className="branch-map-fallback-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </span>
        <div>
          <h3>We couldn’t identify this location on Google Maps.</h3>
          <p>Please use the branch address above or contact the branch for directions.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="branch-map-frame">
      {status === "loading" ? (
        <div className="branch-map-loading" role="status">
          Loading Google Maps…
        </div>
      ) : null}
      <iframe
        src={embedUrl}
        title={`Google Map for ${query}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={() => finishLoading("ready")}
        onError={() => finishLoading("error")}
      />
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="branch-map-external-link"
        aria-label={`Open ${query} in Google Maps (opens in a new tab)`}
      >
        Open in Google Maps
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6" />
        </svg>
      </a>
    </div>
  );
}
