"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  tabClassName,
  contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);

  const handleTabClick = (tab) => {
    setActive(tab);
  };

  return (
    <>
      <div
        className={twMerge(
          "flex flex-row  items-center justify-start gap-4", 
          containerClassName
        )}>
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => handleTabClick(tab)}
            className={twMerge(
              "px-4 py-2 rounded-full transition-colors duration-200",
              tabClassName,
              active.value === tab.value
                ? "bg-gradient-to-r from-lavender to-royal"
                : "bg-midnight text-neutral-100" 
            )}>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      <div className={twMerge("mt-2", contentClassName)}>
        {active.content}
      </div>
    </>
  );
};

