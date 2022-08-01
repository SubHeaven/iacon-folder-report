const { processPath } = require('./index.js');
const prompt = require('prompt');

const path = require('path');
const defaultDestPath = path.join(process.env.USERPROFILE, "/Documents");

(async () => {
    const questions = {
        properties: {
            pathname: {
                description: 'Qual é o endereço do diretório raiz?'
            },
            level: {
                description: 'Qual é o nível?'
            },
            filter: {
                description: 'Qual é o filtro?'
            },
            destpath: {
                description: 'Onde o relatório deve ser criado?'
            }
        }
    }
    // const questions = [
    //     {
    //         name: 'pathname',
    //         message: 'Qual é o endereço do diretório raiz?'
    //     },
    //     {
    //         name: 'level',
    //         message: 'Qual é o nível?'
    //     },
    //     {
    //         name: 'filter',
    //         message: 'Qual é o filtro?'
    //     },
    //     {
    //         name: 'destpath',
    //         message: 'Onde o relatório deve ser criado?',
    //         default: defaultDestPath
    //     }
    // ]

    // const result = inquirer.prompt(questions)

    // result
    //     .then(async answers => {
    //         const { pathname, level, filter, destpath } = answers
    //         await processPath(pathname, level, filter, destpath)
    //     })
    //     .catch(err => console.log(err))
    
    const { pathname, level, filter, destpath } = await prompt.get(questions);
    await processPath(pathname, level, filter, destpath);
})()