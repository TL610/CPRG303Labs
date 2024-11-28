import { View, Text } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  return (
    <MainLayout>
      <Text>This is a Todo App made by Yan Ling (Teresa) Lok.</Text>
      <Text>It is a simple app that allows you to add tasks to a list.</Text>
      <Text>Today is {new Date().toLocaleDateString()}</Text>
      <Text>---</Text>
    </MainLayout>
  );
};

export default AboutScreen;
