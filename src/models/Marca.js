export class Marca {
    constructor ({ idmarca = null,
        nombre = "",
        estado = true,
        created_at = null,
        updated_at = null } = {}){
            this.idmarca = idmarca;
            this.nombre = nombre;
            this.estado = estado;
            this.created_at = created_at;
            this.updated_at = updated_at;
        }
    static fromResponse(data){
        return new Marca(data);
    }

    toRequestPayload() {
        return {
            nombre: this.nombre,
            estado: this.estado,
        };
    }

    isValid() {
        return typeof this.nombre == "string" && this.nombre.trim().length > 0 && this.nombre.length <= 200;
    }

}