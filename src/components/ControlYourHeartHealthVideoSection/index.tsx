
import RequestAppointmentClientBtn from "./RequestAppointmentClientBtn";

function ControlYourHeartHealthVideoSection() {
  return (
    <section className="custom-container relative aspect-video overflow-hidden rounded-3xl bg-black">
      <iframe
        loading="lazy"
        className="absolute left-0 z-[1] h-full w-full"
        src="https://player.vimeo.com/video/954976359?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963&dnt=1"
        title="Control Your Heart Health"
      ></iframe>

      <div className="inner-container z-[2] mt-auto flex-col text-white max-xl:mx-auto">
        <h2 className="text-2xl xl:text-4xl">
          Take Control of Your Heart Health
        </h2>
        <p className="font-lato text-xl">
          Discover how regular cardiovascular check-ups can enhance your life
          quality and
          <span className="block">longevity.</span>
        </p>
        <RequestAppointmentClientBtn />
      </div>
    </section>
  );
}

export default ControlYourHeartHealthVideoSection;
