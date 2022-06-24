import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './components/List';
import Search from './components/Search';
import Pagination from './components/Pagination';
import './App.css';

 /* TODO: Show single search item
          Styled Components to make css more dynamic
          Render small images for mobile - using some hook to identify small devices
 */
 
function App() {
  const [albums, setAlbums] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  }

  const onPageChange = (e) => {
    setPageNo(Number(e.target.value));
  }

  const getAlbums = () => {
    const startIndex = (pageNo-1) * 10;
    return albums.slice(startIndex, startIndex + 10);
  }

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((res)=>{
      setAlbums(res.data);
    })
  }, []);

  return (
    <div className="App">
      <Search albums={albums} onSearch={onSearch} />
      <List albums={getAlbums()} />
      <Pagination noOfPages={Math.ceil(albums.length/10)} onPageChange={onPageChange} selectedPage={pageNo}/>
    </div>
  );
}

export default App;
