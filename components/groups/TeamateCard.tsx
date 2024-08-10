import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { icons } from "@/constants";
import { fetchSingleGroup } from "@/utils/group";
import { useLocalSearchParams, useRouter } from "expo-router";
import FormField from "../auth/FormField";
import Button from "../auth/Button";
import { ToastAlertError, ToastAlertSuccess } from "@/utils/toast";
import { assignTask } from "@/utils/users";

const TeamateCard = (props: any) => {
  const [group, setGroup] = useState<any | null>(null);

  const params = useLocalSearchParams() as { groupId: string };

  const [formValues, setFormValues] = useState({
    instruction: "",
  });

  const [showDescription, setShowDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGroup = async () => {
      const data = await fetchSingleGroup(params.groupId);
      setGroup(data);
    };
    getGroup();
  }, []);

  const handleInputChange = (name: string, e: any) => {
    setFormValues({
      ...formValues,
      [name]: e,
    });
  };

  const router = useRouter()

  const handleSubmit = async (userId:string) => {
    try{
      setIsLoading(true)

      const response = await assignTask(userId,formValues)

      if(response){
        ToastAlertSuccess(response.message)
        setIsLoading(false)
        router.push(`/groups`)
      }

    }catch(error:any){
      setIsLoading(false)
      setShowDescription(false)
      ToastAlertError(error.message)

    }
  };
  return (
    <>
      <View>
        <Text className="text-[#fff] py-[5%] text-[20px]">{group?.name}</Text>
        {props.teamData?.map((teamate: any, index: number) => (
          <View>
            <View key={index} className="flex flex-row items-center w-[100%]">
            <Image
                  source={icons.avatar}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              <View className="ml-[5%] w-[80%]">
                <View className="flex flex-row justify-between w-[100%] py-[5%]">
                  <Text className="text-[#fff]">{teamate.email}</Text>
                  {showDescription ? (
                    <Button
                      data={{
                        text: isLoading ? "Loading..." : "Submit",
                        inputStyle:
                          "bg-[#456ADD] w-[30%] my-[1%] min-h-[40px] my-[5%] absolute right-[5%]",
                        toggleTaskForm:() => handleSubmit(teamate.id),
                        loading: isLoading,
                      }}
                    />
                  ) : (
                    <Text
                      className="text-[#7E9AEF]"
                      onPress={() => setShowDescription(true)}
                    >
                      Edit
                    </Text>
                  )}
                </View>
                <Text className="text-[#fff]">{teamate.taskInstruction}</Text>
              </View>
            </View>
            {showDescription && (
              <FormField
                form={{
                  text: "Task Description",
                  placeholder: "Add Task Description",
                  inputStyle: "h-20 items-start py-[2%]",
                  textInputProps: {
                    multiline: true,
                  },
                  value: formValues.instruction,
                  onChange: (e) => handleInputChange("instruction", e),
                }}
              />
            )}
          </View>
        ))}
      </View>
    </>
  );
};

export default TeamateCard;

const styles = StyleSheet.create({});
