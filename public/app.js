const root = document.querySelector("#root"); // # itu untuk menseleksi bersasarkan id

function App() {
  const [count, setCount] = React.useState(0);

  //Distrucring
  // use state berisi array yang di dalamnya index pertama berisi value index ke dua berisi fungction
  // const count = state[0];
  // const updateCount = stste[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "aplikasi counting"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, " ", count, " "), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);