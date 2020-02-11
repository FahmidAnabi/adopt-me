const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Joker", animal: "Dog", breed: "Husky" }),
    React.createElement(Pet, { name: "Jack", animal: "Cat", breed: "Turkey" }),
    React.createElement(Pet, { name: "Joshim", animal: "Bat", breed: "Batman" })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
