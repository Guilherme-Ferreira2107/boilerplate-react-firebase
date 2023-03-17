import { FormControl, InputLabel, Select, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { IProps } from "./interface";

const SCSelectField = (props: IProps) => {
  const { control, errorsType, name, label, rules, children } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              fullWidth
              label={label}
              {...field}
            >
              {children}
            </Select>
          </FormControl>
        )}
      />
      {errorsType === "required" && (
        <p role="alert" className="message-error">
          <Typography>Campo {label} é obrigatório</Typography>
        </p>
      )}
    </>
  );
};

export { SCSelectField };
