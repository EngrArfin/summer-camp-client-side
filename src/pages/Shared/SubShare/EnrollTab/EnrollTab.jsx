import ClassCard from "../ClassCard/ClassCard";


const EnrollTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 my-5">
            {
              items.map(item => <ClassCard
                key={item._id}
                item={item}
            ></ClassCard> )
            }
          </div>
    );
};

export default EnrollTab;

