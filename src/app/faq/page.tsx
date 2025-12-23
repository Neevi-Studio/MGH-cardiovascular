import { redirect } from "next/navigation";

export const metadata = {
  title: "Cardiology FAQs – Heart Health, Cardiac Testing & Patient Information",
  description: "Find answers to common questions about heart health, cardiac testing, insurance, and patient care at MGH Cardiovascular Associates.",
};

export default function FAQRedirect() {
  redirect("/#faq");
}
