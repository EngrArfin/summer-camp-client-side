import { Outlet } from 'react-router-dom';
import Body from '../pages/Shared/SubShare/Body/Body';

const Main1 = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Body></Body>
        </div>
    );
};

export default Main1;