let current_users:any=['Zeeshan', 'Nauman','Arsalan','Junaid','Shahzeb']
let new_users:any=['Jahanzeb','Sunny','Arsalan','Shahzeb','Dua']

for(let i=0;i<new_users.length;i++){

    if(current_users.includes(new_users[i])){
        console.log(`${new_users[i]} username already exist try a new username `);
        }
        else{
            console.log(`${new_users[i]} username is available  `);
        }
}