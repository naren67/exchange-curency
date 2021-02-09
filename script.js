const select = document.querySelectorAll("select")
const input = document.querySelectorAll("input")

const link = "https://api.exchangeratesapi.io/latest"

let lists = ''


async function endvalue() {
    const response = await fetch(link)
    const value = await response.json() 
    const keytype = Object.keys(value.rates)
    console.log(keytype)


    //extracting the key and making it as a list of options
    keytype.map(val => {
        return lists += `<option value=${val}> ${val} </option>`
    })

    //assigning the key types to the select tag as an option type
    for (i = 0; i < select.length; i++) {
        select[i].innerHTML = lists
    }

    const valueonly = value.rates
    console.log(valueonly)




    input[0].addEventListener("keyup", () => {
        input[1].value = input[0].value * valueonly[select[1].value] / valueonly[select[0].value]
    })

    input[1].addEventListener('keyup', () => {
        input[0].value = input[1].value * valueonly[select[0].value] / valueonly[select[1].value]
    })

    select[0].addEventListener('change', () => {
        input[1].value = input[0].value * valueonly[select[1].value] / valueonly[select[0].value]
    })

    select[1].addEventListener('change', () => {
        input[0].value = input[1].value * valueonly[select[0].value] / valueonly[select[1].value]
    })

}

endvalue()
