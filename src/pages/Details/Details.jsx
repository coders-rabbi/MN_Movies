import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const [movies, setMovies] = useState([]);

    // dynamic id
    const selectedId = useParams();
    const ID = selectedId.details;


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
                setMovies(response.data);
            } catch (error) {
                console.error("API Error:", error);
            }
        };
        fetchMovies();
    }, []);

    const movie = movies.find((mov) => mov?.show?.id == ID);
    console.log(movie)

    return (
        <div>
            <h1>Movie Details Page.</h1>
            <div className='xl:flex justify-center items-center gap-5'>
                <img className='h-[300px] w-[300px]' src={movie?.show?.image?.original} alt="" />
                <div className='mt-3'>
                    <div className='flex justify-between px-2'>
                        <h3 className='text-2xl font-semibold'>{movie?.show?.name}</h3>
                        <p>Language: {movie?.show?.language}</p>
                    </div>
                    <p className='mt-2'>{movie?.show?.summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;