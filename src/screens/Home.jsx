import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import Background from "../assets/background.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [goBack, setGoBack] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (document.referrer) {
      localStorage.setItem("backURL", document.referrer);
      setGoBack(document.referrer);
    } else {
      localStorage.setItem("backURL", "");
    }
  }, [goBack]);

  return (
    <Grid
      height={window.innerHeight}
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Grid
        container
        height={window.innerHeight}
        position="absolute"
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
        }}
      />
      <Box
        top={0}
        height={140}
        width={"100%"}
        position="absolute"
        sx={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: { xs: "90%", sm: "400px" },
          backgroundPositionX: "center",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: 140 },
        }}
      />
      <Grid
        position="absolute"
        flexDirection="column"
        bottom={0}
        container
        alignItems="center"
        gap={2}
        mb={5}
      >
        <Button
          onClick={() => navigate("medicaoanel")}
          sx={{
            width: "100%",
            maxWidth: { xs: "85%", md: 600 },
            height: 50,
            textTransform: "none",
            boxShadow: "0px 0px 1px 0.1px gray",
            backgroundColor: "#000",
            color: "#fff",
            outline: 0,
            border: 0,
            "&:hover": {
              backgroundColor: "#1e1e1e",
            },
            "&:focus": {
              outline: "0 !important",
            },
          }}
        >
          <Typography fontWeight={600} py={1}>
            Tenho um anel para usar de modelo
          </Typography>
        </Button>
        <Button
          onClick={() => navigate("instrucoes")}
          sx={{
            width: "100%",
            maxWidth: { xs: "85%", md: 600 },
            height: 50,
            textTransform: "none",
            backgroundColor: "#fafafa",
            boxShadow: "0px 0px 10px 0.1px gray",
            color: "#000",
            outline: 0,
            border: 0,
            "&:hover": {
              backgroundColor: "#fcb2be",
            },
            "&:focus": {
              outline: "0 !important",
            },
          }}
        >
          <Typography fontWeight={600} py={1}>
            Não tenho nenhum anel para modelo
          </Typography>
        </Button>
        <Button
          onClick={() => {
            window.location.href = goBack.includes("ped")
              ? goBack
              : "https://pedranel.com";
          }}
          sx={{
            width: "100%",
            maxWidth: { xs: "85%", md: 600 },
            height: 50,
            textTransform: "none",
            backgroundColor: "#fafafa",
            boxShadow: "0px 0px 10px 0.1px gray",
            color: "#000",
            outline: 0,
            border: 0,
            "&:hover": {
              backgroundColor: "#fcb2be",
            },
            "&:focus": {
              outline: "0 !important",
            },
          }}
        >
          <Typography fontWeight={600} py={1}>
            Voltar para a página do produto
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
