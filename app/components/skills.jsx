import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="mb-36">
      <div className="text-2xl">Skills</div>
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="html.svg" width={27} alt="tech-img" />
            <span className="pl-2">HTML5</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="css.svg" width={27} alt="tech-img" />
            <span className="pl-2">CSS3</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="js.svg" width={27} alt="tech-img" />
            <span className="pl-2">JavaScript</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="ts.svg" width={27} alt="tech-img" />
            <span className="pl-2">TypeScript</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="react.svg" width={27} alt="tech-img" />
            <span className="pl-2">ReactJs</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="nextj.svg" width={27} alt="tech-img" />
            <span className="pl-2">NextJs</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="nodejs.svg" width={27} alt="tech-img" />
            <span className="pl-2">NodeJs</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="mongodb.svg" width={27} alt="tech-img" />
            <span className="pl-2">MongoDB</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="postgresql.svg" width={27} alt="tech-img" />
            <span className="pl-2">PostgresSQL</span>
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-5 py-3 text-xl font-medium leading-5 text-teal-300 ">
            <Image src="aws-2.svg" width={27} alt="tech-img" />
            <span className="pl-2">AWS Services</span>
          </div>
        </li>




      </ul>
    </div>
  );
}
