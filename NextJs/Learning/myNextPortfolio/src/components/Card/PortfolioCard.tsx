import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../Button/PrimaryButton";

interface PortfolioAttrs {
  title: string;
  image: string;
  github: string;
  demo: string;
}

export default function PortfolioCard({
  title,
  image,
  github,
  demo,
}: PortfolioAttrs) {
  return (
    <Card
      sx={{
        maxWidth: 545,
        boxShadow: 5,
        transition: "transform 0.3s ease-in-out",
      }}
      className="hover:scale-105 hover:cursor-pointer"
    >
      <CardMedia sx={{ height: 340 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <PrimaryButton text="Github" href={github} />
        <PrimaryButton text="Live demo" href={demo} />
      </CardActions>
    </Card>
  );
}
