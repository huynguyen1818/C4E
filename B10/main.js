var dates = document.getElementById('date');
var hours = document.getElementById('hour');
var mintes = document.getElementById('mintes');
var seconds = document.getElementById('second');


function clock(){
    var date = new Date().getDate();
var hour = new Date().getHours();
var minte = new Date().getMinutes();
var second = new Date().getSeconds();

dates.innerHTML = date;
hours.innerHTML = hour;
mintes.innerHTML = minte;
seconds.innerHTML = second;
}
var result = setInterval(clock,1000)


//bai them
var arr = [1, 2, 3, 2,1,2];

function handleSearch(arr) {
    let count = 0;
    let max = arr[0];
    let result;
    for (let i = 0; i < arr.length; i++) {
        for(let j = i; j< arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
            if(max < count){
                max = count;
                result = arr[i];
            }
        }
    }
    console.log(result);
}
