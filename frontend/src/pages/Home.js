import { useEffect, useState } from "react";


import WorkOutDetails from "../components/workOutDetails";
import WorkOutForm from "../components/WorkOutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";


const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext();


    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch("/api/workouts");
            
            const json = await response.json();
            console.log(json)
            if(response.ok) {
                dispatch({type:"SET_WORKOUTS", payload: json})
            }
        }
        fetchWorkout()
    },[])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkOutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkOutForm />
        </div>
    )
}

export default Home;