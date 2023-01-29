import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';


export default function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const data = {
      email: email,
      password: password
    }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user)
        Alert.alert('Login Success')
      })
      .catch(err => {
        Alert.alert('Login Failed')
      }
      )
  }

  return (
    <View style={styles.container}>
      <Image style={{ width: 260, height: 100 }} source={require('./assets/logo2.png')} />
      <TextInput style={styles.textInput} keyboardType="email-address" placeholder="E-mail" onChangeText={text => { setEmail(text) }}></TextInput>
      <TextInput style={styles.textInput} secureTextEntry placeholder="Password" onChangeText={text => { setPassword(text) }} ></TextInput>
      <TouchableOpacity>
        <Text style={styles.button} onPress={login}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: 'orange', marginTop: 10 }}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: 'orange', marginTop: 10 }}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={{ color: 'gray', marginTop: 150, }}>© 2023 - All Rights Reserved</Text>
      <Text style={{ color: 'gray', marginTop: 5, }}> Leonardo Vechieti</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    textAlign: 'center',

  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    width: 300,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    marginTop: 20,
    fontSize: 18,
  }
});
