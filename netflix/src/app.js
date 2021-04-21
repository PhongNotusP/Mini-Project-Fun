import React from "react";
import { FaqsContainer } from "./containers/faqs";
import { FooterContaier } from "./containers/footer";

import { JumbotronContainer } from "./containers/jumbotron";
export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContaier />
    </>
  );
}
