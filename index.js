import React, { useState } from 'react';
import { Text, View, ScrollView, Image, Animated } from 'react-native';

const HEADER_MAX_HEIGHT = 120,
      HEADER_MIN_HEIGHT = 70,
      PROFILE_IMAGE_MAX_HEIGHT = 80,
      PROFILE_IMAGE_MIN_HEIGHT = 40,
      HEADER_BACKGROUND_COLOR = 'lightskyblue',
      USERNAME_AVATAR = 'Username Avatar',
      USERNAME_HEADER = 'Username Header',
      USERNAME_FONT_SIZE = 14,
      USERNAME_FONT_WEIGHT = 'bold',
      USERNAME_FONT_COLOR = 'white',
      AVATAR_BORDER_WIDTH = 3,
      AVATAR_BORDER_COLOR = 'white',
      AVATAR_MARGIN_LEFT = 10,
      AVATAR_FONT_SIZE = 20,
      AVATAR_FONT_WEIGHT = 'bold',
      AVATAR_FONT_COLOR = 'black',
      AVATAR_TEXT_PADDING_LEFT = 10,
      GET_AVATAR_IMAGE = () => require(`./assets/avatar.png`);

const RNTwitterLikeHeader = props => {
  const defaultChildren = () => <View style={{ height: 1000 }}></View>;

  const {
    headerMaxHeight = HEADER_MAX_HEIGHT,
    headerMinHeight = HEADER_MIN_HEIGHT,
    profileImageMaxHeight = PROFILE_IMAGE_MAX_HEIGHT,
    profileImageMinHeight = PROFILE_IMAGE_MIN_HEIGHT,
    headerBackgroundColor = HEADER_BACKGROUND_COLOR,
    usernameAvatar = USERNAME_AVATAR,
    usernameHeader = USERNAME_HEADER,
    usernameFontSize = USERNAME_FONT_SIZE,
    usernameFontWeight = USERNAME_FONT_WEIGHT,
    usernameFontColor = USERNAME_FONT_COLOR,
    avatarBorderWidth = AVATAR_BORDER_WIDTH,
    avatarBorderColor = AVATAR_BORDER_COLOR,
    avatarMarginLeft = AVATAR_MARGIN_LEFT,
    avatarFontSize = AVATAR_FONT_SIZE,
    avatarFontWeight = AVATAR_FONT_WEIGHT,
    avatarFontColor = AVATAR_FONT_COLOR,
    avatarTextPaddingLeft = AVATAR_TEXT_PADDING_LEFT,
    getAvatarImage = GET_AVATAR_IMAGE(),
    children = defaultChildren(),
  } = props;

  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, headerMaxHeight - headerMinHeight],
    outputRange: [headerMaxHeight, headerMinHeight],
    extrapolate: 'clamp',
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, headerMaxHeight - headerMinHeight],
    outputRange: [profileImageMaxHeight, profileImageMinHeight],
    extrapolate: 'clamp',
  });

  const profileImageMarginTop =scrollY.interpolate({
    inputRange: [0, headerMaxHeight - headerMinHeight],
    outputRange: [
      headerMaxHeight - (profileImageMaxHeight / 2),
      headerMaxHeight + 5
    ],
    extrapolate: 'clamp',
  });

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, headerMaxHeight - headerMinHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      0,
      headerMaxHeight - headerMinHeight,
      headerMaxHeight - headerMinHeight + 5 + profileImageMinHeight,
      headerMaxHeight - headerMinHeight + 5 + profileImageMinHeight + 26,
    ],
    outputRange: [-20, -20, -20, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: headerBackgroundColor,
          height: headerHeight,
          zIndex: headerZIndex,
          alignItems: 'center',
        }}
      >
        <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom }}>
          <Text
            style={{
              fontSize: usernameFontSize,
              fontWeight: usernameFontWeight,
              color: usernameFontColor,
            }}
          >
            {usernameHeader}
          </Text>
        </Animated.View>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }]
          )
        }
      >
        <Animated.View
          style={{
            width: profileImageHeight,
            height: profileImageHeight,
            borderRadius: profileImageMaxHeight / 2,
            borderWidth: avatarBorderWidth,
            borderColor: avatarBorderColor,
            overflow: 'hidden',
            marginTop: profileImageMarginTop,
            marginLeft: avatarMarginLeft,
          }}
        >
          <Image
            source={getAvatarImage}
            style={{ flex: 1, width: null, height: null}}
          />
        </Animated.View>
        <View>
          <Text
            style={{
              fontWeight: avatarFontWeight,
              fontSize: avatarFontSize,
              color: avatarFontColor,
              paddingLeft: avatarTextPaddingLeft,
            }}
          >
            {usernameAvatar}
          </Text>
        </View>
        {children}
      </ScrollView>
    </View>
  );
}

export default RNTwitterLikeHeader;
