"use client";

import { BD_DISTRICT_PATH } from "./bd-paths";

export default function BangladeshMap() {
  // ছবির সাথে মিল রেখে কালার কোড সেট করা হয়েছে
  const MAP_FILL_COLOR = "#f0e7d3"; // হালকা ক্রিম/ঘিয়ে রঙ
  const MAP_STROKE_COLOR = "#ed8c2f"; // গাঢ় ধূসর/খয়েরি বর্ডার

  return (
    <div className="w-full flex items-center justify-center">
      <svg
        viewBox="0 0 1555 2140"
        className="w-full h-auto max-h-165"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.entries(BD_DISTRICT_PATH).map(([key, d]) => (
          <g key={key}>
            <path
              id={d.name}
              d={d.path}
              fill={MAP_FILL_COLOR}
              stroke={MAP_STROKE_COLOR}
              strokeWidth="3"
              className="transition-colors duration-200"
              // className="transition-colors duration-200 hover:fill-[#f0e7d3] cursor-pointer"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
