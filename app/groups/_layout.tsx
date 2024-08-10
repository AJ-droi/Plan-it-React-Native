import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const GroupLayout = () => {
  return (
   <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[taskId]/[groupId]" options={{ headerShown: false }} />
   </Stack>
  )
}

export default GroupLayout

const styles = StyleSheet.create({})