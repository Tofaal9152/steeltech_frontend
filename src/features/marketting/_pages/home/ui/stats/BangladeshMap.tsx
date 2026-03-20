"use client";

import { BD_DISTRICT_PATH } from "./bd-paths";

export default function BangladeshMap() {
  const MAP_FILL_COLOR = "#f6e7c8";
  const MAP_STROKE_COLOR = "#ed8c2f";
  const SHADOW_COLOR = "#ffa500"; 

  return (
    <div className="w-full flex items-center justify-center">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes districtJump {
          0%, 100% {
            transform: translateY(0);
          }
          10% {
            transform: translateY(-15px); 
          }
          20% {
            transform: translateY(0); 
          }
        }
        
        .animate-district {
          animation: districtJump 6s infinite ease-in-out;
          transform-box: fill-box;
          transform-origin: bottom center;
        }
      `}} />

      <svg
        viewBox="0 0 1555 2140"
        className="w-full h-auto max-h-165"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.entries(BD_DISTRICT_PATH).map(([key, d], index) => {
          const shadowId = `${d.name}-shadow`;
          return (
            <g key={key}>
              {/* শ্যাডো পাথ */}
              <path
                id={shadowId}
                d={d.path}
                fill={SHADOW_COLOR}
                opacity="0.7" 
                className="animate-district" 
                style={{
                  animationDelay: `${index * 0.08}s`,
                  filter: 'blur(6px)', 
                  transform: 'translate(10px, 10px)', 
                }}
              />
              {/* মূল জেলা পাথ */}
              <path
                id={d.name}
                d={d.path}
                fill={MAP_FILL_COLOR}
                stroke={MAP_STROKE_COLOR}
                strokeWidth="3"
                className="animate-district transition-colors duration-200 hover:fill-[#f0e7d3] cursor-pointer"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  zIndex: 10, // <-- Type Error Fixed: 'zindex' changed to 'zIndex'
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}