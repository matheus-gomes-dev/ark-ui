import './tailwind.output.css';
import './App.css';
import Header from 'components/Header';
import Display from 'components/Display';


function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Display />
    </div>
  );
}

export default App;
