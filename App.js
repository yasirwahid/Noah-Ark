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
  v4,
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
  "Many people know the story of Noah – how God sent him a vision of the land flooded with water so deep that no one would be able to survive, how he built his ark and saved not only a lot of animals, but also his own wife and his sons and their wives! But what many people don’t know, is that the building of the ark was not a straight-forward affair! Let us start at the beginning… ",
  "Noah was a good and God-fearing man who loved his family, respected his community and took good care of his animals. One day, tired from working hard in the fields, he went to bed after his wife had made him a meal of delicious stew and some fragrant fresh bread.",
  "As he snoozed in his cozy bed, he saw a terrible vision. A violent storm ravaged the land. The land he loved and worked so carefully, the land on which he and his whole family lived.",
  "Noah was terrified but was kept safe and secure as he rode through the storm in a wooden ark. Even in his sleep, Noah shook his head and cried out ‘No! This must not happen!’ Then God spoke to Noah: ‘Build an ark!”",
  "Inspired to capture the vision he had (because he knew the vision was from God), Noah awoke and took a piece of velum and hurried to draw everything he could remember from the dream.",
  "From that moment, Noah knew he had to build the Ark in his vision. Now, Noah had three fine capable sons, and before dawn had broken, Noah called his three sons to discuss the Ark. They would talk for a while, then they would once again look at the velum on which Noah had captured the vision. Despite this, Noah’s sons each had their own interpretation of what the Ark would look like when built.",
  "From morning till night, long after the sun had gone down, the four of them discussed how best to build the ark. Each of them had an idea or two, and none of them agreed on everything!",
  "Shem, who was more conservative wanted every animal to stay within the confined of the ark. He designed an ark that had lots and lots of compartments and cabins, and he would carefully labelled each one with the animal or person that would occupy it. His ark had a tight-fitting roof that would not let any rain in, so everyone (and all their supplies) would stay perfectly dry, no matter how long and how hard it rained.",
  "Ham, another son, was more of a free spirit. He wanted the Ark not only be safe but also to encompass and preserve the fresh air and sunlight that the animals would normally enjoy outside. He envisioned the ark opening to the skies, with plenty of windows and portholes so everyone could see the blue sky and sunshine that they all needed.",
  "Just as the discussion about sunshine and fresh air were coming to an end, another problem arose in their discussion. Noah came to think about the food that they will need to prepare for the community will soon be depleted over time with the physical and population growth of the animals. This would, in turn, ever require food of larger quantities for the community for sustenance. How could they provide for all animals in the Ark over an indefinite period of time?",
  "Just then, Japheth, yet another son, not only wanted the animals to be onboard but also their natural habitats with them. For this he envisioned the Ark to also contain the soil and along with it the myriad of plants that will grow into crops, flowers, and trees.",
  "Given the collected ideas of his sons, Noah thought to himself that the Ark would not only be safe but also be as successful as Earth itself in propagating life. He imagined a new kind of state created during the flood where life would flourish. These would also give the animals places to hide, sleep and play, as they trim the plants and feed on them. Additionally, Noah and his sons wouldn’t have to worry about going around with a giant poop-scoop anymore. (There had been a family squabble over who would be doing that chore already!)",
  "This idea sounded pretty good to Noah and his sons, and so they set off to work. As expected, Ham and Shem got into a bit of an argument during work, but eventually they compromised: Shem said that it would be nice to have some fresh air in the ark, every now and then, and Ham mentioned he’d quite forgotten that it will be raining! So, they worked together and came up with ingenious plan to install lots of sliding windows and doors that could be shut tight against the rain, and then flung open when more ventilation was needed.",
  "Japheth, in the meantime, set off and gathered plants and soil from as far and wide as he could travel. As soon as the bones of the ark were in place, Japheth began his work, weaving creepers and vines around joists, laying in a thick warm layer of soil in the bottom of the ark, and planting as many seeds as he could. Amazingly, whilst so doing, Japheth inevitably brought in earthworms, ants, and all types of insects into the Ark which were not the kind of life-forms anticipated to be on the Ark. But that were also important for the Ark to propagate life.",
  "By the time the Ark was fully constructed, the animals were already attracted to the plants in it. The ark was like an extra concentrated garden, and pretty soon, they had all the animals of the land living on board because it was such a good place to inhabit.",
  "One day without any warning the rain came, it was scary. None of them had ever experienced anything like the power of that storm. The rain fell so heavily it was like having bucket after bucket of water thrown down, and no one could see their hand if they stretched their arm out into the rain. Thunder roared and lightning lashed the mountains. Noah and his sons were happy to tighten Shem’s doors and windows, and everything onboard had to remain within the confines of the Ark. Finally, the ark moved a little, then a little more. They were floating!",
  "For forty days and forty nights, the rain fell. Then, at last, the storm abated, and the angry black clouds drifted away. Now it was Ham’s turn, and he hastened around the ship, flinging wide the windows and doors, to allow warm sea breezes to blow out all the smells and fustiness that happens when people and animals live close to one another for a long time.",
  "Soon after, roused by the warmth of the sun, the animals awoke from their deep slumber, and began to feast in the garden that Japheth had so well planted.",
  "The zebra munched on the delicious juicy grass, alongside the antelope, wildebeest and buffalo, while the lion cubs tried – without any success – to catch the rooster who squawked at them as he slipped to the lower decks, easily evading the unpracticed cubs!",
  "Monkeys jumped from branch to branch, nibbling fruit and throwing banana peels all over the place, while koalas clung, yawning sleepily, to their eucalyptus trees, apparently bored by all they could see!",
  "While most of the animals were content with what they had, and the small songbirds were happy to fly from flower to flower, catching insects, on the ark, the bigger birds were impatient to stretch their wings and see what there was to see in this new changed world.",
  "The eagles and other birds of prey were delighted with the abundance of sea food right underneath their sharp eyes, and quickly learned how to plunge into the water and catch a delicious nutritious fish to dine on.",
  "Otters and other creatures that loved to swim soon learned to scamper up and down the ark, fishing, swimming and splashing for hours at a time, before coming on board for a nap, and then off again into the warm welcoming water.",
  "All the animals found ways of enjoying themselves on the ark. Noah, however, recalled if they were to rely solely on the food they would have brought on board, to sustain the community; they would have made a grave mistake that risked the community to outgrow their supplies, and thereafter even nature’s capacity to replenish the community (if there a garden in the first place). The Ark would therefore be unsustainable!",
  "And so, Noah realised it was important for him and the community to live within the capacity of nature and learn to effectively store nature’s providence through the myriad of plants and animals when nature is giving generously. As such Noah concluded - “Greater Biodiversity, Greater Storing Capacity of Nature.”",
  "So, for the rest of the days, for almost a year, the animals lived on the Ark. Not only did they survive the crisis, but they were thriving, had healthy offspring, well nourished by God himself through the providence of Nature. As for Noah and his sons, they learned to accept and respect the differences among themselves. And, with the flood receded, Noah and his family and the animals left the Ark. But what journey awaits for them?",
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
    if (screen == 29) {
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
      }, 9000);
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
          backgroundColor: "#1A1A1C",
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
          <View style={{ paddingBottom: 20 }}>
            <Video
              source={VV[screen]}
              rate={1.0}
              volume={1.0}
              isMuted={muted}
              resizeMode={screen == 2 ? "cover" : "contain"}
              shouldPlay
              onLoad={(val) => {
                console.warn("Is loaded", val);
                setLoaded(true);
              }}
              // onPlaybackStatusUpdate={status => console.warn(status)}
              // isBuffering={true}

              isLooping
              style={{ width: "100%", height: 300, marginVertical: 10 }}
            >
              {screen == 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    setScreen(1);
                    setLoaded(false);
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    height: 400,
                    width: "100%",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ fontSize: 22, color: "#fff" }}>
                    Continue >>
                  </Text>
                </TouchableOpacity>
              ) : screen == 1 || screen == 2 || screen == 29 ? null : (
                <View
                  style={{
                    alignItems: "flex-end",
                    // justifyContent: "flex-end",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    // marginTop: -30,
                    // paddingBottom:39,
                    marginRight: 20,
                    // marginBottom:30
                  }}
                >
                  {muted ? (
                    <TouchableOpacity onPress={() => setMuted(false)}>
                      <Octicons name="unmute" size={28} color="white" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setMuted(true)}>
                      <Octicons name="mute" size={28} color="white" />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </Video>
          </View>
          {/* <Animated.Text style={{color:'white',fontWeight:'normal'}}>egshsgsegse</Animated.Text> */}

          <View style={{ paddingHorizontal: 10 }}>
            {/* {screen == 3 ? ( */}
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
            {/* ) 
            : (
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
            )} */}
          </View>

          {screen == 1 || screen === 29 || screen == 2 || screen == 0 ? null : (
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
