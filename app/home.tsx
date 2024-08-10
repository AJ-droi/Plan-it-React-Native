import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '@/components/Home';
import { StatusBar } from 'expo-status-bar';

const home = () => {
    return (
        <View>
          <HomeScreen />
          <StatusBar style='light' />
         
        </View>
      );
}

export default home

const styles = StyleSheet.create({})