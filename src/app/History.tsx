import { Text, View, ScrollView } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { HistoryCard } from "../components/HistoryCard";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryItem, getHistoryBmi } from "../conection/results";

const mock = [
    {
        "id": "13525846",
        "bmi": "23.9",
        "status": "Normal",
        "Description": "65.00kg | 165cm | 17 anos",
        "criateAt": "11 de jul. de 2023"
    },
    {
        "id": "13156351352",
        "bmi": "45.9",
        "status": "Normal",
        "Description": "65.00kg | 165cm | 17 anos",
        "criateAt": "11 de jul. de 2023"
    },

]

export function History() {
    const [historyData, setHistoryData] = useState([] as HistoryItem[])

    async function getDataByHistory() {
        const data = await getHistoryBmi()
        return data
    }

    useFocusEffect(useCallback(() => {
        getDataByHistory().then((history) => {
            setHistoryData(history)
        })
    }, []))

    return (
        <View className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Histórico"/>

            <ScrollView className="mt-4">
                {historyData.map((history) => {
                    console.log(JSON.stringify(history))
                    return (
                        <HistoryCard data={history} />
                    )
                })}
            </ScrollView>
        </View>
    )
}