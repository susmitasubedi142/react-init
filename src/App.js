
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { DetailsCard, Gitprofile, GitRepos, Home, Login, MoviesList, Quizcomponent, Refcounter, Searchbar } from './components';

//import { NewHeader } from './components';
import { Header, NewFooter, Practices, UseState } from './components';
import Abc from './components/Abc';
import Calculate from './components/Calculate';
import { Calculator } from './components/Calculator';
import { Details } from './components/Details';
// import EducationalDetail from './components/Educationaldetail';
import { NewsPortal } from './components/NewsPortal';
import { Quiz, QuizApp } from './components/Quiz';
import SumInput from './components/SumInput';
import HomeNew from './pages/home';
import { Translator } from './components/Translator';
import ImageSlider from './components/ImageSlider';
import Theme from './components/Theme';
import Stopwatch from './components/Stopwatch';
import Videouseref from './components/Videouseref';
import Sectionnew from './components/Sectionnew';
import { Newblogs } from './components/Newblogs';
import { BlogDetail } from './components/NewBlogDetail';
// import { SingleNews } from './pages/SingleNews';





function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/home' element={<HomeNew/>}/>
      <Route path='/usestate' element={<UseState/>}/>
      <Route path='/SumInput' element ={<SumInput/>}/>
      <Route path='/Calculate' element={<Calculate/>}/>
      <Route path='/Calculator' element={<Calculator/>} />
      <Route path='/NewsPortal' element={<NewsPortal/>}/>
      <Route path ='/Login' element={<Login/>}/>
      <Route path ='/gitprofile' element={<Gitprofile/>}/>
      <Route path ='/gitrepos' element={<GitRepos/>}/>
      <Route path ='/translator' element={<Translator/>}/>
      <Route path ='/imageslider' element={<ImageSlider/>}/>
      <Route path ='/useRefcount' element={<Refcounter/>}/>
      <Route path ='/theme' element={<Theme/>}/>
      <Route path ='/stopwatch' element={<Stopwatch/>}/>
      <Route path ='/videouseref' element={<Videouseref/>}/>
      <Route path ='/sectionnew' element={<Sectionnew/>}/>
      <Route path ='/searchbar' element={<Searchbar/>}/>
      <Route path ='/quiz' element={<Quiz/>}/>
      <Route path ='/newblogs' element={<Newblogs/>}/>

      <Route path ='/blogdetail' element={<BlogDetail/>}/>
      <Route path ='/movieslist' element={<MoviesList/>}/>
      <Route path ='/detailscard' element={<DetailsCard/>}/>
      






      




      {/* <Route path ='news/:id' element={<SingleNews/>}/>   */}
      <Route path ='/Details' element={<Details/>}/>
      {/* <Route path='/quiz' element={<QuizApp/>}/> */}
      <Route path='/Quizcomponent' element={<Quizcomponent/>}/>


    
      

      


      {/* <Route path='/Blog' element={<Blog/>}/> */}


      
    </Routes>
    
    <Practices/>
   
    <NewsPortal/>
    <Gitprofile/>
    <GitRepos/>
    <Newblogs/>
    <Login/>
    
  
    <HomeNew/>
    <Abc/>
    <ImageSlider/>

    <UseState/>
    
    <Calculate />
    <NewFooter/>
    {/* <EducationalDetail/> */}
    
    



    </div>
  
  
  /*
<div>
      <Header />
      <section className="homepage-image">
        <div className="text-container">
          <div className="main-text">Nagarik App</div>
          <div className="sub-text">All Government Services in a Single App.</div>
        </div>
        <img src="images/home.png" alt="Home" className="home" /> 
        {/* Ensure image path is correct 
        /*<div className="prim-buttons">
          <Button text="Play Store" link="https://google.com" />
          <Button text="App Store" link="https://google.com" />
        </div>
      </section>

      
    </div>
    */

   );
}

export default App;
