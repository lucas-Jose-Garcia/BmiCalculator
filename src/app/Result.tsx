import React from "react"
import {View, TouchableOpacity, Text} from "react-native"
import { HeaderResult } from "../components/HeaderResult"
import { InfoResult } from "../components/InfoResult"
import { ExplainResult } from "../components/ExplainResult"

export function Result() {
    return (
        <View className="flex-1 bg-zinc-50">
            <HeaderResult />

            <InfoResult />

            <ExplainResult resultado="Normal"/>
            
        </View>
    )
}
