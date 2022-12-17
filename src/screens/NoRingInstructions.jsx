import { Button, Grid, Slider, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Background from "../assets/background.png";
import { ringLength } from "../../utils/RingMeasures";

function NoRingInstructions() {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const [measure, setMeasure] = useState(ringLength.get(0.3));

  const handleSliderChange = (e) => {
    setValue(e.target.value);
    setMeasure(ringLength.get(e.target.value));
  };

  return (
    <Grid
      display="flex"
      height={window.innerHeight}
      position="relative"
      flexDirection="column"
      alignItems={{ md: "center" }}
    >
      <Grid
        container
        height={window.innerHeight}
        position="absolute"
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
        }}
      />
      <Grid
        container
        p={2}
        justifyContent="center"
        sx={{ maxWidth: { md: 600 } }}
      >
        <Typography>
          <span style={{ fontWeight: 600, fontSize: 20 }}>
            Instruções: <br />
          </span>
          Arraste a bolinha até que indique a medida exata da circuferência do
          seu dedo, conforme você mediu seguindo as orientações da tela
          anterior.
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        mt={5}
        flex={0.9}
        p={2}
        sx={{ maxWidth: { md: 600 } }}
      >
        <Typography fontWeight={600} fontSize={22}>
          {`${measure} cm`}
        </Typography>
        <Slider
          sx={{
            span: { backgroundColor: "#000", border: 0 },
            maxWidth: "95%",
            marginTop: -5,
            height: 6,
          }}
          valueLabelDisplay="auto"
          step={0.1}
          min={0.3}
          max={3.2}
          value={value}
          onChange={(e) => handleSliderChange(e)}
        />
        <Typography fontWeight={600} fontSize={22} mt={-7}>
          Arraste a barra horizontal!
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        gap={2}
        p={2}
        flexDirection={{ md: "column" }}
        alignItems={{ md: "center" }}
      >
        <Typography fontWeight={600} fontSize={30}>
          {`Aro: ${value * 10}`}
        </Typography>
        <Button
          onClick={() =>
            (window.location.href = localStorage.getItem("backURL"))
          }
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
          <Typography fontWeight={600} py={1}>
            Voltar para o site Pedranel
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
  );
}
export default NoRingInstructions;
