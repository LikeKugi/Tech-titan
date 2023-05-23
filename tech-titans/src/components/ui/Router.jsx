import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Authorization from "../pages/Authorization/Authorization";
import NotFound from "../pages/NotFound/NotFound";
import News from "../pages/News/News";
import Header from "../screen/Header/Header";
import Footer from "../screen/Footer/Footer";
import PageContent from "../screen/PageContent/PageContent";
import Vacancies from "../pages/Vacancies/Vacancies";
import CareerProjects from "../pages/CareerProjects/CareerProjects";

const Router = (props) => {
  return (
      <BrowserRouter>
        <Header/>
        <PageContent>
          <Routes>

            <Route element={<HomePage/>}
                   path={'/'}/>
            <Route element={<HomePage/>}
                   path={'/index'}/>
            <Route element={<HomePage/>}
                   path={'/index.html'}/>
            <Route element={<HomePage/>}
                   path={'/index.htm'}/>
            <Route element={<Authorization/>}
                   path={'/login'}/>
            <Route element={<News/>}
                   path={'/news'}/>
            <Route element={<CareerProjects/>} path={'/career'}/>
            <Route element={<Vacancies/>} path={'/vacancies'}/>


            <Route path='*'
                   element={<NotFound/>}/>
          </Routes>
        </PageContent>
        <Footer/>
      </BrowserRouter>
  )
      ;
}
export default Router;