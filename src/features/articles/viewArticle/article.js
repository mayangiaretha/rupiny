import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import KebabMenu from "components/kebabMenu/kebabMenu";
import DeleteModal from "components/deleteModal/deleteModal";
import { useDispatch } from "react-redux";
import { deleteAnArticle } from "../articles.actions";

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const { title, description, author, articleId } = article;
  const [openDelete, setOpenDelete] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await dispatch(deleteAnArticle(articleId));
    setOpenDelete(false);
    navigate("/");
  };

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
                  label: "Edit Story",
                  onClick: () => {
                    navigate("/article/create");
                  },
                },
                {
                  label: "Delete story",
                  onClick: () => {
                    setOpenDelete(true);
                  },
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
      {openDelete && (
        <DeleteModal
          open={openDelete}
          handleClick={() => setOpenDelete(false)}
          title={title}
          handleRemoveClick={() => handleDelete()}
          subtitle={title}
        />
      )}
    </Container>
  );
};

export default Article;
