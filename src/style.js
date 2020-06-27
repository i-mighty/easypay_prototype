import { StyleSheet } from 'react-native';
import {
  material,
  materialColors,
  iOSColors,
  systemWeights,
} from 'react-native-typography';
import platform from './native-base-theme/variables/platform';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  //Auth Page
  centerVerticalContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    paddingHorizontal: '5%',
    width: '100%',
  },
  input: {
    marginRight: 5,
    marginVertical: '2%',
    borderRadius: 10,
  },
});
