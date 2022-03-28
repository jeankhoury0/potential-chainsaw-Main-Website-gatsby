import React from "react";

export function SocialLink(props) {
  return (
    <div className="group mt-2 text-secondAccent underline font-medium hover:text-yellowAccent">
      <a href={props.req.link} target="_blank" rel="noreferrer">
        <i className=" text-mainAccent group-hover:text-secondAccent transition-colors">
          <span className={props.req.fa}></span>
        </i>
        <span className="ml-2">{props.req.title}</span>
      </a>
    </div>
  );
}

export default SocialLink;
