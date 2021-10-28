import React from "react"
import { Button, TextPropTypes, TouchableOpacity } from "react-native"
import Icons from "./Icons"

const MyButton = props => {
   if (props.icon) {
      return (
         <TouchableOpacity
            onPress={() => {
               console.log("non")
            }}
         >
            <Icons name={props.name} size="medium" />
         </TouchableOpacity>
      )
   } else {
      return <Button onPress={console.log("ui")} title="ui" />
   }
}

export default MyButton
