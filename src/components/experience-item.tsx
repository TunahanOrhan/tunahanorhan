"use client";

import { Suspense } from "react";
import { RichText } from "./contentful/rich-text";
import { LoadingSpinner } from "./loading-spinner";

export const ExperienceItem = ({
  jobTitle,
  company,
  startDate,
  endDate,
  jobDescription,
}: {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  jobDescription: any;
}) => {
  return (
    <div className="py-4">
      <div className="space-y-2">
        <div>
          <h1 className="text-sm font-semibold">
            {jobTitle} at {company}
          </h1>
          <span className="text-xs font-normal font-sans opacity-80">
            {startDate} - {endDate ? endDate : "Present"}
          </span>
        </div>
        <div className="text-sm">
          <RichText content={jobDescription} />
        </div>
      </div>
    </div>
  );
};
