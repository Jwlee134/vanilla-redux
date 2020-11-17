import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
