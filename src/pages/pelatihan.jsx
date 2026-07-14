import { useState } from "react";
import Navbar from "../components/Navbar";
import "../pelatihan.css"

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
            </div>
        </div>
    </>
    )

}

export default Pelatihan;