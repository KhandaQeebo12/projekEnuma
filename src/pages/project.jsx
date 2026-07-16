import "../projek.css"
import cafeku from "../assets/cafeku.png"

function Project() {
    return (
        <>
        
        <h2>Projek saya</h2>

        <div className="card">
            <img className="cardpreview" src={cafeku}/>
            <div className="cardheader">
                <div className="cardtitle">CAFEKU</div>
                <div className="badge">PROJEK KELOMPOK</div>
            </div>

            <p className="carddesc">Aplikasi mobile manajemen pemesanan menu dala kafe yang memudahka pengelolaan dan pemesanan makanan dan transaksi secara digital</p>

            <div className="techstack">
                <span className="techtag">Java</span>
                <span className="techtag">Android Studio</span>
            </div>
        </div>
       
        </>
    )
}

export default Project;