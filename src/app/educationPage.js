
const EducationPage = ({ key, educationPage }) => {

    return (
        <div className="h-auto min-w-full py-20 bg-gray-950" id="education">
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-400  text-4xl">Education</p>
            </div>
            
            {educationPage.map(item => (
                <div className="flex flex-col  pt-16" key={item.id}>
                <p className="text-left px-10 md:px-36 text-gray-400 font-normal text-3xl">{item.universityName}</p>
                <p className="text-left px-10 md:px-36 text-gray-400 font-normal text-xl">{item.degree}</p>
                <p className="text-left px-10 md:px-36 text-gray-400 font-normal text-xl">{item.major}</p>
                <p className="text-left px-10 md:px-36 text-gray-400 text-xl font-thin">{item.startEndDate}</p>
                </div>
            ))}
                

            
        </div>

    );
};

export default EducationPage;