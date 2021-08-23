import {useHistory} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';


function NewMeetupPage(){
    const history=useHistory();
    function addMeetupHandler(meetupData){
        fetch('https://dummyapi.io/data/v1/user?limit=50',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json',
                'app-id': '6122bc64cf9d10eca9bc1f29'
            }
        }
        ).then(()=>{
            history.replace('/');
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
        </section>;
}

export default NewMeetupPage;