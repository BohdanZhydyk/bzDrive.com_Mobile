import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import { appStyles } from '../../Styles'

const SiteLogo = () => {

  const { info } = useAppState()
  const link = info?.link
  const uri = info?.img

  return (
    <View>
    {
      info &&
      <View style={{...appStyles.row, ...appStyles.center}}>
        <Image source={{ uri }} style={{...appStyles.icoBtn, marginLeft:10, marginRight:10}} />
        <Text style={{...appStyles.txtOrg, ...styles.logoText}}>{link[0]}</Text>
        <Text style={{...appStyles.txtWht, ...styles.logoText}}>{link[1]}</Text>
        <Text style={{...appStyles.txtOrg, ...styles.logoText}}>{link[2]}</Text>
      </View>
    }
    </View>
  )
}

export default SiteLogo

const styles = StyleSheet.create({
  logoText: {
    fontSize:25,
    fontWeight: 'bold'
  }
})