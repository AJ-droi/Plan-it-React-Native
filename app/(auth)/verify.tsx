import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormWrapper from '@/components/auth/FormWrapper'
import OTPTextInput from 'react-native-otp-textinput'
import { Link } from 'expo-router'
import Button from '@/components/auth/Button'
import { VerifyOtpSubmit } from '@/utils/auth'
import { useRouter } from 'expo-router'
import { ToastAlertError } from '@/utils/toast'

const Verify = () => {
    const [otp, setOtp] = useState({
      otp:''
    })

    const handleOtpChange =(e:any) => {
        setOtp({...otp, otp:e})
    }

    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async() => {
      try{
  
        setIsLoading(true)
  
        const response = await VerifyOtpSubmit(otp)
  
        if(response){
          router.push('/login');
          setIsLoading(false)
          setOtp({
           otp:''
          })
        }
  
      }catch(error:any){
        setIsLoading(false)
       ToastAlertError(error.message)
      }
    }


  return (
    <FormWrapper wrapperdata={{
        caption: "Verify Email",
        description: "Code is sent to your email"    
    }}>
        <View>
        <OTPTextInput 
         inputCount={6} 
      
        textInputStyle={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor:'white'
        }} 
        
        handleTextChange={(e) => handleOtpChange(e)}/>
        </View>

        <View className='flex flex-row mt-[3%]'>
            <Text className='text-[#fff] text-right'>You didn't receive code?</Text>
            <Link className='text-[#fff] text-right text-[#80BAFF]' href={'/register'}> Re-send</Link>
       </View>

       <Button data={{
        text:isLoading ? "Loading..." : "VERIFY ME",
        toggleTaskForm: handleSubmit,
        loading: isLoading
      }} />
      
    </FormWrapper>
  )
}

export default Verify

const styles = StyleSheet.create({})