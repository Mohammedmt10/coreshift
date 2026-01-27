import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 pt-8">
      <Page1 />
      <Page2 />      
    </div>
  );
}
