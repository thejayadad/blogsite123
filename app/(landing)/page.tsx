import Footer from "@/components/footer/footer";
import Heading from "./_components/heading";
import Header from "@/components/header/header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  const userEmail = session?.user?.email
  // If there is a session, redirect to the dashboard
  if (userEmail) {
    redirect('/dashboard');
  }
  return (
    // <div className="flex flex-col ">
    //   <div className="text-center gap-y-8 flex-1 px-6 pb-10">
    //     <Heading />
    //   </div>
    //   <Footer />
    // </div>
    <div className="h-full">
      <Heading />
    </div>
  );
}
