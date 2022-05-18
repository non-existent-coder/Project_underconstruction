/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./HomePage";
import Login from "./Login";
import Chatbot from "./Chatbot"
import KommunicateChat from './Chatbot';
//import Setti from "./settings";

export default function App() {
  return (<Login />);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Login from "./Login";
import GameScreen from "./GameScreen";
import SurveyAttachment from "./SurveyAttachment";
//import './global.js'
import Articles1 from "./Article1";
//import Setti from "./settings";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Relationship from "./Depression";
import ExamStress from "./Stress";
import StageFright from "./Anxiety";
import TimerScreen from "./Timer";
import Exercise from "./Exercise";
import Physical from "./Physical";


//import timer from "./unused/timer";

const navigator = createStackNavigator(
  {
    Home: HomePage ,
    Log: Login,
    Game: GameScreen,
    Survey: SurveyAttachment,
    Articles: Articles1,
    Relation: Relationship,
    Exam: ExamStress,
    Stage: StageFright,
    Timer: TimerScreen,
    Exercise: Exercise,
    Physical: Physical,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      justifyContent: "center",
      title: "    YOUNG MINDS     -     The one way gateway to a students mind."
    }
  }
);
export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
