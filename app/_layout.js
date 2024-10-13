import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StateProvider, useAppState } from './StateContext'
import { SafeAreaView, StatusBar } from 'react-native'
import axios from 'axios'
import 'react-native-reanimated'
import { appStyles } from './Styles'


SplashScreen.preventAutoHideAsync()

const RootLayoutContent = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const { setBzToken, setInfo, setNav, setUser, setError } = useAppState()

  useEffect(() => { if (loaded){ SplashScreen.hideAsync() } }, [loaded])

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const response = await axios.post('https://bzdrive.com/API/getState')
      // console.log("res", response)
      const data = response?.data
      setBzToken(data?.bzToken)
      setInfo(data?.result?.info)
      setNav(data?.result?.nav)
      setUser(data?.result?.user)
    } catch (err) {
      console.error("Błąd axios:", err)
      setError(err.message)
    }
  }

  if (!loaded) { return null }

  return (
    <SafeAreaView style={{ flex:1, marginTop:StatusBar.currentHeight }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="office" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar barStyle="light-content" backgroundColor={appStyles.txtDrk.color} />
    </SafeAreaView>
  )
}

export default function RootLayout() {
  return (
    <StateProvider>
      <RootLayoutContent />
    </StateProvider>
  )
}


// <TouchableHighLight></TouchableHighLight>