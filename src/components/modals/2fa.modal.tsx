import { Box, Button, IconButton, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Close } from "@mui/icons-material";
import VerifyCodeInput from "../VerifyCodeInput";
import { useEffect, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

const TwoFAModal = ({
  close,
  onClose,
  seconds,
  setSeconds,
  email,
}: {
  close: boolean;
  onClose: Function | null;
  seconds: number;
  setSeconds: Function;
  email: string;
}) => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("danger");

  useEffect(() => {
    if (code.length !== 6) setStatus("normal");
    else setStatus("danger");
  }, [code]);

  useEffect(() => {
    if (seconds >= 0) setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);

  const handleResend = () => {
    if (seconds < 0) setSeconds(60);
  };

  return (
    <Box sx={close ? style : {}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          sx={{ fontWeight: 600, fontSize: 20 }}
        >
          2FA verification
        </Typography>

        {close && (
          <IconButton onClick={() => onClose && onClose()}>
            <Close />
          </IconButton>
        )}
      </Box>

      <Box sx={{ position: "relative", height: 130 }}>
        <Box component="hr" />
        <Box sx={{ py: 1 }}>
          <Typography textAlign="center" sx={{ pb: 1 }}>
            Enter the code we sent to your email.
          </Typography>

          <VerifyCodeInput code={code} setCode={setCode} status={status} />

          {status === "danger" && (
            <Typography color="#FF3C3C" textAlign="center" mt={2}>
              Incorrect verification code!
            </Typography>
          )}
        </Box>
        {seconds >= 0 && (
          <Box
            sx={{
              border: "1px solid grey",
              width: 28,
              textAlign: "center",
              py: 0.5,
              borderRadius: 1,
              position: "absolute",
              right: 30,
              bottom: 5,
            }}
          >
            {seconds}
          </Box>
        )}
      </Box>
      <Box component="hr" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: 35,
        }}
      >
        {status === "danger" && (
          <Button onClick={handleResend}>Resend Code</Button>
        )}

        <LoadingButton
          sx={{
            px: 2,
            py: 1,
            bgcolor: "#9DACFF",
            color: "black",
            ":hover": {
              opacity: 0.6,
              bgcolor: "#9DACFF",
            },
            position: "absolute",
            right: 20,
          }}
        >
          Verify
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default TwoFAModal;
