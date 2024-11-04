import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'

const SectionBtns = ({props}) => {

  const {elements} = props

  const ACT_MAIN_BTN = ()=> alert(elements?.largeBtn?.txt)

  return (
    <>

      <View style={appStyles.row}>
        <View style={{width:"10%"}}></View>
        <Pressable style={styles.btnLarge} onPress={ACT_MAIN_BTN}>
          <Text style={appStyles.txtWht}>{elements?.largeBtn?.txt}</Text>
        </Pressable>
        <View style={{width:"10%"}}></View>
      </View>

      <View style={appStyles.row}>
        <View style={{width:"10%"}}></View>
        <View style={styles.btnSmallLine}>
        {
          elements?.smallBtns && elements.smallBtns.map( (btn, b)=>{
            return(
              <Pressable style={styles.btnSmall} onPress={btn?.act} key={`SmallBtn${btn?.txt}${b}`}>
                <Text style={appStyles.txtWht}>{btn?.txt}</Text>
              </Pressable>
            )
          })
        }
        </View>
        <View style={{width:"10%"}}></View>
      </View>

    </>
  )
}

export default SectionBtns

const styles = StyleSheet.create({
  btnLarge: {
    height:40,
    flex:1,
    marginTop:15,
    borderWidth:1,
    borderColor:"#191",
    borderRadius:10,
    ...appStyles.center
  },
  btnSmallLine: {
    flex:1,
    marginTop:15,
    ...appStyles.row,
    ...appStyles.between
  },
  btnSmall: {
    height:40,
    width:"49%",
    borderWidth:1,
    borderColor:"#191",
    borderRadius:10,
    ...appStyles.center
  }
})