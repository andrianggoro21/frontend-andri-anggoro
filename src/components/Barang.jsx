import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Dropdown from "./Dropdown";

const Barang = ({ pelabuhanId, onSelect }) => {
  const [barangList, setBarangList] = useState([]);

  useEffect(() => {
    if (pelabuhanId) {
      axios
        .get(
          `http://202.157.176.100:3000/barangs?filter={"where" : {"id_pelabuhan":${pelabuhanId}}}`
        )
        .then((response) => {
          setBarangList(response.data);
        });
    }
  }, [pelabuhanId]);

  return <Dropdown options={barangList} onSelect={onSelect} label="Barang" />;
};

Barang.propTypes = {
  pelabuhanId: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

export default Barang;
