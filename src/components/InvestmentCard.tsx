import { Card, CardContent, Typography, Box } from "@mui/material";
import profits from "../assets/_Changeprofit.png";
import loss from "../assets/_Changeloss.png";
import wallet from "../assets/walletwallet.png";

const InvestmentCard = ({ title, amount, profit }: CardProp) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{amount}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4px",
          }}
        >
          <Box>
            {profit ? (
              <img src={profits} alt="profit %" />
            ) : (
              <img src={loss} alt="loss %" />
            )}
          </Box>
          <Box>
            <img src={wallet} alt="wallet" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
