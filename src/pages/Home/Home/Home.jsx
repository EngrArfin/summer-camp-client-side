import Body from "../../Shared/SubShare/Body/Body";
import BrowseCategories from "../../Shared/SubShare/BrowseCategories/BrowseCategories";
import Header from "../../Shared/SubShare/Header/Header";
import InstructorCategories from "../../Shared/SubShare/InstructorCategories/InstructorCategories";
import Motivation from "../../Shared/SubShare/Motivation/Motivation";
import PopularCategories from "../../Shared/SubShare/PopularCategories/PopularCategories";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PopularCategories></PopularCategories>
            <InstructorCategories></InstructorCategories>
            <Motivation></Motivation>
            <BrowseCategories></BrowseCategories>
        </div>
    );
};

export default Home;