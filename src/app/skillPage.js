
const SkillPage = ({ skillPage }) => {

    return (
        <div className="h-auto min-w-full py-20 bg-gray-800" id="skills">
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-400  text-4xl">Skill</p>
            </div>
            <div className="flex flex-col px-36  pt-16">
                <div className="grid grid-cols-6 gap-10">
                    {skillPage.map(item => (
                        <>
                        <p className="text-left text-gray-400 font-normal text-3xl">{item.skillName}</p>
                        <div className="w-full bg-gray-900 mt-4 col-span-2 rounded-full h-2.5 mb-4">
                            <div className="bg-gray-400 h-2.5 rounded-full " style={{ width: `${item.score}%` }}></div>
                        </div>

                        </>
                    ))}
                </div>


            </div>
        </div>


    );
};

export default SkillPage;