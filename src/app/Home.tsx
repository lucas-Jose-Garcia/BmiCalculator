import React, { useContext, useCallback, useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { InfoInput } from "../components/InfoInput";
import { InfoDate } from "../components/InfoDate";
import { Button } from "../components/Button";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackTypes } from "../routers/stack";
import { StateContex, StateContexProps } from "../context";
import Toast from 'react-native-toast-message';

export function Home() {
  const navigation = useNavigation<StackTypes>()
  const {maleStatus,
    femaleStatus, 
    weight, 
    height, 
    month, 
    year, 
    setMaleStatus, 
    setFemaleStatus, 
    setWeight,
    setHeight,
    setMonth, 
    setYear,} = useContext<StateContexProps>(StateContex)
    const [monthModal, setMonthModal] = useState(false)
    const [yearModal, setYearhModal] = useState(false)

  function selectMale() {
    setMaleStatus(true);
    setFemaleStatus(false);
  }

  function selecFemale() {
    setMaleStatus(false);
    setFemaleStatus(true);
  }

  function checkCompletionOfFields() {
    // && Number(month) > 0 && Number(year) > 0
    if (Number(weight) > 0 && Number(height) > 0) {
      return true
    }

    return false
  }

  function toggleVisibilityMonthModal() {
    setMonthModal(state => !state)
  }

  function toggleVisibilityYearModal() {
    setYearhModal(state => !state)
  }


  function handleToCalculateBmi() {
    const checkCompletion = checkCompletionOfFields()

    if (checkCompletion) {
      navigation.navigate('Result')
    } else {
      Toast.show({
        type: 'info',
        text1: 'Todos os campos devem ser preenchidos!'
      })
    }

  }
 
  const currentDate = new Date();
  const startYear = currentDate.getFullYear() - 5;
  const listMonth = ["01", "02", "03","04","05","06","07","08","09","10","11","12" ]
  const listYear = Array.from({ length: 100 }, (_, i) => String(startYear - i));

  useFocusEffect(useCallback(() => {
    setWeight("")
    setHeight("")
    setMonth("")
    setYear("")
  }, []))

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView className="flex-1">
      <TouchableWithoutFeedback
      className="flex-1 items-center justify-start "
      onPress={Keyboard.dismiss}
    >
      <View className="flex-1 justify-center bg-zinc-50">
        <Header />
        {/* Form */}
        <View>
          {/* Sexo */}
          <View className="flex flex-row items-center justify-center">
            <Card
              text="Masculino"
              activate={maleStatus}
              onPress={() => selectMale()}
            />
            <Card
              text="Feminino"
              activate={femaleStatus}
              onPress={() => selecFemale()}
            />
          </View>

          {/* Peso e Altura */}
          <View className="flex flex-row mt-10 mb-10 pb-1">
            <InfoInput
              title="Peso (kg)"
              placeholder="000"
              mask="999"
              value={weight}
              setValue={setWeight}
              
            />
            <InfoInput
              title="Altura (cm)"
              placeholder="000"
              mask="999"
              value={height}
              setValue={setHeight}
            />
          </View>

          {/* Data de Nascimento */}
          <View className="flex flex-row mb-10 pb-1">
            <InfoDate
              placeholder="00"
              title="Mês de Nascimento"
              value={month}
              setValue={setMonth}
              list={listMonth}
              modalVisible={monthModal}
              toggleVisibility={toggleVisibilityMonthModal}
            />
            <InfoDate
              placeholder="0000"
              title="Ano de Nascimento"
              alert="(Mínimo de 5 anos)"
              value={year}
              setValue={setYear}
              list={listYear}
              modalVisible={yearModal}
              toggleVisibility={toggleVisibilityYearModal}
            />
          </View>
        </View>

        {/* Footer */}
        <View className="justify-center items-center">
          <Button caption="Calcular" onPress={handleToCalculateBmi} />

          <View className="mt-7">
            <TouchableOpacity onPress={() => {navigation.navigate('History')}} className="flex-row justify-center items-center gap-1">
              <FontAwesome5 name="history" size={20} color="#1a1414" />
              <Text className="text-sm">Acessar histórico</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
