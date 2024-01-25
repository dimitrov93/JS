import Image from "next/image";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 h-full ">
        <div className=" bg-slate-600 shadow-lg bg-slate-600 col-span-1 rounded-lg">
          <Image
            src={"/Images/3.jpg"}
            width={400}
            height={400}
            alt="Picture"
            className="w-full h-full rounded-lg transform duration-300 ease-in-out rotate-[10deg] hover:rotate-0 mx-auto "
          />
        </div>
        <div className="col-span-2">
          <div className="flex gap-4 items-center justify-center">
            <span className="p-6 border-slate-600 border-4 rounded-md  hover:bg-slate-600 hover:text-white hover:cursor-pointer ">
              Experience
            </span>
            <span className="p-6 border-slate-600 border-4 rounded-md  hover:bg-slate-600 hover:text-white hover:cursor-pointer ">
              Currently working at
            </span>
            <span className="p-6 border-slate-600 border-4 rounded-md  hover:bg-slate-600 hover:text-white hover:cursor-pointer ">
              Projects
            </span>
          </div>
          <p className="mt-4 text-lg">
            Highly motivated and results-driven full-stack developer with
            experience in HTML, CSS, JavaScript, React, Angular, Node.js, Java,
            Spring Web, MongoDB, MariaDB and Microsoft Excel. Proficient in
            creating dynamic and responsive web applications with a focus on
            user experience. Skilled in testing and quality assurance, both
            manual and automated. Proven track record of delivering high-quality
            work on time and within budget.
          </p>

          <p className="mt-4 text-lg">
            Experienced Sales Specialist with 5 years of experience in
            developing and implementing successful sales strategies.
            Demonstrated ability to achieve and exceed sales targets, build and
            maintain strong client relationships, and effectively manage a team.
            Recently elevated to the role of Team Lead, where I successfully led
            two departments, providing guidance and direction to achieve company
            goals and improve overall performance.
          </p>
        <div className="mt-4 border-4 w-1/6 text-center p-2 sm:mx-0 mx-auto">Lets talk</div>
        </div>

      </div>
    </div>
  );
}
