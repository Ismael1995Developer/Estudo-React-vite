const TemplateExpressions = () => {

    const name = "Ismael";
    const data = {
        age: 31,
        job: "Programer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{25 * 2}</p>
            <p>{console.log("JSX REACT BRASIL")}</p>
        </div>
    );
};

export default TemplateExpressions;