import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function App() {
  const canvasRef = useRef(null);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Matrix background effect
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 100);
    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflowY: "auto",
        height: "100vh",
        bgcolor: "black",
        color: "#00FF00",
        fontFamily: "'Source Code Pro', monospace",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      {/* Time and Date */}
      <Box
        sx={{
          position: "fixed",
          top: 10,
          width: "100%",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography variant="body2">
          {dateTime.toLocaleString()}
        </Typography>
      </Box>

      {/* Content */}
      <Stack
        spacing={6}
        sx={{
          position: "relative",
          zIndex: 1,
          p: { xs: 2, md: 6 },
          textAlign: "center",
        }}
      >
        {/* Hero Section */}
        <Box>
          <img
            src="/images/steve.png"
            alt="Gregory Steve"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "3px solid #00FF00",
              boxShadow: "0 0 25px #00FF00",
            }}
          />
          <Typography variant="h4" sx={{ mt: 2 }}>
            Gregory Steve
          </Typography>
          <Typography variant="subtitle1">
            Software Engineering Student | Problem Solver
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00FF00",
                color: "#00FF00",
                "&:hover": { bgcolor: "#00FF00", color: "black" },
              }}
              href="updatedcv1.pdf"
              target="_blank"
            >
              View CV
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00FF00",
                color: "#00FF00",
                "&:hover": { bgcolor: "#00FF00", color: "black" },
              }}
              href="updatedcv1.pdf"
              download
            >
              Download CV
            </Button>
          </Stack>
        </Box>

        {/* Skills Section */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            {[
              "React",
              "Python",
              "C",
              "Vanilla JS",
              "HTML",
              "CSS",
              "Node.js",
              "OOP"
            ].map((skill) => (
              <Grid item xs={6} sm={4} key={skill}>
                <Box
                  sx={{
                    border: "1px solid #00FF00",
                    borderRadius: "8px",
                    py: 1,
                    "&:hover": { bgcolor: "rgba(0,255,0,0.1)" },
                  }}
                >
                  {skill}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects Section */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Projects
          </Typography>
          <Typography variant="body2">
            KYUAPP<br/> 
            EDUPULSE <br/>
            STUDYBUDDY <br/>
            TASKMASTER<br/>
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Contact Me
          </Typography>
          <Stack spacing={3} alignItems="center">
            <Stack alignItems="center">
              <IconButton
                href="https://wa.me/0719637416"
                target="_blank"
                sx={{
                  color: "#00FF00",
                  "&:hover": { color: "#00FF00", transform: "scale(1.1)" },
                }}
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">Whatsapp</Typography>
            </Stack>

            <Stack alignItems="center">
              <IconButton
                href="https://instagram.com/reddevcode"
                target="_blank"
                sx={{
                  color: "#00FF00",
                  "&:hover": { color: "#00FF00", transform: "scale(1.1)" },
                }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">Instagram</Typography>
            </Stack>

            <Stack alignItems="center">
              <IconButton
                href="https://facebook.com/gregorysteveotieno"
                target="_blank"
                sx={{
                  color: "#00FF00",
                  "&:hover": { color: "#00FF00", transform: "scale(1.1)" },
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">Facebook</Typography>
            </Stack>

            <Stack alignItems="center">
              <IconButton
                href="https://x.com/GregorySte60812"
                target="_blank"
                sx={{
                  color: "#00FF00",
                  "&:hover": { color: "#00FF00", transform: "scale(1.1)" },
                }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">X (Twitter)</Typography>
            </Stack>

            <Typography variant="body2" sx={{ mt: 4 }}>
              📧 gregorystephen2006@gmail.com
            </Typography>
          </Stack>
        </Box>

        {/* Footer */}
        <Typography variant="caption" sx={{ mt: 4 }}>
          © 2025 Gregory Steve 
        </Typography>
      </Stack>
    </Box>
  );
}