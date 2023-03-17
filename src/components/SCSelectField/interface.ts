import { Control } from "react-hook-form";

export interface IProps {
  name: string;
  label: string;
  control?: Control<any, any> | undefined;
  errorsType?: any;
  rules?: any;
  children: any;
}
