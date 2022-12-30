import { StaticImageData } from "next/image";
import { customer1, customer2, customer3 } from ".";
export interface dataType {
  id: number;
  title: String;
  text: String;
}
export type dataTypeProps = dataType[];

const data: dataTypeProps = [
  {
    id: 1,
    title: "ABOUT US",
    text: "We are a voluntary organization created with the sole aim of helping students maximize their academic, social and financial potentials. our goal is to make the average students better and the brilliant keep shinning.",
  },
  {
    id: 2,
    title: "VISSION",
    text: "We envision reaching out to the students of University of Ilorin and beyond, helping them to excel academically and beyond thereby making them",
  },
  {
    id: 3,
    title: "MISSION",
    text: "We are a voluntary organization created with the sole aim of helping students maximize their academic, social and financial potentials our goal is to make the average students better and the brilliant keep shinning.",
  },
];

export interface customerType {
  id: number;
  image: StaticImageData;
  title: String;
  subtitle: String;
}
export type customerTypeProps = customerType[];
const customerData: customerTypeProps = [
  {
    id: 1,
    image: customer1,
    title: "What we do",
    subtitle: "Watch Now",
  },
  {
    id: 2,
    image: customer2,
    title: "Our real students",
    subtitle: "Read Stories",
  },
  {
    id: 3,
    image: customer3,
    title: "Join the move",
    subtitle: "Learn How",
  },
];
export { data, customerData };
