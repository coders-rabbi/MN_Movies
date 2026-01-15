import React from 'react';
import { IoMdTimer } from 'react-icons/io';
import { Link } from 'react-router';

const MovieCard = ({ movie }) => {
    const { id, name, image, premiered, genres, runtime } = movie;
    return (
        <div>
            <div >
                <div>
                    <img
                        src={image?.original}
                        alt={movie}
                        className="w-full h-[280px] object-cover"
                    />

                    <div className="p-3">
                        <h2 className="font-semibold text-lg">
                            {name}
                        </h2>

                        <div className="flex items-center justify-between gap-4">
                            <p className="flex items-center gap-1 text-sm text-gray-600">
                                <IoMdTimer />
                                {runtime ?? "N/A"} min
                            </p>

                            <p className="text-sm font-semibold text-yellow-600">
                                {genres}
                            </p>
                        </div>
                    </div>
                </div>
                <Link to={`/movie/${id}`}>
                    <button className="bg-red-500 w-full py-2 text-white text-xl font-semibold border-b-yellow-400 border-b-4">Movie Details</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;