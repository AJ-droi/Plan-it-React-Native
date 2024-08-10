import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TeamateCard from './TeamateCard'
import { useLocalSearchParams } from 'expo-router'
import { fetchSingleGroup } from '@/utils/group'

const teamData = {
    name: "Josh Team",
    members: [
        {
            name: "Gianni",
            jobDescription: "Redesign motion graphic and call to client. Also ask him to give more info. about project."
        },
        {
            name: "Gianni",
            jobDescription: "Redesign motion graphic and call to client. Also ask him to give more info. about project."
        },
        {
            name: "Gianni",
            jobDescription: "Redesign motion graphic and call to client. Also ask him to give more info. about project."
        },
        {
            name: "Gianni",
            jobDescription: "Redesign motion graphic and call to client. Also ask him to give more info. about project."
        },
        {
            name: "Gianni",
            jobDescription: "Redesign motion graphic and call to client. Also ask him to give more info. about project."
        }
    ]

}

const Team = () => {
    const params = useLocalSearchParams() as {groupId:string}
    const [users, setUsers] = useState<any| null>(null)
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await fetchSingleGroup(params.groupId)
        setUsers(data.users)
      }
      getUsers()
    }, [])

  return (
   <>
    <TeamateCard teamData={users} />
   </>
  )
}

export default Team

const styles = StyleSheet.create({})