
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css";

function App() {
    return (
        <div className="App">

            <NavBar />


            <ItemListContainer greeting= {'Bienvenidos'}/>


        </div>
    )
}


export default App;