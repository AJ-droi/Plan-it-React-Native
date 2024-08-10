import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeWrapper from '@/components/main/HomeWrapper'
import ViewTask from '@/components/task/ViewTask'

const TaskInfo = () => {
  return (
    <HomeWrapper>
      <ViewTask />
    </HomeWrapper>
  )
}

export default TaskInfo

const styles = StyleSheet.create({})