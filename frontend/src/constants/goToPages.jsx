export const goToHome = (history) => {
    history.push("/")
}

export const goNoticias = (history) => {
    history.push("/noticias")
}

export const goNoticiaDetalhe = (history, id) =>  {
    history.push(`/noticias/${id}`)
}

export const goContato = (history) => {
    history.push("/contato")
}

export const goExpediente = (history) => {
    history.push("/expediente")
}

export const goBusca = (history) => {
    history.push("/busca")
}

export const goReleases = (history) => {
    history.push("/releases")
}

export const goToCadastroNoticias = (history) => {
    history.push("/admin/noticia")
}