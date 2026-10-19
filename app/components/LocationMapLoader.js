"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => <p>Loading delivery map...</p>,
});

export default function LocationMapLoader({ onLocationSelect }) {
  return <LocationMap onLocationSelect={onLocationSelect} />;
}
