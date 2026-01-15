import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdTimer } from "react-icons/io";
import { Link } from "react-router";
import MovieCard from "./MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(movies)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
                setMovies(response.data);
            } catch (error) {
                console.error("API Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (loading) return <p className="text-center font-semibold mt-10">Loading...</p>;

    return (
        <div className="mx-5 mt-10">
            <h1 className="text-3xl font-bold mb-4">Top IMDB Movies</h1>


            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 border rounded">
                {
                    movies.map(movie =>
                        <MovieCard
                            key={movie?.show?.id}
                            movie={movie.show}
                        ></MovieCard>)
                }
            </div>


        </div>
    );
};

export default Movies;
