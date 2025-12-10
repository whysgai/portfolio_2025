import { Strings } from "../utilities/Strings";

export default function Header() {
  return (
    <header>
        <div className="header container">
            <a className="header-name link tooling-text" href="index.html">Will&nbsp;<span className="header-middle-r">R</span>&nbsp;Cohen</a>
            <div className="header-buttons">
                <a className="header-nav-button link tooling-text" href="#Projects">{Strings.header.projects}</a>
                <a className="header-nav-button link tooling-text" href="html/experience.html">{Strings.header.experience}</a>
                <a className="header-nav-button link tooling-text" href="html/about.html">{Strings.header.about}</a>
            </div>     
        </div>
    </header>
  )
}