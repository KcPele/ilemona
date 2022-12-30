import React from "react";
import StartedCard from "./StartedCard";
import { data } from "../assets/data";
import { motion } from "framer-motion";
const Started = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      className="section__margin-top started__container"
    >
      <div className="started__container-header">
        <h1>QUOTE OF THE WEEK</h1>
        <p>
          Until you make the unconscious conscious, it will rule your life and
          you will call it Fate – Carl Jung
        </p>
      </div>
      <div className="startedcard__container flex__wrapper-container">
        {data.map((value) => {
          return (
            <StartedCard
              key={value.id}
              id={value.id}
              title={value.title}
              text={value.text}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Started;
