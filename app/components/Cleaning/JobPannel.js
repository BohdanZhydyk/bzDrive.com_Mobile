import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../Styles'
import IconBtn from '../IconBtn'
import ContactImgs from './ContactImgs'
import { dateFromYYYYMMDD, getDateFromTimeString, getTimeStringFromDate, sanitizeTxt } from '../../AppFunctions'
import DateTimePicker from '@react-native-community/datetimepicker'


const JobPannel = ({props}) => {

  const {job, setJob, Reducer} = props

  const _id = job?._id ?? "new"
  const [date, setDate] = useState( dateFromYYYYMMDD( job?.date ) )
  
  const [from, setFrom] = useState(getDateFromTimeString(job?.time?.from || "00:00"))
  const [to, setTo] = useState(getDateFromTimeString(job?.time?.to || "00:00"))

  const client = job?.client
  const [name, setName] = useState(client?.name)
  const [shortName, setShortName] = useState(client?.shortName)
  const [nip, setNIP] = useState(client?.nip)

  const addr = client?.addr
  const [zip, setZIP] = useState(addr?.zip)
  const [town, setTown] = useState(addr?.town)
  const [street, setStreet] = useState(addr?.street)
  const [nr, setNr] = useState(addr?.nr)

  const contacts = client?.contacts
  const [tel, setTel] = useState(contacts?.tel)
  const [www, setWWW] = useState(contacts?.www)
  const [email, setEmail] = useState(contacts?.email)

  const [tasks, setTasks] = useState(job?.tasks ?? "")
  const [price, setPrice] = useState(job?.price ?? "0.00")

  const [del, setDel] = useState(false)
  
  const [showPicker, setShowPicker] = useState({ from: false, to: false, date: false })

  const handleTimeChange = (type, event, selectedTime) => {
    const currentTime = selectedTime || (type === 'from' ? from : to)
    setShowPicker({ ...showPicker, [type]: false })
    if (type === 'from') { setFrom(currentTime) }
    else { setTo(currentTime) }
  }

  const showPickerFor = (type) => { setShowPicker({ ...showPicker, [type]: true }) }

  const formatTime = (date) => (`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`)

  const formattedFrom = formatTime(from)
  const formattedTo = formatTime(to)

  function SAVE_JOB(){
    Reducer({
      type:"SAVE_JOB",
      job: {
        _id,
        date: parseInt( `${date?.YYYY}${date?.MM}${date?.DD}` ),
        time: { from:getTimeStringFromDate(from), to:getTimeStringFromDate(to) },
        client: { name, shortName, nip, addr: {zip, town, street, nr}, contacts: {tel, www, email} },
        price, tasks
      }
    })
    setJob(prev=>false)
  }

  function DELETE_JOB(){
    Reducer({ type:"DELETE_JOB", _id })
    setJob(prev=>false)
  }

  return (
    <View style={styles.jobPannel}>

      <View style={{...appStyles.row, ...styles.btnsPannel}}>

        <Pressable onPress={()=>setJob(prev=>false)}>
          <IconBtn ico={`close`} />
        </Pressable>

      </View>

      <Text style={{...appStyles.txtGry, fontSize:10}}>{`ID: ${_id}`}</Text>

      <View style={styles.line}>
        <View style={{ flex: 1 }}>
          <Text style={styles.txtName}>{`Data:`}</Text>
          <Pressable onPress={() => showPickerFor('date')}>
            <Text style={{ ...styles.inputTxt, textAlign: 'center' }}>
              {`${date.DD} / ${date.MM} / ${date.YYYY}`}
            </Text>
          </Pressable>
          {
            showPicker.date && (
              <DateTimePicker
                value={new Date(`${date.YYYY}-${date.MM}-${date.DD}`)}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || new Date(`${date.YYYY}-${date.MM}-${date.DD}`)
                  setShowPicker({ ...showPicker, date: false })
                  setDate({
                    YYYY: String(currentDate.getFullYear()).padStart(4, '0'),
                    MM: String(currentDate.getMonth() + 1).padStart(2, '0'),
                    DD: String(currentDate.getDate()).padStart(2, '0')
                  })
                }}
              />
            )
          }
        </View>
        <View style={{ width: "25%", marginLeft: 3 }}>
          <Text style={styles.txtName}>{`Od:`}</Text>
          <Pressable onPress={() => showPickerFor('from')}>
            <Text style={{...styles.inputTxt, textAlign: 'center'}}>{formattedFrom}</Text>
          </Pressable>
          {
            showPicker.from &&
            <DateTimePicker
              value={from}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={(event, selectedTime) => handleTimeChange('from', event, selectedTime)}
            />
          }
        </View>
        <View style={{ width: "25%", marginLeft: 3 }}>
          <Text style={styles.txtName}>{`Do:`}</Text>
          <Pressable onPress={() => showPickerFor('to')}>
            <Text style={{...styles.inputTxt, textAlign: 'center'}}>{formattedTo}</Text>
          </Pressable>
          {
            showPicker.to &&
            <DateTimePicker
              value={to}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={(event, selectedTime) => handleTimeChange('to', event, selectedTime)}
            />
          }
        </View>
      </View>

      <View style={styles.line}>
        <View style={{ flex: 1 }}>
          <Text style={styles.txtName}>{`Krótka nazwa:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(shortName, "CompanyNameShort")?.sanText}
            onChangeText={setShortName}
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{flex: 1}}>
          <Text style={styles.txtName}>{`Nazwa:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(name, "CompanyName")?.sanText}
            onChangeText={setName}
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{flex: 1}}>
          <Text style={styles.txtName}>{`NIP:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(nip, "NIP")?.sanText}
            onChangeText={setNIP}
            keyboardType="numeric"
          />
        </View>
        <View style={{width:"50%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Tel:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(tel, "tel")?.sanText}
            onChangeText={setTel}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{flex: 1}}>
          <Text style={styles.txtName}>{`WWW:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(www, "www")?.sanText}
            onChangeText={setWWW}
            keyboardType="url"
          />
        </View>
        <View style={{width:"50%", marginLeft:3}}>
          <Text style={styles.txtName}>{`E-mail:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(email, "email")?.sanText}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{width:"18%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Kod:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(zip, "ZIP")?.sanText}
            onChangeText={setZIP}
            keyboardType="numeric"
          />
        </View>
        <View style={{width:"25%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Miejscowość:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(town, "town")?.sanText}
            onChangeText={setTown}
          />
        </View>
        <View style={{flex: 1, marginLeft:3}}>
          <Text style={styles.txtName}>{`Ulica:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(street, "StreetName")?.sanText}
            onChangeText={setStreet}
          />
        </View>
        <View style={{width:"15%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Nr:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={sanitizeTxt(nr, "default")?.sanText}
            onChangeText={setNr}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{width:"100%"}}>
          <Text style={styles.txtName}>{`Zadania do wykonania:`}</Text>
          <TextInput
            style={styles.textArea}
            value={sanitizeTxt(tasks, "default")?.sanText}
            onChangeText={setTasks}
            multiline={true}
            rows={4}
            autoCorrect={false}
            autoCompleteType="off"
          />
        </View>
      </View>

      <View style={styles.line}>

        <View style={{width:"20%"}}>
          <Text style={styles.txtName}>{`Cena:`}</Text>
          <TextInput
            style={{...styles.inputTxt, textAlign: 'end'}}
            value={sanitizeTxt(price, "price")?.sanText}
            onChangeText={setPrice}
            keyboardType="decimal-pad"
          />
        </View>
        <Text style={styles.zl}>{`zł`}</Text>

        <View style={{flex:1, ...appStyles.row, ...appStyles.end, margin:5}}>

          {
            !del &&
            <Pressable onPress={SAVE_JOB}>
              <IconBtn ico={`save`} />
            </Pressable>
          }

          {
            !del && (_id !=="new") &&
              <Pressable onPress={()=>setDel(prev=>true)}>
                <IconBtn ico={`delete`} />
              </Pressable>
          }

          {
            del &&
            <>
              <Pressable onPress={DELETE_JOB}>
                <IconBtn ico={`check`} />
              </Pressable>

              <Pressable onPress={()=>setDel(prev=>false)}>
                <IconBtn ico={`close`} />
              </Pressable>
            </>
          }

        </View>

      </View>

      <ContactImgs props={{zip, town, street, nr, www, email, tel}} />

    </View>
  )
}

export default JobPannel

const styles = StyleSheet.create({
  jobPannel: {
    position: "absolute",
    top: 0,
    marginLeft: "1%",
    marginRight: "1%",
    padding: "3%",
    width: "98%",
    minHeight: "100%",
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#f609",
    zIndex: 25
  },
  btnsPannel: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 5
  },
  line: {
    ...appStyles.row,
    width: "100%",
    marginTop: 10
  },
  txtName: {
    ...appStyles.txtOrg,
    fontSize: 10,
    marginTop: 5
  },
  inputTxt: {
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius: 5,
    height: 25
  },
  textArea: {
    height: 100,
    verticalAlign: "top",
    color: "#fff",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
  },
  zl: {
    ...appStyles.txtOrg,
    alignSelf: "flex-end",
    marginLeft: 10,
    marginBottom: 5
  }
})