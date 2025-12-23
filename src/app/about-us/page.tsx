import { redirect } from "next/navigation";

export const metadata = {
  title: "About MGH Cardiovascular Associates – Expert Heart Specialists & Cardiology Team",
  description: "Meet the expert cardiologists and compassionate care team at MGH Cardiovascular Associates. Learn about our mission, values, and commitment to heart health.",
};

export default function AboutUsRedirect() {
  redirect("/#about-us");
}
