import { Typography } from "@mui/material";

const ImageCredit = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        color: "#ff6f3c",
        position: "absolute",
        bottom: "5px",
        left: "5px",
      }}
    >
      Chess piece designs by{" "}
      <a
        target="_blank"
        href="//commons.wikimedia.org/wiki/User:Cburnett"
        title="User:Cburnett"
      >
        Cburnett
      </a>{" "}
      -{" "}
      <span className="int-own-work" lang="en">
        Own work
      </span>
      ,{" "}
      <a
        target="_blank"
        href="http://creativecommons.org/licenses/by-sa/3.0/"
        title="Creative Commons Attribution-Share Alike 3.0"
      >
        CC BY-SA 3.0
      </a>
      ,{" "}
      <a
        target="_blank"
        href="https://commons.wikimedia.org/w/index.php?curid=1499803"
      >
        Link
      </a>
    </Typography>
  );
};

export default ImageCredit;
