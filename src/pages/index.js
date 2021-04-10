import React from "react";
import Header from "components/header";

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Header headerText="Welcome to Gatsby" />
      <p>A sample paragraph in Gatsby</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
