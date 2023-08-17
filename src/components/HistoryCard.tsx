import { Text, TouchableOpacity, View } from "react-native";
import { HistoryItem } from "../conection/results";
import { dateFormatter } from "../utils/formatter";

interface HistoryCardProps {
    data: HistoryItem
}

export function HistoryCard({data} : HistoryCardProps) {

    return (
        <TouchableOpacity 
            key={data.id}
            className="mt-4 p-5 flex-1 flex-row justify-between items-center rounded-xl border-2 border-zinc-100 bg-white shadow-sm shadow-zinc-300"
        >
            <View className="items-center" >
                <Text className="font-mulish text-3xl text-principal-600">{data.bmi}</Text>
                <Text>{data.status}</Text>
            </View>
            <View className="items-end">
                <Text className="font-mulish text-base text-zinc-800 ">{data.description}</Text>
                <Text className="text-zinc-400">{dateFormatter.format(new Date(data.criateAt))}</Text>
            </View>
        </TouchableOpacity>
    )
}