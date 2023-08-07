export interface tableProps {
    underLimit:  number
    normalLimit: number
    overwightLimit: number
    obesityLimit: number
    obesityTowLimit: number
    obesityThreeLimit: number
}

export interface teensTableProps {
    Month: number
    P01: number
    P1: number 
    P3: number 
    P5: number 
    P10: number
    P15: number
    P25: number
    P50: number
    P75: number
    P85: number
    P90: number
    P95: number
    P97: number
    P99: number
    P999: number
}

interface interpretItem {
    description: string
    adults: 'underLimit' | 'normalLimit' | 'overwightLimit' | 'obesityLimit' | 'obesityTowLimit' | 'obesityThreeLimit'
    percentis: 'P01'|'P1'|'P3'|'P5'|'P10'|'P15'|'P25'|'P50'|'P75'|'P85'|'P90'|'P95'|'P97'|'P99'|'P999'
    percentisCustomDescription: string
}


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
        percentis: "P85",
        percentisCustomDescription: "",
    },
    {
        description: "Acima do peso",
        adults: "overwightLimit",
        percentis: "P95",
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
] as interpretItem[]

export const tableAboveNineten = {
    underLimit: 18.4,
    normalLimit: 18.5,
    overwightLimit: 25,
    obesityLimit: 30,
    obesityTowLimit: 35, 
    obesityThreeLimit: 40, 
} as tableProps

export const testeFormated = {
    underLimit: 18.4,
    normalLimit:24.9,
    overwightLimit:29.9,
    obesityLimit:34.9,
    obesityTowLimit:35.0, 
    obesityThreeLimit: 0, 
}


export const test = {
    "Month": 61,
    "P01": 12.041,
    "P1": 12.72,
    "P3": 13.148,
    "P5": 13.384,
    "P10": 13.764,
    "P15": 14.03,
    "P25": 14.441,
    "P50": 15.264,
    "P75": 16.172,
    "P85": 16.7,
    "P90": 17.074,
    "P95": 17.656,
    "P97": 18.052,
    "P99": 18.845,
    "P999": 20.355
} as teensTableProps

















