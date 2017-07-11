export default function platzom(str) {

    let translation = str

    //si la palabra termina en ar. se le quita ar

    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2)
    }

    // si inicia con Z se ande pe al final


    if (str.toLowerCase().startsWith("z")) {
        translation += 'pe'
    }

    // si su tamano es mayor a diez poner gion en la mitad

    if (translation.length >= 10) {
        const first = translation.slice(0, Math.round(translation.length / 2))
        const second = translation.slice(Math.round(translation.length / 2))

        translation = `${first}-${second}`
    }
    // si es palindromo ninguna regla cuenta se vevuelve mayus y minus

    if (str == reverse(str)) {
        return minMay(str)
    }

    return translation
}

const reverse = (str) => str.split('').reverse().join('')

function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true

    for (let i = 0; i < length; i++) {
        const char = str.charAt(i)
        translation += capitalize ? char.toUpperCase() : char.toLowerCase()
        capitalize = !capitalize
    }
    return translation
}