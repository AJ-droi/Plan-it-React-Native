import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity} from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const TaskStatusModal = (props:any) => {

    const handlePress = (text:string) => {
        props.setTaskStatus(text)
        props.toggleTaskStatus()
    }
  return (
    <View className='bg-[#456ADD] px-[3%] rounded-xl absolute z-[5] right-[5%] top-[105%] h-[23vh] w-[50%] '>
        {props.statusData.map((status:{icon:ImageSourcePropType , text:string}, index:string) => (
        <TouchableOpacity key={index} className='flex flex-row items-center underline border border-x-[#456ADD] border-t-[#456ADD] border-b-[#ffffff] py-[8%] ' onPress={()=> handlePress(status.text) }>
            <Image source={status.icon} width={100} height={100}/>
            <Text className='font-lexendRegular text-[#ffffff] ml-[5%]'>{status.text}</Text>
        </TouchableOpacity>))}
           
    </View>
  )
}

export default TaskStatusModal

const styles = StyleSheet.create({})