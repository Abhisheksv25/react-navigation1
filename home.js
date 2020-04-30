import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Picker,
  Button,
  Alert,
  TextLength,
} from 'react-native';
import Constants from 'expo-constants';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('Form');
  };

  return (
    <ScrollView style={styles.container}>
      <Button title="go to form" onPress={pressHandler} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#c9d1cb',
    paddingLeft: 12,
    paddingRight: 15,
    paddingTop: 25,
  },
});
