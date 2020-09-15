import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const HEIGHT = 60;

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    //height: HEIGHT,
    width: '90%',
    borderRadius: 6,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6
  },
  borderLeft: {
    borderLeftWidth: 5,
    borderLeftColor: colors.alto
  },
  iconContainer: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  closeButtonContainer: {
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    width: 15,
    height: 15
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  text2: {
    fontSize: 16,
    color: colors.dustyGray
  }
});
