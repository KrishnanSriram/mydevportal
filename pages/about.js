import Link from 'next/link';
import { NavBar } from '../components/NavBar';

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <h2>KRISH's Blog - About</h2>
        <p>This is a BLOG site to display MD files</p>
      </main>
    </>
  );
};

export default AboutPage;
