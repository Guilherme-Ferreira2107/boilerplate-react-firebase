import { Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  handleClose?: () => void;
  saveForm?: () => void;
}

const ModalWrapper = (props: IProps) => {
  const { children, title, open, maxWidth, handleClose } = props;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={maxWidth || "md"}
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        {handleClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export { ModalWrapper };
