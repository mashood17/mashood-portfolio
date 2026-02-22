import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* Main App */}
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;