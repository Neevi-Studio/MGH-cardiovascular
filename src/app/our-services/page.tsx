import { redirect } from "next/navigation";

export const metadata = {
  title: "Cardiology Services – In-Office Cardiac Testing, Preventative & Interventional Care",
  description: "Explore our full range of cardiology services, including in-office cardiac testing, preventative care, and interventional treatments for optimal heart health.",
};

export default function OurServicesRedirect() {
  redirect("/#our-services");
}
