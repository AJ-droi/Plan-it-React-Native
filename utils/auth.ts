import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiPost } from "./api";
import { ToastAlertSuccess } from "./toast";

export const LoginSubmit = async(data:object) => {
    const response = await ApiPost('auth/login',data)

     

      if(response){
        ToastAlertSuccess(response.data.message)
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('token', response.data.token)
        return true
      }

      return false
    
}

export const RegisterSubmit = async(data:object) => {
  const response = await ApiPost('auth/register',data)
  
    if(response){
      ToastAlertSuccess(response.data.message)
      return true
    }

    return false
  
}

export const VerifyOtpSubmit = async(data:object) => {
  const response = await ApiPost('auth/verify-otp',data)

    if(response){
      ToastAlertSuccess(response.data.message)
      return true
    }

    return false
  
}