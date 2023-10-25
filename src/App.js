import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchGenere,
  fetchSongs,
  fetchSlugAlbums,
} from "./api/api";
// import Card from "../src/Components/Card/Card.jsx";
import Section from "./Components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setfilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggles = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    console.log(songsData);

    const res = songsData.filter((item) => item.genre.key === key);
    // console.log(res);
    filteredData(res);
  };

  useEffect(() => {
    // console.log(value);
    generateSongsData(value);
  }, [value]);

  // const generateData = async () => {
  //   try {
  //     const res = await fetchTopAlbums();
  //     setSongsData(res);
  //     setfilteredDataValues(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();

      setSongsData(res);
      setfilteredDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = (val) => {
    console.log(val);
    setfilteredDataValues(val);
  };

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  const generateNewAlbumsData = async () => {
    const newAlbumsdata = await fetchNewAlbums();
    setNewAlbumsData(newAlbumsdata);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
  }, []);

  return (
    <div>
      <Navbar data={songsData} />
      <Hero />
      {/* {topAlbumsData.map((item) => {
        return <Card data={item} type="album" />;
      })} */}
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="newAlbums" title="New Albums" />
        {/* <Section data={fetchSlugAlbums} type="slugAlbums" title="Slug Albums" /> */}
        <Section
          data={filteredDataValues}
          type="Songs"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggles={handleToggles}
          handleChange={handleChange}
        />
      </div>
      {/* <Section data={fetchGenere} type="Genere" title="Genere" /> */}
    </div>
  );
}

export default App;
