import { ApiGet, ApiPost, ApiPut } from "./api"

export const fetchTask = async() => {
    try{
        const response = await ApiGet(`task/get-all-tasks`)
       return response.data
    }catch(error:any){
        throw new Error(error.message)
    }

  }

  export const fetchSingleTask = async(taskId:string) => {
    try{
        const response = await ApiGet(`task/${taskId}`)
       return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }

  export const createTask = async(formValues:object) => {
    try{
        const response = await ApiPost(`task/create-task`, formValues )
        return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }


  export const updateTask = async(taskId:string, formValues:object) => {
    try{
        const response = await ApiPut(`task/${taskId}`, formValues )
        return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }