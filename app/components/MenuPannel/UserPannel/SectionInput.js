import { StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import InputTypeText from '../../All/InputTypeText'

const SectionInput = ({props}) => {
  return (
    <View style={appStyles.row}>
      <View style={{ width: "10%" }}></View>
      <InputTypeText props={props} />
      <View style={{ width: "10%" }}></View>
    </View>
  )
}

export default SectionInput

const styles = StyleSheet.create({})