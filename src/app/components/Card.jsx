// @ts-check
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeesSlice';

// Components
import Button from './Button';
import ButtonLink from './ButtonLink';

// Icons
import { IconDelete, IconEdit, IconKeyboardArrowDown, IconKeyboardArrowUp } from '../utilities/styledIconsSVG';

function Card({ _idEmployee, children, title }) {
    const dispatch = useDispatch();

    const [openCard, setOpenCard] = useState(false);

    const handleDeleteEmployee = (id) => {
        dispatch(deleteEmployee(id))
        setOpenCard(false);
    }

    return (
        <article className='bg-slate-200 border-2 border-slate-400 rounded-xl p-2 flex flex-col gap-2'>
            <header className='flex justify-between items-center'>
                <h4>{title}</h4>

                <Button onClick={() => setOpenCard(!openCard)}>
                    {openCard ? <IconKeyboardArrowUp /> : <IconKeyboardArrowDown />}
                </Button>
            </header>

            {
                openCard && <>
                    <section className='border-t-2 border-b-2 border-slate-400'>
                        {children}
                    </section>

                    <div className='flex gap-2 justify-end'>
                        <ButtonLink href={`/editar_empleado/${_idEmployee}`}>
                            Editar<IconEdit />
                        </ButtonLink>
                        <Button title='eliminar' onClick={() => handleDeleteEmployee(_idEmployee)}>
                            Eliminar<IconDelete />
                        </Button>
                    </div>
                </>
            }
        </article>
    );
}

export default Card;
