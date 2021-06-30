export const deadOrAlive = (data, condicao1, condicao2, condicao3, condicao4) => {
    let filtros = '',

    if (condicao1 === '' && condicao2 === '') {
        throw TypeError(alert('Insira um filtro válido'));

    } else if (condicao1 !== '' && condicao2 !== '' && condicao3 !== '' && condicao4 !== '') {
        filtros = data.results.filter(results => results.status === condicao1 && results.species
            === condicao2);
        return filtros;

    } else if (condicao1 !== '') {
        filtros = data.results.filter(results => results.status === condicao1);
        return filtros

    } else if (condicao2 !== '') {
        filtros = data.results.filter(results => results.species === condicao2); return filtros

    } else if (condicao3 !== '') {
        filtros = data.results.filter(results => results.type === condicao3);
        return filtros

    } else if (condicao4 !== '') {
        filtros = data.results.filter(results => results.origin === condicao4);
        return filtros
    }
};
