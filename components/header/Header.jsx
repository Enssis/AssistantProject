import React from "react"
import { Text, View } from "react-native"
import MyButton from "../assets/MyButton"
import Icons from "../assets/Icons"

const Header = () => {
   return (
      <View
         style={{
            flex: 1,
            paddingTop: 20,
            marginBottom: 0,
            backgroundColor: "#673ab7",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
         }}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               justifyContent: "center"
            }}
         >
            <MyButton icon name="menu" />
         </View>

         <View
            style={{
               flex: 5,
               alignItems: "center",
               justifyContent: "center"
            }}
         >
            <Text
               style={{
                  fontSize: 30,
                  color: "#d1c4e9"
               }}
            >
               Assistant
            </Text>
         </View>
      </View>
   )
}

export default Header
