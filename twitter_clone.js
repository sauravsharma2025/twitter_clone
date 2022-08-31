 //var tweet_img=document.getElementById('file_input').value
   // console.log(tweet_img) 
    //p.innerHTML=tweet 
  var ele = document.querySelector('#twtbtn')
   
  var Element = document.querySelector('#file_input');
  
  var img = document.querySelector('#imgtwt');
  ele.addEventListener("click",abc)
  function abc(){
   if(Element.files.length!==0){
   
    var url = URL.createObjectURL(Element.files[0]);//only accepting var??
   URL.revokeObjectURL(Element.files[0]);
    img.src = url;
   }
    var tweet= document.getElementById('tweet_data').value
    let p = document.createElement('div')
   
    //document.getElementById('tweeting').innerHTML=tweet
    document.getElementById('boiler_div').appendChild(p)
    document.getElementById('tweet_data').value='' 

    var done1 =`
    <div id='twth'>
    <div  id="twt_div"class="post" style="display:flex ;">
    <div class="post_avatar">
        <img src="/images/man.png" alt="avatar">
    </div>
    <div class="post_body">
        <div class="post_header">
            <div class="post_headerText">
                <h3>Saurav Kumar Sharma
                <span class="post_headerSpecial">
                <span class="material-icons post__badge">verified</span>@Saurav_Sharma
                </span>
                <div class="remove_twt">
                <button id='dd'><span id='rmvtwt' class="material-icons">
close
</span></button></div>
                </h3>
            </div>
            <div class="post_headerDescription">
                <p id="tweeting">${tweet}</p>
            </div>
        </div>`
        
        if(url!=null){

       var done3= `<img src="${url}" alt=""/>`
       
        }
        else{
            done3=''
          
        }
       var done2=` <div class="post_footer">
            <span class="material-icons">reply</span>
            <span class="material-icons">publish</span>
            <span class="material-icons">favorite border</span>
        </div>
    </div>
</div></div>`

var done=done1+done3+done2
p.innerHTML=done


}

document.body.addEventListener('click',function(event){
    if(event.target.id=='rmvtwt'){
        var removed=event.target
        removed.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        
    }
})
  function trigger(){
  let user_id = document.querySelector('#user_id').value;
  let pwd=document.querySelector('#pwd').value;
 // localStorage.setItem(user_id,user_id)  
 // localStorage.setItem(pwd,pwd)

if(user_id==localStorage.getItem(user_id)&& pwd==localStorage.getItem(pwd)){
    modal.style.display="none";
}
  }
var modal=document.getElementById('Login');
var btn = document.getElementById('trigger');
var span= document.getElementsByClassName('close')[0];
 modal.style.display="block";



   
   