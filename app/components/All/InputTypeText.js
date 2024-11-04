import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'

const InputTypeText = ({props}) => {

  const {st, legend, value, kbType, isPassword, cb} = props

  return (
    <View style={st?.main ?? styles.main}>

      <Text style={st?.legend ?? styles.legend}>
        {legend}
      </Text>

      <TextInput
        style={st?.value ?? styles.value}
        value={value}
        onChangeText={cb}
        inputMode={kbType ? kbType : "text"}
        secureTextEntry={isPassword ?? false}
      />

    </View>
  )
}

export default InputTypeText

const styles = StyleSheet.create({
  main: {
    flex:1
  },
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

// "text"     – tekst (odpowiednik default)
// "numeric"  – numeryczna (odpowiednik numeric)
// "email"    – zoptymalizowana do wpisywania adresów e-mail (odpowiednik email-address)
// "tel"      – zoptymalizowana do wpisywania numerów telefonów (odpowiednik phone-pad)
// "decimal"  – numeryczna z możliwością wpisania kropki dziesiętnej (odpowiednik decimal-pad)
// "url"      – zoptymalizowana do wpisywania adresów URL (odpowiednik url)
// "search"   – zoptymalizowana do wyszukiwania internetowego (odpowiednik web-search)