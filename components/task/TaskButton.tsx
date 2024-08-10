import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const TaskButton = (props:any) => {
  return (
    <TouchableOpacity className='bg-[#456ADD] rounded-md w-[60%] flex flex-row justify-center items-center mx-auto h-[5vh] absolute bottom-[30] left-[70]' onPress={props.toggleTaskForm}>
    <Text className='text-[#ffffff]'>{props.title}</Text>
    <Image source={icons.add} />
  </TouchableOpacity>
  )
}

export default TaskButton

const styles = StyleSheet.create({})