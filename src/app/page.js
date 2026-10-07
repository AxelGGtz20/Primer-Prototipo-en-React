//import Image from "next/image";
"use client";
import { useState, useEffect } from "react";
import Alumno from "./alumno";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carrera, setCarrera] = useState("");
  const [activo, setActivo] = useState(true);
  const [calificacion, setCalificacion] = useState("");

  const [mostrarCalificacion, setMostrarCalificacion] = useState(false);

  const [alumnos, setAlumnos] = useState([
    {
      nombre: "Carlos Hector",
      apellido: "Leal Delgado",
      carrera: "LCC",
      activo: true,
      calificacion: 100
    },
    {
      nombre: "Alexis Felipe",
      apellido: "Elorza Obregón",
      carrera: "LCC",
      activo: false,
      calificacion: 90
    },
    {
      nombre: "Axel Gabriel ",
      apellido: "Gutiérrez Ruano",
      carrera: "LCC",
      activo: true,
      calificacion: 80
    },
    {
      nombre: "Eder Abraham",
      apellido: "Sampayo Gonzalez",
      carrera: "LCC",
      activo: false,
      calificacion: 70
    },
    {
      nombre: "Edgar Aurelio",
      apellido: "Santiago Santiago",
      carrera: "LCC",
      activo: true,
      calificacion: 60
    },
    {
      nombre: "Diego Alonso",
      apellido: "Villanueva García",
      carrera: "LCC",
      activo: false,
      calificacion: 50
    },
    {
      nombre: "Mayela Mayte",
      apellido: "Lopez Cerino",
      carrera: "LCC",
      activo: true,
      calificacion: 40
    },
    {
      nombre: "Rodrigo",
      apellido: "Lopez Escobedo",
      carrera: "LCC",
      activo: false,
      calificacion: 30
    },
    {
      nombre: "Emiliano",
      apellido: "Chacon Alvarez",
      carrera: "LCC",
      activo: true,
      calificacion: 85
    }]);

  const agregarAlumno = () => {
    const nuevoAlumno = {
      nombre: nombre,
      apellido: apellido,
      carrera: carrera,
      activo: activo,
      calificacion: Number(calificacion)
    };

    setAlumnos([...alumnos, nuevoAlumno]);
  };

  useEffect(() => {
    console.log(
      mostrarCalificacion ? "Se muestran los reprobados" : "Se ocultan los reprobados"
    )
  })

  return (
    <div>
      <h1>Alumnos</h1>

      <section>
        <h2>Agregar alumno</h2>
        
        <label htmlFor="nombre">Nombre de alumno:</label>
        <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        
        <label htmlFor="apellido">Apellido de alumno:</label>
        <input id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        
        <label htmlFor="carrera">Carrera de alumno:</label>
        <input id="carrera" value={carrera} onChange={(e) => setCarrera(e.target.value)} />
        
        <label htmlFor="activo">Estatus de alumno:</label>
        <select id="activo" value={activo} onChange={(e) => setActivo(e.target.value === "true")}>
        <option value="true">Activo</option>
        <option value="false">Inactivo</option>
        </select>

        <label htmlFor="calificacion">Calificación de alumno:</label>
        <input id="calificacion" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} />
        
        <button onClick={agregarAlumno}>Agregar alumno</button>

        <button onClick={() => setMostrarCalificacion(!mostrarCalificacion)}>
          {mostrarCalificacion ? "Ocultar calificaciones" : "Mostrar calificaciones"}
        </button>
      </section>
      
      <table id="alumnosPresentes">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
            {mostrarCalificacion && (
              <th>Calificación</th>
            )}
          </tr>
        </thead>
        <tbody>
        {
          alumnos.filter((a) => a.activo === true && (mostrarCalificacion || a.calificacion >= 70)).map((a) => (
            <Alumno key={a.nombre + a.apellido} alumno={a} mostrarCalificacion={mostrarCalificacion}></Alumno>
          ))
        }
        </tbody>
      </table>

      <table id="alumnosAusentes">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
            {mostrarCalificacion && (
              <th>Calificación</th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            alumnos.filter((a) => a.activo === false && (mostrarCalificacion || a.calificacion >= 70)).map((a) => (
              <Alumno key={a.nombre + a.apellido} alumno={a} mostrarCalificacion={mostrarCalificacion}></Alumno>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
