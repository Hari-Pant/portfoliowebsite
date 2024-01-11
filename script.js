// function onClick(){
//     document.getElementById('nav').classList.toggle('change');
//     document.getElementById('btn').classList.toggle('change1')
//     document.getElementById('btn1').classList.toggle('change2')

// }


function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.querySelector('#main').style.position = 'fixed';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.querySelector('#main').style.position = 'relative';
}

