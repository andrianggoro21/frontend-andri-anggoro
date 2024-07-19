import PropTypes from "prop-types";

const Dropdown = ({ options, onSelect, label }) => {
  return (
    <div>
      <label className="block mb-2">{label}:</label>
      <select
        onChange={(e) => onSelect(JSON.parse(e.target.value))}
        className="border p-2 w-full"
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={JSON.stringify(option)}>
            {option.nama_negara || option.nama_pelabuhan || option.nama_barang}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
