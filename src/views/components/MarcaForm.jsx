import { useState } from "react";

function MarcaForm({onCrear, loading}){
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await onCrear({ nombre });
            setNombre("");
        }catch(err){
            setError(err.message)
        }
    };

    return(
        <form className="marca-form" onSubmit={handleSubmit}>
            <h2>Nueva Marca</h2>
            <label htmlFor="nombre">Nombre</label>
            <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Toyota"
            maxLength={200}/>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? "Guardando..." : "Crear marca"}
            </button>
        </form>
    )
}

export default MarcaForm;