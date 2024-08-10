import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";
import Button from "../auth/Button";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

const listData = [
  {
    text: "Home",
    href:"/home",
    icon: <Feather name="home" size={24} color="#fff" />,
  },
  {
    text: "Groups",
    href:"/groups",
    icon: <MaterialIcons name="groups" size={24} color="#fff" />,
  },
  {
    text: "Tell A Friend",
    href:"",
    icon: <AntDesign name="sharealt" size={24} color="#fff" />,
  },
  {
    text: "Information",
    href:"",
    icon: <AntDesign name="infocirlceo" size={24} color="#fff" />,
  },
  {
    text: "Settings",
    href:"",
    icon: <Feather name="settings" size={24} color="#fff" />,
  },
];

const List = (props: any) => {
    const router = useRouter();
    const handlePress =(href:string) => {
        router.push(href)
        props.onClose()
    }
  return (
    <View>
      {props.listData.map((listItem: any, index: number) => (
          <TouchableOpacity className="flex flex-row items-center justify-evenly  py-[3%]  bg-[#d9d9d930] my-[3%]" key={index} onPress={() => handlePress(listItem.href)} >
            {listItem.icon}
            <Text className="text-[#ffffff] font-lexendRegular  text-[16px] w-[50%]">
              {listItem.text}
            </Text>
          </TouchableOpacity>
      ))}
    </View>
  );
};

const Sidebar = (props: any) => {

  const router = useRouter();

  const LogOut = async() => {
    await AsyncStorage.removeItem('isLoggedIn')
    await AsyncStorage.removeItem('token')
    router.push('login')
  }

  return (
    <View className="absolute w-[100%] z-[8]">
       <BlurView intensity={20} style={styles.blurOverlay} />
      <View className="absolute bg-[#456ADD] w-[65%] h-[100vh]  pt-[15%] ">
        <View className="px-[5%]">
          <TouchableOpacity className="my-[10%]" onPress={props.onClose}>
            <Feather name="x" size={30} color="#fff" />
          </TouchableOpacity>

          <Text className="text-[#fff] font-lexendRegular text-[18px]">
            Hello, Mr Jack
          </Text>
          <View className="flex flex-row items-center justify-between my-[5%]">
             <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
            <View>
              <Text className="text-[#fff]">@jacksparrow009</Text>
              <Button
                data={{
                  text: "Edit Profile",
                  inputStyle: "bg-[#d9d9d930] min-h-[35px]",
                }}
              />
            </View>
          </View>
        </View>

        <List listData={listData} onClose={props.onClose}/>
        <Link href="" className="absolute bottom-[5%] my-[3%] w-[100%] ">
          <TouchableOpacity className="flex flex-row items-center justify-between  py-[3%] pl-[17%]" onPress={() => LogOut()}>
            <Feather name="power" size={24} color="#fff" />
            <Text className="text-[#ffffff] font-lexendRegular  text-[16px] ">
              Log out
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
    blurOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: add a semi-transparent overlay color
        height:1000
      },
});
