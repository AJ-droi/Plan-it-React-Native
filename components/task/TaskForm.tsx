import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FormField, { CheckInput, DateInput } from "../auth/FormField";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Button from "../auth/Button";
import { ToastAlertError, ToastAlertSuccess } from "@/utils/toast";
import { createTask, updateTask } from "@/utils/task";

const TaskForm = (props:{
  taskData: {
    name:string,
    title: string;
    description: string;
    startDate: string;
    startTime: string;
    priority: string;
    category: string;
    taskId:string
  },
  onClose: () => void
}) => {

  const {name, title, description, category, priority, startDate, startTime, taskId} = props.taskData


  const [formValues, setFormValues] = useState({
    title: title || '' ,
    description: description || '',
    category:category || 'Personal',
    priority: priority || '',
    startDate: startDate || '',
    startTime: startTime || ''
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (name:string, e:any) => {
    setFormValues({
      ...formValues,
      [name]: e
    });
  };

  const handleCheckboxChange = (priority: string) => {
    setFormValues({
      ...formValues,
      priority: priority
    });
  };

  const handleCategoryChange = (category: string) => {
    setFormValues({
      ...formValues,
      category: category
    });
  };

 

  const handleSubmit = async() => {
    try{
      setIsLoading(true)
      const response = name ? await updateTask(taskId, formValues) :  await createTask(formValues)

      if(response){
        ToastAlertSuccess(response.message)
        setIsLoading(false)
        setFormValues({
          title: '',
          description: '',
          category:'Personal',
          priority:'',
          startDate: '',
          startTime:''
        })
        props.onClose()
      }
    }catch(error:any){
      setIsLoading(false)
      ToastAlertError(error.message)
    }
  }


  return (
    <View className="flex items-center py-[3%] " >
      <View className="border border-[#031956] border-b-[#ffffff] py-[3%] w-[60%] flex flex-row justify-center">
        <Text className="text-[#fff] text-[24px] font-lexendRegular">{name ||'Add Task'}</Text>
      </View>
      <FormField
        form={{
          text: "Task Title",
          placeholder: "Add a Task Name",
          value: formValues.title,
          onChange: (e) => handleInputChange('title', e)
        }}
      />
      <FormField
        form={{
          text: "Description",
          placeholder: "Add Description",
          inputStyle: "h-20 items-start py-[2%]",
          textInputProps: {
            multiline: true,
          },
          value:formValues.description,
          onChange: (e) => handleInputChange('description', e)
        }}
      />
      <View className="flex flex-row">
        <CheckInput
          checkData={{
            isChecked: formValues.priority === 'UnImportant',
            text: "Not Important",
            onChange: () => handleCheckboxChange('UnImportant')
          }}
        />
        <CheckInput
          checkData={{
            isChecked: formValues.priority === 'Important',
            text: "Important",
            onChange: () => handleCheckboxChange('Important')
          }}
        />
      </View>
      <View className="flex flex-row items-center px-[13%]">
        <DateInput
          dateTimeData={{
            text: "Date",
            onChange:(date:string) => handleInputChange('startDate', date)
          }}
        />

        <DateInput
          dateTimeData={{
            text: "Time",
            onChange:(time:string) => handleInputChange('startTime', time)
          }}
        />
      </View>
      <View className="w-[90%] my-[5%]">
        <View className="flex justify-start w-[90%]">
          <Text className="text-[#fff] text-left text-[16px]">Category</Text>
        </View>

        <View className="bg-[#fff] w-[100%] flex flex-row justify-evenly py-[3%] rounded-xl my-[3%] ">
          <TouchableOpacity className="flex flex-row items-center" onPress={() => handleCategoryChange('Personal')}>
            <Ionicons name="person" size={24} color="black" />
            <Text>Personal</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center" onPress={() => handleCategoryChange('Group')}>
            <MaterialIcons name="groups" size={24} color="black" />
            <Text>Groups</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row w-[100%] justify-evenly">
        <Button data={{
          text:"Cancel",
          inputStyle: "border border-[#fff] w-[40%] my-[1%]",
          toggleTaskForm:() => props.onClose()
        }}

          />

        {name? <Button data={{
          text:isLoading? "Loading......": "Update",
          inputStyle:"bg-[#456ADD] w-[40%] my-[1%]",
          toggleTaskForm: handleSubmit,
          loading: isLoading
        }}
          />: <Button data={{
          text:isLoading? "Loading......": "Create",
          inputStyle:"bg-[#456ADD] w-[40%] my-[1%]",
          toggleTaskForm: handleSubmit,
          loading: isLoading
        }}
          />}
      </View>

     
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({});
