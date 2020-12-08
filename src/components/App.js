import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

const App = () => {
  return (
    <HashRouter>
      {/* Route는 history, path 등등이 담긴 정보를 component에 props로 전달 */}
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
