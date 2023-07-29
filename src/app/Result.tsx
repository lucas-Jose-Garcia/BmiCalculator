import React from "react"
import {View, TouchableOpacity, Text} from "react-native"
import { HeaderResult } from "../components/HeaderResult"
import { InfoResult } from "../components/InfoResult"

export function Result() {
    return (
        <View className="flex-1 bg-zinc-50">
            <HeaderResult />

            <InfoResult />
            
        </View>
    )
}