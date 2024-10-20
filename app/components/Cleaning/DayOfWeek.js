import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'
import JobElement from './JobElement'
import { dateFromYYYYMMDD } from '../../AppFunctions'


const DayOfWeek = ({props}) => {

  const {day, d, setJob} = props

  const dayName = day?.dayInfo?.name
  const date = day?.dayInfo?.date
  const shortDate = `${dateFromYYYYMMDD(date).DD}.${dateFromYYYYMMDD(date).MM}`

  return (
    <View style={styles.dayOfWeek} >

      <View style={styles.dayInfo} >
        <Text style={appStyles.txtYlw}>{dayName}</Text>
        <Text style={appStyles.txtGrn}>{shortDate}</Text>
      </View>

      <View style={styles.schedule}>
        {
          day?.schedule.map( (job, j)=> (
            <JobElement props={{job, setJob}} key={`Job${d}${j}${job?.id}`} />
          ))
        }
      </View>

    </View>
  )
}

export default DayOfWeek

const styles = StyleSheet.create({
  dayOfWeek: {
    ...appStyles.row,
    minHeight:85,
    padding: 5
  },
  dayInfo: {
    justifyContent:"center",
    alignItems:"center",
    padding: 5,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5
  },
  schedule: {
    ...appStyles.row,
    ...appStyles.txtWht,
    flex: 1
  }
})