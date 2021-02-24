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
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "./constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import v30 from "./videos/30.mp4";
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
  // v4,
  v30,
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

const TT = [
  "",
  "",
  "",
  "Once, long ago in a distant land, there lived a God-fearing man named Noah who loved his family, respected his community and took good care of his animals.",
  "One night, in a dream, or in a vision of the night, there was a thunderstorm; a rain that was so heavy that it flooded his fields and the entire land.",
  "Noah was extremely terrified but was however safe and secure as he rode on a wooden ark through the storm",
  "Inspired by the immediacy to capture the vision he had (because he knew the vision was from God), he recorded the wooden ark, and how the Ark was built, on a little piece of dry lamb skin.",
  "Ever since then, Noah had the urge to build the Ark in his vision; and every morning, Noah and his three sons - Shem, Ham, Japheth - would come together to discuss the Ark.",
  "And, when they discussed the Ark, they would once look again at the little piece of dry lamb skin which Noah used to capture the vision. Despite so, Noah’s sons would still each had their own interpretation of how the Ark should be built.  ",
  "Shem, one of the sons, who was more conservative had the idea to keep everything within the boundary. He interpreted the Ark to be a place of greater security and safety, so that when the rain came, the family could stay safe and dry from it.  ",
  "Ham, another son, was more sensitive to the needs of the animals. He wanted the Ark not only to be safe but also to encompass the fresh air and sunlight that the animals would otherwise have enjoyed outside. For this he suggested many openings in the Ark that would enable the animals access to fresh air and sunshine that all life needed for sustenance.",
  "Just as the discussion about sunshine and fresh air were coming to an end, another problem arose in their discussion. Noah came to think about the food that they will need to prepare for the community will soon be depleted over time with the physical and population growth of the animals. This would, in turn, ever require food of larger quantities for the community for sustenance. How could they provide for all animals in the Ark over an indefinite period of time?",
  "Just then, Japheth, yet another son, not only wanted the animals to be onboard but also their natural habitats with them. For this he envisioned the Ark to also contain the soil and along with it the myriad of plants that will grow into crops, flowers, and trees.",
  "Given the collected ideas of his sons, Noah thought to himself that the Ark would not only be safe but also be as successful as Earth itself in propagating life. He imagined a new kind of state created during the flood where life would flourish. These would also give the animals places to hide, sleep and play, as they trim the plants and feed on them. Additionally, Noah and his sons wouldn’t have to worry about going around with a giant poop-scoop anymore. (There had been a family squabble over who would be doing that chore already!)",
  "So, Noah has his sons to work together. But, because of their different interpretations of the Ark, they would sometimes get into arguments among themselves, especially between Shem and Ham. One who favoured more openings whilst the other wanted only minimal openings.",
  "Japheth on the other hand had less to do with the construction of the Ark (or with the arguments of his brothers) for he was a-keen gardener. He started laying soil and planting trees of all types in the Ark. Amazingly, whilst Japheth was laying the soil in the Ark, he realised he had actually inevitably brought in earthworms, ants, and all types of insects into the Ark which were not the kind of life-forms anticipated to be on the Ark. But that were also important for the Ark to propagate life.  ",
  "By the time the Ark was fully constructed, and its garden beautifully cultivated, all sorts of animals had already voluntarily inhabited the Ark because it was such a good place to inhabit.",
  "One day without warning, the rains came and everything onboard had to remain within the confines of the Ark. For forty days and nights rain came pouring down on Earth. Noah and his new family were shut altogether in the Ark, with only the openings that Shem left for ventilation.",
  "So by the end of forty days and nights, the rain receded. Ham opened up the roof and for a long time the bright blue sky soaked into the cabin, and the ocean breezes carried away the foul odour.",
  "Soon after, roused by the warmth of the sun, the animals awoke from their deep slumber, and began to feast in the garden that Japheth had so well planted.",
  "The zebras, wildebeests, buffalos began munching grass on the ground. The rooster flapped their wings and hopped between decks and easily escaped from the juvenile cubs who were still learning to catch their first prey.",
  "Monkeys scampered from tree to tree to grab their favourite fruits, while the Koalas still snoozed in a deep slumber…",
  "While most of the animals were content with what they had, and the small songbirds were happy to fly from flower to flower, catching insects, on the ark, the bigger birds were impatient to stretch their wings and see what there was to see in this new changed world.",
  "The eagles and other birds of prey were delighted with the abundance of sea food right underneath their sharp eyes, and quickly learned how to plunge into the water and catch a delicious nutritious fish to dine on.",
  "Otters and other creatures that loved to swim soon learned to scamper up and down the ark. Fishing, swimming and splashing for hours at a time, before coming on board for a nap, and then off again into the water.",
  "All the animals found ways of enjoying themselves on the ark. Noah, however, recalled if they were to rely solely on the food they would have brought on board, to sustain the community; they would have made a grave mistake that risked the community to outgrow their supplies, and thereafter even nature’s capacity to replenish the community (if there a garden in the first place). The Ark would therefore be unsustainable!",
  "And so, Noah realised it was important for him and the community to live within the capacity of nature and learn to effectively store nature’s providence through the myriad of plants and animals when nature is giving generously. As such Noah concluded - “Greater Biodiversity, Greater Storing Capacity of Nature.”",
  "So for the rest of the days, for almost a year, the animals lived on the Ark. Not only did they survive the crisis, but they were thriving, had healthy offspring, well nourished by God himself through the providence of Nature. As for Noah and his sons, they learned to accept and respect the differences among themselves. And, with the flood receded, Noah and his family and the animals left the Ark. But what journey awaits for them?",
  "",
  "",
];

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const loadFonts = () =>
  Font.loadAsync({
    Renner: require("./assets/GaramondPremrPro.otf"),
  });

