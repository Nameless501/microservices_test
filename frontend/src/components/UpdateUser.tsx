import { useParams } from 'react-router-dom';
import UserForm from './UserForm';
import { apiRoutes, updateUserValidation } from '../configs/configs';

function UpdateUser() {
    const { id } = useParams();

    return (
        <UserForm
            url={`${apiRoutes.updateUser}${id}`}
            method="PATCH"
            schema={updateUserValidation}
        />
    );
}

export default UpdateUser;
