import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const ToDos = ({ text, id, deleteToDo }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>X</button>
    </li>
  );
};

/* Home component로부터 전달받은 prop { text, id }이 있기 때문에
console.log(ownProps)를 해보면 { text, id }가 나옴 */

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
};

// State는 필요없지만 Dispatch는 필요할 경우 작성하는 방법

export default connect(null, mapDispatchToProps)(ToDos);
