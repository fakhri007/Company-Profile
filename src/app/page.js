import Navbar from './navbar';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-t from-gray-700 to-gray-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center  h-[65vh]" id="about">
        <p className="text-center text-gray-400 pb-10 text-4xl">Fakhri Ramdani</p>
        <p className="text-center text-gray-400 px-10 md:px-36 text-base md:text-2xl text-wrap">Experienced Software Engineer with 4 years proficiency in Go, Java, PHP, MySQL, PostgreSQL, Git, and Docker. Skilled in designing scalable solutions, including contributions to a mission-critical backend system in Go and collaborating on Java-based microservices. Demonstrated expertise in optimizing PHP codebase, coupled with strong skills in efficient database design.</p>
      </div>
      <div className="min-h-[120vh] min-w-full bg-gray-950">
        <div className="flex flex-col items-center pt-16 h-[35vh]">
          <a href="#contact" className="bg-transparent  hover:bg-gray-500 text-gray-800 font-bold hover:text-gray-950 py-2 px-4 border border-gray-700 hover:border-transparent rounded" >
            READ MORE
          </a>
        </div>

        <div className="flex flex-col items-center pt-10" id="contact">
          <p className="text-center text-gray-400 pb-10 text-4xl">Contact</p>
          <div className="flex flex-row items-center space-x-48">
            <a target="_blank" href="https://github.com/fakhri007">
              <img src="/github.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
            </a>
            <a target="_blank" href="mailto:fakhriramdani4@gmail.com">
              <img src="/main.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
            </a>
            <a target="_blank" href="https://linkedin.com/fakhri-ramdani-183769ab">
              <img src="/linkedin.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
            </a>
            <a target="_blank" href="https://linkedin.com/fakhri-ramdani-183769ab">
              <img src="/instagram.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto min-w-full py-28 bg-gray-700" id="experience">
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-400  text-4xl">Experience</p>
        </div>
        <div className="flex flex-col  pt-16">
          <p className="text-left px-36 text-gray-400 font-normal text-3xl">Bank Sinarmas</p>
          <p className="text-left px-36 text-gray-400 font-normal text-xl">Backend Developer</p>
          <p className="text-left px-36 text-gray-400 text-xl font-thin">September 2021 - Now</p>
          <br />
          <ul className="list-disc list-inside">
            <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">Velit labore quis id qui culpa duis. Non aliqua amet proident mollit reprehenderit Lorem adipisicing exercitation. Qui occaecat velit sunt consectetur non nostrud esse enim. Irure eu deserunt deserunt magna exercitation aute elit fugiat.</li>
            <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">Ea cillum nulla mollit ullamco consequat mollit sit irure dolore. Mollit culpa consequat et est reprehenderit ex et. Qui aute fugiat ullamco incididunt esse incididunt est nisi. Qui est incididunt sit ea excepteur ipsum amet anim ea Lorem do irure laborum.</li>
            <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">Minim id cillum excepteur est irure minim minim veniam ut occaecat voluptate aliquip enim pariatur. Nisi laboris laborum ea minim qui cupidatat aute elit. Velit esse magna in ad id irure magna ad. Ex voluptate anim quis ex incididunt.</li>
          </ul>
        </div>
        <div className="flex flex-col  pt-10">
          <p className="text-left px-36 text-gray-400 font-normal text-3xl">PT CDC Global Informatika</p>
          <p className="text-left px-36 text-gray-400 font-normal text-xl">Web Developer</p>
          <p className="text-left px-36 text-gray-400 text-xl font-thin">October 2019 - September 2021</p>
          <br />
          <ul className="list-disc list-inside">
            <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">Velit labore quis id qui culpa duis. Non aliqua amet proident mollit reprehenderit Lorem adipisicing exercitation. Qui occaecat velit sunt consectetur non nostrud esse enim. Irure eu deserunt deserunt magna exercitation aute elit fugiat.</li>
            <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">Ea cillum nulla mollit ullamco consequat mollit sit irure dolore. Mollit culpa consequat et est reprehenderit ex et. Qui aute fugiat ullamco incididunt esse incididunt est nisi. Qui est incididunt sit ea excepteur ipsum amet anim ea Lorem do irure laborum.</li>
            <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">Minim id cillum excepteur est irure minim minim veniam ut occaecat voluptate aliquip enim pariatur. Nisi laboris laborum ea minim qui cupidatat aute elit. Velit esse magna in ad id irure magna ad. Ex voluptate anim quis ex incididunt.</li>
          </ul>
        </div>

      </div>
      <div className="h-auto min-w-full py-28 bg-gray-950" id="education">
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-400  text-4xl">Education</p>
        </div>
        <div className="flex flex-col  pt-16">
          <p className="text-left px-36 text-gray-400 font-normal text-3xl">Universitas Komputer Indonesia</p>
          <p className="text-left px-36 text-gray-400 font-normal text-xl">Informatics Engineer</p>
          <p className="text-left px-36 text-gray-400 text-xl font-thin">September 2015 - September 2019</p>

        </div>
      </div>

      <div className="h-auto min-w-full py-28 bg-gray-800" id="skills">
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-400  text-4xl">Skill</p>
        </div>
        <div className="flex flex-col px-36  pt-16">
          <div className="grid grid-cols-6 gap-10">
            <p className="text-left text-gray-400 font-normal text-3xl">GO</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '80%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">Java</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '60%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">PHP</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '80%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">MySQL</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '80%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">PostgreSQL</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '65%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">Git</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '70%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">Docker</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '60%' }}></div>
            </div>
            <p className="text-left text-gray-400 font-normal text-3xl">Docker</p>
            <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
              <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
