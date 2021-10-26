import React from "react"
import { Button, TextPropTypes, TouchableOpacity } from "react-native"
import Icons from "./Icons"

const Button = props => {
   if (props.icon) {
      return (
         <TouchableOpacity
            onPress={() => {
               alert(test)
            }}
         >
            <Icons name={props.name} size="small " />
         </TouchableOpacity>
      )
   } else {
      return <Button onPress={console.log("ui")} title="ui" />
   }
}

export default Button
