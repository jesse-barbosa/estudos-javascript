const prompt = require("readline-sync")
const username = prompt.question("Nome do usuario que deseja inspecionar:")

const URL = `https://api.github.com/users/${username}`

async function chamarAPI(){
    const resp = await fetch(URL)
    if(resp.status === 200){
        const obj = await resp.json()
        console.log(`Nome do usuário: ${obj.name}`)
        console.log(`Site principal: ${obj.blog}`)
        console.log(`Localização: ${obj.location}`)
        console.log(`Descrição: ${obj.bio}`)
        console.log(`Repositórios publicos: ${obj.public_repos}`)
        console.log(`Seguidores: ${obj.followers}`)
        console.log(`Seguindo: ${obj.following}`)
        const createdData = obj.created_at
        const createdDataFormated = createdData.slice(0, 10)
        console.log(`Criou a conta em: ${createdDataFormated}`)
    }
}

chamarAPI()