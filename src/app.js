const root = document.querySelector("#root"); // # itu untuk menseleksi bersasarkan id

function App() {
  const [count, setCount] = React.useState(0);

  //Distrucring
  // use state berisi array yang di dalamnya index pertama berisi value index ke dua berisi fungction
  // const count = state[0];
  // const updateCount = stste[1];

  return (
    <>
      <h1>aplikasi counting</h1>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span> {count} </span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
