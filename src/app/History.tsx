import { Text, View, ScrollView, SafeAreaView, Image } from "react-native";
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

    function updateHistory() {
        getDataByHistory().then((history) => {
            setHistoryData(history)
        })
    }

    const historyLength = historyData.length

    useFocusEffect(useCallback(() => {
        updateHistory()
    }, []))

    return (
        <SafeAreaView className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Histórico"/>

            {historyLength ? (
                <ScrollView className="mt-4">
                    {historyData.map((history) => <HistoryCard key={history.id} data={history} upload={updateHistory} />)}
                </ScrollView>
            ) : (
                <View className="flex-1 items-center justify-center">
                    <Image
                        className="max-w-[95%] max-h-[55%] ml-2 mt-[-60px]"
                        source={require("../assets/list-is-empty.png")}
                    />
                    <Text className="font-mulish-sm text-base mt-[-65px]">Nenhum histórico por enquanto</Text>
                </View>
            )}
        </SafeAreaView>
    )
}