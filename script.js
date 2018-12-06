let turnIndicator,
    currentTurn,
    nextTurn

const winningCombos = [
  '123',
  '456',
  '789',
  '147',
  '258',
  '369',
  '159',
  '357'
]

const setTurn = () => {
  if (!currentTurn) {
    if (Math.floor(Math.random() * 2) === 0) {
      currentTurn = "X"
      nextTurn = "O"
    } else {
      currentTurn = "O"
      nextTurn = "X"
    }
  } else {
    temp = nextTurn
    nextTurn = currentTurn
    currentTurn = temp
  }

  turnIndicator.text(currentTurn)
}

const allMatch = (arr, find) => {
  let total = arr.reduce( (sum, spaceId) => {
    if ( $(`#space_${spaceId}`).text() === currentTurn ) {
      sum ++
    }
    return sum
  }, 0)
  // console.log(arr, total)
  if(total === arr.length) {
    return true
  } else {
    return false
  }
}

const evalGame = () => {
  let win = false
  for(let i = 0, len = 8; i < len; i++) {
    combo = winningCombos[i].split('')
    if (allMatch(combo, currentTurn)) { win = true; return win }
  }
  setTurn()
}

const winGame = (player) => {
  currentScore = $(`#${player}_score`).text()
  console.log(currentScore)
  $(`#${player}_score`).text(parseInt(currentScore)+1)
}

const assignMove = (e) => {
  if ($(e.target).text() === '') {
    $(e.target).text(currentTurn)
    if (evalGame()) {
      winGame(currentTurn)
    }
  } else {
    alert('You can\'t play there')
  }
}

const clearBoard = (e) => {
  e.preventDefault()

  $('.game_space').empty()
}

const resetGame = (e) => {
  e.preventDefault()

  clearBoard(e)
  $('#X_score').text('0')
  $('#O_score').text('0')
}

$(document).ready( () => {
  turnIndicator = $('#turnIndicator')

  setTurn()

  $('.game_space').on('click', assignMove)
  $('#new_game').on('click', clearBoard)
  $('#reset').on('click', resetGame)
})
