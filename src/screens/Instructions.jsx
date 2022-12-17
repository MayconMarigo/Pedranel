import { Button, Divider, Grid, Typography } from "@mui/material";
import Background from "../assets/background.png";

import { useNavigate } from "react-router-dom";

import InstructionsGif from "../assets/instructions.gif";

function Instructions() {
  const navigate = useNavigate();
  return (
    <Grid
      position="relative"
      justifyContent="center"
      height={window.innerHeight}
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
          opacity: 0.15,
        }}
      />
      <Grid
        position="absolute"
        container
        justifyContent="center"
        flexDirection={{ md: "column" }}
        alignItems={{ md: "center" }}
      >
        <img
          src={InstructionsGif}
          style={{ width: "80%", marginTop: 20, maxWidth: 600 }}
        />
        <Grid
          container
          mt={2}
          justifyContent="center"
          xs={11}
          item
          sx={{ maxWidth: { md: 600 } }}
        >
          <Typography>
            <span style={{ fontWeight: 600, fontSize: 20 }}>
              Instruções: <br />
            </span>
            1 - Enrole um fio em seu dedo (apenas uma volta).
            <br />
            2 - Marque no fio o ponto onde se encontraram. <br />3 - Estenda o
            fio sobre uma régua e anote o valor do comprimento entre os dois
            pontos.
          </Typography>
          <Divider
            sx={{ backgroundColor: "#000", width: "100%", marginY: 1 }}
          />
          <Typography>
            Para mais informações de medição, acesse{" "}
            <a href="https://pedranel.com/wp-content/uploads/2022/12/Pedranel-Guia-de-Tamanho-dos-Aneis-para-comprar-online-ourivesaria-2020-2022.pdf">
              NOSSO PDF
            </a>
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="center"
          gap={2}
          mt={3}
          xs={11}
          item
          flexDirection={{ md: "column" }}
          alignItems={{ md: "center" }}
        >
          <Button
            onClick={() => navigate("semanel")}
            sx={{
              width: "100%",
              maxWidth: { md: 600 },
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
            <Typography fontWeight={500} py={1}>
              Já tenho a medida!
            </Typography>
          </Button>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              width: "100%",
              maxWidth: { md: 600 },
              textTransform: "none",
              backgroundColor: "#fafafa",
              boxShadow: "0px 0px 1px 0.1px gray",
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
              Voltar
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Instructions;
