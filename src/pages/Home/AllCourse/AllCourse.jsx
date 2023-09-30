import { Helmet } from "react-helmet";
import PopularCategories from "../../Shared/SubShare/PopularCategories/PopularCategories";
import ClassCard from "../../Shared/SubShare/ClassCard/ClassCard";


const AllCourse = () => {
    return (
        <div>
            <Helmet>
                <title>Learn Language || All course </title>
            </Helmet>
            <h2>All Course</h2>
            <ClassCard></ClassCard>
            {/* <PopularCategories></PopularCategories> */}
        </div>
    );
};

export default AllCourse;