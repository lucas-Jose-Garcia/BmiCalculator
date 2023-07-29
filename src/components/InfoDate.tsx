import { View, Text, TextInput } from "react-native";

interface InfoDateProps {
    title: string,
    placeholder: string,
    value: string,
    maxValue: number,
    maxLength: number,
    setValue: (value: React.SetStateAction<string>) => void,
}

export function InfoDate({title, placeholder, value, maxValue, maxLength, setValue}: InfoDateProps) {

  function formatDate(text: string) {
    let formattedValue = ""
    Number(text) > maxValue ? formattedValue = value : formattedValue = text
    setValue(formattedValue)
  }

  function applyMask() {
    if (value.length == 1)
      setValue((oldValue) => '0' + oldValue)
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-1 font-mulish">{title}</Text>
      <TextInput
        className="w-[150px] h-[68] text-slate-900 caret-slate-800 bg-zinc-100 border-solid border-2 border-zinc-300 rounded-lg text-center text-3xl font-mulish"
        keyboardType="numeric"
        placeholder={placeholder}
        onChangeText={formatDate}
        value={value}
        maxLength={maxLength}
        onEndEditing={applyMask}
      />
    </View>
  );
}
