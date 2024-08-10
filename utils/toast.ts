import Toast from 'react-native-toast-message';

export const ToastAlertSuccess = (message:string) => {
    return  Toast.show({
        type: 'success',
        text1: 'Success Message',
        text2: message,
        position:'top'
      });
}

export const ToastAlertError = (message:string) => {
    return  Toast.show({
        type: 'error',
        text1: 'Error Message',
        text2: message,
        position:'top'
      });
}