import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AppRoutes from './AppRoutes.js';

const App = () => {
    return (
        <div className="App">
            <Router>
                <AppRoutes />
            </Router>
        </div>
    );
};

export default App;
