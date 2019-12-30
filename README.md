# React Native "twitter-like" animated header

![Twitter-like animation](http://res.cloudinary.com/codemecodeyou/image/upload/v1577461368/codemecodeyou/baia6uiljg4x9wjqyq5q.gif)

## Installation

`npm i react-native-twitter-like-header`

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

## Example

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNTwitterLikeHeader from 'react-native-twitter-like-header';

export default function App() {
  return (
    <RNTwitterLikeHeader
      headerMaxHeight={130}
      headerMinHeight={80}
      profileImageMaxHeight={90}
      profileImageMinHeight={50}
      headerBackgroundColor={'green'}
      usernameAvatar={'John Doe'}
      usernameHeader={'John Doe'}
      usernameFontSize={18}
      getAvatarImage={require('./path/to/my/avatar.jpg')}
    >
      // Thats my custom children
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
