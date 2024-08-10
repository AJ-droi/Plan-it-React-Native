import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;


export const ApiGet = async(url:string) => {
    const token = await AsyncStorage.getItem('token')
    return await axios.get(`${BASE_URL}/${url}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const ApiPost = async(url:string, data:object) => {
    const token = await AsyncStorage.getItem('token')
    return await axios.post(`${BASE_URL}/${url}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const ApiPut = async(url:string, data:object) => {
    const token = await AsyncStorage.getItem('token')
    return await axios.put(`${BASE_URL}/${url}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const ApiDelete = async(url:string) => {
    const token = await AsyncStorage.getItem('token')
    return await axios.delete(`${BASE_URL}/${url}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}