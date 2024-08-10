import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'

const Button = (props:any) => {
    const {text, inputStyle, toggleTaskForm, loading} = props.data
  return (
    <TouchableOpacity
    className={`bg-[#031956] rounded-xl min-h-[54px] flex flex-row justify-center items-center mt-[5%] w-[83%] ${inputStyle} `}
    onPress={toggleTaskForm}
    disabled={loading}
  >
    <Text className={`text-[#fff] font-lexendRegular text-lg`}>
      {text}
    </Text>

    {/* {isLoading && (
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        size="small"
        className="ml-2"
      />
    )} */}
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})