import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import NotificationIcon from '../../assets/icons/notification.svg';

type HeaderProps = {
  name: string;
  profilePicture: ImageSourcePropType;
};

const Header: React.FC<HeaderProps> = ({name, profilePicture}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.profileContainer}>
          <Image style={styles.profile} source={profilePicture} />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.profileName}>{name}</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <NotificationIcon />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.margin,
    marginVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    backgroundColor: COLORS.white,
    width: 45,
    height: 45,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    padding: 4,
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  profileInfo: {
    marginLeft: 16
  },
  welcome: {
    color: COLORS.grey,
    fontFamily: FONTS[600],
    fontSize: 14
  },
  profileName: {
    color: COLORS.black,
    fontFamily: FONTS[600],
    fontSize: 18
  },
  iconContainer: {
    position: 'relative',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: 0,
    right: 3,
  }
});
