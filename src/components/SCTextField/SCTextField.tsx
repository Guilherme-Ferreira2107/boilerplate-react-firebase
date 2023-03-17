import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { IProps } from "./interface";

const SCTextField = (props: IProps) => {
  const {
    name,
    label,
    type,
    control,
    errorsType,
    rules,
    multiline,
    rows,
    maxRows,
    value,
    defaultValue,
    required,
    isRequired,
    onChange,
    fullWidth = true,
    disabled,
    ref,
    inputProps,
  } = props;

  if (control) {
    return (
      <>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <TextField
              inputRef={ref}
              fullWidth={fullWidth}
              size="small"
              margin="normal"
              variant="outlined"
              defaultValue={value}
              label={label}
              type={type}
              rows={rows}
              maxRows={maxRows}
              multiline={multiline}
              disabled={disabled}
              InputProps={inputProps}
              {...field}
            />
          )}
        />
        {errorsType === "required" && (
          <p role="alert" className="message-error">
            <Typography>Campo {label} é obrigatório</Typography>
          </p>
        )}
        {errorsType === "max" && (
          <p role="alert" className="message-error">
            <Typography>Valor inválido. Valores permitidos: 0 à 1</Typography>
          </p>
        )}
        {errorsType === "min" && (
          <p role="alert" className="message-error">
            <Typography>Valor inválido. Valores permitidos: 0 à 1</Typography>
          </p>
        )}
      </>
    );
  } else {
    return (
      <>
        <TextField
          fullWidth={fullWidth}
          size="small"
          margin="normal"
          variant="outlined"
          defaultValue={defaultValue}
          value={value}
          label={label}
          type={type}
          rows={rows}
          maxRows={maxRows}
          multiline={multiline}
          required={required}
          disabled={disabled}
          onChange={onChange}
          inputProps={inputProps}
        />
        {isRequired && (
          <p role="alert" className="message-error">
            <Typography>Campo {label} é obrigatório</Typography>
          </p>
        )}
      </>
    );
  }
};

export { SCTextField };
