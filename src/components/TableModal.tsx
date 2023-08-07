import React, { useState } from "react"
import { View, Text, Modal, TouchableWithoutFeedback } from "react-native"
import { interpretTable, tableAboveNineten, tableProps } from "../data/data"

interface TableModalProps {
  isModalVisible: boolean
  toggleModal: () => void
  tableData: tableProps
}

export function TableModal({
  isModalVisible,
  toggleModal,
  tableData,
}: TableModalProps) {

  function genarateTableModal(tableData: tableProps) {
    tableData
  }


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View className="flex-1 justify-end">
        <TouchableWithoutFeedback
          className="flex-1 bg-purple-50"
          onPress={toggleModal}
        >
          <View className="flex-1 bg-slate-900 opacity-20 mb-[-24px]"></View>
        </TouchableWithoutFeedback>
        <View className="w-full p-5 bg-white shadow-md shadow-gray-400 rounded-t-3xl">
          {interpretTable.map((item) => {
            return (
              <View key={item.description}>
                {tableData[item.adults] > 0 ? (
                  <View className="flex-row justify-between">
                    <Text>{item.description}</Text>
                    <View className="flex-row">
                      <Text>{(tableData[item.adults] * 1 - 0.1).toFixed(1)}</Text>
                      <Text> - </Text>
                      <Text>{tableData[item.adults]}</Text>
                    </View>
                  </View>
                ) : (
                  ""
                )}
              </View>
            )
          })}
        </View>
      </View>
    </Modal>
  )
}

{
  /* <View className="flex-row justify-between" key={item.description}>
                  <Text>{item.description}</Text>
                  <View className="flex-row">
                  <Text>{(tableData[item.adults] * 1 -0.1).toFixed(1)}</Text>
                  <Text> - </Text>
                  <Text>{tableData[item.adults]}</Text>
                  </View>
                </View> */
}
