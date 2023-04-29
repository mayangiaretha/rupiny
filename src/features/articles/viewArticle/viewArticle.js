import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Article from "./article";
import { getArticleWithId } from "../articles.actions";
import Navbar from "../../../layouts/Navbar/Navbar";

const ViewArticle = () => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const articlesState = useSelector((state) => state?.articles?.article);
  useEffect(() => {
    dispatch(getArticleWithId(id));
  }, []);

  useEffect(() => {
    if (articlesState?.title) {
      setArticle(articlesState);
    }
  }, [articlesState]);

  return (
    <>
      <Navbar />
      <Article article={article} />
    </>
  );
};

export default ViewArticle;
