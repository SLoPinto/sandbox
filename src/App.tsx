import { useState } from "react";
import { Box } from "@mui/material";
import { Viewer } from "resium";

export default function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  if (navigator.geolocation) {
    {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude: latitude, longitude: longitude });
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        function (error) {
          console.error(`Error getting location: ${error.message}`);
        }
      );
    }
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  return (
    <>
      <Box border={"1px solid white"} borderRadius={"5px"} padding={"48px"}>
        <Box>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</Box>
      </Box>

      <Viewer></Viewer>
    </>
  );
}
