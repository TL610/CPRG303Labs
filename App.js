/**
 * My To Do List App
 *
 * @format
 */
import React from "react";
import { SafeAreaView } from "react-native";
import ToDoForm from "./screen/todoform";
import ToDoList from "./screen/todolist";

function App() {
  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList />
    </SafeAreaView>
  );
}

export default App;
