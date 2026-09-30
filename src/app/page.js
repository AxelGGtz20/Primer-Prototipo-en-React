//import Image from "next/image";
"use client";
import { useState } from "react";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  let alumnos = [
    {
      nombre: "Carlos Hector",
      apellido: "Leal Delgado",
      carrera: "LCC"
    },
    {
      nombre: "Alexis Felipe",
      apellido: "Elorza Obregón",
      carrera: "LCC"
    },
    {
      nombre: "Axel Gabriel ",
      apellido: "Gutiérrez Ruano",
      carrera: "LCC"
    },
    {
      nombre: "Eder Abraham",
      apellido: "Sampayo Gonzalez",
      carrera: "LCC"
    },
    {
      nombre: "Edgar Aurelio",
      apellido: "Santiago Santiago",
      carrera: "LCC"
    },
    {
      nombre: "Carlos Hector",
      apellido: "De León Salcedo",
      carrera: "LCC"
    },
    {
      nombre: "Mayela Mayte",
      apellido: "Lopez Cerino",
      carrera: "LCC"
    },
    {
      nombre: "Rodrigo",
      apellido: "Lopez Escobedo",
      carrera: "LCC"
    },
    {
      nombre: "Emiliano",
      apellido: "Chacon Alvarez",
      carrera: "LCC"
    }
  ];

  return (
    <div>
      <h1>Alumnos</h1>

      <section>
        <h2>Agregar alumno</h2>
        <label htmlFor="nombre">Nombre de alumno:</label>
        <input id="nombre"/>
        <label htmlFor="apellido">Apellido de alumno:</label>
        <input id="apellido"/>
        <label htmlFor="carrera">Carrera de alumno:</label>
        <input id="carrera"/>
      </section>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
        {
          alumnos.map((alumno) => (
            <tr key={alumno.nombre}>
              <div className="flexbox flex-row">
                <img src="student.jpg" width="50" height="50" className="estudianteAvatar"/>
                <span>{alumno.nombre}</span>
              </div>
              <td>{alumno.apellido}</td>
              <td>{alumno.carrera}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
