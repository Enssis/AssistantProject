import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Header from "./components/header/Header"

export default function App() {
   return (
      <>
         <Header />
         <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 6,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
   }
})
