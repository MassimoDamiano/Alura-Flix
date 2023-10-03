import React,{ useState} from 'react'
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import { TextField, inputLabelClasses } from '@mui/material'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  padding: -5px;

`
const ContainerButtons= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const ButtonE = styled(Button)({
  margin:"5px",
  padding:"20px"
});

function Video({handleSubmit}) {
 
  const [titulo,setTitulo] = useState("")
  const [linkV,setLinkV] = useState("")
  const [linkI,setLinkI] = useState("")
  const [categoria,setCategoria] = useState("")
  const [descripcion,setDescripcion] = useState("")
  const [codigo,setCodigo] = useState("")

 const [errors,setErrors] = useState({
  titulo:{
    error:false,
    message: "Deben ser al menos 3 caracteres y menos que 15"
  },
  linkV:{
    error:false,
    message:"Deben ser al menos 3 caracteres"
  },
  linkI:{
    error:false,
    message:"Deben ser al menos 3 caracteres"
  },
  categoria:{
    error:false,
    message:"Deben ser al menos 3 caracteres"
  },
  descripcion:{
    error:false,
    message:"Deben ser al menos 10 caracteres"
  },
  codigo:{
    error:false,
    message:"Deben ser al menos 1 numeros"
  },
 })
 
 const validarTitulo = (titulo) =>{
  if(titulo.length >= 3 && titulo.length < 15){
    return {titulo: {error:false,message: ""
  }}
  }else{
    return{
      titulo:{
        error:true,
        message: "Deben ser al menos 3 caracteres y menos que 15"

      }
    }
  }
 }
 const validarLinkV = (linkV) =>{
  if(linkV.length >= 3 ){
    return {linkV: {error:false,message: ""
  }}
  }else{
    return{
      linkV:{
        error:true,
        message: "Deben ser al menos 3 caracteres y menos que 15"

      }
    }
  }
 }
 const validarLinkI = (linkI) =>{
  if(linkI.length >= 3 && linkI.length < 15){
    return {linkI: {error:false,message: ""
  }}
  }else{
    return{
      linkI:{
        error:true,
        message: "Deben ser al menos 3 caracteres y menos que 15"

      }
    }
  }
 }
 
 const validarCategoria = (categoria) =>{
  if(titulo.length >= 3 && titulo.length < 15){
    return {titulo: {error:false,message: ""
  }}
  }else{
    return{
      titulo:{
        error:true,
        message: "Deben ser al menos 3 caracteres y menos que 15"

      }
    }
  }
 }
 const validarDescripcion = (descripcion) =>{
  if(titulo.length >= 3 && titulo.length < 15){
    return {titulo: {error:false,message: ""
  }}
  }else{
    return{
      titulo:{
        error:true,
        message: "Deben ser al menos 3 caracteres y menos que 15"

      }
    }
  }
 }
 const validarCodigo = (codigo) =>{
  if(titulo.length >= 3 && titulo.length < 15){
    return {titulo: {error:false,message: ""
  }}
  }else{
    return{
      titulo:{
        error:true,
        message: "Deben ser al menos 3 caracteres y menos que 15"

      }
    }
  }
 }

 
  return (
    <div>
        <Header/>
      <Container maxWidth="lg">
        <form onSubmit={(e) => {
           e.preventDefault() 
          handleSubmit({titulo,linkI,linkV,categoria,descripcion,codigo})
        }}>
          <TextField 
            id="outlined-basic" 
            label="Titulo" 
            value={titulo}
            variant="outlined" 
            fullWidth={true} 
            margin='normal'
            InputProps={{className:"input"}}
            InputLabelProps={{className:"label"}}
            onChange={(e) =>{
              setTitulo(e.target.value)
            }}
            error={errors.titulo.error}
            helperText={ errors.titulo.error && errors.titulo.message}
/*             onBlur={(e)=> setErrors(validarTitulo(e.target.value))}
 */            /> 
          <TextField 
            id="outlined-basic" 
            label="Link del video" 
            variant="outlined" 
            fullWidth={true} 
            margin='normal' 
            color='warning'
            value={linkV}
            InputProps={{className:"input"}}
            InputLabelProps={{className:"label"}}
            onChange={(e) =>{
              setLinkV(e.target.value)
            }} 
            error={errors.linkV.error}
            helperText={ errors.linkV.error && errors.linkV.message}
/*             onBlur={(e)=> setErrors(validarLinkV(e.target.value))}
 */          />
          
          <TextField 
            id="outlined-basic" 
            label="Link imagen del video" 
            variant="outlined" 
            fullWidth={true}
            value={linkI}
            margin='normal'
            InputProps={{className:"input"}}
            InputLabelProps={{className:"label"}}
            onChange={(e) =>{
              setLinkI(e.target.value)
            }}
          /> 
          <TextField 
            id="outlined-basic" 
            label='Escoja una categoria'
            variant="outlined" 
            fullWidth={true}
            margin='normal'
            InputProps={{className:"input"}}
            InputLabelProps={{className:"label"}}
            value={categoria}
            onChange={(e) =>{
              setCategoria(e.target.value)
            }}
          />
          
          <TextField multiline 
          rows={5} 
          InputProps={{className:"input"}}
          InputLabelProps={{className:"label"}}
           
          label='Descripción' 
          variant="outlined" 
          fullWidth={true}
          margin='normal'
          value={descripcion}
          onChange={(e) =>{
            setDescripcion(e.target.value)
          }}
          />

          <TextField 
            id="outlined-basic" 
            label='Codigo de seguridad' 
            value={codigo}
            variant="outlined" 
            fullWidth={true}
            margin='normal'
            InputProps={{className:"input"}}
            InputLabelProps={{className:"label"}}
            onChange={(e) =>{
              setCodigo(e.target.value)
            }}
          />
          
            <Button variant="contained" margin='normal' type='submit'>Crear Video </Button>
            
        </form>
      </Container>

       <Footer/>
    </div>
  )
}

export default Video