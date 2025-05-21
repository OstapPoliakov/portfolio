import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { About } from './layout/sections/about/About';
import { Projects } from './layout/sections/projects/Projects';
//import { Testimony } from './layout/sections/testimony/Testimony';
import { Contact } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Education } from './layout/sections/education/Education';
import { GoTopButton } from './components/goTopButton/GoTopButton';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Education />
            <Skills/>
            <Projects/>
            <Contact />
            <Footer />
            <GoTopButton />
        </div>
    )
}

export default App