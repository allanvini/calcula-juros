export function paginacao(data, itemsPorPagina, pagina) {
    const pages = []
    for (let index = 0; index < data.length; index += itemsPorPagina) {
        const pageItems = data.slice(index, index + itemsPorPagina);
        pages.push(pageItems);
    }
    return pages[pagina - 1] || [];
}