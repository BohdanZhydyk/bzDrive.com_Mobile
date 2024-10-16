import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { week } from './cleaningstate'
import JobPannel from './JobPannel'
import DayOfWeek from './DayOfWeek'
import IconBtn from '../IconBtn'
import { appStyles } from '../../Styles'


const Cleaning = () => {

  const [job, setJob] = useState(false)
  
  return (
    <View style={styles.cleanContainer}>

      <View style={[appStyles.row, appStyles.between, {marginTop:10, marginBottom:10}]}>

        <Pressable style={styles.closeBtn} onPress={()=>{alert("prev week")}}>
          <IconBtn ico={`left`} />
        </Pressable>

        <Text style={appStyles.txtGrn}>{`${week[0]?.dayInfo?.date} - ${week[week?.length - 1]?.dayInfo?.date}`}</Text>

        <Pressable style={styles.closeBtn} onPress={()=>{alert("next week")}}>
          <IconBtn ico={`right`} />
        </Pressable>

      </View>

      {
        week.map( (day, d)=> (
          <DayOfWeek props={{day, d, setJob}} key={`DayOfWeek${d}${day?.dayInfo?.name}${day?.dayInfo?.date}`} />
        ))
      }

      { job && <JobPannel props={{job, setJob}}/> }

    </View>
  )
}

export default Cleaning

const styles = StyleSheet.create({
  cleanContainer: {
    marginTop: 10,
    marginBottom: 10
  }
})