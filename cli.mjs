import inquirer from 'inquirer'
import { processPath } from './index.mjs';

import path from 'path';
const defaultDestPath = path.join(process.env.USERPROFILE, "/Documents");

(function () {
    const questions = [
        {
            name: 'pathname',
            message: 'Qual é o endereço do diretório raiz?'
        },
        {
            name: 'level',
            message: 'Qual é o nível?'
        },
        {
            name: 'filter',
            message: 'Qual é o filtro?'
        },
        {
            name: 'destpath',
            message: 'Onde o arquivo deve ser criado?',
            default: defaultDestPath
        }
    ]

    const result = inquirer.prompt(questions)

    result
        .then(async answers => {
            const { pathname, level, filter, destpath } = answers
            await processPath(pathname, level, filter, destpath)
        })
        .catch(err => console.log(err))
})()