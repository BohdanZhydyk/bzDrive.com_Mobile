import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import IconBtn from '../../All/IconBtn'

const LogOutBtn = () => {
  
  const ACT_LOGOUT = ()=> alert("Wylogowac sie?")

  return (
    <Pressable style={styles.logOut} onPress={ACT_LOGOUT}>
      <Text style={{...appStyles.txtRed, marginLeft:10}}>{`Wyloguj się`}</Text>
      <IconBtn props={{ ico:"logOut", action:()=>{} }} />
    </Pressable>
  )
}

export default LogOutBtn

const styles = StyleSheet.create({
  logOut: {
    position:"absolute",
    bottom: 15,
    right: 15,
    width:"40%",
    backgroundColor:"#f002",
    borderWidth:1,
    borderColor:"#f00",
    borderRadius:5,
    ...appStyles.row,
    ...appStyles.center,
    ...appStyles.between
  }})