# DOM Projects

## link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## Project 1

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