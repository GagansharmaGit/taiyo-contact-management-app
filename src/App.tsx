import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import LeftSidebar from './components/LeftSidebar';
import ShowContacts from './components/ShowContacts';
import UI from './components/UI';
import ChartAndMap from './components/ChartAndMap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UI />} >
        <Route index element={<ShowContacts />} />
        <Route path="contacts" element={<ShowContacts />} />
        <Route path="charts-and-maps" element={<ChartAndMap />} />
        <Route path="add-contact" element={<AddContact />} />
        <Route path="edit-contact/:id" element={<AddContact isEditMode={true} />} />

      </Route>
      
    </Routes>
  );
}



export default App;
