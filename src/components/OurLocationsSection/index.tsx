import { FaMapMarkerAlt, FaPhone, FaFax, FaExternalLinkAlt } from "react-icons/fa";

const locations = [
  {
    name: "Paterson Office",
    address: "680 Broadway, Suite 503",
    cityStateZip: "Paterson, NJ 07514",
    phone: "(973) 653-5867",
    fax: null,
    mapUrl: "https://www.google.com/maps/search/680+Broadway+Suite+503+Paterson+NJ+07514",
  },
  {
    name: "East Brunswick Office",
    address: "E5 Brier Hill Ct",
    cityStateZip: "East Brunswick, NJ 08816",
    phone: "(732) 698-1331",
    fax: "(732) 698-1379",
    mapUrl: "https://www.google.com/maps/search/E5+Brier+Hill+Ct+East+Brunswick+NJ+08816",
  },
];

function LocationCard({
  name,
  address,
  cityStateZip,
  phone,
  fax,
  mapUrl,
}: (typeof locations)[number]) {
  return (
    <div className="group flex flex-1 flex-col gap-4 rounded-3xl border border-primary/20 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <FaMapMarkerAlt size={18} />
        </div>
        <h3 className="text-lg font-bold text-gray-dark">{name}</h3>
      </div>

      <div className="h-px w-full bg-primary/10" />

      <div className="flex flex-col gap-3 text-left">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary" size={15} />
          <div className="flex flex-col leading-snug">
            <span className="font-medium text-gray-dark">{address}</span>
            <span className="text-gray-100">{cityStateZip}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="shrink-0 text-primary" size={15} />
          <a
            href={`tel:${phone.replace(/\D/g, "")}`}
            className="font-medium text-gray-dark hover:text-primary"
          >
            {phone}
          </a>
        </div>

        {fax && (
          <div className="flex items-center gap-3">
            <FaFax className="shrink-0 text-primary" size={15} />
            <span className="font-medium text-gray-dark">{fax}</span>
          </div>
        )}
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Get Directions <FaExternalLinkAlt size={11} />
      </a>
    </div>
  );
}

function OurLocationsSection() {
  return (
    <section className="w-full">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Find Us
        </span>
        <h2 className="text-2xl font-bold text-gray-dark xl:text-4xl">
          Our Locations
        </h2>
        <p className="max-w-xl font-lato text-gray-100">
          We have two convenient offices to serve you across New Jersey.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        {locations.map((loc) => (
          <LocationCard key={loc.name} {...loc} />
        ))}
      </div>
    </section>
  );
}

export default OurLocationsSection;
