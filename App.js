import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  PanResponder,
  Animated,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import v1 from "./videos/1.mp4";
import v2 from "./videos/2.mp4";
import v3 from "./videos/3.mp4";
import v4 from "./videos/4.mp4";
import v5 from "./videos/5.mp4";
import v6 from "./videos/6.mp4";
import v7 from "./videos/7.mp4";
import v8 from "./videos/8.mp4";
import v9 from "./videos/9.mp4";
import v10 from "./videos/10.mp4";
import v11 from "./videos/11.mp4";
import v12 from "./videos/12.mp4";
import v13 from "./videos/13.mp4";
import v14 from "./videos/14.mp4";
import v15 from "./videos/15.mp4";
import v16 from "./videos/16.mp4";
import v17 from "./videos/17.mp4";
import v18 from "./videos/18.mp4";
import v19 from "./videos/19.mp4";
import v20 from "./videos/20.mp4";
import v21 from "./videos/21.mp4";
import v22 from "./videos/22.mp4";
import v23 from "./videos/23.mp4";
import v24 from "./videos/24.mp4";
import v25 from "./videos/25.mp4";
import v26 from "./videos/26.mp4";
import v27 from "./videos/27.mp4";
import v28 from "./videos/28.mp4";
import v29 from "./videos/29.mp4";

const VV = [
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
  v27,
  v28,
  v29,
];

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function One() {
  const [screen, setScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const [textAnim,setTextAnim] = useState(new Animated.Value(300));

  useEffect(() => {
    // setIsLoading(true)
    
    if (screen === 0) {
      setTimeout(() => {
        setScreen(1);
      }, 9000);
    }
    if (screen == 2) {
      setTimeout(() => {
        setIsLoading(true);
      }, 200);
    }
    if (screen == 1) {
      setTimeout(() => {
        setScreen(2);
      }, 7100);
    }
  }, [screen]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      Animated.timing(textAnim, {
        toValue:300,
        duration:0,
        useNativeDriver:true
      }).start()
      return true
    },
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e) => {
      if (pan.x._value < 0) {
        setScreen((s) => s + 1);
        Animated.timing(textAnim, {
          toValue:0,
          duration:500,
          useNativeDriver:true
        }).start()
      }
      if (pan.x._value > 0) {
        setScreen((s) => s - 1);
        Animated.timing(textAnim, {
          toValue:-300,
          duration:0,
          useNativeDriver:true
        }).start(() => {
          Animated.timing(textAnim,{
            toValue:0,
          duration:500,
          useNativeDriver:true
          }).start()
        })
      }

      // console.log(Object.keys(pan.x));
      // console.log(pan.x._value);
    },
  });

  return (
    <Animated.View style={styles.container} {...panResponder.panHandlers}>
      {/* {screen > 1 ? (
        <TouchableOpacity
          style={{ position: "absolute", top: 20, left: 20 }}
          onPress={() => setScreen((s) => s - 1)}
        >
          <Ionicons name='md-arrow-back' size={32} color='white' />
        </TouchableOpacity>
      ) : null} */}

      <Animated.View style={[{alignItems:'center',justifyContent:'center'},{
        transform:[{
          translateX:textAnim
        }]
      }]}>
        <MaterialCommunityIcons
          name='gesture-swipe'
          size={42}
          color='white'
        />
       
      </Animated.View>
 
      <Video
        // source={{
        //   uri: `${VIDEOS[screen]}`,

        // }}
        source={VV[screen]}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode='contain'
        shouldPlay
        isBuffering={true}
        isLooping
        style={{ width: "100%", height: 300 }}
      />

      <Animated.Text style={[{color:'white'}, {
        transform:[{
          translateX:textAnim
        }]
      }]}>
        egesgsgsgsegsegesgse
      </Animated.Text>
  

      {/* {isLoading ? (
        <TouchableOpacity onPress={() => {
          
          setScreen(s => s + 1)}}>
          <AntDesign
            name='forward'
            size={44}
            color={Colors.button}
            style={{ marginTop: 20 }}
          />
        </TouchableOpacity>
      ) : null} */}

      <StatusBar color='black' />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
