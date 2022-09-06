 
  var ele = document.querySelector('#twtbtn') 
  var Element = document.querySelector('#file_input');
  var img = document.querySelector('#imgtwt');
  ele.addEventListener("click",abc)
  function abc(){
   if(Element.files.length!==0){
   
    var url = URL.createObjectURL(Element.files[0]);//only accepting var??
   URL.revokeObjectURL(Element.files[0]);//clearing image buffer but might be it is not working
    img.src = url;
   }
    var tweet= document.getElementById('tweet_data').value
    let p = document.createElement('div')
   
    //document.getElementById('tweeting').innerHTML=tweet
    document.getElementById('boiler_div').appendChild(p)
    document.getElementById('tweet_data').value='' //reseting box

   let current_user=localStorage.getItem(document.getElementById('user_id').value)
   let current_user_obj=JSON.parse(current_user);
   let count=current_user_obj.count; //this counter help to track tweets of user
   
   count++;
   
    //Storing User Tweeets

    current_user_obj[count] = tweet;//adding tweet into the user storage
    current_user_obj["count"]=count;//how many number of tweets in tht session
    //logic for adding image
    if(url!=''){
    console.log(url);}
    localStorage.setItem(document.getElementById('user_id').value,JSON.stringify(current_user_obj))

    var done1 =`
    <div id='twth'>
    <div  id="twt_div"class="post" style="display:flex ;">
    <div class="post_avatar">
        <img src="images/man.png" alt="avatar">
    </div>
    <div class="post_body">
        <div class="post_header">
            <div class="post_headerText">
                <h3><span id="tweet_user">${current_user_obj.name+" "+current_user_obj.last}</span>
                <span class="post_headerSpecial">
                <span class="material-icons post__badge">verified</span>@${current_user_obj.name+current_user_obj.last}
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

var done=done1+done3+done2 // use multiple backtick due to making use of js code in btween them
p.innerHTML=done


//chrome alert
Notification.requestPermission().then(function (permission) {
    console.log(permission);
});
 var title = "You have Tweeted successfully";
icon = 'images/dog.jpg';
var body = tweet;
var notification = new Notification(title, { body, icon });
}

  function trigger(){
  let user_id = document.querySelector('#user_id').value;
  let pwd=document.querySelector('#pwd').value;
 // localStorage.setItem(user_id,user_id)  
 // localStorage.setItem(pwd,pwd)
  let profile=localStorage.getItem(user_id);//according to user object aaa jayega
 let profile_obj=JSON.parse(profile);//creating object from localstorage string
 
 
 //Older Tweeet Restore

for( var i=1;i<=profile_obj.count;i++){
var tweet=profile_obj[i];


 if(Element.files.length!==0){
   
    var url = URL.createObjectURL(Element.files[0]);//only accepting var??
  
    img.src = url;
    
   }
 
 var part1 =`
 <div id='twth'>
 <div  id="twt_div"class="post" style="display:flex ;">
 <div class="post_avatar">
     <img src="images/man.png" alt="avatar">
 </div>
 <div class="post_body">
     <div class="post_header">
         <div class="post_headerText">
        
             <h3><span id="tweet_user">${profile_obj.name+" "+profile_obj.last}</span>
             <span class="post_headerSpecial">
             <span class="material-icons post__badge">verified</span>@${profile_obj.name+profile_obj.last}
             </span>
             <div class="remove_twt">
             <button id='dd'><span id='rmvtwt' class="material-icons">
close
</span> <input type='hidden' value='${i}' class='twtnb'><!--this is used for getting tweet id--></button></div>
             </h3>
         </div>
         <div class="post_headerDescription">
             <p id="tweeting">${tweet}</p>
            
         </div>
     </div>`
     
     if(url!=null){

    var part3= `<img src="${url}" alt=""/>`
    
     }
     else{
         part3=''
       
     }
    var part2=` <div class="post_footer">
         <span class="material-icons">reply</span>
         <span class="material-icons">publish</span>
         <span class="material-icons">favorite border</span>
     </div>
 </div>
</div></div>`

let part=part1+part3+part2;

let v = document.createElement('div')
document.getElementById('boiler_div').appendChild(v)
v.innerHTML=part; }



if(user_id==profile_obj.name && pwd==profile_obj.password){
    modal.style.display="none";
}
  }
var modal=document.getElementById('Login');
var btn = document.getElementById('trigger');
var span= document.getElementsByClassName('close')[0];
 modal.style.display="block";

//Logic for removing tweet;
document.body.addEventListener('click',function(event){
    if(event.target.id=='rmvtwt'){
        var removed=event.target
        removed.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        
        let remove_str=localStorage.getItem(document.getElementById('user_id').value);
        let remove_obj=JSON.parse(remove_str);
       
            
        
        
    }
})
Notification.requestPermission().then(function (permission) {
    console.log(permission);
});