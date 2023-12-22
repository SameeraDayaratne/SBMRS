/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';
import { getAccessToken } from '../utils/auth';

function Movies(props) {

    useEffect(()=>{
        async function getMovies(){

            const accessToken = getAccessToken();

            try {
            const response = await fetch("http://localhost:8000/movies" , {
                headers : {
                    'authorization' : 'Bearer ' + accessToken
                }
            });
            const resData = await response.json();
            
            if(!response.ok)
            {
                throw new Error();
            }

            console.log(resData);
            } catch (error) {
                console.log(error.message);
            }
            
        }

        getMovies();
    }, []);

    return (
        <div>
            <h2 className='text-white'>movies</h2>
        </div>
    );
}

export default Movies;