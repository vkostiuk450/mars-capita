import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

import IconDashboard from "../../assets/ico-eye__sider.png";
import IconParameters from "../../assets/ico-message__sider.png";
import IconStrategy from "../../assets/ico-doc__sider.png";
import IconOrder from "../../assets/ico-price__sider.png";
import IconApproval from "../../assets/ico-community__sider.png";
import IconStaff from "../../assets/ico-people__sider.png";
import { useLocation, useNavigate } from "react-router";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";

type ListItemType = {
  icon?: string;
  text: string;
  nests?: ListItemType[];
  collapse?: boolean;
  link: string;
};

const Sidebar = () => {
  const [sideItems, setSideItems] = useState<ListItemType[]>([
    { icon: IconDashboard, text: "Dashboard", link: "/dashboard" },
    {
      icon: IconParameters,
      text: "Presetting Parameters",
      link: "/parameters",
    },
    {
      icon: IconStrategy,
      text: "Strategy Setting Record",
      link: "/strategy",
    },
    {
      icon: IconOrder,
      text: "Order & Alert",
      link: "/order",
    },
    {
      icon: IconApproval,
      text: "Approval Status (New Registration)",
      link: "/approval",
    },
    {
      icon: IconStaff,
      text: "Clientele & Staff",
      link: "/staff",
      nests: [
        { text: "AgentList", link: "/staff/agent" },
        { text: "Employee List", link: "/staff/employee" },
        { text: "Customer List", link: "/staff/customer" },
      ],
      collapse: false,
    },
  ]);

  let location = useLocation();
  const navigate = useNavigate();

  return (
    <Box width={250} bgcolor="#D8D8D8" pt={4} px={2}>
      <List component="nav">
        {sideItems.map((item, index) => (
          <Box key={`side-item__${index}`}>
            <ListItemButton onClick={() => navigate(item.link)}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Box component="img" src={item.icon!} width={20} height={15} />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 12,
                  color: location.pathname === item.link ? "#4C009B" : "#000",
                }}
              />
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  sideItems[index].collapse = !sideItems[index].collapse;
                  setSideItems([...sideItems]);
                }}
              >
                {!item.collapse ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowDown />
                )}
              </IconButton>
            </ListItemButton>
            {item.nests && (
              <Collapse in={item.collapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.nests.map((nest_item, nest_index) => (
                    <ListItemButton
                      sx={{ pl: 8 }}
                      key={`side-item__${index}-nest__${nest_index}`}
                      onClick={() => navigate(nest_item.link)}
                    >
                      <ListItemText
                        primary={nest_item.text}
                        primaryTypographyProps={{
                          fontSize: 12,
                          color:
                            location.pathname === nest_item.link
                              ? "#4C009B"
                              : "#000",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
