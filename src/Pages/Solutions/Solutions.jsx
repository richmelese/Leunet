import React from "react";
import DataCounter from "../../Components/DataCounter";
import FAQ from "../../Components/FAQ";
import GrowWithUs from "../../Components/GrowWithUs";
import SolutionList from "./SolutionList";
import SolutionsWeProvide from "./SolutionsWeProvide";
import Footer from "../../Components/Footer";

export default function Solutions() {
  return (
    <div className="solutions ">
      <SolutionsWeProvide />
      <SolutionList />
      <FAQ customClassName={"container"} />
      <DataCounter customClassName={"container"} />
      <GrowWithUs customClassName={"container"} />
      {/* <Footer /> */}
    </div>
  );
}
