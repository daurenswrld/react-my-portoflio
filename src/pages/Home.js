import Header from "../components/header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, PHP, NPM, BootStrap, MaterialUI, Yarn, Wordpress, MySQL</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Technologies</h2>
                            <p>Figma, Adobe PS, XD, Prepros, MAMP , WebMasters</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;