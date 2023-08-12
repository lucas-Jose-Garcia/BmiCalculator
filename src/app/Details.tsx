import { Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";


export function Details() {
    return (
        <View className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Explicação"/>

            <View>
                <Text>
                    Texto
                </Text>
            </View>
        </View>
    )
}