import { api } from "./api"

/**
 * 
 * @returns parte que trata da api de produtos
 */
export const getAllProdutos = async () => {
    try {
        const response = await api.get('/produtos')
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getProduto = async (idProduto) => {
    try {
        const response = await api.get("/produtos/" + idProduto)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getProdutoByName = async (nome) => {
    try {
        const response = await api.get("/produtos/pesquisar?nome=" + nome)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const postProduto = async (idCategoria, nomeProduto, quantidadeEstoque, valorUnitario) => {
    try {
        const response = await api.post("/produtos",
            {
                "idCategoria": idCategoria,
                "nomeProduto": nomeProduto,
                "quantidadeEstoque": quantidadeEstoque,
                "valorUnitario": valorUnitario
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduto = async (idProduto) => {
    try {
        const response = await api.delete("/produtos/" + idProduto)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const putProduto = async (idProduto, idCategoria, nomeProduto, quantidadeEstoque, valorUnitario) => {
    try {
        const response = await api.put("/produtos/" + idProduto,
            {
                "idCategoria": idCategoria,
                "nomeProduto": nomeProduto,
                "quantidadeEstoque": quantidadeEstoque,
                "valorUnitario": valorUnitario
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}

/**
 * 
 * @returns parte que trata da api de clientes
 */
export const getAllClientes = async () => {
    try {
        const response = await api.get('/clientes')
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getCliente = async (idCliente) => {
    try {
        const response = await api.get("/clientes/" + idCliente)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const postCliente = async (cep, cpf, email, nome, numeroEndereco) => {
    try {
        const response = await api.post("/clientes",
            {
                "cep": cep,
                "cpf": cpf,
                "email": email,
                "nome": nome,
                "numeroEndereco": numeroEndereco
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const deleteCliente = async (idCategoria) => {
    try {
        const response = await api.delete("/clientes/" + idCategoria)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const putCliente = async (idCategoria, categoria) => {
    try {
        const response = await api.put("/clientes/" + idCategoria,
            {
                "categoria": categoria
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}
/**
 * 
 * @returns parte que trata da api de categorias
 */
export const getAllCategorias = async () => {
    try {
        const response = await api.get('/categorias')
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getCategoria = async (idCategoria) => {
    try {
        const response = await api.get("/categorias/" + idCategoria)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getCategoriaByName = async (nome) => {
    try {
        const response = await api.get("/categorias/pesquisar?nome=" + nome)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const postCategoria = async (categoria) => {
    try {
        const response = await api.post("/categorias",
            {
                "categoria": categoria
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const deleteCategoria = async (idCategoria) => {
    try {
        const response = await api.delete("/categorias/" + idCategoria)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const putCategoria = async (idCategoria, categoria) => {
    try {
        const response = await api.put("/categorias/" + idCategoria,
            {
                "categoria": categoria
            }
        )
        return response;
    } catch (error) {
        console.error(error);
    }
}