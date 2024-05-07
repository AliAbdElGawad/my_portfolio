import { Hero, Navbar } from "./components";

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-300 selection:text-cyan-900 selection:bg-cyan-900">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* Anther Background */}
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default App;
