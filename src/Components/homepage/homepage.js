import React from 'react';
import largerun from '../../images/largerun.jpg';
import './homepage.css';
import axios from 'axios';
import { useEffect } from 'react';


//EXAMPLE PRACTICE
function Homepage(){

    const fetchNotes = async() => {
        const { data } = await axios.get('/api/notes');

        console.log(data)
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return(
        
                <div className = 'homeDiv' style={{ backgroundImage: `url(${largerun})`}}>
           
            
            <h1> Welcome to FAST</h1>

            <h2 className = 'homeH2'>What is Fast?</h2>
            <p className = 'homeP boxes'><span>FAST is a competitive running application that allows you to compete with yout friends, family or even strangers.
                We try to push your goals by setting up weekly challanges, and small incentives to keep the competition going. 
                You can compete with a selected group, or you can join local, or global competitions!
                ersian devonshire rex but cheetah so birman yet lion so himalayan. Tomcat russian blue for panther but devonshire
                 rex donskoy for manx siamese. Himalayan cheetah. Scottish fold tom for donskoy. Cougar. 
                 Persian norwegian forest bengal american shorthair cheetah but munchkin for singapura. Malkin cornish rex 
            </span></p>

            <h2 className = 'homeH2'>What are the challanges?</h2>
            <p className = 'homeP boxes'><span>There are a range of challanges you can select from with beginner, intermediate, advanced, and everything in between!
                You don't need to be an all star runner to compete, we try to make challanges for all running skills so all you have to do is 
                add find a few friends at your level, and start running. If you don't have any, you can search for runners with similar stamina on the friends page, or just join a beginner global challange!</span></p>

            <h2 className = 'homeH2'>Who can join? </h2>
            <p className = 'boxes homeP'><span>Fast is an app for all ages, but legally speaking we would prefer if you said you were 18 or older. </span> </p>
        
        
        </div>
        
    

    )

}

export default Homepage;