import {Platform} from 'react-native';

let URI = '';

if (Platform.OS === 'ios') {
  URI = 'https://tred-afrik.vercel.app/api/api/v1';
} else {
  URI = 'https://tred-afrik.vercel.app/api/v1';
}

export {URI};