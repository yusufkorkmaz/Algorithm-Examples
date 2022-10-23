// abcdefg -> a , a.b , a.b.c , a.b.c.d , a.b.c.d.e , a.b.c.d.e.f , a.b.c.d.e.f.g

let string = 'abcdefg'

for (let i = 0; i < string.length; i++) {
    let splicedString = string.slice(0, i + 1)
    let dottedSplicedString = ''
    for (let j = 0; j < splicedString.length; j++) {
        if(j !== splicedString.length - 1) {
            dottedSplicedString += splicedString[j] + '.'
        }
        else {
            dottedSplicedString += splicedString[j]
        }
    }
    console.log(dottedSplicedString)
}
