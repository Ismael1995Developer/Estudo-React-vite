const Eventos = () => {
    const handleMyEvent = (e) => {
        console.log(e);

        console.log("Ativou o evento!");
        alert("Esse foi o seu dedo nervoso!")
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Redenrizando isso dentro da função</h1>
        }else {
            return <h1>Também com o bloco de condição If/Else</h1>
        }
    }
   return (

    <div>
        <div>
            <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log("clicou!")}>Clique aqui também!</button>
            {/* Não colocar um logica de JS dentro do HTML mesmo que possivel dificil compreender o código para manutenção */}
            <button onClick={() => {
                if (true) {
                    console.log("isso não deveria existir");
                }
            }}>Clique aqui, por favor</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
   );
};

export default Eventos;