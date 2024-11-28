import { SafeAreaView, Text, Button } from "react-native";
import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;
