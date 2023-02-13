// @ts-check
// Components
import ButtonLink from "../components/ButtonLink";
import FormEmployee from "../components/FormEmployee";

// Icons
import { IconKeyboardArrowLeft } from "../utilities/styledIconsSVG";

function EditEmployee() {
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
                <FormEmployee />
            </section>
        </main>
    );
}

export default EditEmployee;
