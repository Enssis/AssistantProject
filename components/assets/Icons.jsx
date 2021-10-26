import React, { useEffect, useState } from "react"
import { Image, Text } from "react-native"

const size = { small: { width: 20, height: 20 }, medium: { width: 40, height: 40 }, large: { width: 60, height: 60 } }
const images = { menu: require("../../assets/icons/menu.png"), loading: require("../../assets/icons/loading.png") }

const Icons = props => {
   return <Image source={images[props.name]} style={size[props.size]} />
}

export default Icons
