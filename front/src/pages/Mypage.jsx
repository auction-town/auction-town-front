import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MypageUi from '../components/MypageUi';

export default function Home() {

    return <home className="home">
        <Header />
        <Nav />
        <MypageUi />
        <Footer />
    </home>
  }