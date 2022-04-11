const code = document.querySelector('#code')
const box = document.querySelector('#box')
const boxBorder = document.querySelector('#boxBorder')
const adjustBar = document.querySelector('#adjustBar')

var boxProperties = {
    topLeftEdge: 0,
    bottomLeftEdge: 0,
    topRightEdge: 0,
    bottomRightEdge: 0,
    upperLeftCurvature: 0,
    upperRightCurvature: 0,
    lowerRightCurvature: 0,
    lowerLeftCurvature: 0
}

function copyCode() {
    navigator.clipboard.writeText(code.innerText)
}

function add() {
    fgt.form()
    fgt.caption('Width:')
    const width = fgt.input('number')
    fgt.caption('Height:')
    const height = fgt.input('number')
    fgt.button('Adicionar', () => {
        box.style.width = `${width.value}px`
        box.style.height = `${height.value}px`
    })
    fgt.button('Cancelar')
}

function updateCode() {
    code.innerText = `border-radius: ${boxProperties.topLeftEdge}px ${boxProperties.topRightEdge}px ${boxProperties.bottomRightEdge}px ${boxProperties.bottomLeftEdge}px / ${boxProperties.upperLeftCurvature}px ${boxProperties.upperRightCurvature}px ${boxProperties.lowerRightCurvature}px ${boxProperties.lowerLeftCurvature}px;`
}

function adjustBorderRadius() {
    if (box.getBoundingClientRect().width >= box.getBoundingClientRect().height) {
        adjustBar.max = box.getBoundingClientRect().width
    } else {
        adjustBar.max = box.getBoundingClientRect().height
    }

    boxProperties[`${boxBorder.value}`] = adjustBar.value

    box.style.borderRadius = `${boxProperties.topLeftEdge}px ${boxProperties.topRightEdge}px ${boxProperties.bottomRightEdge}px ${boxProperties.bottomLeftEdge}px / ${boxProperties.upperLeftCurvature}px ${boxProperties.upperRightCurvature}px ${boxProperties.lowerRightCurvature}px ${boxProperties.lowerLeftCurvature}px`
}

boxBorder.addEventListener('click', () => {
    adjustBar.value = boxProperties[`${boxBorder.value}`]
})

adjustBar.addEventListener('mousemove', () => {
    adjustBorderRadius()
    updateCode()
})