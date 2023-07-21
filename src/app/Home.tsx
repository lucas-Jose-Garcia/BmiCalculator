import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { InfoInput } from "../components/InfoInput";

export default function Home() {
  const [maleStatus, setMaleStatus] = useState(false);
  const [femaleStatus, setFemaleStatus] = useState(true);
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function selectMale() {
    setMaleStatus(true);
    setFemaleStatus(false);
  }

  function selecFemale() {
    setMaleStatus(false);
    setFemaleStatus(true);
  }

  return (
    <TouchableWithoutFeedback
      className="flex-1 items-center justify-start bg-zinc-200"
      onPress={Keyboard.dismiss}
    >
      <View>
        <Header />
        {/* Form */}
        <View>
          {/* Sexo */}
          <View className="flex flex-row items-center justify-center bg-purple-100">
            <Card
              text="Masculino"
              activate={maleStatus}
              gap="Right"
              onPress={() => selectMale()}
            />
            <Card
              text="Feminino"
              activate={femaleStatus}
              gap="Left"
              onPress={() => selecFemale()}
            />
          </View>

          {/* Peso e Altura */}
          <View className="flex flex-row bg-red-100 mt-10 pb-5">
            <InfoInput
              title="Peso"
              placeholder="00"
              mask="99.99"
              value={peso}
              setValue={setPeso}
            />
            <InfoInput
              title="Altura"
              placeholder="000"
              mask="999"
              value={altura}
              setValue={setAltura}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}
