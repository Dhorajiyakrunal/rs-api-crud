import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add_Edit_Users from './pages/Add_Edit_Users';
import Showuser from './pages/showuser';
import AxiosDatashow from './pages/AxiosDatashow';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Showuser />} />
        <Route path='/add_edit' element={<Add_Edit_Users />} />
        <Route path='/editdata/:id' element={<Add_Edit_Users />} />
      </Routes>
      <AxiosDatashow />
    </>
  );
}

export default App;
