import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import React from 'react'
import { icons, images } from '../../constants';



interface OnboardingProps {
  onboarding: {
    background: string;
    vector: string;
    caption: string;
    description: string;
  };
  progressList: boolean[];
  handlePress: () => void;
}

const OnboardingLayout = (props: OnboardingProps) => {
  const { background, vector, caption, description} = props.onboarding;

  return (
    <View className='flex justify-start items-center w-[100%] h-[100%] bg-[#3A87F3]'>
      <SvgXml xml={background} width="500" height="500" />
      <SvgXml xml={vector} width="350" height="350" className='absolute top-[10%] left-[10%]' />
      <View className='h-[40%] flex justify-evenly items-center'>
        <Text className='font-patua text-3xl text-[#fff] font-400 text-left'>{caption}</Text>
        <Text className='font-pridiRegular text-xl text-[#fff] font-40 px-[5%]'>{description}</Text>
        <View className='flex flex-row w-[50px] justify-between'>
          {props.progressList.map((isActive, index) => (
            <Image key={index} source={isActive ? icons.bluedot : icons.whitedot} />
          ))}
        </View>
        <TouchableOpacity onPress={props.handlePress} >
          <View className="text-lg font-patua text-[#fff] flex flex-row justify-center items-center w-[200px]">
            <Text className='text-xl font-pridiRegular text-[#fff]'>{vector === images.vectorthree ? "Let's go" : "Next"}</Text>
            <Image source={icons.chevron} className='h-[4vh] w-[30%]' resizeMode='contain' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingLayout;

const styles = StyleSheet.create({
  // touchable: {
  //   backgroundColor: '#3A87F3',
  //   width: 200,
  //   height: 50,
  // },
});
