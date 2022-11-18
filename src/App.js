
import './App.css';
import Widget from './components/widget/Widget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SimplePost from './components/simplepost/SimplePost';
import settings from './settings.json'


function App() {


  const url = settings.url
  const limit = settings.limit
  const interval = settings.interval
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Widget URL={url} limit={limit} updateInterval={interval} />} />
        <Route path="/post" element={<SimplePost />} />
        <Route path="*" element={<div>Page Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
