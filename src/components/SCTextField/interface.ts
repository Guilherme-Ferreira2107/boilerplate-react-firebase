import { Control } from "react-hook-form";

export interface IProps {
  name: string;
  label: string;
  rules?: any;
  type?: string;
  control?: Control<any, any> | undefined;
  errorsType?: any;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  value?: any;
  defaultValue?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  isRequired?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  ref?: any;
  inputProps?: any;
  withLimits?: boolean;
}
