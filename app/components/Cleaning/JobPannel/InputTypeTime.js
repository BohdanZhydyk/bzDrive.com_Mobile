import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { appStyles } from '../../../Styles'
import { getDateFromTimeString } from '../../../AppFunctions'

const InputTypeTime = ({props}) => {

  const {st, legend, value, cb} = props

  const [showPicker, setShowPicker] = useState( false )

  function formatTime(date){
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }

  function ON_CHG(selectedTime){
    const currentTime = selectedTime || timeValue
    setShowPicker( false )
    cb( formatTime( currentTime ) )
  }

  const timeValue = getDateFromTimeString( value || "00:00" )
  const timeTxt = formatTime( timeValue )

  return (
    <View style={st}>

      <Text style={styles.legend}>
        {legend}
      </Text>

      <Pressable onPress={() => setShowPicker(true)}>
        <Text style={styles.value}>
          {timeTxt}
        </Text>
      </Pressable>

      {
        showPicker &&
        <DateTimePicker
          value={timeValue}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={ (event, selectedTime)=> ON_CHG(selectedTime) }
        />
      }

    </View>
  )
}

export default InputTypeTime

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