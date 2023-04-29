import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import KebabMenu from "components/kebabMenu/kebabMenu";

const Article = ({ article }) => {
  const { title, description, author } = article;
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} mb={2} mt={5}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography>{author?.userName}</Typography>
        </Grid>
        <Grid xs={2}>
          <Stack direction="row">
            <KebabMenu
              options={[
                {
                  label: "Write Story",
                  onClick: () => {
                    navigate("/article/create");
                  },
                },
                {
                  label: "Delete story",
                  // onClick: () => {
                  //   handleUpdateColumnName?.(ele);
                  //   handleColumnDetails?.();
                  // },
                },
              ]}
            />
          </Stack>
        </Grid>
        <Grid xs={4} />
        <Grid xs={8}>
          <Typography>{description}</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography>{author?.userName}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
