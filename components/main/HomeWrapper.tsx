import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {ReactNode, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { homewrapperImage } from '@/constants'
import { SvgXml } from 'react-native-svg'
import Sidebar from './Sidebar'
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router'





const HomeWrapper = ({children}: {children:ReactNode}) => {
  
  const [showSidebar, setShowSidebar] = useState(false)

  const segments = useSegments();
  const router = useRouter()

  return (
  
     <SafeAreaView className='bg-[#031956] h-[100%] '>
        <View className='flex flex-row justify-evenly items-center py-[5%]'>
        {segments[0] === 'home' ? (
          <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
            <SvgXml xml={homewrapperImage.menu}  />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#B3B3AC" />
          </TouchableOpacity>
        )}
        
         
            <SvgXml xml={homewrapperImage.todo} />
            <SvgXml xml={homewrapperImage.search} />
            <SvgXml xml={homewrapperImage.calendar} />
        </View>

        {showSidebar &&
         
          <Sidebar onClose={() => setShowSidebar(!showSidebar)} />
        }
    
      {children}
    </SafeAreaView>
    
  )
}

export default HomeWrapper

const styles = StyleSheet.create({
  // absolute: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
});