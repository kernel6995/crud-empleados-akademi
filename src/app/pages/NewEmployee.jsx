// @ts-check
// Components
import FormEmployee from '../components/FormEmployee';
import ButtonLink from '../components/ButtonLink';

// Icons
import { IconKeyboardArrowLeft } from '../utilities/styledIconsSVG';

function NewEmployee() {
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
                <FormEmployee />
            </section>
        </main>
    );
}

export default NewEmployee;
