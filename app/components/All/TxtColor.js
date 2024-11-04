import { Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'

const TxtColor = ({props}) => {

  const {txt, color, styles, size} = props

  function textColor(){
    switch (color) {
      case "txtWht":  return appStyles.txtWht
      case "txtBlc":  return appStyles.txtBlc
      case "txtGry":  return appStyles.txtGry
      case "txtOrg":  return appStyles.txtOrg
      case "txtGrn":  return appStyles.txtGrn
      case "txtBlu":  return appStyles.txtBlu
      case "txtRed":  return appStyles.txtRed
      case "txtYlw":  return appStyles.txtYlw
      default:        return appStyles.txtWht
    }
  }

  return (
    <Text style={{...textColor(), ...styles, fontSize:size}}>{txt}</Text>
  )
}

export default TxtColor