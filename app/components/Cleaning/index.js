import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import JobPannel from './JobPannel'
import DayOfWeek from './DayOfWeek'
import IconBtn from '../IconBtn'
import DateTimePicker from '@react-native-community/datetimepicker'
import { appStyles } from '../../Styles'
import { dateFromYYYYMMDD } from '../../AppFunctions'
import { cleaningReducer } from './cleaningReducer'


const Cleaning = () => {

  const [week, setWeek] = useState(false)
  const [job, setJob] = useState(false)

  function Reducer(action){ cleaningReducer({action, week, setWeek, job, setJob}) }

  const totalPrice = !week ? "0.00" : week.reduce((sum, day) => {
    return sum + day.schedule.reduce((daySum, job) => {
      return daySum + parseFloat(job.price)
    }, 0)
  }, 0)

  const nowDate = `${dateFromYYYYMMDD()?.YYYY}${dateFromYYYYMMDD()?.MM}${dateFromYYYYMMDD()?.DD}`
  const dayOfWeek =  week ? week[0]?.dayInfo?.date : nowDate

  const from = week ? dateFromYYYYMMDD( week[0]?.dayInfo?.date ) : nowDate
  const to = week ? dateFromYYYYMMDD( week[week?.length - 1]?.dayInfo?.date ) : nowDate

  const [showPicker, setShowPicker] = useState({ mainDate: false })
  const showPickerFor = (type) => { setShowPicker({ ...showPicker, [type]: true }) }

  useEffect( ()=> { Reducer({type:"GET_JOBS", dayOfWeek}) }, [])
  
  return (
    <View style={styles.cleanContainer}>
    {
      week &&
      <>

        <View style={[appStyles.row, appStyles.between, {marginTop:10, marginBottom:10, alignItems:"center"}]}>

          <View style={{...appStyles.row, ...appStyles.end, width:"10%", margin:5}}>
            <Pressable onPress={()=>setJob(prev=>true)}>
              <IconBtn ico={`plus`} />
            </Pressable>
          </View>

          <View style={{...appStyles.row, ...appStyles.center,  flex: 1 }}>
            <Pressable onPress={() => showPickerFor('mainDate')}>
              <Text style={{...appStyles.txtYlw, fontSize:20, fontWeight:"bold"}}>
                {`${from.DD}/${from.MM}/${from.YYYY} - ${to.DD}/${to.MM}/${to.YYYY}`}
              </Text>
            </Pressable>
            {
              showPicker.mainDate && (
                <DateTimePicker
                  value={new Date(`${from.YYYY}-${from.MM}-${from.DD}`)}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || new Date(`${from.YYYY}-${from.MM}-${from.DD}`)
                    setShowPicker({ ...showPicker, mainDate: false })
                    const newDay = {
                      YYYY: String(currentDate.getFullYear()).padStart(4, '0'),
                      MM: String(currentDate.getMonth() + 1).padStart(2, '0'),
                      DD: String(currentDate.getDate()).padStart(2, '0')
                    }
                    Reducer({type:"GET_JOBS", dayOfWeek:parseInt(`${newDay.YYYY}${newDay.MM}${newDay.DD}`) })
                  }}
                />
              )
            }
          </View>

        </View>

        {
          week && week.map( (day, d)=> (
            <DayOfWeek props={{day, d, setJob}} key={`DayOfWeek${d}${day?.dayInfo?.name}${day?.dayInfo?.date}`} />
          ))
        }

        { job && <JobPannel props={{job, setJob, Reducer}}/> }

        <View style={{...appStyles.row, ...appStyles.end, margin:5}}>
          <Text style={{...appStyles.txtGrn, ...styles.sum}}>{`Przychód za tydzień:`}</Text>
          <Text style={{...appStyles.txtOrg, ...styles.sum}}>{totalPrice}</Text>
          <Text style={{...appStyles.txtOrg, ...styles.sum}}>{`zł`}</Text>
        </View>

      </>
    }
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