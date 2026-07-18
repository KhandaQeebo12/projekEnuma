import { useState } from "react";
import Navbar from "../components/Navbar";
import "../pelatihan.css"
import day1 from "../assets/day1.png"
import day1git from "../assets/day1git.png"
import day2 from "../assets/day2.png"
import day2web from "../assets/day2web.png"
import day2supabase from "../assets/day2supabase.png"
import day2vercel from "../assets/day2vercel.png"
import day3 from "../assets/day3.png"
import day3tinkercad from "../assets/day3tinkercad.png"
import day4wokwi from "../assets/day4wokwi.png"
import day4firebase from "../assets/day4firebase.png"

function Pelatihan () {

    return(
    <>
        <h2>HASIL PELATIHAN</h2>

        <div className="project-container">
            <div className="projectday1">
                <h4>Day 1: REACTJS DAN GITHUB</h4>
                <p>ReactJS adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI). 
                    sementara GitHub adalah platform hosting kode sumber yang memungkinkan kolaborasi dalam pengembangan perangkat lunak.</p>
                <p>Di hari pertama ini saya membuat web sederhana yaitu sebuah "Todo List" dengan menggunakan beberapa
                    komponen ReactJS
                </p>
                <img className="gambar1" src={day1} alt="day1" />
                <p>Di hari ini juga saya belajar tentang apa saja fitur dari github dan bagaimana menaruh file yang ingin diletakkan atau dipost ke github</p>
                <p>Aplikasi web ini lalu dihubungkan ke repository yang dibuat di dalam Github</p>
                <img className="gambar1" src={day1git} alt="day1git" />
            </div>
        </div>

        <div className="project-container">
            <div className="projectday1">
                <h4>Day 2: SUPABASE, ANTIGRAVITY DAN VERCEL</h4>
                <p>Supabase merupakan salah satu platform backend yang memungkinkan pengembang untuk membuat aplikasi web dan mobile dengan cepat. Antigravity merupakan salah satu code-editor berbasis AI, dan Vercel adalah platform deployment yang memungkinkan pengembang untuk meng-host aplikasi web mereka dengan mudah.</p>
                <p>Di hari kedua ini saya belajar untuk membuat web berbasis ReactJS yang terhubung dengan database Supabase dengan menggunakan AntiGravity 
                </p>
                <img className="gambar1" src={day2} alt="day2" />
                <img className="gambar1" src={day2web} alt="day2web" />
                <img className="gambar1" src={day2supabase} alt="day2supabase" />
                <p>Di hari kedua ini juga saya belajar bagaimana cara mendeploy web gratis dengan menggunakan Vercel</p>
                <img className="gambar1" src={day2vercel} alt="day2vercel" />
            </div>
        </div>

        <div className="project-container">
            <div className="projectday1">
                <h4>Day 3: 9ROUTE DAN TINKERCAD</h4>
                <p>9Route adalah platform yang memungkinkan pengembang untuk membuat dan mengelola rute perjalanan, sedangkan Tinkercad adalah alat desain 3D yang mudah digunakan.</p>
                <p>Di hari ketiga ini saya membuat web portofolio menggunakan antigravity dan belajar bagaimana menggunakan Claude Code dengan GEMINI API dengan menggunakan docker tanpa perlu server online
                </p>
                <img className="gambar1" src={day3} alt="day3" />
                <p>Di hari ketiga ini juga saya belajar bagaimana cara 3D Modeling dengan menggunakan Tinkercad`</p>
                <img className="gambar1" src={day3tinkercad} alt="day3tinkercad" />
            </div>
        </div>

        <div className="project-container">
            <div className="projectday1">
                <h4>Day 4: WOKWI DAN FIREBASE</h4>
                <p>Wokwi merupakan salah satu platform web yang berguna untuk menjadi tempat pembuatan prototype dan menulis kode program untuk IoT</p>
                <p>Dihari ke empat ini saya belajar untuk membuat program monitor dengan menggunakan DHT22 untuk mengatur adanya suhu dan kelembapan, dan data tersebut akan dikirimkan ke database firebase secara realtime
                </p>
                <img className="gambar1" src={day4wokwi} alt="day4" />

                <img className="gambar1" src={day4firebase} alt="day4firebase" />
            </div>
        </div>
    </>
    )

}

export default Pelatihan;