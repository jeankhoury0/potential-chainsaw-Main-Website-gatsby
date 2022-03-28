import React from "react";

export function PortfolioV2(props) {

  return (
    Portfolio(props)
  );
}

export function Portfolio(props) {
  var data = props.data
  var tagPoints = null;
  
  if(data.tags){
    tagPoints = data.tags.map((tag) => (
      <span
        key={tag.id}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
        font-semibold text-gray-700 mr-2 mb-2 capitalize"
      >
        {tag?.title}
      </span>
    ));
  }
   
  if (!data.image) {
    var noImage = "hidden";
  }
  if (!data.buttons[0]?.ctaText) {
    var noCTAText = "hidden";
  }

  return (
    <div className="break-inside-avoid p-3 justify-between">
      <div className="group rounded shadow ring-4 ring-gray-200 transition-colors duration-500 ">
        <h3 className="font-bold text-xl px-6 pt-2 duration-500 capitalize ">
          {" "}
          {data.header}
        </h3>
        <div className="py-2 px-6">
          <picture>
            <source srcSet={data.image?.webp} type="image/webp"></source>
            <img
              src={data.image?.png}
              alt={data.alt || ""}
              className={`${noImage} w-full p-1 `}
            ></img>
          </picture>
          <div className="py-2 first-letter:capitalize">
            <div
              dangerouslySetInnerHTML={{ __html: data.description.html }}
              className="lg:min-h-3.5 portfolioProse"
            ></div>
          </div>
          <div className="py-2">
            <a
              href={data.buttons[0].ctaurl}
              rel="noreferrer"
              target="_blank"
              className={`${noCTAText} flex p-3 text-center bg-secondAccent text-white hover:bg-mainAccent group-hover:bg-yellowAccent group-hover:text-mainAccent transition-colors duration-200 rounded font-semibold`}
            >
              {data.buttons[0].ctaText}
            </a>
            <div className="pt-4 pb-2">{tagPoints}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
