// @ts-check
import { useSelector } from 'react-redux';

// Components
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import Card from '../components/Card';

// Icons
import { IconAdd, IconKeyboardArrowLeft, IconKeyboardArrowRight } from '../utilities/styledIconsSVG';

function Home() {
    const employeesState = useSelector(state => state.employees.employees);

    return (
        <main className='flex flex-col gap-4 p-4 min-h-screen'>
            <header className='flex justify-between'>
                <h3 className='text-2xl'>lista de empleados</h3>

                <div className='flex gap-4'>
                    <ButtonLink href='nuevo_empleado' title='crear empleado'>
                        nuevo<IconAdd />
                    </ButtonLink>
                </div>
            </header>

            <section className='flex flex-col gap-4 justify-between'>
                {
                    employeesState.length > 0 ?
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start'>
                            {
                                employeesState.map((employee, index) =>
                                    <Card
                                        _idEmployee={employee.EMPLOYEE_ID}
                                        key={index}
                                        title={employee.LAST_NAME + ' ' + employee.FIRST_NAME}
                                    >
                                        <ul>
                                            <li className='flex justify-between'>
                                                <span>Email:</span><span>{employee.EMAIL}</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Numbero telefonico</span><span>{employee.PHONE_NUMBER || 'no definido'}</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Fecha de contrato</span><span>{employee.HIRE_DATE || 'no definido'}</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Salario</span><span>{employee.SALARY || 'no definido'}</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Comision</span><span>{employee.COMMISSION_PCT || 'no definido'}</span>
                                            </li>
                                        </ul>
                                    </Card>
                                )
                            }
                        </div> :
                        <div>
                            <p className='text-center text-5xl'>no tienes empleados 😢</p>
                        </div>
                }

                <div className='flex items-center justify-between'>
                    <div className='flex gap-2'>
                        <Button title='pagina anterior'>
                            <IconKeyboardArrowLeft />pagina anterior
                        </Button>

                        <Button title='siguiente pagina'>
                            siguiente pagina<IconKeyboardArrowRight />
                        </Button>
                    </div>

                    <p>pagina 0/0</p>

                    <p>total de empleados {employeesState.length}</p>
                </div>
            </section>
        </main>
    );
}

export default Home;
