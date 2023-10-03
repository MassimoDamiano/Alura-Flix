import axios from "axios"

 export const api = axios.create({
    baseURL: "http://localhost:5000/videos"
})


export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}

const listaVideos = () => fetch("http://localhost:5000/videos").then((data) => data.json())

export async function saveVideo(productData){
    try{
        
        const response = await axios({
            url:`http://localhost:5000/videos`,
            method:"POST",
            data:productData
        })
        return response
    }catch(e){
        console.log(e)
    }
}

export const clientServices = {
    listaVideos
}