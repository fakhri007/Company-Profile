
const ContactPage = ({ github, mail, linkedin, instagram }) => {
    return (
        <div className="flex flex-col items-center pt-10" id="contact">
            <p className="text-center text-gray-400 pb-10 text-4xl">Contact</p>
            <div className="flex flex-row items-center space-x-48">
                <a target="_blank" href={github}>
                    <img src="/github.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
                </a>
                <a target="_blank" href={mail}>
                    <img src="/main.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
                </a>
                <a target="_blank" href={linkedin}>
                    <img src="/linkedin.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
                </a>
                <a target="_blank" href={instagram}>
                    <img src="/instagram.svg" alt="Image" className="mt-32 w-28 h-28 object-cover"></img>
                </a>
            </div>
        </div>
    );
};

export default ContactPage;