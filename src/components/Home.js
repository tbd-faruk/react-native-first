import React, { Component } from 'react';
import { View, StyleSheet,ImageBackground, Text, Image} from 'react-native';
import { NativeBaseProvider } from "native-base";
import bg from './../media/app-bg.jpg';
import logo from './../media/app-logo.png';

class Home extends Component {
  
    render() {
        return (
    
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.text}>My Accountability</Text>
      </ImageBackground>
    
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 64,
    fontWeight: "bold",
    textAlign: "center",
  }
});
export default Home;
