import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import FormField from "../auth/FormField";
import Button from "../auth/Button";
import Feather from "@expo/vector-icons/Feather";
import { fetchUsers } from "@/utils/users";
import { addNewGroup } from "@/utils/group";
import { ToastAlertError, ToastAlertSuccess } from "@/utils/toast";
import { useRouter } from "expo-router";

const GroupForm = (props: any) => {
  const [formValues, setFormValues] = useState({
    name: "",
    members: [],
  }) as any;

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]); // You can populate this with actual usernames.
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (name: string, e: any) => {
    setFormValues({
      ...formValues,
      [name]: e,
    });
  };


  useEffect(() => {
    const getUsers = async () => {
      const data =  await fetchUsers()
      setUsers(data)
    }
 
    getUsers()
    setFormValues({
      name: "",
      members: [],
    })
  }, [props.refreshing])



  const handleMemberInputChange = (e: string) => {
    setInputValue(e);
    if (e.includes("@")) {
      // Fetch and set suggestions based on input
      const query = e.split("@")[1];
      // For demonstration, we use a static list. Replace this with a call to your API to get users.
      // const availableUsers = ["Joy102", "JohnDoe", "JaneSmith"];
      const availableUsers = users.map((user:any) => user.userName)
      const filteredUsers = availableUsers?.filter((user:any) =>
        user.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filteredUsers);
    } else {
      setSuggestions([]);
    }
  };

  const addMember = (username: string) => {
    let isUserExist = formValues.members.find(
      (item: string) => item === username
    );
    if (!isUserExist) {
      setFormValues({
        ...formValues,
        members: [...formValues.members, username],
      });
      setInputValue("");
      setSuggestions([]);
    }
  };

  const handleSubmit = async() => {
    try{

      setIsLoading(true)

      const response = await addNewGroup(formValues)

      if(response){
        ToastAlertSuccess(response.message)
        setIsLoading(false)
        router.push('/groups')
      }

    }catch(error:any){
      setIsLoading(false)
     ToastAlertError(error.message)
    }
  }



  return (
    <View className="flex items-center py-[3%] ">
      <TouchableOpacity
        className="my-[3%] w-[100%] absolute left-[88%] z-[2]"
        onPress={props.onClose}
      >
        <Feather name="x" size={30} color="#fff" />
      </TouchableOpacity>
      <View className="border border-x-[#031956] border-t-[#031956] border-b-[#ffffff] py-[5%] w-[80%] flex flex-row justify-center items-center">
        <Text className="text-[#fff] text-[24px] font-lexendRegular">
          New Group
        </Text>
      </View>
      <FormField
        form={{
          text: "Group Title",
          placeholder: "Smith Team",
          value: formValues.name,
          onChange: (e) => handleInputChange("name", e),
        }}
      />
      <View className="mt-[5%]">
        <Text className="text-base text-gray-100 font-pmedium">
          Group Members
        </Text>
        <View>
        {formValues.members.map((member: string, index: number) => (
          <Text key={index} className="text-[#fff] p-[2%]  bg-[#456ADD]" >
            {member}
          </Text>
        ))}
      </View>
        <View
          className={`w-[85%] h-12 px-4 bg-[#fff] mt-[2%] rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center`}
        >
          <TextInput
            placeholder="@Joy102"
            value={inputValue}
            className="flex-1 text-[#000] font-psemibold text-base"
            onChangeText={handleMemberInputChange}
            placeholderTextColor={"#999494"}
          />
        </View>
        {suggestions.length > 0 && (
          <View className="flex flex-row">
            {suggestions.map((suggestion, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => addMember(suggestion)}
                className="px-[3%] "
              >
                <Text className="text-[#fff]  ">{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View className="flex flex-row w-[100%] justify-evenly">
        <Button
          data={{
            text:isLoading ? "Loading..." : "Create Group",
            inputStyle: "bg-[#456ADD] w-[80%] my-[1%] min-h-[40px] my-[5%]",
            toggleTaskForm: handleSubmit,
            loading: isLoading
          }}
        />
      </View>
      
    </View>
  );
};

export default GroupForm;

const styles = StyleSheet.create({});
