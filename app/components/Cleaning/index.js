import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { week } from './cleaningstate'
import JobPannel from './JobPannel'
import DayOfWeek from './DayOfWeek'
import IconBtn from '../IconBtn'
import { appStyles } from '../../Styles'


const Cleaning = () => {

  const [job, setJob] = useState(false)

  const totalPrice = week.reduce((sum, day) => {
    return sum + day.schedule.reduce((daySum, job) => {
      return daySum + parseFloat(job.price)
    }, 0)
  }, 0)
  
  return (
    <View style={styles.cleanContainer}>

      <View style={[appStyles.row, appStyles.between, {marginTop:10, marginBottom:10, alignItems:"center"}]}>

        <Pressable style={styles.closeBtn} onPress={()=>{alert("prev week")}}>
          <IconBtn ico={`left`} />
        </Pressable>

        <Text style={{...appStyles.txtYlw, fontSize:20, fontWeight:"bold"}}>{`${week[0]?.dayInfo?.date} - ${week[week?.length - 1]?.dayInfo?.date}`}</Text>

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

      <View style={{...appStyles.row, ...appStyles.end, margin:10}}>
        <Text style={{...appStyles.txtGrn, ...styles.sum}}>{`Przychód za tydzień:`}</Text>
        <Text style={{...appStyles.txtOrg, ...styles.sum}}>{totalPrice}</Text>
        <Text style={{...appStyles.txtOrg, ...styles.sum}}>{`zł`}</Text>
      </View>


    </View>
  )
}

export default Cleaning

const styles = StyleSheet.create({
  cleanContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  sum: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5
  }
})