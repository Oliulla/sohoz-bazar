import { createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/Shared/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    }
])