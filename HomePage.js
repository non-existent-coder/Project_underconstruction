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
const HomePage = (props) => {
 return (
   <ImageBackground
     style={styles.background}
     source={{
       uri: "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
     }}
   >
     <View style={styles.nav}>
       <Text style={styles.headerh1}>Young minds</Text>
     </View>
     <View style={styles.logoContainer}>
       <Image
         style={styles.logo}
         source={{
           uri:
             "https://yt3.ggpht.com/a/AATXAJx0GCqag2H5TE21yBgf7rhaFmHKyf0kdO6tY58m=s900-c-k-c0xffffffff-no-rj-mo"
         }}
       />
     </View>
 
     <View style={styles.container}>
       <Text style={styles.tex}>You are not alone.</Text>
       
         <Button
           onPress={()=>props.navigation.navigate('Log')}
           title="Vanga palagalam !!!!"
           color="#009933"
         />
       
       <View style={styles.buttonContainer}>
         <Button
           onPress={()=>props.navigation.navigate('Survey')}
           title="TALK with me"
           color="purple"
         />
       </View>
       <View style={styles.buttonContainer}>
         <Button
           
           title=" Relax Pannalam vanga "
           color="#009933"
         />
       </View>
       <View style={styles.multiButtonContainer}>
         <Button onPress={() => {props.navigation.navigate('Game',{r:255,g:255,b:255});}} title="games" color="red" />
         <Button  title="music" color="red" />
       </View>
       <View style={styles.multiButtonContainer}>
         <Button  title="articles" color="red" onPress={()=>props.navigation.navigate('Articles')} />
         <Button  title="exercise" color="red" onPress={()=>props.navigation.navigate('Exercise')}/>
       </View>
       <View style={{ padding: 10 }}></View>
     </View>
     <KommunicateChat />
   </ImageBackground>
 );
};
/*
<View style={styles.register}></View>
  
 
   <View>
       <Button
       onPress={onPressLearnMore}
       title="Learn More"
       color="#841584"
       accessibilityLabel="Learn more about this purple button"
       /></View>*/
 
const styles = StyleSheet.create({
 background: {
   flex: 1,
   justifyContent: "flex-end",
   alignItems: "center",
   position: "absolute",
   width: "100%",
   height: "100%"
 },
 login: {
   width: "100%",
   height: 70,
   backgroundColor: "lightblue"
 },
 register: {
   width: "100%",
   height: 70,
   backgroundColor: "lightgreen"
 },
 logo: {
   width: 100,
   height: 100
 },
 logoContainer: {
   position: "absolute",
   top: 70
 },
 header: {
   //backgroundcolor: blue,
   // margin: auto - 16,
   padding: 16,
   boxshadow: 10,
   rgba: (0, 0, 0, 0.3)
 },
 nav: {
   alignItems: "center",
   width: "100%",
   backgroundColor: "orange",
   height: 50
 },
 headerh1: {
   color: "#fff",
   fontfamily: "McLaren",
   fontSize: 25,
   fontWeight: "bold",
   // cursive,
   fontweight: 200
 },
 tex: {
   fontSize: 20,
   fontWeight: "bold"
 },
 container: {
   flex: 1,
   justifyContent: "center",
   margin: 20,
   alignItems: "center"
   //position: "absolute",
 },
 buttonContainer: {
   margin: 10
 },
 multiButtonContainer: {
   margin: 10,
   flexDirection: "row",
   justifyContent: "space-between"
 }
});

export default HomePage;