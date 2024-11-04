import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useAppState } from '../../StateContext'
import MenuPannelTopLine from './MenuPannelTopLine'
import NavigationLink from './NavigationLink'
import SettingsPannel from './SettingsPannel'
import UserPannel from './UserPannel'


const MenuPannel = () => {

  const { isMenu, nav } = useAppState()

  const [pannelMode, setPannelMode] = useState("menu")

  const isSettingsPannel = (pannelMode === "settings")
  const isUserPannel = (pannelMode === "user")
  const isMenuPannel = (pannelMode === "menu")

  return (
    <View style={ isMenu ? styles.pannel : styles.none }>

      <MenuPannelTopLine props={{isMenuPannel, setPannelMode}} />

      {
        (isMenu && nav && isMenuPannel) && [...nav, {name:"Cleaning", to:"/cleaning"}]?.map( (navLink, n)=>{
          return(
            <NavigationLink props={{navLink}} key={`MenuLinkBtn${n}`} />
          )
        })
      }

      { (isMenu && isSettingsPannel) && <SettingsPannel /> }

      { (isMenu && isUserPannel) && <UserPannel /> }

    </View>
  )
}

export default MenuPannel

const styles = StyleSheet.create({
  none: { display: "none" },
  pannel: {
    position: "absolute",
    width:"100%",
    minHeight:"100%",
    top: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: '#111',
  }
})
