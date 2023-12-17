import React, { useState } from "react";
import { DivLista } from "./Cajas";
import { CardTarea } from "./CardTarea";

export function Completadas(){

    const [tareas,setTareas]=useState(
        [
            {Titulo:"Completar aplicacion", Descripcion:"Se debe completar la aplicacion del tablero"},
            {Titulo:"Subir video", Descripcion:"Se debe subir el nuevo video a stevechambitas"},
            {Titulo:"Jugar Elden Ring", Descripcion:"Se debe completar elden ring"},
            {Titulo:"Completar pase", Descripcion:"Se debe completar el pase de batallas de fornite"},
            {Titulo:"completar Miniaturas", Descripcion:"Se deben completar la miniaturas"},
            {Titulo:"Ver proyecyo X", Descripcion:"Se debe terminar de ver proyecto X"},
            {Titulo:"Terminar el libro", Descripcion:"Se debe completar el libro"},
            {Titulo:"Formar la empresa", Descripcion:"Se debe formar la empresa devfarm"}
        ]
    );

    return(
        <>
            <h1>Tareas Completadas</h1>
            <DivLista>
                {
                    tareas.map(
                        tarea=> <CardTarea tarea={tarea} />
                    )
                }
            </DivLista>
        </>
    );
}