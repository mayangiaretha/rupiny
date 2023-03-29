import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ViewArticlesCard from "./viewArticlesCard";
import { getAllArticles } from "../articles.actions";
import Navbar from "../../../layouts/Navbar/Navbar";

const ViewArticles = () => {
  const dispatch = useDispatch();
  const [allArticles, setAllArticles] = useState([]);

  const articlesState = useSelector((state) => state?.articles?.articles);
  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  useEffect(() => {
    if (articlesState.length) {
      setAllArticles(articlesState);
    }
  }, [articlesState]);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={4} mt={2}>
          {allArticles.length > 0 &&
            allArticles.map((article) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={article.articleId}>
                <ViewArticlesCard article={article} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default ViewArticles;
