import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  
  
  return (
    <div>
      <Header />
      <Content />
      <Footer />

    </div>
  );
}


/*
function App() {
  const handleNameChange = () => {
    const course = ['React', 'Angular', 'Vue'];
    const random = Math.floor(Math.random() * course.length);
    return course[random];
  }
  return (
    <div>
      Wel come to React-app
      <p>Let's study {handleNameChange()}</p>

    </div>
  );
}*/

export default App;
