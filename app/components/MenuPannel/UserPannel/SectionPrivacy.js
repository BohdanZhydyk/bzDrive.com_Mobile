import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { appStyles } from '../../../Styles'

const SectionPrivacy = ({props}) => {

  const {setIsMenu} = props

  const MENU_LINK_PRESS = ()=> setIsMenu(prev=>!prev)

  return (
    <Link style={styles.link} href={"/privacy"} onPress={MENU_LINK_PRESS} >
      <Text>{"Polityka prywatności"}</Text>
    </Link>
  )
}

export default SectionPrivacy

const styles = StyleSheet.create({
  link: {
    textAlign:"center",
    marginTop:10,
    ...appStyles.txtLightBlu
  }
})