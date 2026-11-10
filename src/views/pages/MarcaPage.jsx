import { useEffect, useState } from "react";
import MarcaController from "../../controllers/MarcaController";
import MarcaForm from "../components/MarcaForm";
import MarcaList from "../components/MarcaList";

function MarcasPage(){
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState("");

    const cargarMarcas = async () => {
        setLoading(true);
        setError("");
        try{
            const data = await MarcaController.listarMarcas();
            setMarcas(data);
        }catch(err){
            setError("No se pudo cargar la lista de marcas");
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarMarcas();
    }, []);

    const handleCrear = async (form) => {
        setLoading(true);
        try{
            await MarcaController.crearMarca(form);
            await cargarMarcas();
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="marcas-page">
            <h1>Marcas - Todo Barato</h1>
            <MarcaForm onCrear={handleCrear} loading={loading}/>
            {error && <p className="page-error">{error}</p>}
            {loading && marcas.length === 0 ? <p>Cargando marcas...</p> : <MarcaList marcas={marcas}/>}
        </div>
    );

}

export default MarcasPage;