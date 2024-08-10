import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../auth/Button";
import GroupCard from "../groups/GroupCard";
import GroupForm from "../groups/GroupForm";
import Group from "../groups/Group";
import { useLocalSearchParams } from "expo-router";
import { fetchSingleTask } from "@/utils/task";
import TaskForm from "./TaskForm";

const ViewTask = () => {
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [showOldGroup, setShowOldGroup] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleNewGroup = () => {
    setShowNewGroup(!showNewGroup);
    if (showOldGroup) {
      setShowOldGroup(false);
    }
  };

  const toggleOldGroup = () => {
    setShowOldGroup(!showOldGroup);
    if (showNewGroup) {
      setShowNewGroup(false);
    }
  };
  const params = useLocalSearchParams() as {taskId:string}
  const [task, setTask] = useState<any| null>(null)

  useEffect(() => {
    const getTask = async () => {
      const data = await fetchSingleTask(params.taskId)
      setTask(data)
    }
    getTask()
  }, [])

 
  return (
    <ScrollView>
      <View className="px-[5%] w-[100%]">
        <View>
          <Text className="text-[#fff] text-[20px] font-lexendRegular">
           {task?.title}
          </Text>
          <Text className="text-[#EBE7E7] my-[2%]">
           {task?.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setShowForm(!showForm)} className="absolute right-[7%]">
          <Text className="text-[#fff] ">Edit</Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-between">
          <Button
            data={{
              text: "New Group",
              inputStyle: "w-[45%] border border-[#7F9FFF]",
              toggleTaskForm: toggleNewGroup,
            }}
          />
          <Button
            data={{
              text: "Select Old Group",
              inputStyle: "w-[45%] border border-[#7F9FFF]",
              toggleTaskForm: toggleOldGroup,
            }}
          />
        </View>
       
        {showForm && <TaskForm taskData={{
        name:"Edit Task",
        title:task?.title,
        description:task?.description,
        category:task?.category,
        priority:task?.priority,
        startDate:task?.startDate,
        startTime:task?.startTime,
        taskId: task.id
      }} onClose={()  => setShowForm(!showForm)}/>}
        
        {showOldGroup && <Group />}
      </View>
      {showNewGroup && (
        <GroupForm onClose={() => setShowNewGroup(!showNewGroup)} />
      )}
    </ScrollView>
  );
};

export default ViewTask;

const styles = StyleSheet.create({});
