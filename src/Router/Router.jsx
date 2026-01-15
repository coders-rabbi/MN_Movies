
import { Component } from "react";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router";
import Details from "../pages/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "movie/:details",
                element: <Details></Details>,
                loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
            }
        ],
    },
]);