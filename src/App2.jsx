import React from "react";
import {
  Navigation,
  Header,
  Menu,
  SubMenu,
  ScrollAnimi,
  Demo,
  Features,
  Course_showcase,
  Trusted_customer,
  Top_features,
  Footer,
  Review,
  Faq,
  Support_area,
  Event_option,
  Store,
  BlogDesign,
  Topbanner,
} from "./container";
import Navs from "./components/Navs";

function App2() {
  return (
    <div>
      <Navs />
      <Topbanner />
      <Navigation />
      <Header />
      <Menu />
      <SubMenu />
      <ScrollAnimi />
      <Demo />
      <Features />
      <Course_showcase />
      <Event_option />
      <Store />
      <BlogDesign />
      <Trusted_customer />
      <Top_features />
      <Review />
      <Faq />
      <Support_area />
      <Footer />
    </div>
  );
}

export default App2;
