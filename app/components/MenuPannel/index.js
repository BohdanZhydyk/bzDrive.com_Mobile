import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import StateStyled from '../StateStyled'
import MenuPannelTopLine from './MenuPannelTopLine'
import NavigationLink from './NavigationLink'


const MenuPannel = () => {

  const { isMenu, nav } = useAppState()

  return (
    <View style={ isMenu ? styles.pannel : styles.none }>

      <MenuPannelTopLine />

      {
        (isMenu && nav) && [...nav, {name:"Cleaning", to:"/cleaning"}]?.map( (navLink, n)=>{
          return(
            <NavigationLink props={{navLink}} key={`MenuLinkBtn${n}`} />
          )
        })
      }

      <StateStyled />

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
