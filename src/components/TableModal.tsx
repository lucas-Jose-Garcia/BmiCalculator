import React, { useState } from "react"
import { View, Text, Modal, TouchableWithoutFeedback } from "react-native"
import { interpretTable, tableAboveNineten, tableProps } from "../data/data"
import { NutritionalStatus } from "../app/Result"

interface TableModalProps {
  isModalVisible: boolean
  toggleModal: () => void
  tableData: tableProps
  nutritionalStatus: NutritionalStatus
}

interface itemTableProps {
  botton: number
  top: number
  finish?: boolean
}

interface tableModal {
  underLimit: itemTableProps
  normalLimit: itemTableProps
  overwightLimit: itemTableProps
  obesityLimit: itemTableProps
  obesityTowLimit: itemTableProps
  obesityThreeLimit: itemTableProps
}

export function TableModal({
  isModalVisible,
  toggleModal,
  tableData,
  nutritionalStatus
}: TableModalProps) {

  const newTableData: tableModal = {
    underLimit: {
      botton: 0,
      top: Number(tableData["underLimit"].toFixed(1)),
    },
    normalLimit: {
      botton: Number(tableData["normalLimit"].toFixed(1)),
      top: Number((tableData["overwightLimit"] - 0.1).toFixed(1)),
    },
    overwightLimit: {
      botton: Number(tableData["overwightLimit"].toFixed(1)),
      top: Number((tableData["obesityLimit"] - 0.1).toFixed(1)),
    },
    obesityLimit: {
      botton: Number(tableData["obesityLimit"].toFixed(1)),
      top: Number((tableData["obesityTowLimit"] - 0.1).toFixed(1)),
      finish: tableData["obesityTowLimit"] == 0 ? true : false
    },
    obesityTowLimit: {
      botton: Number(tableData["obesityTowLimit"].toFixed(1)),
      top: Number((tableData["obesityThreeLimit"] - 0.1).toFixed(1)),
    },
    obesityThreeLimit: {
      botton: Number(tableData["obesityThreeLimit"].toFixed(1)),
      top: 0,
    },
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
        <View className="w-full p-4 bg-white shadow-md shadow-gray-400 rounded-t-3xl">
          <Text className="font-mulish text-xl mb-3">Tabela IMC {tableData["obesityThreeLimit"] > 0 ? "para adultos" : "para adolecentes"}</Text>
          {interpretTable.map((item) => {
            const completedItem = newTableData[item.adults].botton > 0 && newTableData[item.adults].top > 0 
            const bottonValue = `≥ ${newTableData[item.adults].botton}`
            const topValue = `≤ ${newTableData[item.adults].top}`
            const marginalValue = newTableData[item.adults].botton > 0 ? bottonValue : topValue
            const isCurrentTrack = item.description == nutritionalStatus
            return (
              <View key={item.description}>
              {newTableData[item.adults].top > 0 || newTableData[item.adults].botton > 0 ? (
              <View className={`mt-1 mb-1 ${isCurrentTrack ? "relative p-2 rounded-2xl bg-principal-600" : "ml-2 mr-2"}`}>
                  <View className="flex-row justify-between">
                    <Text className={`${isCurrentTrack ? "text-zinc-100" : ""}`}>{newTableData[item.adults].finish ? item.percentisCustomDescription : item.description}</Text>
                    <View className="flex-row">
                      <Text className={`${isCurrentTrack ? "text-zinc-100" : ""}`}>{completedItem ? `${newTableData[item.adults].botton} - ` :  marginalValue}</Text>
                      <Text className={`${isCurrentTrack ? "text-zinc-100" : ""}`}>{completedItem ? newTableData[item.adults].top : ""}</Text>
                    </View>
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
