import classes from "./EventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/icons/date-icon";
import AddressIcon from "../icons/icons/address-icon";
import ArrowRightIcon from "../icons/icons/arrow-right-icon";
const EventItem = (props) => {
  const { title, id, description, location, date, image, isFeatured } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const eploreLink = `/events/${id}`;
  const formattedAddress = location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actionsI}>
          <Button link={eploreLink}>
            <span>Explore image</span>

            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
