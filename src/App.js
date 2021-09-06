function App() {
  return (
    <div className="App">
      <div class="layout">
        <h1 class="historia">
          Un día como cualquiera te vas a dormir, lo siguiente que sabes es que
          te despertas en el medio de un bosque.
        </h1>
        <div class="opciones">
          <div class="opcion">
            <button id="A" class="botones">
              A
            </button>
            <h2>Pedir ayuda a los gritos.</h2>
          </div>
          <div class="opcion">
            <button id="B" class="botones">
              B
            </button>
            <h2>Mirar a mi alrededor.</h2>
          </div>
        </div>
        <div class="recordatorio">
          <h3>Selección anterior: </h3>
          <h4>Historial de opciones elegidas: </h4>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
