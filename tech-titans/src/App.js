import Router from "./components/ui/Router";

import PageContainer from "./components/screen/PageContainer/PageContainer";

function App() {
  return (
      <PageContainer>

         <Router />

      </PageContainer>
  );
}

export default App;

//withAuth(App)