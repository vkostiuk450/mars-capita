import {
  Box,
  TextField,
  Typography,
  Alert,
  IconButton,
  Collapse,
} from "@mui/material";
import LogoSide from "../../assets/bg-logo__side.png";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@mui/icons-material";
import IcoArrow from "../../assets/ico-arrow__reg.png";
import IcoBybit from "../../assets/ico-bybit__reg.png";
import { useState } from "react";
import { Close } from "@mui/icons-material";

const LVL1RegisterPage = () => {
  const navigate = useNavigate();
  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);

  return (
    <Box display="flex" height="100vh">
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#4C0098",
        }}
      >
        <Box component="img" src={LogoSide} />
        <Typography
          color="white"
          fontSize={22}
          width={289}
          textAlign="center"
          mt={1}
        >
          Your Fund | Your Account Your Profit{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 8,
          bgcolor: "#F7F7F7",
        }}
      >
        <Typography
          color="#4C0098"
          fontWeight={500}
          fontSize={30}
          width={650}
          mb={4}
          textAlign="center"
        >
          Currently, our services is by invitation-only. Please get a “
          <Box component="span" color="#E80345">
            Registration ID
          </Box>
          ” from your Agent.
        </Typography>
        <Box width={500}>
          <Typography color="#5C5C5C" ml={1} mb={1}>
            Registration ID
          </Typography>

          <TextField size="small" fullWidth />

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
              mt: 4,
              position: "relative",
            }}
            fullWidth
            disableElevation
            type="submit"
            onClick={() => {
              navigate("/register/lvl2/394829384938294");
            }}
          >
            Next
            <ArrowRight sx={{ position: "absolute", right: 10 }} />
          </LoadingButton>

          <Box
            bgcolor="#3C59FF44"
            display="flex"
            justifyContent="space-between"
            p={1}
            borderRadius={2}
            mt={3}
            sx={{ position: "relative" }}
          >
            <Typography color="#000000AA">What is Registration ID</Typography>
            <Box
              bgcolor="#D81E06"
              borderRadius="50%"
              width={20}
              height={20}
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize={12}
              onClick={() => setOpenAlert1(true)}
            >
              ?
            </Box>
            <Collapse
              in={openAlert1}
              sx={{ position: "absolute", top: "110%", right: 10 }}
            >
              <Alert
                icon={false}
                action={
                  <IconButton
                    aria-label="close"
                    size="small"
                    onClick={() => {
                      setOpenAlert1(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2, bgcolor: "white", width: 420 }}
              >
                <Typography
                  textAlign="center"
                  color="#E80345"
                  fontSize={14}
                  fontWeight={600}
                >
                  What is a Registration ID?
                </Typography>
                <Typography color="black" fontSize={11} textAlign="center">
                  Since our service is by invitation only, please request from
                  your agent to provide you a “
                  <Box component="span" color="#E80345" fontWeight={600}>
                    Registration ID
                  </Box>
                  ” so you can register with us.
                </Typography>
              </Alert>
            </Collapse>
          </Box>

          <Box component="hr" mx={1} mt={4} />

          <Box
            display="flex"
            gap={5}
            justifyContent="space-between"
            px={1}
            mt={2}
            position="relative"
          >
            <Box>
              <Typography color="#E80345" fontWeight={600}>
                Important:
              </Typography>
              <Typography fontWeight={600}>
                Please ensure you have registered an exchange account using our
                Referral Code.
              </Typography>
            </Box>
            <Box display="flex" alignItems="flex-end">
              <Box
                bgcolor="#D81E06"
                borderRadius="50%"
                width={20}
                height={20}
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize={12}
                onClick={() => setOpenAlert2(true)}
              >
                ?
              </Box>
            </Box>
            <Collapse
              in={openAlert2}
              sx={{ position: "absolute", top: "110%", right: 10 }}
            >
              <Alert
                icon={false}
                action={
                  <IconButton
                    aria-label="close"
                    size="small"
                    onClick={() => {
                      setOpenAlert2(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2, bgcolor: "white", width: 420 }}
              >
                <Typography
                  textAlign="center"
                  color="#4C0098"
                  fontSize={14}
                  fontWeight={600}
                >
                  Why you need to use our Exchange Referral Code?
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={1}
                  mt={2}
                  color="black"
                >
                  <Box display="flex" gap={1} fontSize={11}>
                    1.
                    <Typography fontSize={11}>
                      If you don't have an exchange account, please register
                      with the following exchange before signing up for
                      <Box component="span" color="#4C0098" fontWeight={600}>
                        {" "}
                        MarsCAPITA.
                      </Box>
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} fontSize={11}>
                    2.
                    <Typography fontSize={11}>
                      Please follow the link below and{" "}
                      <Box component="span" fontWeight={600} color="#E80345">
                        “MAKE SURE TO ENTER”
                      </Box>{" "}
                      the referral code provided.
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} fontSize={11}>
                    3.
                    <Typography fontSize={11}>
                      For us to recognize your exchange account, you{" "}
                      <Box component="span" fontWeight={600} color="#E80345">
                        “MUST”
                      </Box>{" "}
                      use our Referral Code below.
                    </Typography>
                  </Box>
                </Box>
              </Alert>
            </Collapse>
          </Box>

          <Box
            mt={8}
            display="flex"
            alignItems="flex-end"
            flexDirection="column"
            gap={1}
          >
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              gap={1}
            >
              <Box component="img" src={IcoArrow} width={17} height={17} />
              <Box component="img" src={IcoBybit} width={63} height={25} />
            </Box>
            <Box bgcolor="#D9D9D9" px={2} py={1} fontSize={11} borderRadius={2}>
              Referal Code:{" "}
              <Box component="span" color="#E80345">
                20480
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LVL1RegisterPage;
