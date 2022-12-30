import React from "react";
import { motion } from "framer-motion";
const Welcome = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      id="about"
      className="welcome__content flex__wrapper-container section__margin-top"
    >
      <h2>About the Founder of B.G.I Community</h2>
      <div className="welcome__content-btn flex__wrapper-container">
        <p>
          Samuel Solomon Ilemona is a student of Biochemistry, University of
          Ilorin, Public speaker, Entrepreneur and Leader who has served in
          different capacities and organizations, he is interested in been of
          help to the Youth and his community at large, his eloquence and zeal
          through the grace of God has afforded him the opportunity to host and
          moderate various online and physical events and also an interview with
          Silverbird Jos radio station. He believes that Greatness starts with a
          little push of extra hard work and has consistently worked to that
          effect. He is still soaring and making new ways to be of help to every
          community he is privileged to work with.
        </p>
      </div>
    </motion.div>
  );
};

export default Welcome;
