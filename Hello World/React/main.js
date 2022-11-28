const nomeContext = React.createContext('nome');


function meuComponente() {
    return React.createElement('div', {id: 'chefeApache'},
        React.createElement(meuComponente1)
    )
}

function meuComponente1() {
    const meuNome = 'Fábio';
    return (
        React.createElement(nomeContext.Provider, {value: meuNome},
            React.createElement('div', {className: 'componente 1'},
                React.createElement(meuComponente2)//a segunda parte do () é passada como parametro
            )
        )
    )
}
function meuComponente2() {
    return (
        React.createElement('div', {className: 'componente 2'}, 
            React.createElement(meuComponente3)
        )
    )
}
function meuComponente3() {
    
    return (
        React.createElement('div', {className: 'componente 3'},
            React.createElement(meuComponente4)
        )
    )
}
function meuComponente4() {
    return (
        React.createElement(nomeContext.Consumer, null, 
            (nomeContext) => (
                React.createElement('div', {className: 'componente 4'},
                    React.createElement('p', null, nomeContext)
                )//consumer exige que seja uma função                
            )
        )
    )
}

ReactDOM.render(
    React.createElement(meuComponente),
    document.querySelector('#app')
)