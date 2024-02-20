let Username2:any=['Admin', 'Zeeshan','Nauman','Arsalan','Junaid']

let name_of_user2="Zeeshan"
Username2.pop()
Username2.pop()
Username2.pop()
Username2.pop()
Username2.pop()

if(Username2.includes(name_of_user2) ){
    if(name_of_user2=="Admin"){
        console.log(`Hello ${name_of_user2}, Would you like to see status report`);

    }else{
        console.log(`Hello ${name_of_user2}, Thankyou for logging in again`);
        
    }

}else if(Username2==null|| Username2=='' ){
    console.log("userListis empty We have to find some new Users ");
    
}
console.log(Username2);
