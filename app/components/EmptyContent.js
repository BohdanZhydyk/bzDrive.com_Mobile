import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../Styles'


const EmptyContent = () => {
  return (
    <View style={appStyles.center}>
    {
      ["40%","80%","80%","80%","80%","80%","80%","80%","80%"].map( (item, i)=>{
        return(
          <View style={{...appStyles.icoParagraphEmpty, width:item}} key={`EmptyLine${i}`} ></View>
        )
      })
    }
    </View>
  )
}

export default EmptyContent

const styles = StyleSheet.create({})