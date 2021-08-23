import classes from './MeetupItem.module.css';
import Card from '../ui/Card';



function MeetupItem(props){

    function handleClick(userId) {
        const requestOptions = {
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json',
            'app-id': '6122bc64cf9d10eca9bc1f29',
            'id': userId
        }

        };

        //this part wont' work due to CORS policy, the api tested by postman and works
 
        fetch('https://dummyapi.io/data/v1//user/:id', requestOptions).then((response) => {
          return response.json();
        }).then((result) => {
            alert(result.id + "Deleted!");
        });
      }

    return (
   
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
        <img src={props.image} alt={props.title}  />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.first}</address>
            <p>{props.last}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={handleClick}>Delete</button>
        </div>
        </Card>
    </li>
    );
}

export default MeetupItem;