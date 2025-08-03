import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RecoilRoot } from "recoil";
import NavigationProvider from "./Navigation.Provider";

function App() {
  return (
    <RecoilRoot>
      <NavigationProvider />
    </RecoilRoot>
  );
}

export default App;
