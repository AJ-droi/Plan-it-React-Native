import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { icons } from "@/constants";
import { ToastAlertError } from "@/utils/toast";

const GroupCard = (props: any) => {
  const router = useRouter();

  const alertToast = (name:string) => {
    return ToastAlertError(`No Task for ${name} team`)
  }

  return (
    <>

      {props.groupData.map((group: any, index: number) => (
        <TouchableOpacity
          key={index}
          className="bg-[#456ADD] w-[98%] mx-auto rounded-md pt-[2%] mb-[5%]"
          onPress={group.groupTasks[0] ? () =>
            router.push(`/groups/${group?.groupTasks[0]?.taskId}/${group?.id}`): () => alertToast(group.name)
          }
        >
          <View className="px-[5%]">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-[#fff] text-[20px] font-lexendRegular">
                {group.name}
              </Text>
              <Link href="" className="text-[#fff] font-lexendRegular">
                Edit
              </Link>
            </View>

            <View className="flex flex-row items-center justify-evenly py-[5%]">
              <View className="flex items-start">
                <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text className="text-center w-[100%] text-[#fff]">Gianni</Text>
              </View>
              <View className="flex items-start">
                <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text className="text-center w-[100%] text-[#fff]">Gianni</Text>
              </View>
              <View className="flex items-start">
                <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text className="text-center w-[100%] text-[#fff]">Gianni</Text>
              </View>
              <View className="flex items-start">
                <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text className="text-center w-[100%] text-[#fff]">Gianni</Text>
              </View>
              <View className="flex items-start">
                <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text className="text-center w-[100%] text-[#fff]">Gianni</Text>
              </View>
            </View>
          </View>
          <View className="border border-t-[#fff] border-x-[#456ADD] border-b-[#456ADD] rounded-md w-[100%] ">
            <View className="flex flex-row px-[5%] py-[3%] items-center justify-end">
              <View className="flex flex-row w-[38%] justify-between ">
                <Text className="text-[#fff]">
                  {new Date(group.createdAt).toLocaleDateString()} 
                </Text>
                <Text className="text-[#fff]">
                  {" "}
                  {new Date(group.createdAt).toLocaleTimeString()}{" "}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default GroupCard;

const styles = StyleSheet.create({});
