import React from "react";
import {
 Alert,
 Image,
 ImageBackground,
 StyleSheet,
 View,
 Text,
 Button,
} from "react-native";
import KommunicateChat from "./Chatbot";
import { useState } from "react";
const GameScreen = (props) => {
//const {r,g,b}=route.params;
 return (
   <ImageBackground
     style={styles.background}
     source={{
       uri: "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
     }}>
       <View>
     <Image
         style={styles.logo}
         source={{
           uri:
           "https://th.bing.com/th/id/OIP.mYwLzkDEBqAqPQsxBE7zVQAAAA?pid=ImgDet&rs=1"
         }}
       ></Image>
     <View style={{height:270, width:350,left: 70, position:'absolute',
   top:105, borderRadius: 180 , backgroundColor:colorMix()}} />
     </View>
     
         
         <Button
         onPress={()=>props.navigation.navigate('Game')}
         title="Get one"
         color="#009933"
       />
       
       <KommunicateChat/>
     </ImageBackground>
   );
  };
 const r=200, b=200, g=200; 
  const colorMix=()=>{
    //export rgb values from database
    const r =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const colorRed=()=>{
    //update database rgb values and reload to props navigate.
   // red=red-50;
    //props.navigation.navigate('Log');
  }
 
 /*
      const [red, setRed] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [green, setGreen] = React.useState(0);
    
*/
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      //justifyContent: "flex-end",
      alignItems: "center",
      position: "absolute",
      width: "100%",
      height: "100%"
    },
     logo: {
   width: 500,
   height: 500,
   
 },
});
  export default GameScreen;

