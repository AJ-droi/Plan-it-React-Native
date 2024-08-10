import { StyleSheet, Text, View , Image, TouchableOpacity} from "react-native";
import React, { useState , useEffect} from "react";
import Team from "./Team";
import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams } from "expo-router";
import { fetchSingleTask } from "@/utils/task";
import TaskForm from "../task/TaskForm";
import { ScrollView } from "react-native";

const ViewGroup = () => {
  const params = useLocalSearchParams() as {taskId:string}
  const [task, setTask] = useState<any| null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getTask = async () => {
      const data = await fetchSingleTask(params.taskId)
      setTask(data)
    }
    getTask()
  }, [])
console.log({params})
console.log({task})
  return (
    <ScrollView className="px-[5%]">
        <View className="flex flex-row items-center justify-between  w-[100%] pt-[5%]">
          <Text className="text-[#fff] text-[24px] font-lexendRegular ">
            {task?.title}
          </Text>
          <TouchableOpacity onPress={() => setShowForm(!showForm)}>
            <FontAwesome5 name="edit" size={24} color="#fff" onPress={() => setShowForm(!showForm)}/>
          </TouchableOpacity>
       
        </View>
       
        <Text className="text-[#fff] py-[3%]">{new Date(task?.createdAt).toLocaleDateString()} {new Date(task?.createdAt).toLocaleTimeString()}</Text>
        <Text className="text-[#EBE7E7] my-[2%]">
        {task?.description}
        </Text>
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
      <Team />
     
    </ScrollView>
  );
};

export default ViewGroup;

const styles = StyleSheet.create({});
