import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import Dashboard from './dashBoard'
import Counter from './counter/Counter'
import ShoppingPage from './shopping/shoppingPage'

const AppRoute = () => {

    const route = createBrowserRouter(
        createRoutesFromChildren(
            <Route>
                <Route
                    path="/"
                    element = {<Dashboard/>}
                />
                <Route 
                    path="/counter"
                    element={<Counter/>}
                />
                <Route
                    path="/shopping"
                    element={<ShoppingPage/>}
                />
            </Route>
        )
    )

    return (
        <RouterProvider router={route}/>
    )
}

export default AppRoute