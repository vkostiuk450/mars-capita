import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { Close, ArrowRight } from "@mui/icons-material";
import { Check, East } from "@mui/icons-material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

import LogoSide from "../../assets/bg-logo__side.png";
import IcoBybit from "../../assets/ico-bybit__sm.png";
import IcoBitget from "../../assets/ico-bitget__sm.png";
import IcoBinance from "../../assets/ico-binance__sm.png";
import IcoOkx from "../../assets/ico-okx__sm.png";
import IcoAttach from "../../assets/ico-attach.png";
import LogoBybit from "../../assets/logo-bybit__md.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

const ConnectRegisterPage = () => {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Box height="100vh" display="flex">
      <Box
        flex={1}
        bgcolor="#4C0098"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box width={220} component="img" src={LogoSide} />
        <Typography
          color="white"
          fontSize={14}
          width={160}
          textAlign="center"
          mt={1}
        >
          Your Fund | Your Account Your Profit{" "}
        </Typography>
      </Box>
      <Box flex={4} display="flex">
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={3}
        >
          <Box bgcolor="#6E31AB" color="white" p={3} borderRadius={2}>
            <Typography fontWeight={600} fontSize={14}>
              Quick connect an API with Bybit Futures
            </Typography>
            <Box display="flex" fontSize={12} mt={1}>
              1.{" "}
              <Typography fontSize={12}>
                Click Connect to Bybit Futures
              </Typography>
            </Box>
            <Box display="flex" fontSize={12} mt={1}>
              2.{" "}
              <Typography fontSize={12}>Login to your Bybit Account</Typography>
            </Box>
            <Box display="flex" fontSize={12} mt={1}>
              3.{" "}
              <Typography fontSize={12} width={290}>
                Click 'Continue' when prompted, or follow the instructions to
                complete the necessary requirements.
              </Typography>
            </Box>
          </Box>
          <Box bgcolor="#6E31AB" color="white" p={3} borderRadius={2}>
            <Typography fontWeight={600} fontSize={14}>
              Why do we need your API Keys?
            </Typography>

            <Typography fontSize={12} width={300} mt={1}>
              API keys are a unique set of identifiers that allow MarsCAPITA to
              programmatically perform actions on your behalf in your crypto
              exchange account (Bybit, Bitget, Binance etc..)
            </Typography>
          </Box>
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt={8}
        >
          <Box display="flex" gap={1}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                borderRadius="50%"
                bgcolor="#28CE4C"
                width={35}
                height={35}
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Check />
              </Box>
              <Typography mt={2} fontSize={14}>
                Connect Exchange
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" height={35}>
              <East />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                borderRadius="50%"
                bgcolor="#B9B9B9"
                width={35}
                height={35}
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Check />
              </Box>
              <Typography mt={2} fontSize={14}>
                Connect Exchange
              </Typography>
            </Box>
          </Box>
          <Typography color="#4C0098" textAlign="center" fontSize={30} mt={10}>
            Connect Your Exchange
          </Typography>
          <Box px={4} width="100%" mt={4}>
            <Typography fontSize={14}>Exchange</Typography>
            <FormControl fullWidth sx={{ mt: 1 }} size="small">
              <Select
                labelId="select-label"
                id="demo-simple-select"
                value={type}
                displayEmpty
                onChange={(e) => setType(e.target.value)}
                placeholder="Quick Connect"
                inputProps={{ style: { color: "black" } }}
              >
                <MenuItem value="bybit">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box width={35}>
                        <Box component="img" src={IcoBybit} height={13} />
                      </Box>
                      <Typography fontWeight={600} fontSize={14}>
                        Bybit
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box component="img" src={IcoAttach} />
                      <Typography fontSize={14} color="#00000088">
                        Quick Connect
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem value="bitget">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        width={35}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box component="img" src={IcoBitget} height={18} />
                      </Box>
                      <Typography fontWeight={600} fontSize={14}>
                        Bitget
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Typography fontSize={14} color="#00000088">
                        Coming soon
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem value="binance">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        width={35}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box component="img" src={IcoBinance} height={18} />
                      </Box>
                      <Typography fontWeight={600} fontSize={14}>
                        Binance
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Typography fontSize={14} color="#00000088">
                        Coming soon
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem value="okx">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        width={35}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box component="img" src={IcoOkx} height={14} />
                      </Box>
                      <Typography fontWeight={600} fontSize={14}>
                        OKX
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Typography fontSize={14} color="#00000088">
                        Coming soon
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                px: 2,
                py: 1,
                bgcolor: "#9DACFF",
                color: "black",
                ":hover": {
                  opacity: 0.6,
                  bgcolor: "#9DACFF",
                },
                textTransform: "none",
                mt: 4,
              }}
              fullWidth
              onClick={() => setOpen(true)}
            >
              Connect to Bybit
            </Button>
            <Typography mt={1} fontSize={12}>
              Quick connect - Automatically create encrypted and IP-restricted
              API keys when connecting to Bybit
            </Typography>
          </Box>
        </Box>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box component="img" src={LogoBybit} width={145} height={56} />
            <Box width={510}>
              <Typography color="black" fontSize={20} textAlign="center" mt={6}>
                Authorise third-party data access so they can provide you with
                services.
              </Typography>
              <Box bgcolor="#D9D9D9" px={4} py={2} borderRadius={2} mt={2}>
                <Typography fontSize={14} color="black" fontWeight={600}>
                  Quick API
                </Typography>
                <Typography fontSize={12} color="black">
                  Authorise third-party to create API Keys with read only and
                  trading permission
                </Typography>
              </Box>
              <LoadingButton
                variant="contained"
                sx={{
                  px: 2,
                  py: 1,
                  bgcolor: "#9DACFF",
                  color: "black",
                  ":hover": {
                    opacity: 0.6,
                    bgcolor: "#9DACFF",
                  },
                  textTransform: "none",
                  my: 8,
                  position: "relative",
                }}
                fullWidth
                disableElevation
                type="submit"
                onClick={() => {
                  navigate("/register/connect/394829384938294");
                }}
              >
                Next
                <ArrowRight sx={{ position: "absolute", right: 10 }} />
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConnectRegisterPage;
