import React from "react";
import SocialLink from "../socialLinks/SocialLinks";
import {graphql, useStaticQuery } from "gatsby";

/**
 * Sidebar function
 * @param {*} props
 * @returns Sidebar component
 */
function Sidebar(props) {
  const { sidebars } = useStaticQuery(graphql`
    {
      sidebars: allGraphCmsSidebar
       {
        nodes {
          name
          jobTitle
          image {
            ... on GraphCMS_Asset {
              id
              png: url
            }
          }
          socialLinks {
            id
            fa
            title
            link
          }
        }
      }
    }
  `);
  const data = sidebars.nodes[0];
   return (
     <div>
       <div
         className="text-center bg-white rounded-md shadow-lg
       m-3 mt-4 p-3 text-secondAccent"
       >
         <picture>
           <source srcSet={data?.image?.webp} type="image/webp"></source>
           <img
             src={data.image.png}
             alt=""
             className="filter drop-shadow-lg  rounded-md w-min-1/3"
           ></img>
         </picture>
         <h1 className="text-2xl text-grayAccent font-bold uppercase mt-3">
           {" "}
           {data.name}{" "}
         </h1>
         <h2 className="text-xl font-medium">{data.jobTitle}</h2>
       </div>
       <div className="bg-white rounded-md  mt-7 m-3 p-3 shadow-lg">
         <h2 className="text-xl text-center text-grayAccent font-bold uppercase">
           Follow me
         </h2>
         {data.socialLinks?.map((sl) => (
           <SocialLink key={sl.id} req={sl}>
             {" "}
           </SocialLink>
         ))}
       </div>
       <a href="./cv.pdf" target="_blank" rel="noreferrer">
         <div
           className="bg-white rounded-md mt-7 m-3 p-3 group shadow-lg text-center text-secondAccent 
         underline font-medium hover:bg-yellowAccent "
         >
           <i className="fas fa-file-pdf text-mainAccent group-hover:text-secondAccent transition-colors mr-3"></i>
           View my CV
         </div>
       </a>
       {/* <a href="#contact" className="bg-secondAccent p-6 self-center text-center  mt-1 text-l font-medium rounded text-white hover:bg-grayAccent transition-colors">
                         Let's Connect <i className="far fa-smile "></i>
                     </a> */}
     </div>
   );
}

export default Sidebar;
