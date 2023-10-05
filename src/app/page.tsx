import { Box, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";

type Hyperlink = {
  text: string,
  url: string
};

const hyperlinks = [
  {
    text: "twitter",
    url: "https://twitter.com/kkosuka"
  },
  {
    text: "soundcloud",
    url: "https://soundcloud.com/user-289046981"
  },
  {
    text: "wip",
    url: "/portfolio"
  },
  {
    text: "instagram",
    url: "https://www.instagram.com/kkosuka/"
  },
  {
    text: "youtube",
    url: "https://www.youtube.com/@kosukaa/",
  },
  {
    text: "fun stuff",
    url: "https://cdn.discordapp.com/attachments/526550053209243666/1064577499243233371/IMG_6557.png",
  },
  {
    text: "email",
    url: "mailto:amoresjerrick@gmail.com",
  },
] as Hyperlink[];

export default function Home() {
  return (
  <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "125px",
          fontWeight: "700",
          letterSpacing: "-3px",
          lineHeight: "1"
        }}
      >
        kosuka
      </Typography>
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "600",
        }}
      >
        ux design // music
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
          marginTop: "10px",
          width: "960px"
        }}
      >
        Hey I'm Jerrick! I also go by kosuka or azivure. I'm a ux design
        student and I like to make music! I'm always down to collaborate with
        others on projects and learn more about design in general along the
        way. Shoot me an email or DM me on discord (kkosuka)!
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        sx={{
          margin: "30px 0px 0px 0px"
        }}
      >
        {
          hyperlinks.map((hyperlink) => {
              return (
                <Link
                  component={NextLink}
                  href={hyperlink.url}
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#CB83C7"
                    }
                  }}
                >
                  {hyperlink.text}
                </Link>
              )
            }
          )
        }
      </Stack>
    </Box>
  </>
  )
};