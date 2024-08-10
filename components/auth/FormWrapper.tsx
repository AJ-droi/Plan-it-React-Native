import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { formImage } from '@/constants'
import { SvgXml } from 'react-native-svg'
import {  useSegments } from 'expo-router'

const FormWrapper = ({wrapperdata, children}: {wrapperdata:any, children:ReactNode}) => {
    const {caption, description} = wrapperdata

    const segments = useSegments();


  return (
    <View className='flex items-center justify-evenly pt-[25%] '>
      <SvgXml xml={formImage.authbg} className='absolute' />
      <SvgXml xml={formImage.planit}  />
      <View className='py-[5%] '>
        <Text className='font-lexendRegular text-[#fff] text-2xl text-center' > {caption}</Text>
        <Text className='font-lexendRegular text-[#fff] text-[14px] text-center pt-[3%]'>{description}</Text>
      </View>
     
      {children}
        {segments[1] !== 'verify' && <View className='flex justify-evenly min-h-[20%] '>
            <View className='flex flex-row items-center justify-evenly'>
                <SvgXml xml={formImage.line} width={'40%'} />
                <Text className='text-2xl text-[#fff]'>OR</Text>
                <SvgXml xml={formImage.line} width={'40%'} />
            </View>
            <View className='flex flex-row justify-evenly'>
                <View className='flex flex-row justify-evenly items-center'>
                  <SvgXml xml={formImage.google} />
                  <Text className='font-lexendRegular text-[15px] text-[#fff] ml-[5%]'>Google</Text>
                </View>
                <View className='flex flex-row justify-evenly items-center'>
                  <SvgXml xml={formImage.facebook}  />
                  <Text className='font-lexendRegular  text-[15px] text-[#fff] ml-[5%]'> Facebook</Text>
                </View>
            </View>
        </View>}
     
    </View>
  )
}

export default FormWrapper

const styles = StyleSheet.create({})