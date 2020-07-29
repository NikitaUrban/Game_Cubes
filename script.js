let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

 getRandomInt = (min, max) => {//функция для генерирования случайных целых чисел в заданном диапазоне
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn1.addEventListener('click',function () {
    let exit = document.querySelector('#exit')//кнопка выхода из игры
    exit.addEventListener('click',function () {
        buttons.style.display = 'block'
        gameBlock.style.display = 'none'
    })
    let buttons = document.querySelector('#buttons')
    buttons.style.display = 'none'//кнопки выбора того, кто первый ходит
    let gameBlock = document.querySelector('#gameBlock')
    gameBlock.style.display = 'block'//игровок блок если первым ходит игрок
    let playerBtn = document.querySelector('#playerBtn')//кнопка для хода игрока
    playerBtn.disabled = false
    let playerResult = document.querySelector('#playerResult')
    let computerResult = document.querySelector('#computerResult')//заполним абзац результата компа
    let winner = document.querySelector('#winner')//заполнится абзац кто победил
    playerResult.innerHTML = ''
    computerResult.innerHTML = ''
    winner.innerHTML = ''
    let newGame = document.querySelector('#newGame')//кнопка для начала новой игры (попробовать еще раз)
    newGame.disabled = true
    playerBtn.addEventListener('click',function () {
        playerBtn.disabled = true
        let arr1 = []//массив для очков игрока
            let playerSum = 0// сумма очков игрока
            let playerSr = 0 // среднее арифметическое по итогам 5 бросков у игрока
            for(let i = 0 ; i < 5 ; i++){
                arr1[i] = getRandomInt(1,6)
                playerSum += arr1[i]
                if (i === 4){ playerSr += ( playerSum / 5 ) }
            }
        playerResult.innerHTML = 'Результат игрока:' + playerSr
            let computerSum = 0// сумма очков компьютера
            let computerSr = 0 // среднее арифметическое по итогам 5 бросков у компьютера

            setTimeout( () => {//результат компьютера выведется с задержкой в 3 секунды
                let arr2 = [] // массив для очков компьютера

                for(let i = 0 ; i < 5 ; i++){
                    arr2[i] = getRandomInt(1,6)
                    computerSum += arr2[i]
                    if (i === 4) { computerSr += ( computerSum / 5)}
                }
                computerResult.innerHTML = 'Результат компьютера:' + computerSr
            }, 3000)
            setTimeout( () => {
                if (playerSr > computerSr) { winner.innerHTML = 'Вы победили, поздравляем!!!'}
                else if (playerSr < computerSr) { winner.innerHTML = 'Победил компьютер :('}
                else { winner.innerHTML = 'Ничья!'}
                newGame.disabled = false
            }, 5000)

        newGame.addEventListener('click',function () {
            newGame.disabled = true
            playerBtn.disabled = false
            playerResult.innerHTML = ''
            computerResult.innerHTML = ''
            winner.innerHTML = ''

        })

    })

})

btn2.addEventListener('click',function () {//кнопка выбора хода компьютера
    let ex = document.querySelector('#ex')//кнопка выхода из игры
    ex.addEventListener('click',function () {
        buttons.style.display = 'block'
        gameBlock2.style.display = 'none'
    })
    let buttons = document.querySelector('#buttons')
    buttons.style.display = 'none'//кнопки выбора того, кто первый ходит
    let gameBlock2 = document.querySelector('#gameBlock2')
    gameBlock2.style.display = 'block'//игровок блок если первый ходит компьютер
    let arr1 = [] //массив для очков компьютера
    let computerSum = 0 //сумма очков компьютера
    let computerSr = 0 //среднее очков компьютера после 5 бросков
    let compRes = document.querySelector('#compRes')
    let playerRes = document.querySelector('#playerRes')//заполним абзац результатом игрока
    let win = document.querySelector('#win') //заполним абзац кто победил
    compRes.innerHTML = ''
    playerRes.innerHTML = ''
    win.innerHTML = ''
    let play = document.querySelector('#play')//кнопка хода игрока после того, как выдало результат компьютера
    play.disabled = true
    setTimeout( () => {//результат компьютера выдастся с задержкой в 1,5 секунды
        for (let i = 0 ; i < 5 ; i++){
            arr1[i] = getRandomInt(1,6)
            computerSum += arr1[i]
            if (i === 4) { computerSr += ( computerSum / 5)}
        }
        compRes.innerHTML = 'Результат компьютера:'+computerSr
        play.disabled = false
    },1500)

    let arr2 = []//массив для очков игрока
    let playerSum = 0 //сумма очков игрока
    let playerSr = 0 //среднее арифметическое очков игрока
    let again = document.querySelector('#again')//кнопка для начала новой игры (попробовать еще раз)
    again.disabled = true
    play.addEventListener('click',function () {
        play.disabled = true
        for (let i = 0 ; i < 5 ; i++){
            arr2[i] = getRandomInt(1,6)
            playerSum += arr2[i]
            if (i === 4){ playerSr += ( playerSum / 5 ) }
        }
        playerRes.innerHTML = 'Результат игрока:'+playerSr
        setTimeout( () => {//абзац с победителем заполнится с задержкой в 2 секунды
            if (playerSr > computerSr) { win.innerHTML = 'Вы победили, поздравляем!!!'}
            else if (playerSr < computerSr) { win.innerHTML = 'Победил компьютер :('}
            else { win.innerHTML = 'Ничья!'}
            again.disabled = false
        },2000)


        again.addEventListener('click',function () {
            play.disabled = true
            again.disabled = true
            playerRes.innerHTML = ''
            compRes.innerHTML = ''
            win.innerHTML = ''
            setTimeout( () => {//результат компьютера выдастся с задержкой в 1,5 секунды

                computerSum = 0
                computerSr = 0
                for ( let i = 0 ; i < 5 ; i++){
                    arr1.pop()
                }
                for (let i = 0 ; i < 5 ; i++){
                    arr1[i] = getRandomInt(1,6)
                    computerSum += arr1[i]
                    if (i === 4) { computerSr += ( computerSum / 5)}
                }
                compRes.innerHTML = 'Результат компьютера:'+computerSr
                play.disabled = false
            },1500)


            playerSum = 0
            playerSr = 0
            for ( let i = 0 ; i < 5 ; i++){
                arr2.pop()
            }


        })

    })
})