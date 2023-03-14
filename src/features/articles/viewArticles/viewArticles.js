import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewArticlesCard from "./viewArticlesCard";
import { getAllArticles } from "../articles.actions";
import Navbar from "../../../layouts/Navbar/Navbar";

const ViewArticles = () => {
  const dispatch = useDispatch();
  const [allArticles, setAllArticles] = useState([]);

  const articlesState = useSelector(
    (state) => state?.articles?.articles?.articles
  );
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
      {allArticles.length &&
        allArticles.map((article) => <ViewArticlesCard article={article} />)}
    </>
  );
};

export default ViewArticles;
