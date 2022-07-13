import React from "react";
import { Titulo } from "./Style"
import { Inputs} from "./Style"

export function Etapa2 () {
    return (
        <div>
            <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
            <ul>
                <li>
                <h2>4. Qual o curso?</h2>
                <Inputs type='text'></Inputs>
                </li>
                <li>
                <h2>4. Qual unidade de ensino?</h2>
                <Inputs type='text'></Inputs>
                </li>
            </ul>
        </div>
    )
}