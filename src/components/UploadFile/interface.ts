export interface IUploadFile {
  title: string;
  listFiles: File[];
  setListFiles: React.Dispatch<React.SetStateAction<File[]>>;
}
