import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { HeaderResult } from "../components/HeaderResult";
import { InfoResult } from "../components/InfoResult";
import { ExplainResult } from "../components/ExplainResult";
import { getTableAboveNineten } from "../data/data";

import { Image } from "expo-image";

export function Result() {
  const tableAboveNineten = getTableAboveNineten();

  return (
    <View className="flex-1 flex-grow justify-between bg-zinc-50">
      <View>
        <HeaderResult />

        <InfoResult 
          bmi={20.5}
          data={tableAboveNineten}
        />

        <ExplainResult resultado="Normal" />
      </View>

      

      {/* <TouchableOpacity className="mb-10 flex-row items-center p-2 rounded-lg shadow-sm shadow-zinc-400 bg-zinc-100">
        <View className="flex-row items-center gap-3">
          <Image
            source={require("../assets/ebook.jpg")}
            style={{ width: 100, height: 100 }}
          />
          <View className="flex-1">
            <Text className="font-bold">
                <Text className="text-principal-600">ADS </Text>
              Quer ter uma alimentação mais saúdavel e descomplicada?
            </Text>
            <Text className="text-justify">
              Não deixe de confeir esse eBook com receitas fit e com pouco
              carboitratos para uma vida cheia de energia e bem-estar!{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity> */}
    </View>
  );
}
