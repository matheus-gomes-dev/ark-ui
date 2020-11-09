import './tailwind.output.css';
import './App.css';
import Header from 'components/Header';
import MyWallets from 'components/MyWallets';


function App() {
  return (
    <div className="container mx-auto">
    <div style={{ maxWidth: '90%', margin: 'auto' }}>
      <Header />
      <MyWallets />
    </div>
    </div>
  );
}

export default App;
