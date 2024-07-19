import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Dropdown from "./Dropdown";

const Negara = ({ onSelect }) => {
  const [negaraList, setNegaraList] = useState([]);

  useEffect(() => {
    axios.get("http://202.157.176.100:3000/negaras").then((response) => {
      setNegaraList(response.data);
    });
  }, []);

  return <Dropdown options={negaraList} onSelect={onSelect} label="Negara" />;
};

Negara.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Negara;
