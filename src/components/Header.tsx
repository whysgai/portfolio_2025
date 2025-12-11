import { View } from "../utilities/Enums";
import { HeaderProps } from "../utilities/Interfaces";
import { Strings } from "../utilities/Strings";

export default function Header({changeView}: HeaderProps) {
    return (
        <header>
            <div className="header container">
                <a className="header-name link tooling-text" href="index.html">Will&nbsp;<span className="header-middle-r">R</span>&nbsp;Cohen</a>
                <div className="header-buttons">
					<span className="header-nav-button link tooling-text" onClick={() => changeView(View.Portfolio)}>{Strings.header.projects}</span>
                    <span className="header-nav-button link tooling-text" onClick={() => changeView(View.Experience)}>{Strings.header.experience}</span>
                    <span className="header-nav-button link tooling-text" onClick={() => changeView(View.About)}>{Strings.header.about}</span>
                </div>     
            </div>
        </header>
    );
};