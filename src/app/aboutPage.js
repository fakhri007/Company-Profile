

const AboutPage = ({ name, about }) => {
    return (
        <div className= "flex flex-col items-center justify-center  h-[65vh]" id="about">
            <p className="text-center text-gray-400 pb-10 text-4xl">{name}</p>
            <p className="text-center text-gray-400 px-5 md:px-36 text-base md:text-2xl text-wrap">{about}</p>
        </div>
    );
};

export default AboutPage;