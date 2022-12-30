import React from "react";
import { customer1 } from "../assets";
import BlogCard from "./BlogCard";
import { customerData, customerType } from "../assets/data";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      id="blog"
      className="flex__wrapper-container startedcard__container section__margin-top section__padding"
    >
      {customerData?.map((value: customerType) => {
        return (
          <BlogCard
            key={value.id}
            id={value.id}
            image={value.image}
            title={value.title}
            subtitle={value.subtitle}
          />
        );
      })}
    </motion.div>
  );
};

export default Blog;
