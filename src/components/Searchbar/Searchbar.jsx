import './Searchbar.css';
import Button from '../Button/Button';

function Searchbar() {
  return (
    <div className="searchbar">
      <input className="searchInput" type="text" placeholder="Buscar productos..." />
      <Button clase="searchBtn" titulo="Buscar" onClick={() => alert('Funcionalidad de búsqueda no implementada')} />
    </div>
  );
}

export default Searchbar;