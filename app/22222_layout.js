import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StateProvider, useAppState } from './StateContext'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import axios from 'axios'
import 'react-native-reanimated'


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
    <SafeAreaProvider style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="office" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

export default function RootLayout() {

  const insets = useSafeAreaInsets()

  return (

      <View style={{ paddingBottom: Math.max(insets.bottom, 16) }} ><Text>bzDrive</Text></View>

  )
}


// <TouchableHighLight></TouchableHighLight>