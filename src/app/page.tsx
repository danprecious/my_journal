import Link from "next/link";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "",
      description: "",
    },
    {
      id: 2,
      title: "",
      description: "",
    },
    {
      id: 3,
      title: "",
      description: "",
    },
  ];

  return (
    <section className="w-full min-h-[95vh]  flex items-center justify-center flex-col px-2 py-5">
      <div className="text-center lg:w-[80%]  flex justify-center my-14 lg:my-5 py-5 lg:py-2 items-center flex-col">
        <h1 className="font-black lg:text-[3.5rem]  lg:px-20  text-[2.5rem]">
          Level up your journalling <span className="">experience</span>
        </h1>
        <p className="py-7  opacity-70 text-sm">
          ... journaling can be so much better
        </p>

        <Link
          href="/auth/signUp"
          className="  px-8 py-2 bg-btnColor text-sm rounded-2xl text-background hover:bg-btnColor/10"
        >
          start journalling
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:my-5 lg:gap-x-10 lg:gap-y-2 gap-10 p-2 w-full lg:w-fit">
        <h2 className="lg:hidden">Features</h2>
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="lg:w-[15em] w-full lg:h-[12em] h-[16em] rounded-md bg-stone-900"
            ></div>
          );
        })}
      </div>
    </section>
  );
}
