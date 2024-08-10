import { ApiGet, ApiPost } from "./api"

export const fetchGroup = async() => {
    try{
        const response = await ApiGet(`group/get-all-groups`)
       return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }

  export const fetchSingleGroup = async(groupId:string) => {
    try{
        const response = await ApiGet(`group/${groupId}`)
       return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }

  export const addNewGroup = async(formValues:object) => {
    try{
        const response = await ApiPost(`group/create-group`, formValues)
        return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }