import Footer from "@/components/Footer";
import Funfacts from "@/components/Funfacts";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-[#007ced]  md:p-10 bg-[url('/bg.png')] bg-cover bg-fixed">
      <div className=" w-full absolute top-0 left-0 -z-10 h-screen"></div>
      <div className="bg-[#222] md:rounded-[2.4rem] pt-10 z-50">
        <div className="px-14">
          <Navbar />
          <Herosection />
          <Services />
          <Funfacts />
        </div>
        <div className=" bg-[#252525] md:rounded-[2.4rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
