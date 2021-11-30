import Challenge from './Challenge'

const Challenges = ({trials, progress, onDelete, onToggle}) =>{
    return(
        <>
            {trials.map((trial) => (
                <Challenge key = {trial.id} trial = {trial}
                 progress = {progress}
                 onDelete = {onDelete}
                 onToggle = {onToggle}/>
                
            ))}
            
        </>
    )
}
export default Challenges