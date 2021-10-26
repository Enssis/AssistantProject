import React from "react"
import { View } from "react-native"
import Icons from "../assets/Icons"

const Header = () => {
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "#64abe5",
            alignItems: "center",
            justifyContent: "center"
         }}
      >
         <Icons name="menu" size="medium" />
      </View>
   )
}

export default Header
