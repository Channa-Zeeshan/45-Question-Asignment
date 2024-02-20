let Username:any=['Admin', 'Zeeshan','Nauman','Arsalan','Junaid']

let name_of_user="Zeeshan"

if(Username.includes(name_of_user) ){
    if(name_of_user=="Admin"){
        console.log(`Hello ${name_of_user}, Would you like to see status report`);

    }else{
        console.log(`Hello ${name_of_user}, Thankyou for logging in again`);
        
    }

} 