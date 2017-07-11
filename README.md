# PLATZOM

Platzon es un idioma inventado para el curso de Fundamentos

[twitter](https://twitter.com/alejo_maichel)

## Descripcion del idioma

- si la palabra termina en ar. se le quita ar
- si inicia con Z se ande pe al final
- si su tamano es mayor a diez poner gion en la mitad
- si es palindromo ninguna regla cuenta se vevuelve mayus y minus

## Instalacion

```
npm install platzom
```

## USO
```
import platzom from 'platzom'

console.log(platzom("programar")) // program
console.log(platzom("zorro")) //zorrope
console.log(platzom("zarpar")) //zarppe
console.log(platzom("abecedario")) //abece-dario
console.log(platzom("sometemos")) //SomeTeMoS
```

## Creditos

Alejandro

## Licencia
[MIT](https://opensource.org/licenses/MIT)