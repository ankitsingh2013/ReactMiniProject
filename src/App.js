import React from "react";
import ClassComponent from "./ClassComponent";
import FunctinalComponent from "./FunctionalCOmponent";
import PostFormatComponent from "./PostFormatComponent";
import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      <FunctinalComponent />
      <ClassComponent />
      <PostFormatComponent />
    </React.Fragment>
  );
}
