window.onload=()=>{
  let button=  document.querySelector("#btn");
    button.addEventListener("click", function(event){
        event.preventDefault();
        BMI();
    });
};
function BMI(){
    let height= parseInt(document.querySelector("#height").value);
    let weight= parseInt(document.querySelector("#weight").value);
    let calculate= document.querySelector("#calculate");
    if(height==="" || isNaN(height)){
        calculate.innerHTML="Irrelevant height";
    }
   else if(weight===""|| isNaN(weight)){
        calculate.innerHTML="Irrelevant Weight";
    }
    else{
        let bmi= (weight / ((height * height) 
        / 10000)).toFixed(2);
        if(bmi<18.6){
            calculate.innerHTML=`Under weight :<span>${bmi}</span>`;
        }
        else if(bmi>24.9){
            calculate.innerHTML=`Over weight: <span>${bmi}</span`;
        }
        else{
            calculate.innerHTML=`Normal : <span>${bmi}</span>`
        }
    }
}
