import Footer from '../Dashboard/Footer/Footer'
import Header from '../Dashboard/Header/Header'
import './Home.scss'

export default function Home() {
    console.log(import.meta.env.VITE_REACT_ENVIRONMENT)
    return (
        <div className="dashboard">
            <Header/>
            <Footer/>
            
        </div>
    )
}
