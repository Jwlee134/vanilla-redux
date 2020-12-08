// createSlice를 추가할 경우

import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

//configureStore는 Redux Devtool을 사용할 수 있게 해줌

const store = configureStore({ reducer: toDos.reducer });

// createSlice가 action을 자동적으로 생성해 주므로 type을 정의할 필요가 없음

export const { add, remove } = toDos.actions;

export default store;

/* 
Pure Redux

import {createStore} from "redux"

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = id => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
};



createAction을 추가할 경우

createAction(Type 이름)

import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD"); => addToDo.type = "ADD"
const deleteToDo = createAction("DELETE"); deleteToDo.type = "DELETE"

text와 id를 따로 정의해주지 않는 대신 payload가 제공됨
따라서 action.text => action.payload, action.id => action.payload
case ADD => case addToDo.type, case DELETE = deleteToDo.type



createReducer를 추가할 경우

import { createReducer } from "@reduxjs/toolkit";

state를 mutate할 경우  @reduxjs/toolkit의 immer라는 plugin이 내부적으로
처리 후 return해주기 때문에 return을 적을 필요가 없음

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  }
  [deleteToDo]: (state, action) => {
    return state.filter(toDo => toDo !== action.payload)
  }
})


*/
