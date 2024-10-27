import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'

const InputTypeText = ({props}) => {

  const {st, legend, value, kbType, cb} = props

  return (
    <View style={st}>

      <Text style={styles.legend}>
        {legend}
      </Text>

      <TextInput
        style={styles.value}
        value={value}
        onChangeText={cb}
        keyboardType={kbType ?? "default"}
      />

    </View>
  )
}

export default InputTypeText

const styles = StyleSheet.create({
  legend: {
    ...appStyles.txtOrg,
    fontSize: 10,
    marginTop: 5
  },
  value: {
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius: 5,
    height: 25
  }
})