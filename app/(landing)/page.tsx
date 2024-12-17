import Heading from "./_components/heading";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
      </div>
    </div>
  );
}
