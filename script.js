function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    }

// modo de fazer o toggle funcionar manualmente, serve pra deixar a pagina no dark ou light mode
//        if(html.classList.contains('light')) {
//            html.classList.remove('light')
//        } else {
//          html.classList.add('light')
//      }