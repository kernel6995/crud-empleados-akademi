// @ts-check
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employees/employeesSlice';
import { useNavigate } from 'react-router-dom';

// Components
import FormEmployee from '../components/FormEmployee';
import ButtonLink from '../components/ButtonLink';

// Icons
import { IconKeyboardArrowLeft } from '../utilities/styledIconsSVG';

function NewEmployee() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddEmployee = (data) => {
        dispatch(addEmployee(data));

        navigate('/');
    }

    return (
        <main className='flex flex-col gap-4 p-4'>
            <header className='flex justify-between'>
                <h3 className='text-2xl'>nuevo empleado</h3>

                <div className='flex gap-4'>
                    <ButtonLink href='/' title='volver al inicio'>
                        <IconKeyboardArrowLeft />atras
                    </ButtonLink>
                </div>
            </header>

            <section className='flex flex-col gap-4'>
                <FormEmployee onCreate={handleAddEmployee} />
            </section>
        </main>
    );
}

export default NewEmployee;
