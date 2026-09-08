let instalarEvento;

const btn=document.getElementById('btnInstalar');

window.addEventListener('beforeinstallprompt', e=>{
e.preventDefault();
instalarEvento=e;
btn.style.display='block';
});

btn.onclick=async()=>{
if(instalarEvento){
instalarEvento.prompt();
let r=await instalarEvento.userChoice;
if(r.outcome==='accepted'){
btn.style.display='none';
}
}
};

window.addEventListener('appinstalled',()=>{
btn.style.display='none';
});

function chuvaCoracoes(){
for(let i=0;i<30;i++){
let c=document.createElement('span');
c.innerHTML='❤️';
c.style.left=Math.random()*100+'%';
c.style.animationDelay=Math.random()*2+'s';
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}

if('serviceWorker' in navigator){
navigator.serviceWorker.register('service-worker.js');
}
