import { getDeviceType } from "./utils";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
// import Message from "./components/Message";
import { MessageProvider } from "./context/MessageContext";
import Message from "./components/Message";

function App() {
  const deviceType = getDeviceType();
  const AppStyles =
    deviceType === "mobile"
      ? { width: "100vw" }
      : { width: "50vh", margin: "0 auto" };
  return (
    <div className="App" style={AppStyles}>
      <MessageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Message />
      </MessageProvider>
    </div>
  );
}

export default App;
