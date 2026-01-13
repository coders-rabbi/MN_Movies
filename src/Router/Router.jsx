
import { Component } from "react";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
        ],
    },
]);