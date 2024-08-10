import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "@/constants";
import TaskForm from "./TaskForm";

interface ITask {
  taskData: {
    title: string;
    description?: string;
    startDate: string;
    startTime: string;
    endTime?: string;
    priority?: string;
    category?: string;
  }[];
}


const TaskCard = (props: ITask) => {
  const router = useRouter();

  return (
    <View>
      {props.taskData?.length > 0 ? props.taskData?.map((task: any, index: number) => (
        <View key={index}>
          <TouchableOpacity
            className="bg-[#456ADD] w-[90%] mx-auto rounded-md pt-[4%] mt-[5%] relative z-[-1]"
            onPress={() => router.push(`/task/${task.id}`)}
          >
            <View className="px-[5%]">
              <View className="flex flex-row justify-between">
                <Text className="text-[#fff] font-lexendRegular">{task.title}</Text>
                <Text className="text-[#fff] ">View</Text>
              </View>
              <Text className="text-[#EBE7E7] font-lexendRegular py-[5%]">
                {task.description}
              </Text>
            </View>
            <View className="border border-t-[#fff] border-x-[#456ADD] border-b-[#456ADD] w-[100%]">
              <View className="flex flex-row px-[5%] py-[3%] items-center justify-between">
                <View className="flex flex-row w-[35%] justify-between">
                  <Text className="text-[#fff]">{task.startTime} </Text>
                  <Text className="text-[#fff]">{new Date(task.startDate).toLocaleDateString()}</Text>
                </View>
                <View style={styles.cardFooterRight}>
                    {[...Array(5)].map((_, idx) => (
                      <Image
                        key={idx}
                        source={icons.add}
                        style={[
                          styles.cardIcon,
                          idx !== 0 && { marginLeft: -5 },
                        ]}
                      />
                    ))}
                  </View>
              </View>
            </View>
          </TouchableOpacity>
        
        </View>
      )): (
        <Text>No tasks available</Text>
      )}
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  cardIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#fff",
    borderWidth: 1,
  },
  cardFooterRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "50%",
  }
});
