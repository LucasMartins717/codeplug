const MESSAGES = {
    SUCESS: {
        POST_CREATED: "Post criado com sucesso!",
        POST_UPDATED: "Post modificado com sucesso!",
        POST_DELETED: "Post deletado com sucesso!",
        POST_FOUND: "Posts encontrados com sucesso!",
    },
    ERROR: {
        POST_NOT_FOUND: "Post não encontrado",
        SERVER_ERROR: "Erro interno do servidor",
        DB_CONNECTION: "Sem conexão com o servidor",
        CREATE_ERROR: "Falha ao criar Post",
        UPDATE_ERROR: "Erro modificando post"
    }
}

module.exports = MESSAGES;