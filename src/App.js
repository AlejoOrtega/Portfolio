import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header/>
      <ProjectList />
      <WorkExperience />
      <Education />
      <Footer />
    </main>
  );
}

export default App;
