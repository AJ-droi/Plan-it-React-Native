import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'
import { icons } from '@/constants'
import { CheckBox } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

interface FormProps {
    form:{
        text:string,
        value:string,
        placeholder:string,
        inputStyle?:string
        textInputProps?:{
          multiline:boolean,
        },
        onChange: (e:any) => void
    }
}

const FormField = (props: FormProps) => {
  const { text, value, placeholder, inputStyle = '', textInputProps = { multiline: false }, onChange } = props.form;
  const [showPassword, setShowPassword] = useState(false);


  return (
    <View className='mt-[5%] '>
      <Text className="text-base text-gray-100 font-pmedium">{text}</Text>
      <View className={`w-[85%] h-12 px-4 bg-[#fff] mt-[2%] rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center ${inputStyle}`}>
        <TextInput
        placeholder={placeholder}
        value={value}
        className='flex-1 text-[#000] font-psemibold text-base'
        onChangeText={onChange}
        placeholderTextColor={"#999494"}
        secureTextEntry={(text ==="Password" || text === "Confirm Password") && !showPassword}
        multiline={textInputProps?.multiline}
        />
        {(text ==="Password" || text === "Confirm Password") && <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
        <Feather  name={showPassword ? "eye" : "eye-off"} size={24} color="black" />
          </TouchableOpacity>}
      </View>
     
    </View>
  )
}

export const CheckInput = (props:{
  checkData:{
    isChecked:boolean,
    text:string,
    onChange:() => void
  }
}) => {
  const { isChecked, text, onChange} = props.checkData
  return (
    <View >
       
        <CheckBox
          title={text}
         checkedIcon={<Ionicons name="checkbox-outline" size={24} color="white" />}
         checked={isChecked}
         uncheckedIcon={<MaterialIcons name="check-box-outline-blank" size={24} color="white" />}
         iconRight={true}
         containerStyle={styles.checkContainer}
         textStyle={styles.text}     
         onPress={onChange}
        />
       
      </View>
  )
}


export const DateInput = (props:{
  dateTimeData:{
    text:string,
    onChange:(date:string) => void
  }
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {text, onChange} = props.dateTimeData

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate:Date) => {
    const currentDate = selectedDate || date;
    hideDatePicker();
    setDate(currentDate.toISOString().split('T')[0]); // Format date to YYYY-MM-DD
    onChange(date)
  };

  const handleConfirmTime = (selectedDate:Date) => {
    const currentDate = selectedDate || time;
    hideDatePicker();
    setTime(currentDate.toISOString().split('T')[1].split('.')[0]); // Format date to YYYY-MM-DD
    onChange(time)
  };



  return (
    <View className='w-[60%]'>
      <Text className="text-base text-gray-100 font-pmedium">{text}</Text>
      <TouchableOpacity className={`w-[85%] h-12 px-4 bg-[#fff] mt-[2%] rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center justify-evenly`}  onPress={showDatePicker}>
      {text === "Date"?<Ionicons name="calendar-outline" size={24} color="#A1A1A1" />: <Ionicons name="time-outline" size={24} color="#A1A1A1" /> }
      <TextInput
          placeholder={ text === "Date"? "dd/mm/yy" : "hh : mm"}
          className=' text-[#000] font-psemibold text-base'
          placeholderTextColor={"#999494"}
          value={text === "Date" ? date : time}
          editable={false}
        
        />
      </TouchableOpacity>
       
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={text === "Date" ? "date" : "time"}
        onConfirm={text === "Date" ? handleConfirmDate : handleConfirmTime}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default FormField

const styles = StyleSheet.create({
  checkContainer: {
    backgroundColor:"#031956",
    borderColor:"#031956"
  },
  text:{
    color:"#C3D2FF",
    fontFamily:"Lexend[wght]"
  }
})