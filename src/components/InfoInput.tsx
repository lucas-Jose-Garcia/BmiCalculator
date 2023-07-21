import { View, Text } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

interface InfoInputProps {
    title: string,
    placeholder: string,
    mask: string,
    value: string,
    setValue: (value: React.SetStateAction<string>) => void,
}

export function InfoInput({title, placeholder, mask, value, setValue}: InfoInputProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-1 font-mulish">{title}</Text>
      <MaskedTextInput
        className="w-[150px] h-[68] text-slate-900 caret-slate-800 bg-white rounded-lg text-center text-3xl font-mulish"
        keyboardType="number-pad"
        placeholder={placeholder}
        mask={mask}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
    </View>
  );
}
