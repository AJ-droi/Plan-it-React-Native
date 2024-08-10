import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/auth/FormField';
import FormWrapper from '@/components/auth/FormWrapper';
import Button from '@/components/auth/Button';
import { Link } from 'expo-router';
import { useRouter} from 'expo-router';
import { ToastAlertError } from '@/utils/toast';
import { LoginSubmit } from '@/utils/auth';



const Login = () => {

  const router = useRouter()

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
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

      setIsLoading(true)

      const response = await LoginSubmit(formValues)

      if(response){
        router.push('home');
        setIsLoading(false)
        setFormValues({
          email: '',
          password: ''
        })
      }

    }catch(error:any){
      setIsLoading(false)
     ToastAlertError(error.message)
    }
  }

  return (
    <FormWrapper wrapperdata={{
        caption: "Welcome Back!",
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

      <View className='flex justify-end w-[80%] '>
       <Text className='text-[#fff] text-right text-[#80BAFF]'>Forgot Password?</Text>
      </View>
      

      <Button data={{
        text:isLoading ? "Loading..." : "TAKE ME IN",
        toggleTaskForm: handleSubmit,
        loading: isLoading
      }} />
      <View className='flex flex-row mt-[3%]'>
       <Text className='text-[#fff] text-right'>Dont have an account?</Text>
       <Link className='text-[#fff] text-right text-[#80BAFF]' href={'/register'}> Register me</Link>
      </View>
  
    </FormWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})