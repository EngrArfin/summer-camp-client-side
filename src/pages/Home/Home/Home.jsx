import { Helmet } from "react-helmet";
import BrowseCategories from "../../Shared/SubShare/BrowseCategories/BrowseCategories";
import Header from "../../Shared/SubShare/Header/Header";
import InstructorCategories from "../../Shared/SubShare/InstructorCategories/InstructorCategories";
import Motivation from "../../Shared/SubShare/Motivation/Motivation";
import PopularCategories from "../../Shared/SubShare/PopularCategories/PopularCategories";
//import { useState } from "react";

const Home = () => {
   
    return (
        <div >
            <Helmet>
                <title>Learn Language || Home </title>
            </Helmet>
            <Header></Header>
            <PopularCategories></PopularCategories>
            <InstructorCategories></InstructorCategories>
            <Motivation></Motivation>
         
            <BrowseCategories></BrowseCategories>
        </div>
    );
};

export default Home;