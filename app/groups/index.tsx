import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import HomeWrapper from '@/components/main/HomeWrapper'
import GroupCard from '@/components/groups/GroupCard'
import TaskButton from '@/components/task/TaskButton'
import GroupForm from '@/components/groups/GroupForm'
// import HOC from '@/components/HOC'
import Group from '@/components/groups/Group'
import { ScrollView } from 'react-native'

// const GroupFormm = HOC(GroupForm)

const Groups = () => {
    
  return (
    <HomeWrapper>
        <ScrollView>
          
          <Text className='text-[#A2C2EE] text-[20px] font-lexendRegular pl-[5%]'>Groups</Text>
            <Group />
          
           
        </ScrollView>
{/*  
        <GroupFormm />
     */}
     
  
    </HomeWrapper>
  )
}

export default Groups

const styles = StyleSheet.create({})