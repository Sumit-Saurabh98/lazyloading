import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";
const Contact = React.lazy(()=>import('./components/Contact'))
const About = React.lazy(()=>import('./components/About'))
const User = React.lazy(()=>import('./components/User'))
const Home = React.lazy(()=>import('./components/Home'))


function Allroute() {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<div><h1>Loading...</h1></div>}><Home/></Suspense>}/>
            <Route path="/contact" element={<Suspense fallback={<div><h1>Loading...</h1></div>}><Contact/></Suspense>}/>
            <Route path="/about" element={<Suspense fallback={<div><h1>Loading...</h1></div>}><About/></Suspense>}/>
            <Route path="/user" element={<Suspense fallback={<div><h1>Loading...</h1></div>}><User/></Suspense>}/>
        </Routes>
    );
}

export default Allroute;