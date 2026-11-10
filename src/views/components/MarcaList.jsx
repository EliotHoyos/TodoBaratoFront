import DataTable from "react-data-table-component";

const colums = [
    { name : "ID", selector: (row) => row.idmarca, sortable: true},
    { name : "Nombre", selector: (row) => row.nombre, sortable: true},
    {
        name: "Estado",
        selector: (row) => row.estado,
        cell: (row) => (
            <span className={row.estado ? "badge badge-active": "badge badge-inactive"}>
                {row.estado ? "Activo" : "Inactivo"}
            </span>
        ),
    },
    {
        name: "Creada",
        selector: (row) => row.created_at,
        cell: (row) => (row.created_at ? new Date(row.created_at).toLocaleString() : "-"),
    },
];

function MarcaList({marcas}){
    return(
        <DataTable
        columns={colums}
        data={marcas}
        pagination={false}
        />
    );
}

export default MarcaList;