import { Fragment } from "react";
import { getEventById } from "@/data/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/events/event-detail/event-summary";
import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistics";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventid;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event Found !</p>;
  }
  return (
    <Fragment>
      {" "}
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.titleI}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
