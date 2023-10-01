import { Helmet } from "react-helmet";
import SubTitle from "../../Shared/SubShare/SubTitle/SubTitle";

const HomeStudent = () => {
    return (
        <div className="w-full">
            
            <Helmet>
                <title>Learn Language || Student Dashboard </title>
            </Helmet>
            <SubTitle
            title='Dashboard'
            ></SubTitle>
            
        </div>
    );
};

export default HomeStudent;