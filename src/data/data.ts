export const interpretTable = [
    {
        description: "Abaixo do peso",
        adults: "underLimit",
        percentis: "P5",
        percentisCustomDescription: "",

    },
    {
        description: "Normal",
        adults: "normalLimit",
        percentis: "P5",
        percentisCustomDescription: "",
    },
    {
        description: "Acima do peso",
        adults: "overwightLimit",
        percentis: "P5",
        percentisCustomDescription: "",
    },
    {
        description: "Obesidade Grau I",
        adults: "obesityLimit",
        percentis: "P5",
        percentisCustomDescription: "Obesidade",
    },
    {
        description: "Obesidade Grau II",
        adults: "obesityTowLimit",
        percentis: "none",
        percentisCustomDescription: "",
    },
    {
        description: "Obesidade Grau III",
        adults: "obesityThreeLimit",
        percentis: "none",
        percentisCustomDescription: "",
    },
]

export const tableAboveNineten = {
    underLimit: 18.4,
    normalLimit:24.9,
    overwightLimit:29.9,
    obesityLimit:34.9,
    obesityTowLimit:35.0, 
    obesityThreeLimit: 40, 
}