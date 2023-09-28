import React from "react";
import {Box, Typography, Card, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import DescriptionRounded from '@mui/icons-material/DescriptionRounded';
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
const Homepage = () => {
    const navigate=useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Text Summary
              </Typography>
              <Typography variant="h6">Summarise long sentences</Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph
              </Typography>
              <Typography variant="h6">
                Generate paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI CHATBOT
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                ChatBot
              </Typography>
              <Typography variant="h6">Chat with AI chatbot</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI SCI-FI IMAGE
          </Typography>
          <Card
            onClick={() => navigate("/scifi")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Sci-fi images
              </Typography>
              <Typography variant="h6">Generate sci-fi images</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            JS CONVERTER
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">Translate english to js code</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default Homepage;
