import './Searchbar.css';

function Searchbar({ textoBusqueda, setTextoBusqueda}) {
  return (
    <div className="searchbar">
      <input className="searchInput" type="text" placeholder="Buscar productos..." value={textoBusqueda} onChange={(evento) => setTextoBusqueda(evento.target.value)}/>
    </div>
  );
}

export default Searchbar;