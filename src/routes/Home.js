import React, { useState } from "react";
import { connect } from "react-redux";
import ToDos from "../Components/ToDos";
import { add } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => {
          return <ToDos {...toDo} key={toDo.id} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
