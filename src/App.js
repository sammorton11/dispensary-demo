import './App.css';
import { useState } from 'react';
import About from './components/About.jsx';
import AgeVerifyModal from './components/AgeVerifyModal';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';
import WelcomeImage from './components/WelcomeImage.jsx';
import Footer from './components/Footer';

function App() {
    const ageVerified = localStorage.getItem('ageVerified') === 'true';
    const [showModal, setShowModal] = useState(!ageVerified); 
    const handleModalSuccess = () =>{
        localStorage.setItem('ageVerified', 'true');
        setShowModal(false);
    };
    const handleModalClose = () => {
        window.history.go(-1);
    };

    return (
        <>
            {showModal && (
                <AgeVerifyModal onSuccess={handleModalSuccess} onClose={handleModalClose}/>
            )}
            <WelcomeImage />
            <About />
            <Gallery />
            <Contact />
            <Footer/>
        </>
    );
}

export default App;
