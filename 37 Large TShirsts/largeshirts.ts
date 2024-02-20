function make_shirt2(size:string="Large",message:string="I Love TypeScript"):string{
    let new_message= "your size is "+size+". and "+ message +" is written on your shirt"
    return new_message
 }

 console.log(make_shirt2());
 console.log(make_shirt2("medium"));
 console.log(make_shirt2("Extra Large","your Shirt is too large "));