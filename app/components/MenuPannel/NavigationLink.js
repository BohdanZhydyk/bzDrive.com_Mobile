import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import { Link } from 'expo-router'
import IconBtn from '../All/IconBtn'
import TxtColor from '../All/TxtColor'
import { appStyles } from '../../Styles'

const NavigationLink = ({props}) => {

  const { setIsMenu } = useAppState()

  const {navLink} = props

  const to = navLink?.to
  const name = navLink?.name
  const MENU_LINK_PRESS = ()=>setIsMenu(prev=>!prev)
  const txtColorProps = { txt:name, ...styles.propsStyles, styles:{padding:5} }

  const ACT_EMPTY = ()=> {}

  return (
    <Link href={to} onPress={MENU_LINK_PRESS} >

      <View style={styles.stretch}>

        <IconBtn props={{ ico: name, action:ACT_EMPTY }} />

        <TxtColor props={txtColorProps} />

      </View>

    </Link>
  )
}

export default NavigationLink

const styles = StyleSheet.create({
  stretch: {
    ...appStyles.row,
    ...appStyles.stretch,
    marginLeft:15,
    marginTop:15
  },
  propsStyles: {
    color:"txtWht",
    size:20
  }
})