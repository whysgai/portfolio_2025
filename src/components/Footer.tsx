import { Strings } from "../utilities/Strings";


export default function Footer() { 
    return (
        <footer className="footer container">
            <span className="vollkorn-text">{Strings.footer.heading}</span>
            <div>
                <span className="montserrat-regular">{Strings.footer.subheading}</span>
                <div className="contact-tiles">   
                    <a className="contact-icon link bi bi-envelope-paper-fill" href="#" aria-label={Strings.footer.email_label}></a>
                    <a className="contact-icon link bi bi-linkedin" href="#" aria-label={Strings.footer.linkedin_label}></a>                
                    <a className="contact-icon link bi bi-github" href="#" aira-label={Strings.footer.github_label}></a>
                </div>
            </div>
        </footer>
    );
};