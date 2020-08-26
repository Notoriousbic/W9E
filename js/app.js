

var tweets = [
    {
    tweet:"tweet1",
    username: "james",
    age:"40",
    created_at:"04-15-2020"
    },
    {
    tweet:"tweet2",
    username: "phil",
    age:"23",
    created_at:"06-15-2020"
    },
    {
    tweet:"tweet3",
    username: "mike",
    age:"34",
    created_at:"01-15-2020"
    },
    {
    tweet:"tweet4",
    username: "ryan",
    age:"55",
    created_at:"03-1-2020"
    },
    {
    tweet:"tweet5",
    username: "pete",
    age:"17",
    created_at:"03-5-2020"    
    }
]
for (var index=0; index<tweets.length; index++){
    console.log(tweets[index].tweet);
    console.log(tweets[index].username);
    console.log(tweets[index].created_at);
    console.log("-----------------");
}

// tweets.filter()

function approval (result){
    if (result.age >= 18){
       return true;
    }
    else {
        return false;
    }
}






// var tweet = {
//     username: "john",
//     age: 17,
//     is_subscribed: true,
//     tweet: "Hello world",
// }



  var newArray = tweets.filter(approval) 
      