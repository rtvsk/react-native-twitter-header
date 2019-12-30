# React Native "twitter-like" animated header

![Twitter-like animation](http://res.cloudinary.com/codemecodeyou/image/upload/v1577461368/codemecodeyou/baia6uiljg4x9wjqyq5q.gif)

## Installation

`npm install react-native-twitter-like-header

yarn add react-native-twitter-like-header`

## Usage

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNTwitterLikeHeader from 'react-native-twitter-like-header';

export default function App() {
  return (
    <RNTwitterLikeHeader>
      <View style={styles.container}>
        <Text>My text is here!</Text>
      </View>
    </RNTwitterLikeHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
```

## Props

| Props                 | default                            | type                     |
| --------------------- | ---------------------------------- | ------------------------ |
| headerMaxHeight       | 120                                | number                   |
| headerMinHeight       | 70                                 | number                   |
| profileImageMaxHeight | 80                                 | number                   |
| profileImageMinHeight | 40                                 | number                   |
| headerBackgroundColor | 'lightskyblue'                     | string                   |
| usernameAvatar        | 'USERNAME'                         | string                   |
| usernameHeader        | 'USERNAME'                         | string                   |
| usernameFontSize      | 16                                 | number                   |
| usernameFontWeight    | 'bold'                             | string                   |
| usernameFontColor     | 'white'                            | string                   |
| usernamePaddingBottom | 5                                  | number                   |
| avatarBorderWidth     | 3                                  | number                   |
| avatarBorderColor     | 'white'                            | string                   |
| avatarMarginLeft      | 10                                 | number                   |
| avatarFontSize        | 20                                 | number                   |
| avatarFontWeight      | 'bold'                             | string                   |
| avatarFontColor       | 'black'                            | string                   |
| avatarTextPaddingLeft | 10                                 | number                   |
| getAvatarImage        | null                               | `require('./image.jpg')` |
| children              | `<View><Text>MyText</Text></View>` | JSX.Element / React.Node |
