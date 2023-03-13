const btnconverter = document.getElementById('btnconverter');

btnconverter.addEventListener('click', () => {
     let inName = document.getElementById('inName');
     let inTime = document.getElementById('inName');
     let outName = document.getElementById('inName');
     let outTime = document.getElementById('inName');

     let name = inName.value;
     let time = inTime.value;

    outName.textcontent = name;
    outTime.textcontent = `${Math.floor(time/60)} hora(s) e ${time%60} minuto(s)`
});