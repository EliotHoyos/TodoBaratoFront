import httpClient from "./httpClient";

const RESOURCE = "/marcas";

const MarcaService = {
    listar: () => httpClient.get(RESOURCE),
    crear: (payload) => httpClient.post(RESOURCE, payload),
};

export default MarcaService;