import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../Styles'
import { TextInput } from 'react-native-web'

const InputTextArea = ({props}) => {

  const {st, legend, value, kbType, rows, cb} = props

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
        multiline={true}
        rows={rows ?? 4}
        autoCorrect={false}
        autoCompleteType="off"
      />

    </View>
  )
}

export default InputTextArea

const styles = StyleSheet.create({
  legend: {
    ...appStyles.txtOrg,
    fontSize: 10,
    marginTop: 5
  },
  value: {
    height: 100,
    verticalAlign: "top",
    color: "#fff",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
  }
})