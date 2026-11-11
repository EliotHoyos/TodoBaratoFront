import MarcaService from "../services/MarcaService";
import { Marca } from "../models/Marca";

const MarcaController = {
    async listarMarcas() {
        const { data } = await MarcaService.listar();
        return data.map((item) => Marca.fromResponse(item))
    },
    async crearMarca({ nombre }) {
        const marca = new Marca({ nombre });
        if (!marca.isValid()) {
            throw new Error("El nombre de la marca es obligatorio y deber tener máximo 200 caracteres");
        }
        try{
            const { data } = await MarcaService.crear(marca.toRequestPayload());
            return Marca.fromResponse(data);
        }catch(err){
            const mensajeBackend = err.response?.data.messaje;
            throw new Error(mensajeBackend || "No se pudo crear la marca");
        }
        
    },

};

export default MarcaController;