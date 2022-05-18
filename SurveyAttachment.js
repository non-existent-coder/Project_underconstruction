import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  AppRegistry,
  Button,
  StyleSheet,
  View,
  Text,
  TextInput
} from "react-native";
import KommunicateChat from "./Chatbot";
import Form from "./Form";
import NumericInput from 'react-native-numeric-input';
const SurveyAttachment = (props) => {
  {
      /*Nested_If_Else=()=>{
 
    if( this.state.text > 44 )
    {
 
        navigation.navigate('Home')
 
    }
    else if(this.state.text > 25)
    {
 
        navigation.navigate('Log')
 
    }
    
    else
    {
 
        navigation.navigate('Game')
 
    }
  }*/
    return (
      <ImageBackground
        style={styles.background}
        source={{
          uri:
            "https://img.wallpapersafari.com/phone/1125/2436/76/23/CMlYyE.jpg"
        }}
      >
        <View style={styles.nav}>
          <Text style={styles.headerh1}>Young minds</Text>
        </View>
        <View style={{ top: 95 }}>
          <Form />
        </View>
        <View>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "rgb(100,140,205)",
                  height: 40,
                  top:-2
                }}
              >
                <Text style={{ color: "white", fontSize: 25 }}>
                  ENTER YOUR SCORE
                </Text>
              </View>
              <NumericInput 
            //value={this.state.value} 
            onChange={(value) => this.setState({value})} 
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1.5}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            minValue={0}
            maxValue={53}
            separatorWidth={150}
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
              <TextInput
                style={{
                  height: 70,
                  alignItems: "center",
                  backgroundColor: "azure",
                  fontSize: 30,
                  
                }}
                
                //onChangeText = { ( text ) => { this.setState({ TextInputValue: text })} }
                onChangeText={(text) => this.setState({ text })}
              />
            </View>

            <View style={styles.multiButtonContainer}>
              <Button
                //onPress={this.Nested_If_Else}
                onPress={()=>props.navigation.navigate('Home')}
                title="LOGIN"
                color="orange"

              />
            </View>

            <View style={{ padding: 10 }}></View>
          </View>
        </View>
        <KommunicateChat />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
    //position:'absolute',
    // flexDirection:'column'
  },
  nav: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "orange",
    height: 50,
    position: "absolute"
  },
  headerh1: {
    color: "#fff",
    fontfamily: "McLaren",
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    // cursive,
    fontweight: 200
  },
  background: {
    flex: 1,
    //justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "217%"
  },
  buttonContainer: {
    margin: 20,
    top: 100
  },
  multiButtonContainer: {
    margin: 5,
    flexDirection: "column",
    justifyContent: "center",
    top: 110
  }
});
export default SurveyAttachment;
