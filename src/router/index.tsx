import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CompletedRegistration from "../pages/CompletedRegistration";
import { useState, useEffect } from "react";

export function Router() {
    const [pageTitle, setPageTitle] = useState<string>("Cadastro de desenvolvedor");
    
    useEffect(() => { document.title = pageTitle }, [pageTitle]);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route 
                    path="/completed-registration" 
                    element={<CompletedRegistration pageTitle={pageTitle} setPageTitle={setPageTitle} />}
                />
            </Routes>
        </BrowserRouter>
    )
}