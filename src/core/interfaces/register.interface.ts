export interface IRegisterInput {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  userType: string;
  blocked: boolean;
}

export interface IFormData {
  confirmPassword: string;
  email: string;
  firstName: string;
  password: string;
  perfil: string;
}
