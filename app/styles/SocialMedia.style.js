import { Platform } from 'react-native';
import {Fonts} from '../components/Fonts';

export default {
  inactiveTab: {
      backgroundColor: '#140025',
  },
  activeTab: {
    backgroundColor: '#140025',
  },
  inactiveText: {
    color: 'white',
    fontFamily: Fonts.RobotoMedium,
    fontSize: 18
  },
  activeText: {
    color: '#f79f27ff',
    fontFamily: Fonts.RobotoLight,
    fontSize: 18
  },
  underlineStyle: {
    backgroundColor: '#f79f27ff'
  },
  tabContainer: {
      borderColor: 'transparent'
  }
};