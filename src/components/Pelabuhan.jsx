import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Dropdown from "./Dropdown";

const Pelabuhan = ({ negaraId, onSelect }) => {
  const [pelabuhanList, setPelabuhanList] = useState([]);

  useEffect(() => {
    if (negaraId) {
      axios
        .get(
          `http://202.157.176.100:3000/pelabuhans?filter={"where" : {"id_negara":${negaraId}}}`
        )
        .then((response) => {
          setPelabuhanList(response.data);
        });
    }
  }, [negaraId]);

  return (
    <Dropdown options={pelabuhanList} onSelect={onSelect} label="Pelabuhan" />
  );
};

Pelabuhan.propTypes = {
  negaraId: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

export default Pelabuhan;
