import CustomerHeader from "../../components/customerHeader";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { Box, Typography, FormLabel, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import EllipseImg from "../../assets/Ellipse 8.png";
import Path2 from "../../assets/Path 2 Copy.png";
import HomeLogo from "../../assets/home 1.png";
import { BarChart } from "@mui/x-charts";
import FormInput from "../../components/FormInput";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const ProfileCustomerPage = () => {
  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const [year, setYear] = useState(2025);
  const [status, setStatus] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setYear(parseInt(event.target.value));
  };

  return (
    <>
      <CustomerHeader />
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 3,
          py: 5,
          backgroundColor: "#F7F7F7",
          gap: 4,
        }}
      >
        {/* Performance Overview */}
        <Box component={"section"} sx={{ flex: 1 }}>
          {/* Title */}
          <Typography
            fontSize={30}
            color={"#4C009B"}
            sx={{ margin: "0px 30px 30px" }}
          >
            Performance Overview
          </Typography>

          {/* Performance Overview Progress */}
          <Box
            component={"section"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "18px",
              gap: 2,
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "#4C0098",
                display: "flex",
                padding: "0px 20px",
                flex: 1,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Path2}
                  style={{ position: "absolute", top: "47px" }}
                />
                <img
                  src={EllipseImg}
                  style={{ position: "absolute", top: "49px" }}
                />
                <Typography fontSize={"24px"} fontWeight={700} color={"white"}>
                  USDT
                </Typography>
                <Typography fontSize={"24px"} fontWeight={700} color={"white"}>
                  0
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  fontSize={"20px"}
                  fontWeight={400}
                  lineHeight={"24px"}
                  color={"white"}
                  sx={{
                    marginBottom: "13px",
                    top: "70px",
                  }}
                >
                  0%
                </Typography>
                <Typography
                  fontSize={"16px"}
                  fontWeight={700}
                  lineHeight={"24px"}
                  color={"white"}
                  sx={{
                    marginBottom: "13px",
                    top: "120px",
                  }}
                >
                  Total Amount Earned
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "#4C0098",
                display: "flex",
                padding: "0px 20px",
                flex: 1,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Path2}
                  style={{ position: "absolute", left: "80px", top: "47px" }}
                />
                <img
                  src={EllipseImg}
                  style={{ position: "absolute", top: "49px" }}
                />
                <Typography fontSize={"24px"} fontWeight={700} color={"white"}>
                  0
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "240px",
                  position: "relative",
                }}
              >
                <Typography
                  fontSize={"20px"}
                  fontWeight={400}
                  lineHeight={"24px"}
                  color={"white"}
                  sx={{
                    marginBottom: "13px",
                    position: "absolute",
                    top: "70px",
                  }}
                >
                  0
                </Typography>
                <Typography
                  fontSize={"16px"}
                  fontWeight={700}
                  lineHeight={"24px"}
                  color={"white"}
                  sx={{
                    marginBottom: "13px",
                    position: "absolute",
                    top: "120px",
                  }}
                >
                  Total Transaction
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Monthly Income Report */}
          <Box
            component={"section"}
            sx={{
              height: "412px",
              backgroundColor: "white",
              width: "100%",
              borderRadius: "10px",
              border: "2px solid #F0F0F0",
              padding: "0px 15px",
            }}
          >
            <Box
              sx={{
                margin: "30px 0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontSize={"14px"} fontWeight={600} color={"#4C0098"}>
                Monthit Income Report
              </Typography>
              <Select
                value={year.toString()}
                label="Year"
                onChange={handleChange}
                sx={{
                  border: "1px solid #CB3CFF",
                  borderRadius: "25px",
                  width: "130px",
                  fontSize: "12px",
                  fontWeight: "600",
                  textAlign: "center",
                  height: "35px",
                }}
              >
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2025}>2025</MenuItem>
                <MenuItem value={2023}>2026</MenuItem>
                <MenuItem value={2023}>2027</MenuItem>
                <MenuItem value={2023}>2028</MenuItem>
                <MenuItem value={2023}>2029</MenuItem>
                <MenuItem value={2023}>2030</MenuItem>
                <MenuItem value={2023}>2031</MenuItem>
              </Select>
            </Box>
            <BarChart
              series={[]}
              height={290}
              yAxis={[
                { data: ["1", "2", "3", "4", "5", "6"], scaleType: "band" },
              ]}
              xAxis={[
                {
                  data: [
                    "1/24",
                    "2/24",
                    "3/24",
                    "4/24",
                    "5/24",
                    "6/24",
                    "7/24",
                    "8/24",
                    "9/24",
                    "10/24",
                    "11/24",
                    "12/24",
                  ],
                  scaleType: "band",
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 5, right: 10 }}
            />
          </Box>
        </Box>

        {/* Jennie Wong Profile */}
        <Box component={"section"} sx={{ flex: 1 }}>
          <FormProvider {...methods}>
            <Typography
              fontSize={"30px"}
              color={"#4C009B"}
              textAlign={"center"}
            >
              Jennie Wong Profile
            </Typography>
            <Typography
              fontSize={"14px"}
              fontWeight={400}
              color={"black"}
              textAlign={"right"}
            >
              Since : 8/2024
            </Typography>
            <Box sx={{ backgroundColor: "white", padding: "10px 30px" }}>
              <Box display="flex" gap={3}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    First Name
                  </FormLabel>
                  <FormInput
                    name="firstname"
                    label="First Name"
                    outline="#B9B9B9"
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    Last Name
                  </FormLabel>
                  <FormInput
                    name="lastname"
                    label="Last Name"
                    outline="#B9B9B9"
                  />
                  <Typography
                    fontSize={"10px"}
                    textAlign={"left"}
                    color={"#1B45D9"}
                  >
                    Assigned by MarsCAPITA
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={3}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>Age</FormLabel>
                  <FormInput name="age" label="Age" outline="#B9B9B9" />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flex: 1,
                    }}
                    value={"female"}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </Box>
              </Box>
              <Box display="flex" gap={3}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>Email</FormLabel>
                  <FormInput name="email" label="Email" outline="#B9B9B9" />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>Mobile</FormLabel>
                  <FormInput name="mobile" label="Mobile" outline="#B9B9B9" />
                </Box>
              </Box>
              <Box display="flex" gap={3}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    Password
                  </FormLabel>
                  <FormInput
                    name="password"
                    label="Password"
                    outline="#B9B9B9"
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>Agent</FormLabel>
                  <FormInput name="agent" label="Agent" outline="#B9B9B9" />
                </Box>
              </Box>
              <Divider sx={{ margin: "80px 0px 30px" }} />
              <Box display="flex" gap={3}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    Exchange
                  </FormLabel>
                  <FormInput name="exchange" label="Bybit" outline="#B9B9B9" />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    Exchange Account UID
                  </FormLabel>
                  <FormInput name="uid" label="" outline="#B9B9B9" />
                </Box>
              </Box>
              <Box display="flex" gap={3}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    API Key
                  </FormLabel>
                  <FormInput
                    name="apikey"
                    label="xxxxxxxxxxxxxxxxxxxxx"
                    outline="#B9B9B9"
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1, fontSize: "14px" }}>
                    API Secret Key
                  </FormLabel>
                  <FormInput
                    name="apisecretkey"
                    label="xxxxxxxxxxxxxxxxxxxxx"
                    outline="#B9B9B9"
                  />
                </Box>
              </Box>
            </Box>
          </FormProvider>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
              ml: 4,
            }}
          >
            <Box>
              <Typography
                sx={{ marginBottom: "5px", marginLeft: "10px" }}
                fontSize={"14px"}
                fontWeight={400}
              >
                Status
              </Typography>
              <Button
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "black",
                  backgroundColor: "#FF3C3C",
                  borderRadius: "20px",
                  padding: "15px 48px",
                  width: "250px",
                }}
                onClick={() => setStatus(1 - status)}
              >
                {!status ? "Pending Approval" : "Active"}
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}></Box>
            <img src={HomeLogo} width={"38px"} height={"38px"} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileCustomerPage;
