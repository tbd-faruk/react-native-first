import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ProgressBarAndroid, Text, Image} from 'react-native';
import bg from './../../media/header.png';

class Header extends Component {
  
    render() {
        return (
    
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>{this.props.title}</Text>
        <ProgressBarAndroid 
        styleAttr="Horizontal"
        color="#2196F3"
        indeterminate={false}
        progress={this.props.status}
        style={styles.progress}
        />
      </ImageBackground>
    
        );
    }
}

const styles = StyleSheet.create({
  image: {
    height: 85,
    width: "100%",
    justifyContent: "center",
    alignItems:"center"
  },
  progress:{
    width: "90%",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    alignItems:"center",
    justifyContent:"center"
  },

});
export default Header;
