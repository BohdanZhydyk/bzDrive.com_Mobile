import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'

const SectionInfo = ({props}) => {

  const {elements} = props

  return (
    <Text style={styles.info}>
      {elements?.info}
    </Text>
  )
}

export default SectionInfo

const styles = StyleSheet.create({
  info: {
    width:"80%",
    marginTop:10,
    marginBottom:10,
    marginLeft:"10%",
    marginRight:"10%",
    padding:10,
    borderWidth:1,
    borderColor:"#f60",
    borderStyle:"dashed",
    borderRadius:5,
    textIndent:25,
    textAlign: "justify",
    ...appStyles.txtWht
  }
})