export default function One() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [screen, setScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const [textAnim, setTextAnim] = useState(new Animated.Value(300));
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // useEffect(()=>{

  // },[loaded])

  useEffect(() => {
    // if (screen == 0 && loaded) {
    //   setLoaded(false);
    //   console.warn("Workings");
    //   setTimeout(() => {
    //     setScreen(1);
    //   }, 100000);
    // }
    console.warn("Screeen", screen);
    if (screen == 28) {
      setLoaded(false);
      setTimeout(() => {
        setScreen(0);
      }, 19000);
    }

    if (screen == 1 && loaded) {
      setLoaded(false);
      setTimeout(() => {
        setScreen(2);
      }, 7000);
    }
    if (screen == 2 && loaded) {
      setLoaded(false);
      setTimeout(() => {
        // console.log("3");

        Animated.timing(textAnim, {
          toValue: 450,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(textAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        });
        setScreen(3);
      }, 7000);
    }
  }, [loaded]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      console.log(pan.x._value);
      if (pan.x._value < -40 || pan.x._value > 40) {
        console.log("started");
      }

      return true;
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
      if (pan.x._value < -40) {
        setScreen((s) => s + 1);
        Animated.timing(textAnim, {
          toValue: 450,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(textAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        });
      }
      if (pan.x._value > 40) {
        setScreen((s) => s - 1);
        Animated.timing(textAnim, {
          toValue: -450,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(textAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        });
      }
    },
  });

  // console.log(Object.keys(pan.x));
  // console.log(pan.x._value);

  if (!fontsLoaded) {
    return (
      <AppLoading
        onError={() => {}}
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  } else
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
        }} /* {...panResponder.panHandlers}*/
      >
        <ScrollView>
          {/* <View style={{alignItems:'center'}} >
            <MaterialCommunityIcons
              name='gesture-swipe'
              size={32}
              color='white'
            />s
          </View> */}
        

          <Video
            source={VV[screen]}
            rate={1.0}
            volume={1.0}
            isMuted={muted}
            resizeMode="contain"
            shouldPlay
            onLoad={(val) => {
              console.warn("Is loaded", val);
              setLoaded(true);
            }}
            // isBuffering={true}
            isLooping
            style={{ width: "100%", height: 300 }}
          />
          {/* <Animated.Text style={{color:'white',fontWeight:'normal'}}>egshsgsegse</Animated.Text> */}

          <View style={{ paddingHorizontal: 10 }}>
            {screen == 3 ? (
              <Animated.Text
                style={[
                  {
                    color: "white",
                    fontSize: 22,
                    textAlign: "justify",
                    fontFamily: "Renner",
                    // marginHorizontal:5
                    // fontWeight:'bold'
                  },
                  {
                    transform: [
                      {
                        translateX: textAnim,
                      },
                    ],
                  },
                ]}
              >
                <Animated.Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 32,
                    textAlign: "justify",
                    transform: [
                      {
                        translateX: textAnim,
                      },
                    ],
                  }}
                >
                  {TT[screen]?.split("")[0]}
                </Animated.Text>
                {TT[screen].split("").splice(1).join("")}
              </Animated.Text>
            ) : (
              <Animated.Text
                style={[
                  {
                    color: "white",
                    fontSize: 22,
                    textAlign: "justify",
                    fontFamily: "Renner",
                  },
                  {
                    transform: [
                      {
                        translateX: textAnim,
                      },
                    ],
                  },
                ]}
              >
                <Animated.Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "justify",
                    fontSize: 22,
                    transform: [
                      {
                        translateX: textAnim,
                      },
                    ],
                  }}
                >
                  {TT[screen].split(" ")[0]}{" "}
                </Animated.Text>
                {TT[screen].split(" ").splice(1).join(" ")}
              </Animated.Text>
            )}
          </View>

          {screen == 1 || screen === 28 || screen == 2 ? null : screen == 0 ? (
            <TouchableOpacity
              onPress={() => {
                setScreen(1);
                setLoaded(false);
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 400,
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 26, color: "#fff" }}>Continue >></Text>
            </TouchableOpacity>
          ) : (
            // <View
            //   style={{
            //     flexDirection: "row",
            //     justifyContent: "center",
            //     marginTop: 20,
            //   }}
            // >
            //   <TouchableOpacity
            //     onPress={() => {
            //       setScreen((s) => s + 1);
            //       Animated.timing(textAnim, {
            //         toValue: 450,
            //         duration: 0,
            //         useNativeDriver: true,
            //       }).start(() => {
            //         Animated.timing(textAnim, {
            //           toValue: 0,
            //           duration: 500,
            //           useNativeDriver: true,
            //         }).start();
            //       });
            //     }}
            //     style={{ marginHorizontal: 10 }}
            //   >
            //     <FontAwesome name='forward' size={34} color='white' />
            //   </TouchableOpacity>
            // </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setLoaded(false);
                  setScreen((s) => s - 1);
                  Animated.timing(textAnim, {
                    toValue: -450,
                    duration: 0,
                    useNativeDriver: true,
                  }).start(() => {
                    Animated.timing(textAnim, {
                      toValue: 0,
                      duration: 500,
                      useNativeDriver: true,
                    }).start();
                  });
                }}
                style={{ marginHorizontal: 10 }}
              >
                <FontAwesome name="backward" size={34} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setLoaded(false);
                  setScreen((s) => s + 1);
                  Animated.timing(textAnim, {
                    toValue: 450,
                    duration: 0,
                    useNativeDriver: true,
                  }).start(() => {
                    Animated.timing(textAnim, {
                      toValue: 0,
                      duration: 500,
                      useNativeDriver: true,
                    }).start();
                  });
                }}
                style={{ marginHorizontal: 10 }}
              >
                <FontAwesome name="forward" size={34} color="white" />
              </TouchableOpacity>
            </View>
          )}

          <StatusBar color="black" />
          <View
            style={{ alignItems: "flex-end",justifyContent:'flex-end', marginTop: 15, marginRight: 10,}}
          >
            {muted ? (
              <TouchableOpacity onPress={() => setMuted(false)}>
                <Octicons name="unmute" size={32} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setMuted(true)}>
                <Octicons name="mute" size={32} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
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
