import { Navbar } from "../../components/Navbar";
import { Benefit } from "./section/Benefit";
import { Category } from "./section/Category";
import { Hero } from "./section/Hero";
import { Product } from "./section/Product";

export const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Category />
      <Benefit />
    </>
  );
};
