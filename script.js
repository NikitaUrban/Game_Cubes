let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

 getRandomInt = (min, max) => {//функция для генерирования случайных целых чисел в заданном диапазоне
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn1.addEventListener('click',function () {
    let buttons = document.querySelector('#buttons')
    buttons.style.display = 'none'//кнопки выбора того, кто первый ходит
    let gameBlock = document.querySelector('#gameBlock')
    gameBlock.style.display = 'block'//игровок блок
    let playerBtn = document.querySelector('#playerBtn')//кнопка для хода игрока
    playerBtn.addEventListener('click',function () {
        let arr1 = []//массив для очков игрока
            let playerSum = 0// сумма очков игрока
            let playerSr = 0 // среднее арифметическое по итогам 5 бросков у игрока
            for(let i = 0 ; i < 5 ; i++){
                arr1[i] = getRandomInt(1,6)
                playerSum += arr1[i]
                if (i === 4){ playerSr += ( playerSum / 5 ) }
            }
            let playerResult = document.querySelector('#playerResult')
            playerResult.innerHTML = 'Результат игрока:' + playerSr

            setTimeout( () => {//результат компьютера выведется с задержкой в 3 секунды
                let arr2 = [] // массив для очков компьютера
                let computerSum = 0// сумма очков компьютера
                let computerSr = 0 // среднее арифметическое по итогам 5 бросков у компьютера
                for(let i = 0 ; i < 5 ; i++){
                    arr2[i] = getRandomInt(1,6)
                    computerSum += arr2[i]
                    if (i === 4) { computerSr += ( computerSum / 5)}
                }
                let computerResult = document.querySelector('#computerResult')
                computerResult.innerHTML = 'Результат компьютера:' + computerSr
            }, 3000)
    })

})