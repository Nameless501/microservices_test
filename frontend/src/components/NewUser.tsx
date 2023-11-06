import UserForm from './UserForm';
import { apiRoutes, newUserValidation } from '../configs/configs';

function NewUser() {
    return (
        <UserForm
            url={apiRoutes.newUser}
            method="POST"
            schema={newUserValidation}
        />
    );
}

export default NewUser;
