import { redirect } from "next/navigation";

export const metadata = {
  title: "Book a Cardiology Appointment – MGH Cardiovascular Associates Paterson, NJ",
  description: "Book your cardiology appointment with MGH Cardiovascular Associates in Paterson, NJ. Fast, easy scheduling for expert heart care and cardiac consultations.",
};

export default function RequestAppointmentRedirect() {
  redirect("/#request-appointment");
}
