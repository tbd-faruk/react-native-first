import React, { Component } from 'react';
import {View, StyleSheet,ImageBackground, Text, TextInput} from 'react-native';
import { Button } from "native-base";
import Header from './layouts/Header';
class UserInfo extends Component {
state = {
  name: "Faruk Haider",
  keyboardStatus: undefined,
}

    render() {
        return (
            <View>
                <Header title="Basic Details" status={0.3}/>
                <View style={styles.container}>
                    <Text style={styles.title}>Are these details correct?</Text>
                    <View style={styles.listContainer}>
                      <Text style={styles.label}>Name</Text>
                      <Text style={styles.value}>Rocky Balboa</Text>
                    </View>
                    <View style={styles.listContainer}>
                      <Text style={styles.label}>Email</Text>
                      <Text style={styles.value}>yoadrian1234@gmail.com</Text>
                    </View>
                    <View style={styles.listContainer}>
                      <Text style={styles.label}>D.O.B</Text>
                      <Text style={styles.value}>August 01, 1984</Text>
                    </View>
                    <View style={styles.listContainer}>
                      <Text style={styles.label}>Address</Text>
                      <Text style={styles.value}>123 Greystone Drive, Austin, TX, 78730 </Text>
                    </View>
                
                    <Button
                      style={styles.btn}
                    >
                      Yes
                    </Button>
                    <Text style={styles.warning}>Wrong Info</Text>
                  </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#eaeff1",
    textAlign: "center",
    alignItems: "center",
    height:600,
    
  },
  listContainer:{
    width:330,
    flexDirection:"row",
    justifyContent: "space-between",
    marginTop:10,
  },
  label:{
    backgroundColor:"#dae3e5",
    padding: 10,
    fontSize:17,
    fontWeight:"500",
    width: 85,
    textAlign: "right",
    color: "black"
  },
  value:{
    backgroundColor:"#dae3e5",
    padding: 10,
    fontSize:15,
    lineHeight:35,
    width: 230,
    textAlign:"left",
    letterSpacing:1,
  },
  title:{

    color: "#30383b",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:50,
    marginBottom:20,
  },
  btn:{
    width: 320,
    height: 40,
    fontSize:35,
    borderRadius:50,
    fontWeight: "bold",
    padding:10,
    backgroundColor:"#2196F3",
    margin: 30,

  },
  warning:{
    marginTop: -15,
    color: "#2196F3",
    fontWeight: "bold"
  }
});
export default UserInfo;
