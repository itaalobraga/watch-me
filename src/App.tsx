import { Content } from "./components/Content";
import { SideBar } from "./components/Sidebar";
import { WatchMeContextProvider } from "./context/WatchMeContext";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
      <>
          <WatchMeContextProvider>
              <div style={{ display: 'flex' }}>
                  <SideBar />
                  <Content />
                  <GlobalStyle />
              </div>
          </WatchMeContextProvider>
      </>
  );
}
