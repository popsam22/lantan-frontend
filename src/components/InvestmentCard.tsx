import { Card, CardContent, Typography, Box } from "@mui/material";
import profits from "../assets/_Change.svg";
import loss from "../assets/-Change.svg";
import wallet from "../assets/Component 1.svg";
import people from "../assets/Component 2.svg";
import property from "../assets/Apartment_Home_Icon_UIAproperty.png";
import { CardProp } from "../types";

const InvestmentCard = ({ title, amount, profit, icon }: CardProp) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        border: "1px solid #E8E8E8",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: " 0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontSize: "0.75rem",
            color: "#3D3D3D",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            color: "#2E2E2E",
            letterSpacing: "0.025em",
          }}
        >
          {amount}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4px",
          }}
        >
          <Box>
            {profit === true ? (
              <img src={profits} alt="profit %" />
            ) : profit === false ? (
              <img src={loss} alt="loss %" />
            ) : null}
          </Box>
          {icon === "wallet" ? (
            <Box
              sx={{
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              {<img src={wallet} alt="wallet" />}
            </Box>
          ) : icon === "people" ? (
            <Box
              sx={{
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              {<img src={people} alt="people" />}
            </Box>
          ) : (
            <Box
              sx={{
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              {<img src={property} alt="property" />}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
