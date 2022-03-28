import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PortfolioV2 } from "./Portfolio";

export default function PortfolioWrapper() {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsPortfolio {
        nodes {
          id
          description {
            html
          }
          header
          image {
            ... on GraphCMS_Asset {
              id
              png: url
            }
          }
          buttons {
            ctaText
            ctaurl
          }
          tags {
            id
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="lg:columns-3 md:columns-2 gap-5 md:m-4">
        {data.allGraphCmsPortfolio.nodes.map((portfolio) => (
          <PortfolioV2 data={portfolio} key={portfolio.id}></PortfolioV2>
        ))}
      </div>
    </>
  );
  
}
