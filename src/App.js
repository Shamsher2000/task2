
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading text="Design Courses"/>
      <Heading text="Courses to get you Started" />
      <Content/>
      <Heading text="Advance Your With New Skill" />
      <Footer/>
    </div>
  );
}
export default App;
