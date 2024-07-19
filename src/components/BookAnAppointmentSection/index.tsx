import Image from "next/image";

function WorkingProgramCard({ day, time }: { day: string; time: string }) {
  return (
    <div className="flex items-center justify-between border-b pb-3 max-xl:flex-col">
      <span className="text-[17.02px]">{day}</span>
      <span className="text-[16.88px">{time}</span>
    </div>
  );
}

const repeatedTime = "09:00 AM - 05:00 PM";

const workingProgramData = [
  {
    day: "Monday",
    time: repeatedTime,
  },
  {
    day: "Tuesday",
    time: repeatedTime,
  },
  {
    day: "Wednesday",
    time: repeatedTime,
  },
  {
    day: "Thursday",
    time: repeatedTime,
  },
  {
    day: "Friday",
    time: repeatedTime,
  },
  {
    day: "Saturday",
    time: "Closed",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

function BookAnAppointmentSection() {
  return (
    <section className="custom-container flex-col overflow-hidden rounded-3xl bg-primary text-white xl:!gap-0">
      <div className="inner-container mr-auto flex-col xl:w-[40%]">
        <h2 className="text-xl font-bold xl:text-3xl">Book an Appointment</h2>
        <p className="font-lato text-lg font-light">
          Schedule your visit now for personalized care in a comfortable
          environment. Your journey to a brighter, healthier smile begins here.
        </p>
      </div>
      <div className="z-[1] flex h-full w-full max-xl:flex-col max-xl:gap-8">
        <div
          data-aos="fade-left"
          className="inner-container -z-[1] my-auto h-fit flex-col rounded-3xl bg-primary-50 px-8 py-10 xl:w-[70%]"
        >
          <h3 className="text-lg">Our Schedule</h3>
          <div className="flex w-full flex-col gap-3 font-inter">
            {workingProgramData.map((data, index) => (
              <WorkingProgramCard key={index} {...data} />
            ))}
          </div>
        </div>
        <Image
          src={"images/book-an-appointment.svg"}
          width={574}
          height={720}
          alt="bg"
          className="z-[1] w-full rounded-3xl"
        />
      </div>
    </section>
  );
}

export default BookAnAppointmentSection;
