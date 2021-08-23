import {useState, useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  useEffect(()=>{
  setIsLoading(true);
  fetch('https://dummyapi.io/data/v1/user?limit=50',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'app-id': '6122bc64cf9d10eca9bc1f29'
            }
        }
        )
        .then((response) =>{
          return response.json();
          
        })
        .then((data) =>{
          

          setIsLoading(false);
          setLoadedMeetups(data.data);
          console.log(data.data);
        });

        
        },[]);

        if (isLoading){
          return (
            <section>
              <p>Loading...</p>
            </section>
          );
        }



    return (
    <section>
        <div>All Meetups Page</div>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPage;