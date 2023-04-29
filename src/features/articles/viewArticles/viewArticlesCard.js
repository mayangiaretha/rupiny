import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { StyledTypography, More } from "./viewArticle.styles";
import { COLORS } from "../../../styles/theme";

const stockImage =
  "https://s3.amazonaws.com/gv2016wp/wp-content/uploads/20150624200319/150624-The_Current_state_of_blogging_1200x628-01.png";

const ViewArticlesCard = ({ article }) => {
  const { author, title, description, articleUrl, articleId } = article;
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={articleUrl || stockImage}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {author.userName}
        </Typography>
        <StyledTypography gutterBottom variant="h2" component="div">
          {title}
        </StyledTypography>
        <StyledTypography gutterBottom variant="h5" component="div">
          {description}
        </StyledTypography>
      </CardContent>
      <CardActions>
        <More size="small" fontcolor={COLORS.BLUE} border="none">
          <Link to={`/article/${articleId}`} style={{ textDecoration: "none" }}>
            <Typography variant="h6">Read More</Typography>
          </Link>
        </More>
      </CardActions>
    </Card>
  );
};
export default ViewArticlesCard;
