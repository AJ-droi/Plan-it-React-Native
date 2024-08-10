import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import TaskStatusModal from '../task/TaskStatusModal'
import { icons } from '@/constants'


const statusData = [
    {
      icon:icons.pending,
      text:"On Going"
    },
    {
      icon:icons.completed,
      text:"Completed"
    },
    {
      icon:icons.notCompleted,
      text:"Not Completed"
    },
    {
      icon:icons.deleted,
      text:"Deleted"
    },
  ]

const Nav = () => {

    const [showTaskModal, setShowTaskModal] = useState(false)
    const [taskStatus, setTaskStatus] = useState('On Going')
    const toggleTaskStatus = () => {
        setShowTaskModal(!showTaskModal)
      }
  return (
    <View className='flex flex-row justify-between items-center px-[5%]'>
    <View className='flex flex-row items-center justify-evenly w-[40%]'>
      <Text className='text-[#79B8A5] font-lexendRegular text-[14px]'>All</Text>
      <Text className='text-[#79B8A5] font-lexendRegular text-[14px]'>|</Text>
      <Text className='text-[#79B8A5] font-lexendRegular text-[14px]'>Importance</Text>
    </View>
    <View className='flex flex-row items-center' >
      <Text className='text-[#A2C2EE] text-[14px] '>{taskStatus}</Text>
      <TouchableOpacity onPress={() => toggleTaskStatus()}>
      <Image source={showTaskModal ? icons.dropup :icons.dropdown} />  
      </TouchableOpacity>
     
    </View>
    {showTaskModal &&<TaskStatusModal statusData={statusData} setTaskStatus={setTaskStatus} toggleTaskStatus={toggleTaskStatus} />}
  </View>
  )
}

export default Nav

const styles = StyleSheet.create({})