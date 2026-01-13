import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdTimer } from "react-icons/io";

const RecentSection = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(movies)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    "https://imdb236.p.rapidapi.com/api/imdb/top250-movies",
                    {
                        headers: {
                            "X-RapidAPI-Key": "37abbbfe89msh9a03ca45c7182c3p1c02d6jsncdac1e9480e2",
                            "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
                        },
                    }
                );

                setMovies(response.data);
            } catch (error) {
                console.error("API Error:", error);
            } finally {
                setLoading(false);
            }z
        };

        fetchMovies();
    }, []);

    if (loading) return <p className="text-center font-semibold mt-10">Loading...</p>;

    return (
        <div className="mx-5 mt-10">
            <h1 className="text-3xl font-bold mb-4">Top IMDB Movies</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                {movies.slice(0, 20).map((movie, index) => (
                    <div
                        key={index}
                        className="shadow rounded-xl overflow-hidden hover:scale-105 transition"
                    >
                        <img
                            src={movie.primaryImage}
                            alt=''
                            className="w-full h-[280px] object-cover"
                        />

                        <div className="p-3">
                            <h2 className="font-semibold text-lg">
                                {movie.originalTitle}
                            </h2>

                            <div className="flex items-center justify-between gap-4">
                                <p className="flex items-center gap-1 text-sm text-gray-600">
                                    <IoMdTimer />
                                    {movie.runtimeMinutes} min
                                </p>

                                <p className="text-xl font-semibold text-yellow-600">
                                    {movie.genres}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentSection;
