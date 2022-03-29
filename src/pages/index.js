import * as React from "react"
import Sidebar from "../components/sidebar/Sidebar"
import MainView from "../components/mainView/MainView";
import Layout from "../components/layouts/layout";

// styles


// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="flex">
        <aside className="sidebar">
          <div className="text-left">
            <Sidebar></Sidebar>
          </div>
        </aside>
        <div className="flex-grow">
          <MainView></MainView>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage
