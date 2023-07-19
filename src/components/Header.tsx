import { Text, View } from "react-native";
import Logo from "../assets/logo.svg";

export function Header() {
    return (
        <View className="items-center">
            <Logo width={60} height={60}/>
            <Text className="text-principal-300 text-2xl font-mulish">Calculadora</Text>
        </View>
    )
}