function take_tweet(){    
    var tweet= document.getElementById('tweet_data').value
    if(tweet==''){
        alert('Please type something for Tweeting')
    }
    else{

    alert('You have posted successfully')
    document.getElementById('tweeting').innerHTML=tweet
    document.getElementById('twt_div').style.display ='flex'
    }
    document.getElementById('tweet_data').value=''
}
   
   