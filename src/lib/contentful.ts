import { cache } from "react";

const fetchGraphQL = cache(async (query: string, preview = false) => {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Fetch error", error);
    return null;
  }
});

export const getExperience = cache(async () => {
  try {
    const entries = await fetchGraphQL(
      `
            query {
                experienceCollection(order: startDate_DESC) {
                    items {
                        jobTitle
                        company
                        startDate
                        endDate
                        jobDescription {
                        json
                        }
                    }
                }
            }
     `
    );

    return entries?.data.experienceCollection.items ?? [];
  } catch (error) {
    return null;
  }
})
