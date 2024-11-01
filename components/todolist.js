import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import React from "react";

function ToDoList({ tasks }) {
  return (
    <View>
      <ScrollView>
        <Pressable>
          <View>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
