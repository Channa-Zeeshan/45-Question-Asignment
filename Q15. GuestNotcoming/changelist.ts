let guests2:string[]=['Aslam', 'Ali ', 'Danish']

console.log(`${guests2}  are in list `);


let guestNotComing:string[]=guests2.splice(1,1);
console.log(` =============== \n  ${guestNotComing} is not coming `);
console.log('New list for invitation is ');
guests2.splice(1,0,'Akbar');

console.log(guests2);
for(let i=0;i<guests2.length;i++){

    console.log(`Hello Mr. ${guests2[i]}, i would like to invite you for today's dinner. \n \t \tRegards Zeeshan Ali `);
    
}
