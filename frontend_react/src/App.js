import React from "react";
import {
  About,
  Header,
  Footer,
  Skills,
  Testimonials,
  Work,
  Certificates,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificates />
      <Footer />
      {/* <Testimonials /> */}
    </div>
  );
};

export default App;
