import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";
import FooterApp from "./FooterApp"
;

const MiApi = () => {
    /* Estados que guarda info de Api, resultado busqueda */
    const [datos, setData] = useState([]);
    const [search, setSearch] = useState('')


    useEffect(() => { consultaInfo(); }, [])

    const urlApi = 'https://rickandmortyapi.com/api/character'

    /* Función que consulta Api */
    const consultaInfo = async () => {
        const res = await fetch(urlApi);
        const dat = await res.json();
        setData(dat.results)
    }

    
    /* Función filtra busqueda */
    const resBusqueda = search !== '' ? datos.filter((char) => char.name.toLowerCase().includes(search.toLowerCase())) : datos

    /* Ordenamos los resultados */
    datos.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))

    return (
        
        <div  className="justify-content-md-center sm-2" >
            <Row className="searchBar">
                <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Buscar personaje'/>
            </Row>
            <Row className="col-md-5 mx-auto secPrincipal">

            
            {
            resBusqueda.map((elem) => {
                return <Card  className="tarjetas" key={elem.id}>
                            <Card.Img variant="top" className="fotoCard" src={elem.image} />
                                <Card.Body>
                                    <Card.Title>
                                        <h2> {elem.name} </h2>
                                    </Card.Title>
                                    <Card.Text>
                                    <strong>Ubicación: </strong>{elem.location.name}
                                    </Card.Text>
                                    <Card.Text>
                                    <strong>Especie: </strong>{elem.species}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
            })
            }
            </Row>

            <FooterApp />
        </div>

        

    )
}
export default MiApi;