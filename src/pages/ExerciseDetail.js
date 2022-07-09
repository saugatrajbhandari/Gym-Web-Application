import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material'
import Detail from '../components/Detail';


import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const {id} = useParams(); 

    useEffect(()=>{
        const fetchExercisesData = async() => {
            const exerciseDbUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
            const exerciseDetailData = await fetchData(exerciseDbUrl, exerciseOptions);
            
            setExerciseDetail(exerciseDetailData);
        }
        fetchExercisesData()
    }, [id])
  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
  
    </Box>
  )
}

export default ExerciseDetail