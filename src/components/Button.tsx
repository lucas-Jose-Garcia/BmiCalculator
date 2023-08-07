import { Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    caption: string
}


export function Button({caption} : ButtonProps) {
    return (
        <TouchableOpacity
            className="justify-center items-center bg-principal-300 w-60 h-14 rounded-3xl"
            activeOpacity={0.7}
          >
            <Text className="text-2xl font-mulish text-zinc-100 uppercase">
              {caption}
            </Text>
        </TouchableOpacity>
    )
}