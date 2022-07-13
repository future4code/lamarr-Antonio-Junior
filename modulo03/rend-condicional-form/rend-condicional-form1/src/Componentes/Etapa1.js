import React from "react";
import { Titulo } from "./Style"
import { Inputs} from "./Style"
import { Selected }  from "./Style"



export function Etapa1 (){
    return (
        <div>
            <ul>
                    <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <li>
                    <h2>1. Qual o seu nome?</h2> 
                    <Inputs type='text'></Inputs>
                </li>
                <li>
                <h2>2. Qual a sua idade?</h2> 
                    <Inputs type='text'></Inputs>
                </li>
                <li>
                <h2>3. Qual o seu email?</h2>
                    <Inputs type='text'></Inputs>
                </li>
                <li>
                <h2>4. Qual a sua escolaridade?</h2>
                    <Selected>
                        <option>Ensino Fundamental</option>
                        <option>Ensino Fundamental incompleto</option>
                        <option>Ensino Médio</option>
                        <option selected="selected">Ensino Médio incompleto</option>
                        <option>Ensino Superior</option>
                        <option>Ensino Superior incompleto</option>
                        <option>Outro</option>
                    </Selected>
                </li>
            </ul>
        </div>
    )
}