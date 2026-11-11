
function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search projects..."
        value={props.searchTerm}
        onChange={(event) => props.onSearchChange(event.target.value)}
        aria-label="Search projects"
      />
    </div>
  );
}

export default SearchBar;
