const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
    it('si la palabra termina en ar. se le quita ar', function() {
        const translation = platzom("programar")
        expect(translation).to.equal("program")
    })

    it('si inicia con Z se ande pe al final', function() {
        const translation = platzom("zorro")
        expect(translation).to.equal("zorrope")
    })

    it('si su tamano es mayor a diez poner gion en la mitad', function() {
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })

    it('si es palindromo ninguna regla cuenta se vevuelve mayus y minus', function() {
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})