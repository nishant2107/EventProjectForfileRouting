import { getAllEvents, getFeaturedEvents } from "@/data/dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const feauteredEvents = getAllEvents();
  return (
    <div>
      <EventList items={feauteredEvents} />
    </div>
  );
};

export default HomePage;
