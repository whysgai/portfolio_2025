export default function Portfolio() {
  return (
    <div>
        <section className="container intro">
            <h1 className="title-text">Hello, I'm Will Cohen</h1>
            <span className="montserrat-regular">I design and build usable, accessible interfaces.</span>
            <p className="vollkorn-text">I am a developer based in New England with experience making functional UX/UI products, taking them from early user requirements through to final technical implementation.</p>
        </section>
        <section id="Projects" className="portfolio container">
            <h1 className="title-text">Projects</h1>
            <div className="portfolio-tile">
                <div className="portfolio-tile-image mobile">
                    <img
                        src="media/images/TellingTailesFeed_Framed.png"
                        alt="A mobile app displaying a list of digital tiles, each containing a story title, a username, a bookmark icon, and a heart icon."
                    />
                </div>
                <div className="portfolio-tile-body">
                    <h2 className="subtitle-text">Telling T(ai)les</h2>
                    <h4 className="vollkorn-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo ut dolor ultricies, in semper tellus pellentesque.</h4>
                </div>
                <div className="portfolio-tile-controls">
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Case Study<i className="portfolio-button-icon bi bi-pen-fill"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Repository<i className="portfolio-button-icon bi bi-github"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Demo<i className="portfolio-button-icon bi bi-play-circle-fill"></i></a></div>
                </div>
            </div>
            <div className="portfolio-tile">
                <div className="portfolio-tile-image mobile">
                    <img
                        src="media/images/MassPassHomeScreen_Framed.png"
                        alt="A mobile app displaying a large green circle containing a white check mark, with the words 'Welcome' and 'Pass status: valid'."
                    />
                </div>
                <div className="portfolio-tile-body">
                    <h2 className="subtitle-text">MassPass</h2>
                    <h4 className="vollkorn-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo ut dolor ultricies, in semper tellus pellentesque.</h4>
                </div>
                <div className="portfolio-tile-controls">
                    <div className="portfolio-button"><a href="html/case-studies/masspass.html" className="link tooling-text">Case Study<i className="portfolio-button-icon bi bi-pen-fill"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Repository<i className="portfolio-button-icon bi bi-github"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Demo<i className="portfolio-button-icon bi bi-play-circle-fill"></i></a></div>
                </div>
            </div>
            <div className="portfolio-tile">                
                <div className="portfolio-tile-image web">
                    <img
                        src="media/images/BPBComparisonPane_Framed.png"
                        alt="A mobile app displaying a list of digital tiles, each containing a story title, a username, a bookmark icon, and a heart icon."
                    />
                </div>
                <div className="portfolio-tile-body">
                    <h2 className="subtitle-text">Boo Plagiarism Bad</h2>
                    <h4 className="vollkorn-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo ut dolor ultricies, in semper tellus pellentesque.</h4>
                </div>
                <div className="portfolio-tile-controls">
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Case Study<i className="portfolio-button-icon bi bi-pen-fill"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Repository<i className="portfolio-button-icon bi bi-github"></i></a></div>
                    <div className="portfolio-button"><a href="#" className="link tooling-text">Demo<i className="portfolio-button-icon bi bi-play-circle-fill"></i></a></div>
                </div>
            </div>
        </section>
    </div>
  )
}