import React from "react";
import { Helmet } from "react-helmet";

export default function Layout(props) {
  return (
    <div>
      <Helmet>
        <title>{props.pageTitle || "Jean Khoury"}</title>
      </Helmet>
      {props.children}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
