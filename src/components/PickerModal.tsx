import { Modal,  ScrollView, View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

interface PickerModalProps {
    list: string[]
    visible: boolean
    toggleModal: () => void
    setValue: (value: React.SetStateAction<string>) => void
}

export function PickerModal({list, visible, toggleModal, setValue}: PickerModalProps) {
    function chooseValue(item: string) {
        setValue(item)
        toggleModal()
    }
    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={toggleModal}
        >
            <TouchableOpacity
                className="w-full h-full items-center justify-center bg-black/20"
                onPress={toggleModal}
                
            >
                <TouchableOpacity className="w-4/5 h-[70%] bg-zinc-50 items-center" activeOpacity={1}>
                    <Text className="font-mulish-sm text-base text-zinc-400 mt-1 mb-2">Selecione uma opção</Text>
                    <ScrollView className="w-full flex-1 bg-zinc-50 opacity-100">
                        {list.map((item) => (
                            <TouchableOpacity onPress={() => {chooseValue(item)}} className="flex-1 justify-center items-center p-2.5">
                                <Text className="font-mulish text-base" key={item}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}