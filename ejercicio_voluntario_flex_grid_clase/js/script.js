// function frojas(){
//     document.getElementById('flores').src = 'images/rosas_rojas.jpg';
// }
// function frosas(){
//     document.getElementById('flores').src = 'images/rosas_rosas.jpg';
// }
// function famarillas(){
//     document.getElementById('flores').src = 'images/rosas_amarillas.jpg';
// }
// function fblancas(){
//     document.getElementById('flores').src = 'images/rosas_blancas.jpg';
// }
// function fmulticolor(){
//     document.getElementById('flores').src = 'images/rosas_multi.jpg';
// }

function fimagenes(num){
     let a_img = ["images/rosas_rojas.jpg","images/rosas_rosas.jpg","images/rosas_amarillas.jpg","images/rosas_blancas.jpg","images/rosas_multi.jpg"];

    let ruta=a_img[num];
   

    document.getElementById("flores").src=ruta;

}