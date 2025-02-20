import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import wall from "../public/wall.jpg";
import Image from "next/image";
import Galary from "./components/Galary";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Image
          src={wall}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        ;
      </div>
      <Content />
      <hr></hr>
      <Galary />
      <hr></hr>
      <Footer />
    </>
  );
}
