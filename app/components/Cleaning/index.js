import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import JobPannel from './JobPannel'
import DayOfWeek from './DayOfWeek'
import { appStyles } from '../../Styles'
import { dateFromYYYYMMDD } from '../../AppFunctions'
import { cleaningReducer } from './cleaningReducer'
import CleaningTopPannel from './CleaningTopPannel'
import SearchDocPannel from './SearchDocPannel'
import DownloadBar from '../All/DownloadBar'


const Cleaning = () => {

  const [week, setWeek] = useState(false)
  const [job, setJob] = useState(false)
  const [search, setSearch] = useState( false )
  const [searchObj, setSearchObj] = useState( false )

  const [download, setDownload] = useState(false)

  function Reducer(action){ cleaningReducer({action, setWeek, job, setSearch, setSearchObj, setDownload})}

  const totalPrice = !week ? "0.00" : week.reduce((sum, day) => {
    return sum + day.schedule.reduce((daySum, job) => {
      return daySum + parseFloat(job.price)
    }, 0)
  }, 0)

  const nowDate = `${dateFromYYYYMMDD()?.YYYY}${dateFromYYYYMMDD()?.MM}${dateFromYYYYMMDD()?.DD}`
  const dayOfWeek =  week ? week[0]?.dayInfo?.date : nowDate

  useEffect( ()=> { !week && Reducer({type:"GET_JOBS", dayOfWeek}) }, [])
  
  return (
    <View style={styles.cleanContainer}>
    {
      week &&
      <>

        <View style={{...appStyles.start, height:5}}>
          { download && <DownloadBar /> }
        </View>

        <CleaningTopPannel props={{week, search, setJob, setSearch, setSearchObj, Reducer}}/>

        { searchObj && <SearchDocPannel props={{searchObj, setJob}} /> }

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
    marginTop: 0,
    marginBottom: 10
  },
  sum: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5
  }
})