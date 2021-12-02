//router
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//screens
import { Layout } from '../components/screen/Layout';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    )
}