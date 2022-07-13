import React from "react";   
import { Selected }  from "./Style"
import { Titulo }  from "./Style"

export function Etapa3 () {
    return (
        <div>
            <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
            <ul>
                <li>
                    <h2>Por que você não terminou o curso de graduação?</h2>
                    <inupt></inupt>
                </li>
                <li>
                    <h2>Você fez algum curso complementar?</h2>
                    <Selected>
                    <option>Ensino Fundamental</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option selected="selected">Nenhum</option>
                    </Selected>
                </li>
            </ul>
        </div>
    )
}