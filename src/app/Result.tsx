import React, { useState } from "react";
import { View, TouchableOpacity, Text, Button, Modal } from "react-native";
import { HeaderResult } from "../components/HeaderResult";
import { InfoResult } from "../components/InfoResult";
import { ExplainResult } from "../components/ExplainResult";
import { tableAboveNineten } from "../data/data";

import { Image } from "expo-image";
import { TableModal } from "../components/TableModal";

export function Result() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View className="flex-1 flex-grow justify-between bg-zinc-50">
      <View>
        <HeaderResult />

        <InfoResult bmi={20.5} data={tableAboveNineten} />

        <ExplainResult resultado="Normal" />
      </View>

      <Button title="Abrir Modal" onPress={toggleModal} />


      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View className="flex-1 justify-end">
        <View className="p-5 bg-white shadow-md shadow-gray-400 rounded-lg">
        <Text>Valor da Tabela</Text>
        <Text>Valor da Tabela</Text>
        <Text>Valor da Tabela</Text>
        <Text>Valor da Tabela</Text>
        <Text>Valor da Tabela</Text>
        <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </View>
    </Modal>

      {/* <TableModal isModalVisible toggleModal={toggleModal} /> */}
    </View>
  );
}
