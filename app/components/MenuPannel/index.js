import { StyleSheet, Pressable, View, Text } from 'react-native'
import React from 'react'
import { useAppState } from '../../StateContext'
import TxtColor from '../TxtColor'
import IconBtn from '../IconBtn'
import { Link } from 'expo-router'
import { appStyles } from '../../Styles'
import StateStyled from '../StateStyled'


const MenuPannel = () => {

  const { isMenu, setIsMenu, nav } = useAppState()

  return (
    <View style={ isMenu ? styles.pannel : styles.none }>

      <View style={styles.topLine}>

        <Text style={{...appStyles.txtWht, marginLeft:10, fontSize:30}}>{"MENU"}</Text>

        <View style={{...appStyles.row}}>

          <Pressable onPress={()=>{alert(`"SettingsPannel" zostanie rozbudowany w przyszłości.`)}} >
            <IconBtn ico="settings" />
          </Pressable>

          <Pressable onPress={()=>{alert(`"UserPanel" zostanie rozbudowany w przyszłości.`)}} >
            <IconBtn ico="user" />
          </Pressable>

          <Pressable onPress={()=>setIsMenu(prev=>!prev)} >
            <IconBtn ico="menuFold" />
          </Pressable>

        </View>

      </View>

      {
        (isMenu && nav) && nav?.map( (navLink, n)=>{

          const to = navLink?.to
          const name = navLink?.name
          const MENU_LINK_PRESS = ()=>setIsMenu(prev=>!prev)
          const key = `MenuLinkBtn${n}`
          const txtColorProps = {txt:name, color:"txtWht"}

          return(
            <Link style={styles.menuLink} href={to} onPress={MENU_LINK_PRESS} key={key}>
              <View style={{marginLeft:10}} >
                <IconBtn ico={name} />
              </View>
              <View style={{marginLeft:15, fontSize:20}} >
                <TxtColor props={txtColorProps} />
              </View>
            </Link>
          )
        })
      }

      {
        isMenu &&
        <Link style={styles.menuLink} href={`/cleaning`} onPress={()=>setIsMenu(prev=>!prev)} key={`MenuLinkBtnClean`}>
          <View style={{marginLeft:10}} >
            <IconBtn ico={`Cleaning`} />
          </View>
          <View style={{marginLeft:15, fontSize:20}} >
            <TxtColor props={{txt:`Cleaning`, color:"txtWht"}} />
          </View>
        </Link>
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
  },
  topLine: {
    ...appStyles.row,
    ...appStyles.between,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderBottomStyle: 'solid',
    paddingTop:10,
    paddingBottom:10
  },
  menuLink: {
    ...appStyles.row,
    marginTop:5
  }
})
