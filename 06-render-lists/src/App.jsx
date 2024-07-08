import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", cal: 95 },
    { id: 2, name: "orange", cal: 45 },
    { id: 3, name: "banana", cal: 105 },
    { id: 4, name: "coconut", cal: 159 },
    { id: 5, name: "pineapple", cal: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", cal: 110 },
    { id: 7, name: "celery", cal: 15 },
    { id: 8, name: "carrots", cal: 25 },
    { id: 9, name: "corn", cal: 63 },
    { id: 10, name: "broccoli", cal: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;
