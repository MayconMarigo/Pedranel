import { Box, Button, Grid, Slider, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { measures } from "../../utils/RingMeasures";
import Background from "../assets/background.png";
import Ring from "../assets/ring.png";
import InnerRing from "../assets/inner-ring.png";

function HasRing() {
  const navigate = useNavigate();
  const [size, setSize] = useState(0.3);
  const [width, setWidth] = useState(measures.get(0.3));

  const handleSliderChange = (e) => {
    setSize(e.target.value);
    setWidth(measures.get(e.target.value));
  };

  return (
    <Grid
      position="relative"
      container
      height={window.innerHeight}
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
          opacity: 0.1,
        }}
      />
      <Grid
        position="absolute"
        container
        justifyContent="center"
        height={"100%"}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: 8,
            border: "2px dashed black",
            marginTop: 2.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img src={Ring} style={{ width: width, marginTop: -80 }} />
          <img
            src={InnerRing}
            style={{ width: width, position: "absolute", marginTop: -80 }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: 15,
              textAlign: "center",
              width: "90%",
            }}
          >
            <b>Considere:</b>
            <br />
            <br />
            <span
              style={{
                border: "3px solid #000",
                padding: "2px 5px",
                marginRight: 10,
              }}
            >
              Aro do anel
            </span>
            <span style={{ border: "3px dashed green", padding: "2px 10px" }}>
              Dedo
            </span>
          </Typography>
        </Box>
        <Grid container item justifyContent="center" xs={11}>
          <Typography fontWeight={600} fontSize={30}>
            {`ARO: ${size * 10}`}
          </Typography>
        </Grid>
        <Grid
          container
          item
          justifyContent={{ sm: "center" }}
          xs={10}
          mt={2}
          sx={{ maxWidth: { md: 600 } }}
        >
          <Slider
            sx={{
              span: { backgroundColor: "#000", border: 0 },
              marginTop: -5,
              height: 6,
            }}
            valueLabelDisplay="auto"
            step={0.1}
            min={0.3}
            max={3.2}
            value={size}
            onChange={(e) => handleSliderChange(e)}
          />
          <Typography>
            <span style={{ fontWeight: 600, fontSize: 20 }}>
              Instruções: <br />
            </span>
            Posicione O ANEL na figura acima e ajuste-a até que fiquem do mesmo
            tamanho. <br />
            <b>
              OBS: Caso o seu anel modelo for anatômico, considere um número a
              menos do aro.
            </b>
          </Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          gap={2}
          item
          xs={11}
          alignItems="center"
        >
          <Button
            onClick={() =>
              (window.location.href = localStorage
                .getItem("backURL")
                .includes("ped")
                ? window.history.go(-2)
                : "https://pedranel.com")
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
export default HasRing;
