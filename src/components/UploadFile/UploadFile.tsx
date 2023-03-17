import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Grid, Typography, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { ContainerUpload } from "./styles";
import { IUploadFile } from "./interface";

const UploadFile = ({ title, listFiles, setListFiles }: IUploadFile) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setListFiles(acceptedFiles);
    },
    [setListFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: 1,
  });

  const removeFile = useCallback(
    (i: number) => {
      const newlistFiles = [...listFiles];
      newlistFiles.splice(i, 1);
      setListFiles(newlistFiles);
    },
    [listFiles, setListFiles]
  );

  return (
    <Grid item xs={12} mt={2}>
      <Typography variant="h6">{title}</Typography>

      <ContainerUpload>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <FileUploadIcon fontSize="large" />
          <Typography>
            Arraste e solte alguns arquivos aqui ou clique para selecionar os
            arquivos
          </Typography>
          <em>(Apenas arquivos .png, .jpg e .jpeg serão aceitos)</em>
        </div>
      </ContainerUpload>

      <Grid mt={2}>
        {listFiles.map((file, idx) => (
          <Grid key={file?.name} container item alignItems="center" xs={12}>
            <Typography>
              <b>{file?.name}</b> - {file?.size} bytes
            </Typography>
            <Button size="small" color="error" onClick={() => removeFile(idx)}>
              <DeleteOutlineIcon />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export { UploadFile };
