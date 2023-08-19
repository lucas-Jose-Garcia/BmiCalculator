import { View, Text, TouchableOpacity } from "react-native";
import { PickerModal } from "./PickerModal";

interface InfoDateProps {
    title: string
    placeholder: string
    value: string
    list: string[]
    modalVisible: boolean
    setValue: (value: React.SetStateAction<string>) => void
    toggleVisibility: () => void
}

export function InfoDate({list, title, placeholder, value, modalVisible, setValue, toggleVisibility}: InfoDateProps) {

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-1 font-mulish">{title}</Text>
      <TouchableOpacity 
        onPress={toggleVisibility}
        className="w-[150px] h-[68] justify-center bg-zinc-100 border-solid border-2 border-zinc-300 rounded-lg"
        activeOpacity={0.6} >
        <Text
          className={`${value ? 'text-slate-900' : 'text-zinc-400'} caret-slate-800 text-center text-3xl font-mulish`}
        >
          {value ? value : placeholder}
        </Text>           
      </TouchableOpacity>
      <PickerModal 
        list={list}
        setValue={setValue}
        visible={modalVisible} 
        toggleModal={toggleVisibility}
      />
    </View>
  );
}
