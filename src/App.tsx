import { FronteggProvider } from "@frontegg/react";
import { memo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import CallbackPage from "./components/CallbackPage";

const App = () => {
  const [fronteggLoading, setFronteggLoading] = useState(true);


  return (
    <>
      <FronteggProvider
        contextOptions={{
          baseUrl: "your-frotegg-domain",
          clientId: 'your-client-id'
        }}
        authOptions={{
          keepSessionAlive: true,
        }}
        hostedLoginBox={false}
        customLoader={setFronteggLoading}
      >
        <Router>
          <Routes>
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="/*" element={<Main />} />
          </Routes>
        </Router>
      </FronteggProvider>
      {fronteggLoading && <div className="spinner"></div>}
    </>
  );
};

export default memo(App);
