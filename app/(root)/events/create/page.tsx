import EventForm from "@/components/shared/EventForm"
import Event from "@/lib/database/models/event.model";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  //This is for customize your session token
  const userId = sessionClaims?.userId as string;
  console.log(userId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type={"Create"}/>
      </div>
    </>
  )
}

export default CreateEvent


