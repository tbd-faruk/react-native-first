import React, { Component } from 'react';
import { View, StyleSheet,ImageBackground, Text} from 'react-native';
import { NativeBaseProvider } from "native-base";
import bg from './../media/warning-bg.jpg';

class Home extends Component {
  
    render() {
        return (
    
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.header}>WARNING</Text>
        <View style={styles.content}>
            <Text style={styles.description}>
              It doesn't appear that you have an active account with my accountability. Let's activate your account
            </Text>
            <Text style={styles.slug}>
              Ask your coach how you can activate it now.
            </Text>
        </View>
        <Text style={styles.active}>Active Now</Text>
      </ImageBackground>
    
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header:{
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
  active:{
    color: "white",
    fontSize: 23,
    fontWeight: "400",
    padding: 35,
  },
  description:{
    color: "#30383b",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 5,
  },
  slug:{
    fontSize: 21,
    color:'#cd2316',
    fontWeight: "400",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
   
  },
  content: {
    color: "white",
    padding: 15, 
    width: "80%",
    backgroundColor: "white",
    borderRadius: 7,
    marginTop: -40,
  }
});
export default Home;
