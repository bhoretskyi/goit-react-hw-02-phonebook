export const ContactFilter = ({ filter, updateFilter }) => {
    return (
      <div>
        <label>
          Filter by name:
          <input
            type="text"
            value={filter}
            onChange={e => updateFilter(e.target.value)}
          />
        </label>
      </div>
    );
  };