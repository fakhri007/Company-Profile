
const ContactPage = ({ github, mail, linkedin, instagram }) => {
    return (
        <div className="flex flex-col items-center pt-20" id="contact">
            <p className="text-center text-gray-400 pb-10 text-4xl">Contact</p>
            <div className="grid grid-cols-2 gap-28 md:flex md:flex-row items-center md:space-x-48">
                <a target="_blank" href={github}>
                    <img src="/github.svg" alt="Image" className="mt-10 w-16 h-16 md:mt-32 md:w-28 md:h-28 object-cover"></img>
                </a>
                <a target="_blank" href={mail}>
                    <img src="/main.svg" alt="Image" className="mt-10 w-16 h-16 md:mt-32 md:w-28 md:h-28 object-cover"></img>
                </a>
                <a target="_blank" href={linkedin}>
                    <img src="/linkedin.svg" alt="Image" className="mt-10 w-16 h-16 md:mt-32 md:w-28 md:h-28 object-cover"></img>
                </a>
                <a target="_blank" href={instagram}>
                    <img src="/instagram.svg" alt="Image" className="mt-10 w-16 h-16 md:mt-32 md:w-28 md:h-28 object-cover"></img>
                </a>
            </div>
        </div>
    );
};

export default ContactPage;