import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { HistoryCard } from "../components/HistoryCard";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryItem, getHistoryBmi } from "../conection/results";

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
        <SafeAreaView className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Histórico"/>

            <ScrollView className="mt-4">
                {historyData.map((history) => <HistoryCard key={history.id} data={history} />)}
            </ScrollView>
        </SafeAreaView>
    )
}