import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const DownloadBar = () => {

  const [bar, setBar] = useState(0)

  useEffect( ()=>{
    let barInt
    barInt = setInterval( () => { setBar( (prev) => prev + (100 - prev)/200 ) }, 5 )
    return () => clearInterval(barInt)
  }, [bar])

  return (
    <View style={{...styles.bar, width:`${bar}%`}}></View>
  )
}

export default DownloadBar

const styles = StyleSheet.create({
  bar: {
    height:5,
    backgroundColor:"#191"
  }
})