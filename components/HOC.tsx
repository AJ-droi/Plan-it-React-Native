import React, { useCallback, useState } from "react";
import TaskButton from "./task/TaskButton";
import { useSegments } from "expo-router";
import { ScrollView, RefreshControl } from "react-native";

const HOC = (WrappedComponent: any) => {
  return (props: any) => {
    const [showForm, setShowForm] = useState(false);

    const toggleTaskForm = () => {
      setShowForm(!showForm);
    };

    const segments = useSegments();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      // Simulate a network request or some async task
      setTimeout(() => {
        setRefreshing(false);
      }, 1000); // Adjust the timeout duration as needed
    }, []);

    return (
      <>
        {showForm && (
          <ScrollView
            className="absolute top-[30%] z-[5] w-[100%] h-[100%] bg-[#031956] rounded-[20px] border border-t-[#fff]"
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <WrappedComponent {...props} taskData={{
        name:"Add Task",
      }} onClose={toggleTaskForm} refreshing={refreshing} />
          </ScrollView>
        )}

        <TaskButton
          title={segments[0] === "home" ? "Add Task" : "Add Groups"}
          toggleTaskForm={toggleTaskForm}
        />
      </>
    );
  };
};

export default HOC;
