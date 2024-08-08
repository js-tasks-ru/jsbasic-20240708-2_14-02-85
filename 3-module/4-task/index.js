function showSalary(users, age) {
let rez = [];
for (let i=0; i<users.length; i++){
  let user = users[i];
  if(user.age <= age){
    rez.push(`${user.name+','} ${user.balance}`)
  }
}
return rez.join('\n')
}
