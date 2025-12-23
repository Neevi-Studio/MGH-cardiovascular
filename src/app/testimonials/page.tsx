import { redirect } from "next/navigation";

export const metadata = {
  title: "Patient Testimonials – MGH Cardiovascular Associates Heart Care Reviews",
  description: "Read real patient testimonials and reviews about heart care experiences at MGH Cardiovascular Associates. See why patients trust our cardiology team.",
};

export default function TestimonialsRedirect() {
  redirect("/#testimonials");
}
