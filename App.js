import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Animated } from 'react-native';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

export default function App() {
  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageMarginTop =scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),
      HEADER_MAX_HEIGHT + 5
    ],
    extrapolate: 'clamp',
  });

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
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
          backgroundColor: 'lightskyblue',
          height: headerHeight,
          zIndex: headerZIndex,
          alignItems: 'center',
        }}
      >
        <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            Dmitry Iv.
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
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderWidth: 3,
            borderColor: 'white',
            overflow: 'hidden',
            marginTop: profileImageMarginTop,
            marginLeft: 10,
          }}
        >
          <Image
            source={require('./assets/avatar.png')}
            style={{
              flex: 1,
              width: null,
              height: null,
            }}
          />
        </Animated.View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 10,
            }}
          >
            Dmitry Iv.
          </Text>
        </View>
        <View style={{ height: 1000 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
