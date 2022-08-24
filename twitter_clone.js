 //var tweet_img=document.getElementById('file_input').value
   // console.log(tweet_img) 
    //p.innerHTML=tweet
  var ele = document.querySelector('#twtbtn')  
  var Element = document.querySelector('#file_input');
  var img = document.querySelector('#imgtwt');
  ele.addEventListener("click",abc)
  function abc(){
    var url = URL.createObjectURL(Element.files[0]);
    img.src = url;
    var tweet= document.getElementById('tweet_data').value
    let p = document.createElement('div')

    //document.getElementById('tweeting').innerHTML=tweet
    document.getElementById('boiler_div').appendChild(p)
    var done =`
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
                </h3>
            </div>
            <div class="post_headerDescription">
                <p id="tweeting">${tweet}</p>
            </div>
        </div>
        <img src="${url}" alt=""/>
        <div class="post_footer">
            <span class="material-icons">reply</span>
            <span class="material-icons">publish</span>
            <span class="material-icons">favorite border</span>
           

        </div>
    </div>
</div> `
p.innerHTML=done
document.getElementById('tweet_data').value=''    
}
 

   
   