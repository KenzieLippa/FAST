import {BiWalk} from "react-icons/bi"
import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
const Challenge = ({trial, progress, onDelete, onToggle}) =>{
    const [finished, setFinished] = useState(false)
    return(
        <div className = {`trial ${trial.finished ? 'finished' : ''}`} onDoubleClick = {
            () => onToggle(trial.id)
        }>
            
            <h3 className = 'challenges'>{trial.text}{' '}
            <BiWalk 
            style = {{color: 'green',
            cursor: 'pointer' }} className = 'icon'/>
            <div className = 'form-control form-control-check'>
                <label>Finished?</label>
                <input type = 'checkbox'
                checked = {finished}
                value = {finished}
                onChange = {(e)=> setFinished(e.currentTarget.checked)}/>
            </div>
            <FaTimes
            style ={{color:'red', cursor: 'pointer'}}
            onClick = {() => onDelete(trial.id)}/>
            </h3>
            <p>{progress}</p>
         </div>
    )
}

export default Challenge