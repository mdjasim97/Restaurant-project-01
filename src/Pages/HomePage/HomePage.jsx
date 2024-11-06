import { Helmet } from "react-helmet";
import Banner from "../../Component/Banner/Banner";
import Experience from "../../Component/Experience/Experience";
import Popular from "../../Component/Popular/Popular";
import CustomerSay from "../../Component/CustomerSay/CustomerSay";
import BookForm from "../../Component/BookForm/BookForm";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>

      <div className="">
        <Banner />
        <Experience />
        <Popular />
        {/* className="bg-[url('https://i.ibb.co.com/mT0VmNN/plate-dark-background.jpg')] bg-no-repeat bg-cover" */}
        <div>
          <BookForm />
        </div>
        <CustomerSay />
      </div>
    </div>
  );
};

export default HomePage;
