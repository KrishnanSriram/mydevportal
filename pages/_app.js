import { NavBar } from '../components/NavBar';
import './../styles/global.css';

const App = ({ Component, pageProps }) => {
  console.log('[App] render');
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
