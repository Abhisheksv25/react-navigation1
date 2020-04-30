import React, { useState } from 'react';
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

const Form = ({ navigation }) => {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Number, setNumber] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [conPassword, setconPassword] = React.useState('');
  const [State, setState] = React.useState('');
  const [NameError, setNameError] = React.useState('');
  const [EmailError, setEmailError] = React.useState('');
  const [NumberError, setNumberError] = React.useState('');
  const [PasswordError, setPasswordError] = React.useState('');
  const [conPasswordError, setconPasswordError] = React.useState('');

  const Validate = () => {
    if (Name.length < 1) {
      setNameError('Enter valid Name');
      return false;
    } else if (Number.length > 10 || Number.length < 10) {
      setNumberError('Enter 10 digits');
      return false;
    } else if (Password.length < 6) {
      setPasswordError('Enter Greater than 6 Characters');
      return false;
    } else if (!(Password == conPassword)) {
      setconPasswordError('Password must be same as confirm Password');
      return false;
    } else return true;
  };

  const handleSubmit = () => {
    setNameError('');
    setEmailError('');
    setNumberError('');
    setPasswordError('');
    setconPasswordError('');
    if (Validate()) {
      setName('');
      setEmail('');
      setNumber('');
      setPassword('');
      setconPassword('');
      setState('');
    }
  };
  const pressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder=" "
        onChangeText={text => setName(text)}
        value={Name}
        style={styles.box}
      />
      <Text style={styles.error}>{NameError}</Text>
      <Text> </Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder=" Id@example.com"
        placeholderTextColor="black"
        onChangeText={text => setEmail(text)}
        value={Email}
        style={styles.box}
      />

      <Text style={styles.error}>{EmailError}</Text>
      <Text> </Text>

      <Text style={styles.label}>Number</Text>
      <TextInput
        placeholder=" "
        onChangeText={text => setNumber(text)}
        value={Number}
        keyboardType="number-pad"
        maxLength={10}
        style={styles.box}
      />

      <Text style={styles.error}>{NumberError}</Text>
      <Text> </Text>

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="black"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={Password}
        minLength={6}
        style={styles.box}
      />

      <Text style={styles.error}>{PasswordError}</Text>
      <Text> </Text>

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        placeholder="Enter Confirm Password"
        placeholderTextColor="black"
        onChangeText={text => setconPassword(text)}
        secureTextEntry={true}
        value={conPassword}
        minLength={6}
        style={styles.box}
      />

      <Text style={styles.error}>{conPasswordError}</Text>
      <Text> </Text>

      <Text style={styles.label}>State</Text>
      <Picker
        selectedValue={State}
        onValueChange={text => setState(text)}
        style={styles.dropdown}>
        <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
        <Picker.Item label="Arunachal Pradesh" value="Arunachal Pradesh" />
        <Picker.Item label="Assam" value="Assam" />
        <Picker.Item label="Bihar" value="Bihar " />
        <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
        <Picker.Item label="Goa" value="Goa" />
        <Picker.Item label="Gujarat" value="Gujarat" />
        <Picker.Item label="Haryana" value="Haryana" />
        <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
        <Picker.Item label="Jammu and Kashmir" value="Jammu and Kashmir" />
        <Picker.Item label="Jharkhand" value="Jharkhand" />
        <Picker.Item label="Karnataka" value="Karnataka" />
        <Picker.Item label="Kerala" value="Kerala" />
        <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
        <Picker.Item label="Maharashtra" value="Maharashtra" />
        <Picker.Item label="Manipur" value="Manipur" />
        <Picker.Item label="Meghalaya" value="Meghalaya" />
        <Picker.Item label="Mizoram" value="Mizoram" />
        <Picker.Item label="Nagaland" value="Nagaland" />
        <Picker.Item label="Odisha" value="Odisha" />
        <Picker.Item label="Punjab" value="Punjab" />
        <Picker.Item label="Rajasthan" value="Rajasthan" />
        <Picker.Item label="Sikkim" value="Sikkim" />
        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
        <Picker.Item label="Telangana" value="Telangana" />
        <Picker.Item label="Tripura" value="Tripura" />
        <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
        <Picker.Item label="Uttarakhand" value="Uttarakhand" />
        <Picker.Item label="West Bengal" value="West Bengal" />
      </Picker>
      <Text> </Text>
      <Text> </Text>

      <Button
        title="Submit!"
        onPress={handleSubmit}
        disabled={!Name || !Email || !Number || !Password || !conPassword}
      />
      <Text> </Text>
      <Button title="go to Home" onPress={pressHandler} />
    </ScrollView>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:60,
    backgroundColor: '#34879e',
    paddingLeft: 12,
    paddingRight: 15,
    
  },
  error: {
    color: '#ff9500',
    fontWeight: 'bolder',
    fontSize: 15,
  },
  box: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderBottomEndRadius: 5,
  },
  label: {
    fontSize: 21,
    fontFamily: 'sans',
    color: 'white',
    fontWeight: 'bold',
  },
  dropdown: {
    borderRadius: 5,
    fontSize: 17,
    backgroundColor: '#474747',
    color: 'white',
    fontWeight: 'bolder',
    padding: 7,
  },
});
