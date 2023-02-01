import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, ToastAndroid, Container } from 'react-native';
//importa conteudo de textos
import strings from './src/data/strings'
import { Linking } from 'react-native';


export default function App() {
  const [context, setContext] = useState("Home")
  const [name, setName] = useState('')
  const [user, setUser] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    //compara email e password
    if (email === user.email && password === user.password) {
      Alert.alert('Login Success')
      //Redirect to home page
      setContext("Home")

    }
  }
  const register = () => {
    const data = {
      name: name,
      email: email,
      password: password
    }
    setUser(data)
    Alert.alert('Register Success')
    //Redirect to login page
    setContext("Login")
  }
  const redirectSiteCompass = () => {
    //Redirect to url
    Linking.openURL('https://www.compass.uol/');
  }
  const logout = () => {
    //Redirect to login page
    setContext("Login")
    setName('')
    setEmail('')
    setPassword('')
    setUser([])
  }

  if (context === "Login") {
    return (
      <View style={styles.container}>
        <Image style={{ width: 260, height: 100 }} source={require('./assets/logo2.png')} />
        <TextInput style={styles.textInput} keyboardType="email-address" placeholder="E-mail" onChangeText={text => { setEmail(text) }}></TextInput>
        <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password" onChangeText={text => { setPassword(text) }} ></TextInput>
        <TouchableOpacity>
          <Text style={styles.button} onPress={login}>{strings.login}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: 'orange', marginTop: 10 }} onPress={() => { setContext("Register") }}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: 'orange', marginTop: 10 }} onPress={() => { setContext("Forgot Password") }}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={{ color: 'gray', marginTop: 150, }}>© 2023 - All Rights Reserved</Text>
        <Text style={{ color: 'gray', marginTop: 5, }}> Leonardo Vechieti</Text>
        <StatusBar style="auto" />
      </View>
    );

  }
  else if (context === "Register") {
    return (
      <View style={styles.container}>
        <Image style={{ width: 260, height: 100 }} source={require('./assets/logo2.png')} />
        <TextInput style={styles.textInput} placeholder="Full Name" onChangeText={text => { setName(text) }}></TextInput>
        <TextInput style={styles.textInput} keyboardType="email-address" placeholder="E-mail" onChangeText={text => { setEmail(text) }}></TextInput>
        <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password" onChangeText={text => { setPassword(text) }} ></TextInput>
        <TouchableOpacity>
          <Text style={styles.button} onPress={register}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: 'orange', marginTop: 10 }} onPress={() => { setContext("Login") }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ color: 'gray', marginTop: 150, }}>© 2023 - All Rights Reserved</Text>
        <Text style={{ color: 'gray', marginTop: 5, }}> Leonardo Vechieti</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  else if (context === "Home") {
    return (
      <View style={styles.home}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Image style={{ width: 260, height: 100 }} source={require('./assets/logo2.png')} />

        </View>
        <View style={{ padding: 15, alignItems: 'center' }}>
          <Text style={styles.textTitleSite}>{strings.titleSite}</Text>
          <Text style={styles.textContent}>{strings.contentSite}</Text>
          <Text style={styles.textContent}>{strings.contenSite2}</Text>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text style={styles.buttonCompass} onPress={redirectSiteCompass}>{strings.buttonHome}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonCompass} onPress={logout}>{strings.logout}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'gray', marginTop: 150, textAlign: 'center' }}>© 2023 - All Rights Reserved</Text>
      </View>
    );
  }
  else if (context === "Logout") {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Logout</Text>
      </View>
    );
  }
  else if (context === "Forgot Password") {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Forgot Password</Text>
        <TouchableOpacity>
          <Text onPress={()=>{setContext("Login")}}>Return</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  },
  home: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'orange',
    width: 'auto',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    paddingTop: 25,
  },
  textHome: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
  },
  textTitleSite: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 25,
  },
  textContent: {
    color: 'white',
    fontSize: 18,
    marginBottom: 25,
  },
  buttonCompass: {
    color: 'white',
    width: 200,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'orange',
    borderWidth: 1.3,
    marginTop: 20,
    fontSize: 18,
  },
});
