import {
    Box,
    Typography
} from "@mui/material";
import MarsCapitaLogo from "../assets/MarsCapita-Purple 3.png"
import LogoAvatar from "../assets/3D Logo 4 3.png"
import userAvatar from "../assets/user avatar.png"

const CustomerHeader = () => {
    return (
       <Box component={"section"} sx={{backgroundColor: "#D8D8D8", height: "83px", width: "100%", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <img src={MarsCapitaLogo} style={{margin: "0px 37px"}} />
            <Box sx={{flex: "1"}} />
            <Box component={"section"} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={userAvatar} style={{width: "24px", height: "24px", margin:"0px 6px"}} />
                <Box component={"section"}>
                    <Typography fontSize={"12px"} color={"#4C0098"} >Jennie Wong</Typography>
                    <Typography fontSize={"12px"} color={"#4C0098"}>VIP</Typography>
                </Box>
            </Box>
            <img src={LogoAvatar} style={{margin: "0px 50px"}} />
       </Box>
    );
};
  
export default CustomerHeader;
  