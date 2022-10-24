
import {series} from "./ts/data.js";
import {Serie} from "./ts/serie.js";
let srs: Serie[];
srs = series;

let tableid = document.getElementById("table") as HTMLTableElement;
let sum = 0;

for (let i = 0 ; i < srs.length; i++){
    let tb = tableid.insertRow(i+1);
    let temp =  series[i];

    let col1= tb.insertCell(0);
    col1.innerText = temp.getId().toString();

    let col2=tb.insertCell(1);
    col2.innerHTML ="<a href = \"#\" id = \""+ temp.getId() +"\" >"  + temp.getName() + "</a> ";
    document.getElementById(temp.getId().toString())?.addEventListener("click", function(){update(temp.getId()-1);}, false);

    let col6= tb.insertCell(2);
    col6.innerText = temp.getCanal();

    let col3=tb.insertCell(3);
    col3.innerText = temp.getScore().toString();
    sum += temp.getScore() ; 
}
sum /= srs.length;
let avg = document.getElementById("avg");
if (avg !=null){
    avg.innerHTML =  "<div><h3>" + "El numero promedio de las temporadas es " + Math.floor(sum)+" <h3></div>";
}




function update(id: number):any{
    let sr = srs[id];
    const show  = document.getElementById("show");
    if (sr!=null && show != null){
    
    let img = "<img class ='card-img-top' src = '" +  sr.getImg() +"' >";
    let name = "<h4 class = 'card-title'> " + sr.getName()+"</h4> ";
    let resume = "<h3 class ='card-text' > " + sr.getResume()+"</h3> ";
    console.log(sr.getImg());
    let pg = "<a ' href=\""+sr.getPage() +"  \">" + sr.getPage()+"</a>";
    show.innerHTML = "<div class=\"card\"> "+ img+ "<div class ='card-body'>" + name+resume+pg + "</div></div>";
    }
}