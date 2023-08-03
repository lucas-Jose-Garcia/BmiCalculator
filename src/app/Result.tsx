import React, { useState } from "react";
import { View, TouchableOpacity, Text, Button, Modal, TouchableWithoutFeedback } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
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
        <CustomHeader titulo="Resultado" />

        <InfoResult bmi={20.5} data={tableAboveNineten} onPress={toggleModal} />

        <ExplainResult resultado="Normal" />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
          <View className="flex-1 justify-end">
            <TouchableWithoutFeedback className="flex-1 bg-purple-50" onPress={toggleModal}>
              <View className="flex-1 bg-slate-900 opacity-20 mb-[-24px]"></View>
            </TouchableWithoutFeedback>
            <View className="w-full p-5 bg-white shadow-md shadow-gray-400 rounded-t-3xl">
              {tableAboveNineten.normalLimit}
            </View>
          </View>
      </Modal>

      {/* <TableModal isModalVisible toggleModal={toggleModal} /> */}
    </View>
  );
}
