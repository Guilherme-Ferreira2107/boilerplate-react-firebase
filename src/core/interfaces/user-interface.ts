export interface IUser {
  name: string;
  email: string;
  userType: string;
}

export interface IData {
  email: string;
  username: string;
  createdAt: string;
  userType: string;
}

export interface IDataSearch {
  id: string;
  user: string;
  active: boolean;
  autoDiagnostico: boolean;
  autors: string[];
  body: string;
  commentCount: number;
  createdAt: string;
  diagnosticos: any[];
  keywords: string[];
  likeCount: number;
  title: string;
  username: string;
  autoDiagnostico_disparado: boolean;
  mapas: string[];
  questions: string;
}
