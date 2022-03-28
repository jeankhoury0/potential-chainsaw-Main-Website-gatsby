import React from "react";

export function Skills(props) {
  return (
    <div className="duration-500 group rounded shadow-xl min-h-full ring-4 ring-gray-200  hover:shadow-xl transition-colors">
      <div className="  p-6  rounded overflow-hidden text-center ">
        <i
          className={`text-secondAccent text-3xl  ${props.fa} group-hover:text-yellowAccent`}
        ></i>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2 ">
            {props.title}
          </h3>
          <p className="text-gray-700 text-base ">
            {props.description}
          </p>
        </div>
        <div className="px-6 pt-2 pb-2">{props.children}</div>
      </div>
    </div>
  );
}

export function Skill(props) {
  var headClass = null;
  if (props.head) {
    headClass = "text-secondAccent font-medium text-l my-2";
  }
  return (
    <div>
      <div className={`${headClass} text-center `}>
        {props.children}
      </div>
      <div className="text-center "></div>
    </div>
  );
}

export function LanguageSkill(props) {
  return (
    <div className="group p-4 overflow-hidden text-center bg-secondAccent transition-colors mt-3 group-hover:bg-yellowAccent">
      <div className="">
        <i
          className={`text-white  text-5xl group-hover:text-secondAccent  ${props.fa}`}
        ></i>
      </div>
    </div>
  );
}
