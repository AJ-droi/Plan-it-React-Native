import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormWrapper from '@/components/auth/FormWrapper'
import FormField from '@/components/auth/FormField'
import Button from '@/components/auth/Button'
import { Link, router } from 'expo-router'
import { ToastAlertError } from '@/utils/toast'
import { LoginSubmit, RegisterSubmit } from '@/utils/auth'

const Register = () => {
  const [formValues, setFormValues] = useState({
    email:'',
    password:'',
    confirmPassword:''
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (name:string, e:any) => {
    setFormValues({
      ...formValues,
      [name]: e
    });
  };

  const handleSubmit = async() => {
    try{

      if(!formValues.email.includes('@')){
        return ToastAlertError('Please enter a valid email address')
      }
       // Validate password
      if(formValues.password.length < 6){
        return ToastAlertError('Password must be at least 6 characters')
      }

      if(formValues.confirmPassword !== formValues.password){
        return ToastAlertError('Passwords do not match')
      }

      setIsLoading(true)

      const response = await RegisterSubmit(formValues)

      if(response){
        router.push('/verify');
        setIsLoading(false)
        setFormValues({
          email: '',
          password: '',
          confirmPassword:''
        })
      }

    }catch(error:any){
      setIsLoading(false)
     ToastAlertError(error.message)
    }
  }

  return (
    <FormWrapper wrapperdata={{
        caption: "Let's make an account!",
        description: "Create your timing!"
        
    }}>
        
      <FormField form={{
        text:"Email",
        placeholder: "Enter Your Email",
        value:formValues.email,
        onChange: (e) => handleInputChange('email', e)
      }} />

       <FormField form={{
        text:"Password",
        placeholder: "Enter Your Password",
        value:formValues.password,
        onChange: (e) => handleInputChange('password', e)
      }} />

      <FormField form={{
        text:"Confirm Password",
        placeholder: "Re-Enter Your Password",
        value:formValues.confirmPassword,
        onChange: (e) => handleInputChange('confirmPassword', e)
      }} />

      <View className='flex justify-end w-[80%]'>
       <Text className='text-[#fff] text-right text-[#80BAFF]'>Forgot Password?</Text>
      </View>
      

      <Button data={{
        text:isLoading ? "Loading..." : "SEND CODE",
        toggleTaskForm: handleSubmit,
        isLoading:isLoading
      }} />
      <View className='flex flex-row mt-[3%]'>
       <Text className='text-[#fff] text-right'>Already a member?</Text>
       <Link className='text-[#fff] text-right text-[#80BAFF]' href={'/login'}> Log In</Link>
      </View>
  
    </FormWrapper>
  )
}

export default Register

const styles = StyleSheet.create({})