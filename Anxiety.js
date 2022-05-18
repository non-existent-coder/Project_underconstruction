import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Linking
} from "react-native";

const StageFright = (props) => {
  
    return (
      <View style={styles.MainContainer}>
        <SafeAreaView style={styles.nav}>
          <Text style={styles.titleStyle}>Young minds</Text>
          <SafeAreaView></SafeAreaView>
        </SafeAreaView>

        <Text style={styles.titleStyle}>
        1. What Is Stage Fright: Everything You Need To Know About It
        </Text>
        <Image
          source={require("./assets/fear3.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
          Believe it or not, but I get asked about stage fright almost every
          single day. Fear of public speaking is something that holds back a lot
          of speakers with great potential. This is a widespread phobia that
          many people I’ve talked to have struggled with. Fortunately, I’ve
          decided to put together a full guide for my readers who are struggling
          with this issue. So, what exactly is stage fright? Stage fright is an
          incredibly common communication-based anxiety disorder, which usually
          occurs when you have to speak in front of a group of people. Studies
          estimate that between 40–80% of people may suffer from it. Performance
          anxiety can seriously affect your confidence when it comes to
          addressing a group of people in public.{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://speakandconquer.com/what-is-stage-fright/"
              );
            }}
          >
            Read more
          </Text>
        </Text>
        <View style={styles.empty}></View>
        <View>
          <Text style={styles.titleStyle}>
          2. How To Help Your students Shine On Stage
          </Text>
        </View>
        <Image
          source={require("./assets/fear1.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
        Stage fear is a common but a valid fear some children and adults
          suffer from. If your child is frightened to get on the stage, we tell
          you how you can help her overcome her fears.Ever since Meera was a
          preschooler, she would refuse to participate in any class activities
          or games that put the spotlight on her. Soon, her fear escalated into
          a phobia and she would never agree to perform in front of an audience.{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.parentcircle.com/how-to-help-children-shine-on-stage/article"
              );
            }}
          >
            Read more
          </Text>
        </Text>

        <View>
          <View style={styles.empty}></View>
        </View>

        <Text style={styles.titleStyle}>
        3. 10 Fast and Effective Ways to Overcome Stage Fright
        </Text>
        <Image
          source={require("./assets/fear.png")}
          style={styles.ImageClass}
        />

        <Text style={styles.textStyle}>
        #1 Get your head in the right place. I’m going to start out with some
          tough love: It ain’t about you! Speech anxiety is unpleasant enough
          that you may focus on how awful you’re feeling instead of what really
          matters: the response of your audience. Put yourself in their shoes
          and think about what they’re hoping to get out of this presentation.
          You’ll be on the right wavelength, which is that of your audience.{" "}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.genardmethod.com/blog/10-fast-and-effective-ways-to-overcome-stage-fright"
              );
            }}
          >
            Read more
          </Text>
        </Text>
        <View style={styles.empty}></View>
      </View>
    );
  }

const styles = StyleSheet.create({
  MainContainer: {
    flex: 10,

    // Set content's vertical alignment.

    // Set content's horizontal alignment.
    alignItems: "center",

    backgroundColor: "#FFF8E1",
    width: "100%",
    height: "320%",
    position: "absolute"
  },
  textStyle: {
    margin: 20,
    alignSelf: "center",
    textAlign: "left"
  },
  empty: {
    height: "10"
  },
  titleStyle: {
    fontSize: 30,
    margin: 10,
    textAlign: "center"
  },
  headerh: {
    alignment: "center",
    width: "100%",
    backgroundcolor: "pink",
    height: "50"
  },
  ImageClass: {
    // Setting up image width.
    width: 250,

    // Setting up image height.
    height: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  hyperlinkStyle: {
    color: "red"
  }
});
export default StageFright;