import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout test="hello">
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
