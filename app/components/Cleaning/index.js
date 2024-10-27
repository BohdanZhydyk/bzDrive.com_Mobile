import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import JobPannel from './JobPannel'
import DayOfWeek from './DayOfWeek'
import IconBtn from '../IconBtn'
import DateTimePicker from '@react-native-community/datetimepicker'
import { appStyles } from '../../Styles'
import { dateFromYYYYMMDD } from '../../AppFunctions'
import { cleaningReducer } from './cleaningReducer'
import { TextInput } from 'react-native-web'


const Cleaning = () => {

  const [week, setWeek] = useState(false)
  const [job, setJob] = useState(false)
  const [search, setSearch] = useState( false )
  const [searchObj, setSearchObj] = useState( false )

  const searchTopLine = {client:{shortName:"Klient", nip:"NIP", contacts:{tel:"Tel"}}}

  function Reducer(action){ cleaningReducer({action, week, setWeek, job, setJob, search, setSearch, searchObj, setSearchObj}) }

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

  useEffect( ()=> { !week && Reducer({type:"GET_JOBS", dayOfWeek}) }, [])
  
  return (
    <View style={styles.cleanContainer}>
    {
      week &&
      <>

        <View style={[appStyles.row, appStyles.between, {marginTop:5, marginBottom:5, alignItems:"center"}]}>

          <View style={{...appStyles.row, width:"10%", margin:5}}>
            <Pressable onPress={()=>setJob(prev=>true)}>
              <IconBtn ico={`plus`} />
            </Pressable>
          </View>

          <View style={{...appStyles.row, ...appStyles.center,  flex: 1 }}>
          {
            !search
            ?
            <>
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
            </>
            :
            <View style={{flex:1, borderWidth:1, borderColor:"#999", borderRadius:5}}>
              <TextInput
                style={{...appStyles.txtWht, padding:5}}
                value={search?.length > 0 ? search : ""}
                onChangeText={setSearch}
              />
            </View>
          }

          </View>

          {
            (search?.length > 2) &&
            <View style={{...appStyles.row, width:"10%", margin:5}}>
              <Pressable onPress={()=>Reducer({type:"SEARCH_DOCS", search})}>
                <IconBtn ico={`search`} />
              </Pressable>
            </View>
          }

          <View style={{...appStyles.row, width:"10%", margin:5}}>
            <Pressable onPress={()=>{setSearch(prev=>!search); setSearchObj(prev=>false)}}>
              <IconBtn ico={!search ? `doc` : `close`} />
            </Pressable>
          </View>

        </View>

        {
          searchObj &&
          <View>
          {
            [searchTopLine, ...searchObj].map( (searchLine, l)=>{

              const key = `SearchLine${l}`

              const elStyles = (l === 0)
                ? {...appStyles.txtYlw, margin:1, padding:2, borderWidth:1, borderColor:"#999", borderRadius:2}
                : {...appStyles.txtWht, margin:1, padding:2, borderWidth:1, borderColor:"#999", borderRadius:2}

              return(
                <Pressable style={{...appStyles.row}} onPress={()=> (l !== 0) && setJob(prev=>searchLine)} key={key} >
                  <Text style={{...elStyles, width:"20%"}}>{searchLine?.client?.shortName ?? searchLine?.client?.name}</Text>
                  <Text style={{...elStyles, width:"25%"}}>{searchLine?.client?.nip}</Text>
                  <Text style={{...elStyles, width:"25%"}}>{searchLine?.client?.contacts?.tel}</Text>
                </Pressable>
              )
            })
          }
          </View>
        }

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