import { ApiGet, ApiPut } from "./api"

export const fetchUsers = async() => {
    try{
        const response = await ApiGet(`user/get-users`)
       return response.data
    }catch(error:any){
        throw new Error(error.message)
    }
  }

  export const assignTask = async(userId:string, formValues:object) => {
    try{
        const response = await ApiPut(`user/assign-task/${userId}`, formValues)
        return response.data
    }catch(error:any){
        throw new Error(error.message)
  }
}