import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Education() {
        const data = useStaticQuery(graphql`
          {
            allGraphCmsEducation {
              nodes {
                id
                company
                description {
                  html
                }
                startYear
                endYear: endDate
                jobTitle
              }
            }
          }
        `);
        return (
          <div data-testid="education">
            {data?.allGraphCmsEducation.nodes.map((xp) => (
              <div key={xp.id}>
                <h3 className="text-xl font-medium"> {xp.jobTitle}</h3>
                <span
                  className="text-l uppercase text-medium"
                  data-testid="experience-company-name"
                >
                  {" "}
                  {xp.company || "companyName"}{" "}
                </span>
                <span data-testid="experience-date">
                  {" "}
                  | {xp.startYear || "startYear / endYear"} -{" "}
                  {xp.endYear || "PRESENT"}{" "}
                </span>
                <div
                  data-testid="experience-description"
                  dangerouslySetInnerHTML={{ __html: xp.description.html }}
                ></div>
              </div>
            ))}
          </div>
        );
  
}
