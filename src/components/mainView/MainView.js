import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MainViewHeader } from "../mainViewUtil/MainViewUtil";
import { LanguageSkill, Skill, Skills } from "../skill/Skills";
import PortfolioWrapper from "../portfolio/PortfolioWrapper";

import Education from "../education/Education";
import Experience from "../experience/Experience";
import FormContact from "../formContact/FormContact";


function MainView(props) {
  const data = useStaticQuery(graphql`
  {
  graphCmsMainContentComponent {
    id
    aboutMe {
      html
    }
  }
}
`)


  return (
    <div className="container">
      <MainViewHeader title="About Me">
        <div
          className=" text-justify"
          dangerouslySetInnerHTML={{
            __html: data.graphCmsMainContentComponent.aboutMe.html,
          }}
        />
      </MainViewHeader>
      <MainViewHeader title="Skills" className="">
        <div className="container grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-between">
          <Skills title="Web development" fa="fas fa-code">
            <Skill head>Web Frameworks</Skill>
            <Skill>
              Express.js{" "}
              <i className="text-secondAccent group-hover:text-yellowAccent fab fa-node-js"></i>
              , React{" "}
              <i className="text-secondAccent group-hover:text-yellowAccent fab fa-react"></i>
              , Rails
            </Skill>
            <Skill head>Templating languages</Skill>
            <Skill>EJS</Skill>
            <Skill head>Testing framework</Skill>
            <Skill>J-unit, Selenium</Skill>
            <Skill head>CMS</Skill>
            <Skill>Wordpress, GraphCMS, Optimizely, Sitecore</Skill>
          </Skills>

          <Skills title="Industry Knowledge" fa="fas fa-user-secret">
            <Skill head>Tools</Skill>
            <Skill>Jira, Azure Devops </Skill>
            <Skill head>Graphic Design</Skill>
            <Skill>Adobe Illustrator & Photoshop, Figma</Skill>
            <Skill head>Process</Skill>
            <Skill>
              Agile, Dev Ops, User Acceptance testing, Accessibility Audit (Web
              and PDF)
            </Skill>
          </Skills>
          <Skills
            title="Languages"
            fa="fas fa-language"
            className="container grid grid-cols-2"
          >
            <LanguageSkill fa="fab fa-js"></LanguageSkill>
            <LanguageSkill fa="fab fa-java"></LanguageSkill>
            <LanguageSkill fa="fab fa-python"></LanguageSkill>
            <LanguageSkill fa="far fa-gem"></LanguageSkill>
          </Skills>
        </div>
      </MainViewHeader>

      <MainViewHeader title="Experience">
        <Experience></Experience>
        {/* {props.res?.experiences.map((xp) => (
          <Experience
            key={xp}
            jobTitle={xp.jobTitle}
            companyName={xp.company}
            startYear={xp.startYear}
            endYear={xp.endYear}
            description={xp.description.html}
          ></Experience>
        ))} */}

        <div className="w-44 p-3 bg-linkedin text-white rounded  text-center mt-2 transition duration-500 ease-in-out hover:bg-mainAccent ">
          <a
            href="https://www.linkedin.com/in/jeank/?locale=en_US"
            className=""
          >
            {" "}
            View more on <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </MainViewHeader>

      <MainViewHeader title="Portfolio">
        <PortfolioWrapper></PortfolioWrapper>
        {/* <div className="container grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-between">
          {props.res?.portfolios.map((portfolio) => (
            <PortfolioV2
              key={portfolio.id}
              header={portfolio.header}
              description={portfolio.description.html}
              ctaText={portfolio.buttons[0]?.ctaText}
              src={portfolio?.image}
              href={portfolio.buttons[0]?.ctaurl}
              tags={portfolio.tags?.map((tag) => [tag.title])}
            ></PortfolioV2>
          ))}
        </div> */}
      </MainViewHeader>

      <MainViewHeader title="Education">
        <Education></Education>
      </MainViewHeader>
      <MainViewHeader title="contact me" idName="contact">
        <FormContact></FormContact>
      </MainViewHeader>
    </div>
  );
}

export default MainView;
