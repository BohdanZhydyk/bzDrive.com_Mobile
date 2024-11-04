import React, { useEffect, useRef } from "react"
import { View, Animated } from "react-native"
import Svg, { Path } from "react-native-svg"

const SiteIcon = () => {

  const speed = 4
  const rotation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const rotate = () => {
      rotation.setValue(0)
      Animated.timing(rotation, {
        toValue: 1,
        duration: speed * 1000,
        useNativeDriver: true,
      }).start(() => rotate())
    };
    rotate();
  }, [rotation, speed])

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  })

  return (
    <View style={{ position: "relative" }}>
      <Svg viewBox="0 0 40 40" style={{ position: 'absolute', left: '0%', bottom: '0%', width: '39%' }}>
        <circle cx="180" cy="180" r="108" fill="#0000" stroke="#aaa" strokeWidth="10" />
        <polyline strokeLinecap="round" fill="none" stroke="#aaa" strokeWidth="10" points="197.5, 18 197.5, 88 126.5, 141" />
        <line strokeLinecap="round" fill="none" stroke="#aaa" strokeWidth="10" x1="125.5" y1="117" x2="125.5" y2="242" />
        <line strokeLinecap="round" fill="none" stroke="#aaa" strokeWidth="10" x1="18" y1="179.5" x2="124" y2="179.5" />
        <polyline strokeLinecap="round" fill="none" stroke="#aaa" strokeWidth="10" points="127, 216.5 197, 269.5 197, 340" />
        <path fill="#aaa" stroke="#000" strokeWidth="0" d="M159, 96 L180, 124 L147, 127 L159, 96z" />
      </Svg>
{/* 
      <Animated.View style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "66%",
        height: "66%",
        transform: [{ rotate: rotateInterpolate }],
      }}>
        <Svg viewBox="0 0 16 16" fill="#f60">
          <Path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
        </Svg>
      </Animated.View> */}
      
    </View>
  )
}

export default SiteIcon
