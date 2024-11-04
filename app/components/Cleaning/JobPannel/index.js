import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../../Styles'
import { sanitizeTxt } from '../../../AppFunctions'
import InputTypeText from '../../All/InputTypeText'
import InputTextArea from '../../All/InputTextArea'
import SectionTop from './SectionTop'
import SectionDateTime from './SectionDateTime'
import SectionAddr from './SectionAddr'
import SectionNipTel from './SectionNipTel'
import SectionWwwEmail from './SectionWwwEmail'
import SectionPrice from './SectionPrice'
import SectionBtns from './SectionBtns'
import ContactImgs from './ContactImgs'


const JobPannel = ({props}) => {

  const {job, setJob, Reducer} = props

  const _id = job?._id ?? "new"
  const [date, setDate] = useState( job?.date )
  
  const [from, setFrom] = useState( job?.time?.from )
  const [to, setTo] = useState( job?.time?.to )

  const client = job?.client
  const [name, setName] = useState( client?.name )
  const [shortName, setShortName] = useState( client?.shortName )
  const [nip, setNIP] = useState( client?.nip )

  const addr = client?.addr
  const [zip, setZIP] = useState( addr?.zip )
  const [town, setTown] = useState( addr?.town )
  const [street, setStreet] = useState( addr?.street )
  const [nr, setNr] = useState( addr?.nr )

  const contacts = client?.contacts
  const [tel, setTel] = useState( contacts?.tel )
  const [www, setWWW] = useState( contacts?.www )
  const [email, setEmail] = useState( contacts?.email )

  const [tasks, setTasks] = useState( job?.tasks ?? "" )
  const [price, setPrice] = useState( job?.price ?? "0.00" )

  const [del, setDel] = useState( false )

  function SAVE_JOB(){
    const time = { from, to }
    const client = { name, shortName, nip, addr: {zip, town, street, nr}, contacts: {tel, www, email} }
    Reducer({ type:"SAVE_JOB", job: {_id, date, time, client, price, tasks} })
    setJob(prev=>false)
  }

  function DELETE_JOB(){
    Reducer({ type:"DELETE_JOB", _id })
    setJob(prev=>false)
  }

  return (
    <View style={styles.jobPannelWrapper}>

      <View style={styles.jobPannel}>

        <SectionTop props={{_id, setJob}} />

        <View style={styles.line}>
          <SectionDateTime props={{date, setDate, from, setFrom, to, setTo}} />
        </View>

        <View style={styles.line}>
          <InputTypeText
            props={{
              st:{ flex: 1 }, legend:`Krótka nazwa:`, cb:setShortName,
              value:sanitizeTxt(shortName, "CompanyNameShort")?.sanText
            }}
          />
        </View>

        <View style={styles.line}>
          <InputTypeText
            props={{
              st:{ flex: 1 }, legend:`Nazwa:`, cb:setName,
              value:sanitizeTxt(name, "CompanyName")?.sanText
            }}
          />
        </View>

        <View style={styles.line}>
          <SectionAddr props={{zip, setZIP, town, setTown, street, setStreet, nr, setNr}} />
        </View>

        <View style={styles.line}>
          <SectionNipTel props={{nip, setNIP, tel, setTel}} />
        </View>

        <View style={styles.line}>
          <SectionWwwEmail props={{www, setWWW, email, setEmail}} />
        </View>

        <View style={styles.line}>
          <InputTextArea
            props={{
              st:{ width:"100%" }, legend:`Zadania do wykonania:`, cb:setTasks, rows:4,
              value:sanitizeTxt(tasks, "default")?.sanText
            }}
          />
        </View>

        <View style={styles.line}>

          <SectionPrice props={{price, setPrice}} />

          <SectionBtns props={{_id, del, setDel, SAVE_JOB, DELETE_JOB}} />

        </View>

        <ContactImgs props={{zip, town, street, nr, www, email, tel}} />

      </View>

    </View>
  )
}

export default JobPannel

const styles = StyleSheet.create({
  jobPannelWrapper:{
    position: "absolute",
    width: "100%",
    backgroundColor: "#222",
    zIndex: 25
  },
  jobPannel: {
    width: "98%",
    margin: 5,
    paddingLeft: "3%",
    paddingRight: "3%",
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#f609",
  },
  line: {
    ...appStyles.row,
    width: "100%",
    marginTop: 10
  }
})