// const startValue=document.querySelectorAll('.display-status');
// const UpdatebyValue=5;
// startValue.forEach(ResultValue =>{
//     const FinalValue=()=>{
//        const value = +ResultValue.getAttribute('data-target');
//        const counter=+ResultValue.innerText;
//        const answer = value / UpdatebyValue;
//        console.log(counter);
//        console.log(answer);
//     }
// if(counter<value){
//     console.log("good")
// }
//     FinalValue();
// });
const getmycount=document.querySelectorAll('.display-status');
const speed=5;
getmycount.forEach(counter=>
    {
    const updatecount=()=>
    {
        const target=+counter.getAttribute('data-target');
        const count=+counter.innerText;
        const inc=target/speed;
        console.log(count);
        console.log(inc);
        if (count<target){
            counter.innerText=count+inc;
           setInterval(updatecount,800)
        }
        else{
            counter.innerText=target;
        }
    }
    // if(vb < target){
    //     console.log("good")
    // }
    // else{
    //     console.log("bad")
    // }
    updatecount();
})

