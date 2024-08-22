function makeDiagonalRed(table) {
  for (let i=0; i<table.rows.length; i++){
    let area = table.rows[i].cells[i]
    area.style.backgroundColor = 'red'
  }
  return table
}

