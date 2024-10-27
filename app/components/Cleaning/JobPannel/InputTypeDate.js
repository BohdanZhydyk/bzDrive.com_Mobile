import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { appStyles } from '../../../Styles'
import { dateFromYYYYMMDD } from '../../../AppFunctions'

const InputTypeDate = ({props}) => {

  const {st, legend, value, cb} = props

  const [showPicker, setShowPicker] = useState( false )

  function ON_CHG(selectedDate){
    const YYYY = String((selectedDate || dateValue).getFullYear()).padStart(4, '0')
    const MM = String((selectedDate || dateValue).getMonth() + 1).padStart(2, '0')
    const DD = String((selectedDate || dateValue).getDate()).padStart(2, '0')
    setShowPicker( false )
    cb( parseInt(`${YYYY}${MM}${DD}`) )
  }

  const date = dateFromYYYYMMDD( value )
  const dateTxt = `${date?.DD} / ${date?.MM} / ${date?.YYYY}`
  const dateValue = new Date(`${date.YYYY}-${date.MM}-${date.DD}`)

  return (
    <View style={st}>

      <Text style={styles.legend}>
        {legend}
      </Text>

      <Pressable onPress={() => setShowPicker(true)}>
        <Text style={styles.value}>
          {dateTxt}
        </Text>
      </Pressable>

      {
        showPicker &&
        <DateTimePicker
          value={dateValue}
          mode="date"
          display="default"
          onChange={ (event, selectedDate)=> ON_CHG(selectedDate) }
        />
      }

    </View>
  )
}

export default InputTypeDate

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
    height: 25,
    textAlign: 'center'
  }
})