import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../../Styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import { dateFromYYYYMMDD, getMonthName } from '../../../AppFunctions'
import IconBtn from '../../All/IconBtn'

const DateTitle = ({props}) => {

  const {week, Reducer} = props

  const [showPicker, setShowPicker] = useState( false )

  const from = week ? dateFromYYYYMMDD( week[0]?.dayInfo?.date ) : nowDate
  const to = week ? dateFromYYYYMMDD( week[week?.length - 1]?.dayInfo?.date ) : nowDate

  const getNewDate = (date)=> {
    const newDay = {
      YYYY: String(date.getFullYear()).padStart(4, '0'),
      MM: String(date.getMonth() + 1).padStart(2, '0'),
      DD: String(date.getDate()).padStart(2, '0')
    }
    return parseInt(`${newDay.YYYY}${newDay.MM}${newDay.DD}`)
  }

  const SHOW_WEEK = (daysOffset) => {
    const baseDate = (daysOffset < 0) ? new Date(from.YYYY, from.MM - 1, from.DD) : new Date(to.YYYY, to.MM - 1, to.DD)
    baseDate.setDate(baseDate.getDate() + daysOffset)
    Reducer({ type: "GET_JOBS", dayOfWeek: getNewDate(baseDate) })
  }

  return (
    <>

      <IconBtn props={{ ico: "left", action:()=>SHOW_WEEK(-7) }} />

      <Pressable style={{flex:1, alignItems:"center"}} onPress={() => setShowPicker( true )}>
        <Text style={{...appStyles.txtYlw, fontSize:20, fontWeight:"bold"}}>
          {`${from.DD} ${getMonthName(from.MM)} - ${to.DD} ${getMonthName(to.MM)} ${to.YYYY}`}
        </Text>
      </Pressable>

      <IconBtn props={{ ico: "right", action:()=>SHOW_WEEK(7) }} />

      {
        showPicker && (
          <DateTimePicker
            value={new Date(`${from.YYYY}-${from.MM}-${from.DD}`)}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowPicker( false )
              const currentDate = selectedDate || new Date(`${from.YYYY}-${from.MM}-${from.DD}`)
              Reducer({type:"GET_JOBS", dayOfWeek:getNewDate(currentDate) })
            }}
          />
        )
      }

    </>
  )
}

export default DateTitle

const styles = StyleSheet.create({})