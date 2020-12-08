import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  return (
    <div>
      <h1>{toDos?.text}</h1>
      <h5>Created at : {toDos?.id}</h5>
    </div>
  );
};

// Detail의 ownProps = react-router에 의해 제공되는 props

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    toDos: state.find((toDo) => toDo.id === parseInt(id)),
  };
};

export default connect(mapStateToProps)(Detail);
