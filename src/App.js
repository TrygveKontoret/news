import Header from './components/header/Header';
import Article from './components/article/Article';
import "./sass/main.scss";

const App = () => {
  return (
    <>
    <Header />
    <Article titletext='How to get a sexy body' bodytext='Body of a sexy lady' authortext='Narkolai sin sexy body'/>
    <Article titletext='What is a sexy body?' bodytext='Body of a sexy dude' authortext='Trude sin sexy body'/>
    <Article titletext='The sexiest body' bodytext='Body of a sexy me' authortext='Meg med min sexy body'/>
    </>
    
  );
};


export default App;
