import { Helmet } from "react-helmet";
import Banner from "../../Component/Banner/Banner";
import Experience from "../../Component/Experience/Experience";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            
            <div className="">
                <Banner/>
                <Experience/>
            </div>
        </div>
    );
};

export default HomePage;