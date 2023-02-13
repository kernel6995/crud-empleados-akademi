// @ts-check
import { useDispatch, useSelector } from 'react-redux';
import { editEmployee } from '../features/employees/employeesSlice';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import ButtonLink from '../components/ButtonLink';
import FormEmployee from '../components/FormEmployee';

// Icons
import { IconKeyboardArrowLeft } from '../utilities/styledIconsSVG';

function EditEmployee() {
    const dispatch = useDispatch();

    const params = useParams();
    const navigate = useNavigate();

    const employeeToEdit = useSelector(state => state.employees.employees.find(e => e.EMPLOYEE_ID === parseInt(params.id)));

    const handleEditEmployee = (data) => {
        dispatch(editEmployee({ ...employeeToEdit, ...data }));
        navigate('/');
    }

    return (
        <main className='flex flex-col gap-4 p-4'>
            <header className='flex justify-between'>
                <h3 className='text-2xl'>editar empleado</h3>

                <div className='flex gap-4'>
                    <ButtonLink href='/' title='volver al inicio'>
                        <IconKeyboardArrowLeft />atras
                    </ButtonLink>
                </div>
            </header>

            <section className='flex flex-col gap-4'>
                <FormEmployee employeeData={employeeToEdit} onEdit={handleEditEmployee} />
            </section>
        </main>
    );
}

export default EditEmployee;
