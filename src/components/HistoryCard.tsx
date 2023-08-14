import { Text, TouchableOpacity, View } from "react-native";

interface HistoryCardItem {
    id: string
    bmi: number
    status: string
    Description: string 
    criateAt: string
}

interface HistoryCardProps {
    data: HistoryCardItem
}

export function HistoryCard({data} : HistoryCardProps) {

    return (
        <TouchableOpacity 
            className="mt-4 p-5 flex-1 flex-row justify-between items-center rounded-xl border-2 border-zinc-100 bg-white shadow-sm shadow-zinc-300"
        >
            <View className="items-center" >
                <Text className="font-mulish text-3xl text-principal-600">{data.bmi}</Text>
                <Text>{data.status}</Text>
            </View>
            <View className="items-end">
                <Text className="font-mulish text-base text- ">{data.Description}</Text>
                <Text className="text-zinc-400">{data.criateAt}</Text>
            </View>
        </TouchableOpacity>
    )
}