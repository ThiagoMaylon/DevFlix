import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Home } from './page/Home/Home';
import { Header } from "./components/Header";
import { MenuMobile } from "./components/MenuMobile";



export const App = () => {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <BrowserRouter>
            <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible}/>
            <Header setIsVisible={setIsVisible}/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}