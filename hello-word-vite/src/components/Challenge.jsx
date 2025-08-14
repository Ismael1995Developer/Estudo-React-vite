const Challenge = () => {
    const a = 10;
    const b = 20;
    const resultado = () => {
        let soma = a + b;
    };
    
    return(
        <div>
            <p>{a}</p>
            <p>{b}</p>
            <button onClick={resultado}>Somar</button>
        </div>
    );
};

export default Challenge;