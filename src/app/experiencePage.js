
const ExperiencePage = ({ experiencePage }) => {

    return (
        <div className="h-auto min-w-full py-20 bg-gray-700" id="experience">
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-400  text-4xl">Experience</p>
            </div>
            {experiencePage.map(item => (
                <div className="flex flex-col  pt-16">
                    <p className="text-left px-36 text-gray-400 font-normal text-3xl">{item.companyName}</p>
                    <p className="text-left px-36 text-gray-400 font-normal text-xl">{item.position}</p>
                    <p className="text-left px-36 text-gray-400 text-xl font-thin">{item.startEndDate}</p>
                    <br />
                    
                    <ul className="list-disc list-inside">
                        {
                        item.description.split("#").map(descItem => (
                        <li className="text-left px-48 text-gray-400 pb-4 text-xl font-normal">{descItem}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExperiencePage;