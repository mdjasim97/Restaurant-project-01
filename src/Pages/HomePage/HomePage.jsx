import { Helmet } from "react-helmet";
import Banner from "../../Component/Banner/Banner";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            
            <div>
                <Banner/>
            </div>
        </div>
    );
};

export default HomePage;