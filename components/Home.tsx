import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeWrapper from './main/HomeWrapper';
import TaskForm from './task/TaskForm';
import Nav from './main/Nav';
import HOC from './HOC';
import Task from './task/Task';

const Home = HOC(TaskForm)

const HomeScreen = () => {



  return (
    <>
    <HomeWrapper>
     
     {/* <Calendar
       showWeekNumbers={false}
       showSixWeeks={false}
       disableMonthChange={true}
       hideExtraDays={true}
       // theme={{
       //   calendarBackground: '#002366',
       //   textSectionTitleColor: '#b6c1cd',
       //   selectedDayBackgroundColor: '#1faadb',
       //   selectedDayTextColor: '#ffffff',
       //   todayTextColor: '#00adf5',
       //   dayTextColor: '#d9e1e8',
       //   textDisabledColor: '#d9e1e8',
       //   monthTextColor: '#ffffff',
       //   arrowColor: '#ffffff',
       //   textDayFontFamily: 'font-lexendRegular',
       // }}
   
       minDate='2024-06-24'
       maxDate='2024-06-30'
     /> */}
     <Nav />
     <Task />
  
     <Home />
   </HomeWrapper>
    </>
    
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
