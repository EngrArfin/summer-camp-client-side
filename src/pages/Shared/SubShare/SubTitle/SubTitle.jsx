

const SubTitle = ({title, subTitle}) => {
    return (
        <div className=" mx-auto mt-20 text-center md:w-3/12 my-12 ">
            <h2 className="text-4xl uppercase">{title}</h2>
            <p className="py-4">{subTitle}</p>
            
        </div>
    );
};

export default SubTitle;