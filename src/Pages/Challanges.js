
import {useState} from 'react'
import Challenges from "../Components/Challenges/Challenges"
import Button from "../Components/Challenges/Button"
function Challanges(){
    const [trials, setTrials] = useState([
        {
            id:1,
            text: 'Walk a Mile',
            finished: 'false',
        },
        {
            id:2,
            text: 'Biking on a Wooded trail',
            finished: 'false',
        },
        {
            id:3,
            text: 'Try cooking a healthy pasta dish',
            finished: 'false',
        },
        {
            id:4,
            text: 'Go Hiking',
            finished: 'false',
        },
        {
            id:5,
            text: 'Burn 2,000 calories',
            finished: 'false',
        },
        {
            id:6,
            text: 'Walk 20,000 steps',
            finished: 'false,'
        }
    ])

    const [progress, setProgress] = useState('20%');
    const onClick = () =>{
        console.log('was clicked')
    }
    const deleteTask = (id) =>{
        setTrials(trials.filter((trial)=> trial.id !== id))
    }
    const toggleFinished = (id) =>{
        setTrials(
            trials.map((trial) =>
            trial.id === id ? {...trial, finished: 
                !trial.finished}:trial)
        )
    }
    return(
        <div className = 'challenge'>
            <h1> Weekly Challanges! </h1>
            {trials.length >0 ? (<Challenges trials = {trials} progress = {progress}
            onDelete = {deleteTask}
            onToggle = {toggleFinished}/>):('Nothing here!')}
            <Button color = 'Purple' text = 'Check Progress' onClick = {onClick}/>
        </div>
    )
}

export default Challanges;