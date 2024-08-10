import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import { fetchTask } from '@/utils/task'
import { ScrollView } from 'react-native'

const taskData = [
  {
    title: 'Task 1',
    description: 'Task 1 description',
    startTime: '10:00',
    startDate: '2024-06-24'
  },
  {
    title: 'Task 2',
    description: 'Task 2 description',
    startTime: '11:00',
    startDate: '2024-06-24'
  },
  {
    title: 'Task 3',
    description: 'Task 3 description',
    startTime: '12:00',
    startDate: '2024-06-24'
  }
]

const Task = () => {
  const [allTask, setAllTask] = useState([])

  useEffect(() => {

    const getTask = async () => {
      const data =  await fetchTask()
      setAllTask(data)
    }
 
    getTask()

  }, [])


  return (
    <ScrollView>
      <View>
        </View>
        <TaskCard taskData={allTask} />
    </ScrollView>
 
  )
}

export default Task

const styles = StyleSheet.create({})