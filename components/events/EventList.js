import EventItem from "./EventItem";
import classes from './EventList.module.css'
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.listI}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
            description={event.description}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
