import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Article from '../components/Article';

export default function Home() {

    return <home className="home">
      <Header />
      <Nav />
      <Article />
      <Footer />
    </home>
  }