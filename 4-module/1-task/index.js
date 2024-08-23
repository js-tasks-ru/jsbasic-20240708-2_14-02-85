function makeFriendsList(friends) {
  let arr = friends.map(item=> item.firstName + ' '+ item.lastName)
  let ul
  let li
  ul = document.createElement('UL')
  li = document.createElement('LI')
  for (let i=0; i<arr.length; i++){
    ul.insertAdjacentHTML("beforeEnd",`<li>${li.innerHTML = arr[i]}</li>`)
  }
  return ul
}
