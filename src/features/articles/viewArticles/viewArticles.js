import React, { useEffect, useState } from "react";
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
      <div>
        {allArticles.length > 0 &&
          allArticles.map((article) => (
            <div key={article?.articleId}>
              <ViewArticlesCard article={article} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ViewArticles;
