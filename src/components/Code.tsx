import { useState } from "react";
import ContentCopy from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";

export default function Code({ content }: { content?: string }) {
  const [open, setOpen] = useState(false);
  if (!content) return null;
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(content);
  };
  return (
    <Paper sx={{ p: 2, position: "relative" }}>
      <IconButton
        onClick={handleClick}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <ContentCopy color="disabled" fontSize="small" />
      </IconButton>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Snippet copié dans le presse-papier"
      />
      <Typography
        component="code"
        fontFamily="Monospace"
        display="block"
        whiteSpace="pre-line"
        color="secondary"
      >
        {content}
      </Typography>
    </Paper>
  );
}
