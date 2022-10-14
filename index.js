function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`
}


function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair) {
    return function (part1 = 'special') {
        return `You are ${flair}${part1}${flair}!`
    }
}
wrapAdjective('*')('a hard worker')