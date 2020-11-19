import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
