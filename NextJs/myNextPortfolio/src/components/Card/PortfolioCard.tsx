import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
    <Card sx={{ maxWidth: 545, boxShadow: 5 }}>
      <CardMedia sx={{ height: 340   }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        {description}
      </Typography> */}
      </CardContent>
      <CardActions>
        <PrimaryButton text="Github" />
        <PrimaryButton text="Live demo"  />
        <Button size="small" variant="outlined" href={github}>Github</Button>
        <Button size="small" variant="outlined" href={demo}>Demo</Button>
      </CardActions>
    </Card>
  );
}
