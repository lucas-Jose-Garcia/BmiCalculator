import { Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    caption: string
    onPress: () => void
}


export function Button({caption, onPress} : ButtonProps) {
    return (
        <TouchableOpacity
            className="justify-center items-center bg-principal-300 w-60 h-14 rounded-3xl"
            activeOpacity={0.7}
            onPress={onPress}
          >
            <Text className="text-2xl font-mulish text-zinc-100 uppercase">
              {caption}
            </Text>
        </TouchableOpacity>
    )
}