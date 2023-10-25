import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  title,
  data,
  type,
  // filteredData = null,
  filteredDataValues = [],
  // toggle = false,
  handleToggles = null,
  value = 0,
  handleChange = null,
}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "Songs" ? (
        <BasicTabs
          value={value}
          handleChange={handleChange}
          handleToggles={handleToggles}
        />
      ) : null}
      <div>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardsWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {data.map((item) => (
                  <Card data={item} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                data={data}
                renderComponent={(data) => <Card data={data} type={type} />}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
