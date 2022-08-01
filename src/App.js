
import './App.css';
import Header from './My Components/Header';
import Footer from './My Components/Footer';
import Notes from './My Components/Notes';

function App() {

  const onDelete =(todo) => {

    console.log("hello",todo);
  }

  let notes = [{

    slno: 1,
    title: " Note 1 ",
    desc: "this us description 1"

  },

  {

    slno: 2,
    title: " Note 2 ",
    desc: "this us description 2"

  },

  {

    slno: 3,
    title: " Note 3 ",
    desc: "this us description 3"

  },



]

  return (

    <>
    <Header title="Notes" login={true} />

    <Notes notes={notes} onDelete={onDelete}/>
    <Footer/>
   
    
    </>
    



  );
}

export default App;
