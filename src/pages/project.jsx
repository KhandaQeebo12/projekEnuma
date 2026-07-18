import "../projek.css"
import cafeku from "../assets/cafeku.png"
import pokelu from "../assets/pokelu.png"
import ratingku from "../assets/ratingku.png"

function Project() {
    return (
        <>
        
        <h2>PROJEK SAYA</h2>

        <div className="cardsection">

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
        <div className="card">
            <img className="cardpreview" src={pokelu}/>
            <div className="cardheader">
                <div className="cardtitle">POKELU</div>
                <div className="badge">PROJEK KELOMPOK</div>
            </div>

            <p className="carddesc">Aplikasi berbasis web yang berguna menjadi tempat index kartu pokemon dan tempat transaksi jual beli kartu pokemon </p>

            <div className="techstack">
                <span className="techtag">LARAVEL</span>
                <span className="techtag">Web development</span>
            </div>
        </div>
        <div className="card">
            <img className="cardpreview" src={ratingku}/>
            <div className="cardheader">
                <div className="cardtitle">RATINGKU</div>
                <div className="badge">PROJEK KELOMPOK</div>
            </div>

            <p className="carddesc">Aplikasi berbasis web yang berfungsi sebagai tempat untuk menilai srbuah film, game, atau yang lainnya</p>

            <div className="techstack">
                <span className="techtag">PHP</span>
                <span className="techtag">Android Studio</span>
            </div>
        </div>
        </div>

       
        </>
    )
}

export default Project;