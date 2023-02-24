const secciones = document.getElementById('seccion')
const content_text = Array.from(document.querySelectorAll('.contenido_texto'))

secciones.addEventListener('click', (e)=>{
    let num=e.target.dataset.number
    let value=e.target.classList.contains("btn_encabezado")

    if(value){
        search(num)
    }
})

const search=(value)=>{
    content_text.map(index=>{
        index.classList.remove('block')
        index.dataset.seccion == value ? index.classList.add('block'): ""
    })
}