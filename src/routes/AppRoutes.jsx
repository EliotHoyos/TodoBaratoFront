import { Routes, Route, Navigate} from "react-router-dom"
import MarcasPage from "../views/pages/MarcaPage"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/marcas" replace/>}/>
            <Route path="/marcas" element={<MarcasPage/>}/>
        </Routes>
    );
}

export default AppRoutes;