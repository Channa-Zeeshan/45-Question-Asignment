var magicians2 = ['Saleem', 'Rafique', 'Yasir', 'Ayaan'];
var copymagician = [];
function show_magician(magic) {
    console.log(magic);
}
function make_great(magic) {
    for (var i = 0; i < magic.length; i++) {
        copymagician[i] = ' the great ' + magicians2[i];
    }
    return copymagician;
}
show_magician(magicians2);
make_great(magicians2);
