import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { HistoryCard } from "../components/HistoryCard";

const mock = [
    {
        "id": "13525846",
        "bmi": 23.9,
        "status": "Normal",
        "Description": "65.00kg | 165cm | 17 anos",
        "criateAt": "11 de jul. de 2023"
    },
    {
        "id": "13156351352",
        "bmi": 45.9,
        "status": "Normal",
        "Description": "65.00kg | 165cm | 17 anos",
        "criateAt": "11 de jul. de 2023"
    },

]

export function History() {
    return (
        <View className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Histórico"/>

            <ScrollView className="mt-4">
                <HistoryCard data={mock[0]} />
                <HistoryCard data={mock[1]} />
            </ScrollView>
        </View>
    )
}