import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { useAppState } from '../StateContext'
import { appStyles } from '../Styles'

const StateStyled = () => {

  const { bzToken, info, nav, user, error } = useAppState()

  return (
    <View style={{paddingTop:20, paddingBottom:20}}>

      <Text style={appStyles.txtRed}>{`STATE:`}</Text>

      <View style={styles.objStyle}>
        <Text style={appStyles.txtYlw}>{`bzToken:`}</Text>
        <Text style={appStyles.txtWht}>{JSON.stringify(bzToken)}</Text>
      </View>

      <View style={styles.objStyle}>
        <Text style={appStyles.txtYlw}>{`info:`}</Text>
        <Text style={appStyles.txtWht}>{JSON.stringify(info)}</Text>
      </View>

      <View style={styles.objStyle}>
        <Text style={appStyles.txtYlw}>{`nav:`}</Text>
        <Text style={appStyles.txtWht}>{JSON.stringify(nav)}</Text>
      </View>

      <View style={styles.objStyle}>
        <Text style={appStyles.txtYlw}>{`user:`}</Text>
        <Text style={appStyles.txtWht}>{JSON.stringify(user)}</Text>
      </View>

      {
        error &&
        <View style={styles.objStyle}>
          <Text style={appStyles.txtYlw}>{`Error:`}</Text>
          <Text style={appStyles.txtWht}>{JSON.stringify(error)}</Text>
        </View>
      }

      <Text style={appStyles.txtRed}>{`STATE:`}</Text>

    </View>
  )
}

export default StateStyled

const styles = StyleSheet.create({
  objStyle:{
    paddingTop:5,
    paddingBottom:5
  }
})
