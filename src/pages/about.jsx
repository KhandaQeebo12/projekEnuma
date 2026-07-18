import profile from "../assets/profile.jpeg"
import "../about.css"

function About() {
  return (
    <>
      <h2>ABOUT PAGE</h2>

      <div className="profilesection">

        <div className="cardheader">
          <h4 className="title">BIODATA</h4>
        </div>

        <div className="photobody">
          <div className="photo">
            <label className="photoframe" for="photoinput">
              <div className="photobox">
                <img src={profile} alt="fotoprofil"/>
              </div>
            </label>
            <p className="photocapt">Ini Foto Saya</p>
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label>Nama Lengkap</label>
            <p>Khanda Qeebo Bonggie</p>
          </div>
          <div className="field">
            <label>Sekolah</label>
            <p>SMK NEGERI 2 SURAKARTA</p>
          </div>
          <div className="field">
            <label>Kelas</label>
            <p>XII PPLG B</p>
          </div>
          <div className="field">
            <label>Tempat, Tanggal Lahir</label>
            <p>Semarang, 25 Juli 2008</p>
          </div>
          <div className="field">
            <label>Keahlian</label>
            <span className="skilltag">Web Development</span>
            <span className="skilltag">Frontend design</span>
          </div>

        </div>
      </div> 
    
    </>
  )
}

export default About;