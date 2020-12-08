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

/* mapStateToProps는 store.getState()와 같으며 두개의 인자를 가지는데
첫번째는 state : 위의 Home Component에 state를 prop으로 전달
두번째는 ownProps : 현재 props를 표시(지금같은 경우 react-router에 의해 주어지는 props)
두개의 인자 외에도 무엇을 return하던지간에 모두 prop으로 전달 */

const mapStateToProps = (state) => {
  return {
    toDos: state,
  };
};

/* mapDispatchToProps는 store.dispatch()와 같으며
mapStateToProps와 마찬가지로 두개의 인자를 가지며 return값을 prop으로 전달
다른점은 첫번째 인자가 dispatch */

/* mapStateToProps도 dispatch를 prop으로 전달하지만 mapDispatchToProps는
첫번째 인자로 dispatch를 가지므로 dispatch 기능을 하는 "함수"를 prop으로 전달할 수 있음
=> Home component가 직접 dispatch를 처리할 필요가 없음 => 더 효율적  */

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
};

// Connect 함수는 2개의 인자를 가지며, Components와 store를 연결시키는 역할

export default connect(mapStateToProps, mapDispatchToProps)(Home);
