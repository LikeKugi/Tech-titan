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
import Energies from "../screen/Energies/Energies";
import Profile from "../pages/Profile/Profile";
import InternPhonetic from "../roles/Intern/InternApplication/InternPhoenetic";
import InternCareer from "../roles/Intern/InternCareer/InternCareer";
import InternTest from "../roles/Intern/InternTest/InternTest";

const Router = () => {
  return (
      <BrowserRouter>
        <Header/>

            <PageContent>
            <Energies/>
            <Routes>

              <Route path={'/'}
                     element={<HomePage/>}/>
              <Route path={'/index'}
                     element={<HomePage/>}/>
              <Route path={'/index.html'}
                     element={<HomePage/>}/>
              <Route path={'/index.htm'}
                     element={<HomePage/>}/>
              <Route path={'/login'}
                     element={<Authorization/>}/>
              <Route path={'/news'}
                     element={<News/>}/>
              <Route path={'/career'}
                     element={<CareerProjects/>}/>
              <Route path={'/vacancies'}
                     element={<Vacancies/>}/>
              <Route element={<Profile/>}
                     path={'/profile'}>
                <Route path={'phonetic'}
                       element={<InternPhonetic/>}/>
                <Route path={'career'}
                       element={<InternCareer/>}/>
                <Route path={'test'}
                       element={<InternTest/>}/>
              </Route>


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