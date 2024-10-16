import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../Styles'
import IconBtn from '../IconBtn'
import Contact from '../Contacts/Contact'


const JobPannel = ({props}) => {

  const {job, setJob} = props

  const [from, setFrom] = useState(job?.time?.from)
  const [to, setTo] = useState(job?.time?.to)

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

  const [tasks, setTasks] = useState(job?.tasks)
  const [price, setPrice] = useState(job?.price)

  const contactImgs = [
    { key: "map", val: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street} ${nr}, ${town}, ${zip}`)}` },
    { key: "web", val: www },
    { key: "email", val: `mailto: ${email}` },
    { key: "tel", val: `tel: ${tel}` }
  ]
  
  return (
    <View style={styles.jobPannel}>

      <Pressable style={styles.closeBtn} onPress={()=>setJob(prev=>false)}>
        <IconBtn ico={`close`} />
      </Pressable>

      <Text style={appStyles.txtGry}>{`ID: ${job?.id}`}</Text>

      <View style={styles.line}>
        <View style={{flex: 1}}>
          <Text style={styles.txtName}>{`Krótka nazwa:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={shortName}
            onChangeText={setShortName}
          />
        </View>
        <View style={{width:"20%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Od:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={from}
            onChangeText={setFrom}
            keyboardType="numeric"
          />
        </View>
        <View style={{width:"20%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Do:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={to}
            onChangeText={setTo}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{flex: 1}}>
          <Text style={styles.txtName}>{`Nazwa:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{flex: 1}}>
          <Text style={styles.txtName}>{`NIP:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={nip}
            onChangeText={setNIP}
            keyboardType="numeric"
          />
        </View>
        <View style={{width:"50%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Tel:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={tel}
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
            value={www}
            onChangeText={setWWW}
            keyboardType="url"
          />
        </View>
        <View style={{width:"50%", marginLeft:3}}>
          <Text style={styles.txtName}>{`E-mail:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{width:"20%", marginLeft:3}}>
          <Text style={styles.txtName}>{`ZIP:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={zip}
            onChangeText={setZIP}
            keyboardType="numeric"
          />
        </View>
        <View style={{width:"25%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Miasto:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={town}
            onChangeText={setTown}
          />
        </View>
        <View style={{flex: 1, marginLeft:3}}>
          <Text style={styles.txtName}>{`Ulica:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={street}
            onChangeText={setStreet}
          />
        </View>
        <View style={{width:"10%", marginLeft:3}}>
          <Text style={styles.txtName}>{`Nr:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={nr}
            onChangeText={setNr}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.line}>
        <View style={{width:"100%"}}>
          <Text style={styles.txtName}>{`Usługi:`}</Text>
          <TextInput
            style={styles.textArea}
            value={tasks}
            onChangeText={setTasks}
            multiline={true}
            rows={4}
            autoCorrect={false}
            autoCompleteType="off"
          />
        </View>
      </View>


      <View style={styles.line}>
        <View style={{flex:1}}></View>
        <View style={{width:"20%"}}>
          <Text style={styles.txtName}>{`Cena:`}</Text>
          <TextInput
            style={styles.inputTxt}
            value={price}
            onChangeText={setPrice}
            keyboardType="decimal-pad"
          />
        </View>
        <Text style={styles.zl}>{`zł`}</Text>
      </View>

      <View style={styles.contacts}>
      {
        contactImgs?.map( (contact, c)=>{
          return( <Contact contact={contact} key={`JobPannelContactImg${contact?.key}${c}`} /> )
        })
      }
      </View>

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
    height: "100%",
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "#999",
    zIndex: 25
  },
  closeBtn: {
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
  },
  contacts: {
    position: "absolute",
    width: "70%",
    bottom: 10,
    right: 10,
    ...appStyles.row,
    ...appStyles.between
  }
})