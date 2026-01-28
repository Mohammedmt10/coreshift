import { HeroSection } from "../components/heroSection";
import { NavBar } from "../components/navBar";

export const Page1 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <HeroSection />
    </div>
  );
};
