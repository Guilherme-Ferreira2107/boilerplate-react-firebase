import moment from "moment";
// import { IDataSearch } from "../interfaces";

export const researchesTableMock: any[] = [
  {
    author: "Pesquisador",
    research: "Lorem ipsum dolor sit amet. Qui similique voluptatem qui",
    dateRegister: moment().format("DD/MM/YYYY"),
    status: true,
    selfDiagnosis: true,
    answer: false,
    diagnosis: false,
    sendDiagnosis: 0,
    delete: true,
  },
  {
    author: "Pesquisador",
    research: "Ipsum dolor sit amet. Qui similique voluptatem qui",
    dateRegister: moment().format("DD/MM/YYYY"),
    status: true,
    selfDiagnosis: true,
    answer: false,
    diagnosis: false,
    sendDiagnosis: 1,
    delete: true,
  },
  {
    author: "Pesquisador",
    research: "Ipsum dolor sit amet. Qui similique voluptatem qui",
    dateRegister: moment().format("DD/MM/YYYY"),
    status: true,
    selfDiagnosis: true,
    answer: false,
    diagnosis: false,
    sendDiagnosis: 3,
    delete: true,
  },
  {
    author: "Outro Respondente",
    research: "Lorem ipsum dolor sit amet. Qui similique voluptatem qui",
    dateRegister: moment().format("DD/MM/YYYY"),
    status: true,
    selfDiagnosis: true,
    answer: true,
    diagnosis: true,
    sendDiagnosis: 2,
    delete: true,
  },
];
