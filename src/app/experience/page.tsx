import { ExperienceItem } from "@/components/experience-item";
import { LoadingSpinner } from "@/components/loading-spinner";
import { PROFILES } from "@/lib/constants";
import { getExperience } from "@/lib/contentful";
import { Suspense } from "react";

export default async function Experience() {
  const experiences = await getExperience();

  return (
    <div className="divide-y divide-dashed divide-black border-y border-dashed border-black">
      <Suspense fallback={<LoadingSpinner />}>
        {experiences.map(
          (
            experience: {
              jobTitle: string;
              company: string;
              startDate: string;
              endDate: string;
              jobDescription: any;
            },
            index: number
          ) => (
            <ExperienceItem
              key={`data_${index}`}
              jobTitle={experience.jobTitle}
              company={experience.company}
              startDate={new Date(experience.startDate).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                }
              )}
              endDate={new Date(experience.endDate).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                }
              )}
              jobDescription={experience.jobDescription}
            />
          )
        )}
      </Suspense>
    </div>
  );
}
