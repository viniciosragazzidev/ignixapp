import { StatusOs } from "@/shared/@enums/enums";
import { OrderTypeTable } from "../@types/types";

export const orderData: OrderTypeTable[] = [
  {
    id: "o124",
    customer: {
      id: "c124",
      name: "Ana",
      surname: "Silva",
      contact: "+55 21 98888-8888",
      document: "234.567.890-11",
      email: "ana.silva@example.com",
      address: "Av. Atlântica, 456",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "22070-000",
      country: "Brasil",
      createdAt: "2023-02-01T12:00:00Z",
      updatedAt: "2023-02-01T12:00:00Z",
    },
    items: [
      {
        id: "i125",
        name: "Tablet",
        brand: "Apple",
        model: "iPad Pro",
        nSerie: "SN789123",
        category: "Electronics",
        quantity: 1,
        problem_description: "Screen cracked",
        repair_description: "Screen replaced",
        repair_value: 1200,
        status: StatusOs.CONCLUIDO,
        createdAt: "2023-02-02T10:00:00Z",
        updatedAt: "2023-02-04T14:00:00Z",
      },
      {
        id: "i126",
        name: "Laptop",
        brand: "HP",
        model: "Pavilion",
        nSerie: "SN321789",
        category: "Computers",
        quantity: 1,
        problem_description: "Hard drive failure",
        repair_description: "Hard drive replaced",
        repair_value: 900,
        status: StatusOs.CONCLUIDO,
        createdAt: "2023-02-03T09:00:00Z",
        updatedAt: "2023-02-05T13:00:00Z",
      },
    ],
    status: StatusOs.CONCLUIDO,
    createdAt: "2023-02-02T08:00:00Z",
    updatedAt: "2023-02-05T15:00:00Z",
    value: 2100,
    actions: "invoice sent",
  },
  {
    id: "o125",
    customer: {
      id: "c125",
      name: "Carlos",
      surname: "Pereira",
      contact: "+55 31 97777-7777",
      document: "345.678.901-22",
      email: "carlos.pereira@example.com",
      address: "Rua da Liberdade, 789",
      city: "Belo Horizonte",
      state: "MG",
      zipCode: "30140-000",
      country: "Brasil",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    items: [
      {
        id: "i127",
        name: "Smartwatch",
        brand: "Garmin",
        model: "Fenix 6",
        nSerie: "SN456789",
        category: "Wearables",
        quantity: 1,
        problem_description: "Battery issue",
        repair_description: "Battery replaced",
        repair_value: 500,
        status: StatusOs.CONCLUIDO,
        createdAt: "2023-03-02T10:00:00Z",
        updatedAt: "2023-03-04T14:00:00Z",
      },
    ],
    status: StatusOs.CONCLUIDO,
    createdAt: "2023-03-02T08:00:00Z",
    updatedAt: "2023-03-04T15:00:00Z",
    value: 500,
    actions: "invoice sent",
  },
  {
    id: "o126",
    customer: {
      id: "c126",
      name: "Juliana",
      surname: "Ferreira",
      contact: "+55 71 96666-6666",
      document: "456.789.012-33",
      email: "juliana.ferreira@example.com",
      address: "Praça da Sé, 123",
      city: "Salvador",
      state: "BA",
      zipCode: "40020-000",
      country: "Brasil",
      createdAt: "2023-04-01T12:00:00Z",
      updatedAt: "2023-04-01T12:00:00Z",
    },
    items: [
      {
        id: "i128",
        name: "Headphones",
        brand: "Sony",
        model: "WH-1000XM4",
        nSerie: "SN123654",
        category: "Audio",
        quantity: 1,
        problem_description: "Right earcup not working",
        repair_description: "Earcup wiring repaired",
        repair_value: 300,
        status: StatusOs.CONCLUIDO,
        createdAt: "2023-04-02T10:00:00Z",
        updatedAt: "2023-04-04T14:00:00Z",
      },
    ],
    status: StatusOs.CONCLUIDO,
    createdAt: "2023-04-02T08:00:00Z",
    updatedAt: "2023-04-04T15:00:00Z",
    value: 300,
    actions: "invoice sent",
  },
  {
    id: "o127",
    customer: {
      id: "c127",
      name: "Pedro",
      surname: "Oliveira",
      contact: "+55 41 95555-5555",
      document: "567.890.123-44",
      email: "pedro.oliveira@example.com",
      address: "Rua XV de Novembro, 456",
      city: "Curitiba",
      state: "PR",
      zipCode: "80020-310",
      country: "Brasil",
      createdAt: "2023-05-01T12:00:00Z",
      updatedAt: "2023-05-01T12:00:00Z",
    },
    items: [
      {
        id: "i129",
        name: "Camera",
        brand: "Canon",
        model: "EOS R5",
        nSerie: "SN789456",
        category: "Photography",
        quantity: 1,
        problem_description: "Lens not focusing",
        repair_description: "Lens mechanism repaired",
        repair_value: 2000,
        status: StatusOs.CONCLUIDO,
        createdAt: "2023-05-02T10:00:00Z",
        updatedAt: "2023-05-05T14:00:00Z",
      },
    ],
    status: StatusOs.CONCLUIDO,
    createdAt: "2023-05-02T08:00:00Z",
    updatedAt: "2023-05-05T15:00:00Z",
    value: 2000,
    actions: "invoice sent",
  },
  {
    id: "o128",
    customer: {
      id: "c128",
      name: "Luiza",
      surname: "Costa",
      contact: "+55 61 94444-4444",
      document: "678.901.234-55",
      email: "luiza.costa@example.com",
      address: "Esplanada dos Ministérios, 789",
      city: "Brasília",
      state: "DF",
      zipCode: "70150-900",
      country: "Brasil",
      createdAt: "2023-06-01T12:00:00Z",
      updatedAt: "2023-06-01T12:00:00Z",
    },
    items: [
      {
        id: "i130",
        name: "Printer",
        brand: "Epson",
        model: "EcoTank L3150",
        nSerie: "SN987654",
        category: "Office Equipment",
        quantity: 1,
        problem_description: "Paper jam issue",
        repair_description: "Paper jam cleared",
        repair_value: 200,
        status: StatusOs.CONCLUIDO,
        createdAt: "2023-06-02T10:00:00Z",
        updatedAt: "2023-06-04T14:00:00Z",
      },
    ],
    status: StatusOs.CONCLUIDO,
    createdAt: "2023-06-02T08:00:00Z",
    updatedAt: "2023-06-04T15:00:00Z",
    value: 200,
    actions: "invoice sent",
  },
];
