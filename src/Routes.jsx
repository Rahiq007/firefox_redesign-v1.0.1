import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePageTwo from "pages/HomePageTwo";
import RecommendedPage from "pages/RecommendedPage";
import TopRatedPage from "pages/TopRatedPage";
import TrendingPage from "pages/TrendingPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/homepagetwo", element: <HomePageTwo /> },
    { path: "/recommended", element: <RecommendedPage /> },
    { path: "/top-rated", element: <TopRatedPage /> },
    { path: "/trending", element: <TrendingPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
