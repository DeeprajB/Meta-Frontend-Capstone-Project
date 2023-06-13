import {  Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Reservation from './pages/BookingPage';
import ConfirmationPage from "./pages/ConfirmationPage";

export default function Routing() {
    return (
                <Routes>
                    <Route path="/" element= {
                    <Homepage />
                    } />
                    <Route path="/reservations" element= {
                    <Reservation />
                    } />
                    <Route path="/confirmation" element= {
                    <ConfirmationPage />
                    } />
                </Routes>
    );
}