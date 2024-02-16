# DOM Projects

## link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## Project 1    - color switcher

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
    //    body.style.backgroundColor = e.target.id;   this also works but we must understand by using conditional statements
    if(e.target.id =="grey")
        body.style.backgroundColor="grey";
    if(e.target.id =="white")
        body.style.backgroundColor="white"
    if(e.target.id =="blue")
        body.style.backgroundColor="blue"
    if(e.target.id =="yellow")
        body.style.backgroundColor="yellow"
    if(e.target.id =="pink")
        body.style.backgroundColor="pink"
    });
});
```

## Project 2 - BMI calc

```javascript
const form= document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)

    const results=document.querySelector('#results')
    const comment=document.querySelector('#comment')

    if(height =='' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid Height"
    }
    else if(weight=='' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid Weight"
    }
    else {
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span`

        if(bmi <18.6)   comment.innerHTML="Under Weight"
        else if(bmi>=18.6 && bmi <=24.9)   comment.innerHTML="Normal"
        else    comment.innerHTML="Over Weight"
    }
    
})
```

# PROJECT 3 - Digital Clock
```javascript
const clock=document.querySelector('#clock');

setInterval(function() {    //to set interval
    let date=  new Date();
    clock.innerHTML = date.toLocaleTimeString();    // time in form of hour:minute:second AM/PM
}, 1000);   //1000 denotes 1000 milliseconds that is 1 second
```