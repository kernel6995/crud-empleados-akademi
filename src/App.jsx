// @ts-check
import { Route, Routes } from 'react-router-dom';

// Pages
import EditEmployee from './app/pages/EditEmployee';
import Home from './app/pages/Home';
import NewEmployee from './app/pages/NewEmployee';

function App() {
    return (
        <div>
            <nav className='bg-stone-800 flex justify-between items-center px-4 py-2'>
                <header className='text-white'>
                    <h1 className='text-2xl font-medium'>Practico Akademi</h1>
                    <h2>CRUD de empleados</h2>
                </header>
            </nav>

            <Routes>
                <Route path='/' element={
                    <Home />
                }></Route>

                <Route path='/nuevo_empleado' element={
                    <NewEmployee />
                }></Route>

                <Route path={'/editar_empleado/:id'} element={
                    <EditEmployee />
                }></Route>
            </Routes>
        </div>
    );
}

export default App;
