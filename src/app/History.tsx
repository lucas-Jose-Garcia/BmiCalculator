import { Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";


export function History() {
    return (
        <View className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Histórico"/>

            <View>
                <Text>
                    Texto
                </Text>
            </View>
        </View>
    )
}