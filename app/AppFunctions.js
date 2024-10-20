import { Platform } from 'react-native'
import axios from 'axios'

// dateFromDDMMYYYY functions
export const dateFromYYYYMMDD = ( YYYYMMDD ) => {
  const date = new Date()
  const YYYY = YYYYMMDD ? YYYYMMDD.toString().slice(0, 4) : date.getFullYear().toString()
  const MM = YYYYMMDD ? YYYYMMDD.toString().slice(4, 6) : (date.getMonth() + 1).toString().padStart(2, '0')
  const DD = YYYYMMDD ? YYYYMMDD.toString().slice(6, 8) : date.getDate().toString().padStart(2, '0')
  return { YYYY, MM, DD }
}

// getDateFromTimeString functions
export const getDateFromTimeString = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number)
  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date
}

// getTimeStringFromDate functions
export const getTimeStringFromDate = (date) => {
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

// sanitization functions
export const sanitizeTxt = ( txt, name = "default" ) => {

  const lang = "pl"

  function tr(err, lang){ return err }

  const regExDigit = /\d/
  const regExLowercase = /[a-z]/
  const regExUppercase = /[A-Z]/
  const regExAlphanumeric = /[^a-zA-Z0-9]/g
  const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const regExSpecialCharacters = /[^a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/g
  const regExExtendedSpecialCharacters = /[^a-zA-Z0-9\s&()+\-_.,żźćńółęąśŻŹĆĄŚĘŁÓŃЀ-ӿ]/g
  const regExWeb = /^(http(s)?:\/\/|ftp(s)?:\/\/)?([a-zA-Zа-яА-Я0-9-]+\.)+[a-zA-Zа-яА-Я0-9-\/]+(\/[\w- ;,./?%&=]*)?$/
  const regExNonDigits = /[^0-9.,]/g
  const regExMultipleDots = /\.{2,}/g
  // const regExSpecialChar = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/

  switch(name){
    case "login":             return sanitizeLogin(txt)
    case "email":             return sanitizeEmail(txt)
    case "pass":              return sanitizePassword(txt)
    case "verify":            return sanitizePassword(txt)
    case "CompanyNameShort":  return sanitizeCompanyNameShort(txt)
    case "CompanyName":       return sanitizeCompanyName(txt)
    case "VIN":               return sanitizeVIN(txt)
    case "NIP":               return sanitizeNIP(txt)
    case "ZIP":               return sanitizeZIP(txt)
    case "town":              return sanitizeTown(txt)
    case "StreetName":        return sanitizeStreetName(txt)
    case "ACC":               return sanitizeBankAccount(txt)
    case "tel":               return sanitizePhone(txt)
    case "www":               return sanitizeWebsite(txt)
    case "carNumbers":        return sanitizeCarNumbers(txt)
    case "hostname":          return sanitizeHostName(txt)
    case "fileName":          return sanitizeFileName(txt)
    case "price":             return sanitizePrice(txt)
    default: return {sanText:txt, sanErr:false}
  }
  function sanitizeLogin(txt) {
    const min = 4
    const max = 8
    let sanErr = false
    let sanText = txt ? txt.replace(regExAlphanumeric, '').trim().slice(0, max) : ''
    if(sanText.length < min) sanErr = tr(`Err_2`,lang)
    if(sanText.length < 1) sanErr = tr(`Err_1`,lang)
    return {sanText, sanErr}
  }
  function sanitizeEmail(txt) {
    const max = 64
    let sanErr = false
    let sanText = txt ? txt.trim().toLowerCase().slice(0, max) : ''
    if(!regExEmail.test(sanText)) sanErr = tr(`Err_3`,lang)
    if(sanText.length < 1) sanErr = tr(`Err_1`,lang)
    return {sanText, sanErr}
  }
  function sanitizePassword(txt) {
    const min = 8
    const max = 20
    let sanErr = false
    let sanText = txt ? txt.replace(regExSpecialCharacters, '').trim().slice(0, max) : ''
    // if(!regExSpecialChar.test(sanText)) sanErr = tr(`Err_4`,lang)
    if(!regExLowercase.test(sanText)) sanErr = tr(`Err_5`,lang)
    if(!regExDigit.test(sanText)) sanErr = tr(`Err_6`,lang)
    if(!regExUppercase.test(sanText)) sanErr = tr(`Err_7`,lang)
    if(sanText.length < min) sanErr = tr(`Err_8`,lang)
    if(sanText.length < 1) sanErr = tr(`Err_1`,lang)
    return {sanText, sanErr}
  }
  function sanitizeCompanyNameShort(txt) {
    const min = 1
    const max = 24
    let sanErr = false
    let sanText = txt ? txt.replace(regExExtendedSpecialCharacters, '').slice(0, max) : ''
    if(sanText.length < min) sanErr = tr('Err_1', lang)
    return { sanText, sanErr }
  }
  function sanitizeCompanyName(txt) {
    const min = 1
    const max = 256
    let sanErr = false
    let sanText = txt ? txt.replace(regExExtendedSpecialCharacters, '').slice(0, max) : ''
    if(sanText.length < min) sanErr = tr('Err_1', lang)
    return { sanText, sanErr }
  }
  function sanitizeVIN(txt) {
    const max = 17
    let sanErr = false
    let sanText = txt ? txt.replace(regExAlphanumeric, '').trim().toUpperCase().slice(0, max) : ''
    if(sanText.length < max) sanErr = tr('Err_11', lang)
    return { sanText, sanErr }
  }
  function sanitizeNIP(txt) {
    const max = 13
    let sanErr = false
    function formatNIP(nip) {
      const formattedNIP = nip.replace(/-/g, '').slice(0, 10)
      return [
        formattedNIP.slice(0, 3),
        formattedNIP.slice(3, 6),
        formattedNIP.slice(6, 8),
        formattedNIP.slice(8),
      ].filter(s => s).join('-')
    }
    let sanText = txt ? txt.replace(/[^0-9-]/g, '').trim().slice(0, max) : ''
    if(sanText.length < max) sanErr = tr('Err_11', lang)
    sanText = formatNIP(sanText)
    return { sanText, sanErr }
  }
  function sanitizeZIP(txt) {
    const max = 6
    let sanErr = false
    function formatZIP(zip) {
      const formattedZIP = zip.replace(/-/g, '').slice(0, 5)
      return [
        formattedZIP.slice(0, 2),
        formattedZIP.slice(2)
      ].filter(s => s).join('-')
    }
    let sanText = txt ? txt.replace(/[^0-9-]/g, '').trim().slice(0, max) : ''
    if (sanText.length < max) sanErr = tr('Err_11', lang)
    sanText = formatZIP(sanText);
    return { sanText, sanErr }
  }
  function sanitizeTown(txt) {
    const min = 1
    const max = 24
    let sanErr = false
    let sanText = txt ? txt.replace(regExExtendedSpecialCharacters, '').slice(0, max) : ''
    if(sanText.length < min) sanErr = tr('Err_1', lang)
    return {sanText, sanErr}
  }
  function sanitizeStreetName(txt) {
    const min = 1
    const max = 64
    let sanErr = false
    let sanText = txt ? txt.replace(regExExtendedSpecialCharacters, '').slice(0, max) : ''
    function formatStreetName(name) {
      if(lang === "ua"){
        if(
          !name.startsWith("вул. ") &&
          !name.startsWith("пл. ") &&
          !name.startsWith("пр. ") &&
          name?.length > 4
        ){ return "вул. " + name }
      }
      if(lang === "pl"){
        if(
          !name.startsWith("ul. ") &&
          !name.startsWith("al. ") &&
          name?.length > 3
        ){ return "ul. " + name }
      }
      return name
    }
    if(sanText.length < min) sanErr = tr('Err_1', lang)
    sanText = formatStreetName(sanText)
    return {sanText, sanErr}
  }
  function sanitizeBankAccount(txt) {
    const len = 32
    let sanErr = false
    function formatBankAccount(acc) {
      const formattedAcc = acc.replace(/ /g, '').slice(0, 26)
      return [
        formattedAcc.slice(0, 2),
        formattedAcc.slice(2, 6),
        formattedAcc.slice(6, 10),
        formattedAcc.slice(10, 14),
        formattedAcc.slice(14, 18),
        formattedAcc.slice(18, 22),
        formattedAcc.slice(22),
      ].filter(s => s).join(' ')
    }
    let sanText = txt ? txt.replace(/[^0-9\s]/g, '').trim().slice(0, len) : ''
    if(sanText.length < len) sanErr = tr('Err_11', lang)
    sanText = formatBankAccount(sanText)
    return { sanText, sanErr }
  }
  function sanitizePhone(txt) {
    const max = 13
    let sanErr = false
    function formatPhone(phone) {
      const formattedPhone = phone.replace(/ /g, '').slice(0, 9)
      return [
        formattedPhone.slice(0, 3),
        formattedPhone.slice(3, 6),
        formattedPhone.slice(6)
      ].filter(s => s).join(' ')
    }
    let sanText = txt ? txt.replace(/[^0-9\s]/g, '').trim().slice(0, max) : ''
    if(sanText.length < max) sanErr = tr('Err_11', lang)
    sanText = formatPhone(sanText)
    return { sanText, sanErr }
  }
  function sanitizeWebsite(txt) {
    const max = 128
    let sanErr = false
    function formatWebsite(url) {
      if(!url.startsWith("https") && url?.length > 5) return "https://" + url
      return url
    }
    let sanText = txt ? txt.trim().slice(0, max) : ''    
    if (!sanText) sanErr = tr('Err_1', lang)
    if (!regExWeb.test(sanText)) sanErr = tr('Err_9', lang)
    sanText = formatWebsite(sanText)
    return { sanText, sanErr }
  }
  function sanitizeCarNumbers(txt) {
    const min = 4
    const max = 10
    let sanErr = false
    let sanText = txt ? txt.toUpperCase().replace(/[^A-Z0-9\s]/g, '').trim().toUpperCase().slice(0, max) : ''
    if(sanText.length < min) sanErr = tr('Err_10', lang)
    return { sanText, sanErr }
  }
  function sanitizeHostName(txt) {
    const max = 128
    let sanText = txt ? txt.trim().slice(0, max) : ''
    let sanErr = false
    if (!sanText) sanErr = tr('Err_1', lang)
    if (!regExWeb.test(sanText)) sanErr = tr('Err_9', lang)
    return { sanText, sanErr }
  }
  function sanitizeFileName(txt) {
    const min = 1
    const max = 128
    let sanErr = false
    let sanText = txt ? txt.replace(regExExtendedSpecialCharacters, '_').replace(/\s/g, '_').slice(0, max) : ''
    if(sanText.length < min) sanErr = tr('Err_1', lang)
    return { sanText, sanErr }
  }
  function sanitizePrice(txt) {
    let sanErr = false
    let sanText = ''
    const input = txt ? txt.toString() : '0.00'
    let cleanedTxt = input.replace(regExNonDigits, '').replace(regExMultipleDots, '.')
    cleanedTxt = cleanedTxt.replace(',', '.')
    let numericValue = parseFloat(cleanedTxt)
    sanText = numericValue.toFixed(2)
    return { sanText, sanErr }
  }
}

// function for sending a POST request to the server and receiving a response from it
export const PostToApi = async (link, object, callback)=>{
  // Set up the API link to use based on the environment (local or remote)
  const localLink = 'http://localhost:2000/API'
  const domainLink = 'https://bzdrive.com/API'
  const localHost = Platform.OS === 'web'
  // const localHost = window.location.hostname === 'localhost'
  const API = localHost ? localLink : domainLink

  const bzToken = "bzDriveMobileToken"

  // Get the IP data for the current user and add it to the request
  const IP = await axios.get('https://json.geoiplookup.io')
  .then( (res)=> ({
      host:         API,
      from:         link,
      ip:           res.data.ip,
      postal_code:  res.data.postal_code,
      country_code: res.data.country_code,
      country_name: res.data.country_name,
      region:       res.data.region,
      city:         res.data.city,
      asn_org:      res.data.asn_org
      //isp:org:hostname:latitude:longitude:continent_code:continent_name:district:timezone_name:
      //connection_type:asn_number:asn:currency_code:currency_name:success:premium: 
  }))
  .catch( (err)=>{
    console.error("IP Error:", err)
    return false
  })

  // Send the request to the server with the required data and get response
  axios.post( API + link, { bzToken, IP, object } ).then( (resData)=>{

    const Data = resData.data

    // Set the user language based on the IP country code if not already set
    const setLanguage = ()=>{
      const language = Data?.IP?.country_code?.toLowerCase()
      return(
        Data?.user?.lang
        ? Data.user.lang
        : ["en", "ua", "pl"].includes(language) ? language : "en"
      )
    }
    
    // Set the token and user data in local storage
    // SetToken(Data?.bzToken)
    // SetUser(
    //   Data?.user === "RELOAD_APP"
    //   ? { ...Data?.user, lang: setLanguage(), reload:true }
    //   : { ...Data?.user, lang: setLanguage() }
    // )

    // Run the callback function with the response data (if provided)
    if(typeof callback === "function") callback(Data?.result)

    // Log the response data if running locally
    if(localHost) console.log(`resData_${link}`, Data?.result)

    // Log any errors from the server response
    const errorsData = Data?.errors || []
    errorsData.forEach( (err) => console.error("errors", err) )

  })
  .catch( (err)=> console.error("PostToApi Error:", err) )

}
