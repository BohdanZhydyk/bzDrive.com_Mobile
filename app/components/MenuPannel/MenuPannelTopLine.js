import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import IconBtn from '../All/IconBtn'
import { appStyles } from '../../Styles'

const MenuPannelTopLine = ({props}) => {

  const {isMenuPannel, setPannelMode} = props

  const { setIsMenu } = useAppState()

  const ACT_SETTINGS =  ()=> setPannelMode(prev=>"settings")
  const ACT_USER =      ()=> setPannelMode(prev=>"user")
  const ACT_MENU_FOLD = ()=> {
    setPannelMode(prev=>"menu")
    isMenuPannel && setIsMenu(prev=>!prev)
  }

  return (
    <View style={styles.topLine}>

      <Text style={{...appStyles.txtWht, marginLeft:10, fontSize:30}}>{"MENU"}</Text>

      <View style={{...appStyles.row}}>

        <IconBtn props={{ ico:"settings", action:ACT_SETTINGS }} />

        <IconBtn props={{ ico:"user", action:ACT_USER }} />

        <IconBtn props={{ ico:"menuFold", action:ACT_MENU_FOLD }} />

      </View>

    </View>
  )
}

export default MenuPannelTopLine

const styles = StyleSheet.create({
  topLine: {
    ...appStyles.row,
    ...appStyles.between,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderBottomStyle: 'solid',
    paddingTop:10,
    paddingBottom:10
  }
})