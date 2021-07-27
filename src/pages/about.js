// Step 1: Import your component
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main>
        <Link to="/">Home</Link>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
