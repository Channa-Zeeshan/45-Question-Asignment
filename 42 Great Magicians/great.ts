
let magicians2:string[]= ['Saleem', 'Rafique', 'Yasir', 'Ayaan'];
let copymagician:string[]=[]

function show_magician(magic:string[]) {
    console.log(magic);
}


function make_great(magic:string[]):string[] {
    for(let i=0;i<magic.length;i++){
        copymagician[i]= ' the great '+ magicians2[i]
    }
   return copymagician
}


show_magician(magicians2);
make_great(magicians2)




