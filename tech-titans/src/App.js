import Router from "./components/ui/Router";

import Header from "./components/screen/Header/Header";
import Footer from "./components/screen/Footer/Footer";
import PageContainer from "./components/screen/PageContainer/PageContainer";
import PageContent from "./components/screen/PageContent/PageContent";

function App() {
  return (
      <PageContainer>

          <Router />

      </PageContainer>
  );
}

export default App;

//withAuth(App)