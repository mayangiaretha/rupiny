import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ViewArticlesCard = ({ article }) => {
  const { author, title } = article;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">{article}</Button> */}
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default ViewArticlesCard;
