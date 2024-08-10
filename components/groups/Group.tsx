import { ScrollView, StyleSheet, View } from 'react-native'
import React, {  useEffect, useState } from 'react'
import GroupCard from './GroupCard'
import { fetchGroup } from '@/utils/group'

const groupData = [
    {
    name:"Josh Team"
  },
  {
    name:"Ken Team"
  }
]

const Group = () => {
  const [groups, setGroups] = useState([])

  useEffect(() => {

    const getGroup = async () => {
      const data =  await fetchGroup()
      setGroups(data)
    }
 
    getGroup()

  }, [])



  return (
    <View  className='px-[3%] w-[100%] mt-[5%] mb-[100%] h-[100%] '  >
        <GroupCard groupData={groups} />
    </View >
  )
}

export default Group

const styles = StyleSheet.create({})