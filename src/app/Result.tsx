import React, { useState, useEffect, useContext } from "react";
import { View} from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { InfoResult } from "../components/InfoResult";
import { ExplainResult } from "../components/ExplainResult";
import { tableAboveNineten, tableProps, teensTableProps, test, testeFormated } from "../data/data";

import { Image } from "expo-image";
import { TableModal } from "../components/TableModal";
import { tableBoys } from "../data/tableBoys";
import { tableGirls } from "../data/tableGirls";
import { Button } from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from "../routers/stack";
import { StateContex, StateContexProps } from "../context";


export type NutritionalStatus = "" | "Abaixo do Peso" | "Normal" | "Sobrepeso" | "Obesidade" |  "Obesidade Grau I" | "Obesidade Grau II" | "Obesidade Grau III" | undefined;

export function Result() {
  const navigation = useNavigation<StackTypes>()
  const [isModalVisible, setModalVisible] = useState(false);
  const [bmi, setBmi] = useState("")
  const [nutritionalStatus, setNutritionalStatus] = useState<NutritionalStatus>("")
  const [currentTable, setCurrentTable] = useState<tableProps>(tableAboveNineten)

  const {maleStatus,
    weight, 
    height, 
    month, 
    year } = useContext<StateContexProps>(StateContex)

  const gender = maleStatus ? 'male' : 'female'
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const months = (currentYear - Number(year)) * 12 + (currentMonth - Number(month))

  function calculateBmi(alturaValue: number, pesoValue: number) {
    const heightInMeters = alturaValue / 100
    return (pesoValue / (heightInMeters * heightInMeters)).toFixed(1)
  }

  function getTableToBeUsed(monthsValue: number, genderValue: string) {
    let table: tableProps = tableAboveNineten

    if (monthsValue <= 228 && genderValue == 'male') {
      table = convertTableForStandard(filterTableByMonth(tableBoys, monthsValue))
    } else if (monthsValue <= 228 && genderValue == 'female') {
      table = convertTableForStandard(filterTableByMonth(tableGirls, monthsValue))
    }

    return table
  }

  function filterTableByMonth(table: teensTableProps[], monthsValue: number) {
    const filterTable = table.filter(item => item.Month == monthsValue)
    const tableResult = filterTable[0]
    return tableResult
  }

  function convertTableForStandard(table: teensTableProps) {
    const tableResult: tableProps = {
      underLimit: table["P5"],
      normalLimit: table["P5"] + 0.1,
      overwightLimit: table["P85"],
      obesityLimit:  table["P95"],
      obesityTowLimit: 0, 
      obesityThreeLimit: 0, 
    }

    return tableResult
  }

  function checkNutritionalStatus(currentBmi: string, currentTableUsed: tableProps) {
    const bmiNumber = Number(currentBmi)

    let status: NutritionalStatus = ""
    if (currentTableUsed.obesityThreeLimit > 0 && bmiNumber > currentTableUsed.obesityThreeLimit) {
      status = "Obesidade Grau III"
    } else if (currentTableUsed.obesityThreeLimit > 0 && bmiNumber >= currentTableUsed.obesityTowLimit) {
      status = "Obesidade Grau II"
    } else if (bmiNumber >= currentTableUsed.obesityLimit) {
      currentTableUsed.obesityThreeLimit > 0 ? status = "Obesidade Grau I" : status = "Obesidade"
    } else if (bmiNumber >= currentTableUsed.overwightLimit) {
      status = "Sobrepeso"
    } else if (bmiNumber >= currentTableUsed.normalLimit) {
      status = "Normal"
    } else {
      status = "Abaixo do Peso"
    }

    return status
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const bmiValue = calculateBmi(Number(height), Number(weight))
    setBmi(bmiValue)
    // Qual tabela eu devo usar? Teens Boys or Grils or Aduts
      // idade é maior do que 19?
        // se sim escolhe a tabela pelo genero
      // se não usa a tabela de adultos

    const currentTableUsed = getTableToBeUsed(months, gender)
    const checkStatus = checkNutritionalStatus(bmiValue, currentTableUsed)
    setCurrentTable(currentTableUsed)
    setNutritionalStatus(checkStatus) 

    //filterTableByMonth(tableBoys, 100)

  }, [])

  return (
    <View className="flex-1 flex-grow justify-between bg-zinc-50">
      <View>
        <CustomHeader titulo="Resultado" />
        <InfoResult bmi={bmi} data={currentTable} onPress={toggleModal} resultado={nutritionalStatus}  />

        <ExplainResult resultado={nutritionalStatus} />

        <View className="flex-1 items-center mt-8">
          <Button caption="Salvar" onPress={() => {}}/>
        </View>
      </View>

      <TableModal 
        isModalVisible={isModalVisible}
        tableData={currentTable}
        toggleModal={toggleModal}
        nutritionalStatus={nutritionalStatus}
      />
    </View>
  );
}
