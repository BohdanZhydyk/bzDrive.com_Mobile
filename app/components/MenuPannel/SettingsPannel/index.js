import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import StateStyled from '../../All/StateStyled'

const SettingsPannel = () => {
  return (
    <View>

      <View style={appStyles.center}>
        <Text style={{...appStyles.txtRed, marginTop:20}}>
          {`"SettingsPannel" zostanie rozbudowany w przyszłości.`}
        </Text>
      </View>

      <StateStyled />
      
    </View>
  )
}

export default SettingsPannel

const styles = StyleSheet.create({})