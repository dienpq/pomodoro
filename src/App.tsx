import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import routers from "./routes";

function App() {
	return (
		<Routes>
            {routers.map((router, index) => (
                <Route path={router.path} element={router.element} key={`layout-${index}`}>
                    {router.children.map((item, index) => <Route path={item.path} element={item.element} key={`router-${index}`}/>)}
                </Route>
            ))}
            <Route path="*" element={<NotFound />} />
        </Routes>
	);
}

export default App;
