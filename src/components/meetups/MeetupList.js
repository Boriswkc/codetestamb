import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';



function MeetupList(props){
    return (
        <ul className={classes.list}>
        {props.meetups.map(meetup => (
        <MeetupItem 
        key={meetup.id} 
        id={meetup.id}
        image={meetup.picture}
        title={meetup.title}
        first={meetup.firstName}
        last={meetup.lastName}
        />
        ))}
    </ul>
    );
}

export default MeetupList;