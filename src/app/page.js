import Navbar from './navbar';
import data from './data.json';
import AboutPage from './aboutPage';
import ContactPage from './contactPage';
import ExperiencePage from './experiencePage';
import EducationPage from './educationPage';
import SkillPage from './skillPage';
import AnimatedBackground from './particleBackground';
import styles from './AnimatedBackground.module.css'; // Import styles






export default function Home() {

  return (
    <div className={`${styles.background} md:bg-[url('/bg.svg')] min-h-screen  bg-no-repeat  bg-cover md:bg-contain lg:bg-automin-w-full `}>
      <Navbar />
      <AboutPage name={data.aboutPage.name} about={data.aboutPage.about} />
      <div className="min-h-[100vh] md:min-h-[110vh] min-w-full bg-gray-950">
        <div className="flex flex-col items-center pt-32 h-[30vh]">
          <a href="/cv.pdf" download="fakhri ramdani-cv" className="bg-transparent  hover:bg-gray-500 text-gray-400 font-bold hover:text-gray-950 py-3 px-5 border border-gray-500 hover:border-transparent rounded" >
            DOWNLOAD CV
          </a>
        </div>
        <ContactPage github={data.contactPage.github} mail={data.contactPage.mail} linkedin={data.contactPage.linkedin} instagram={data.contactPage.instagram} />
      </div>
      <ExperiencePage experiencePage={data.experiencePage} />

      <EducationPage educationPage={data.educationPage} />

      <SkillPage skillPage={data.skillPage} />
    </div>

  )
}
