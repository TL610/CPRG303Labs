/**
 * My To Do List App
 *
 * @format
 */
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoForm from "./components/todoform";
import ToDoList from "./components/todolist";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
