chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name = "fetchWords"){

        const apiKey = 'f19t7bxksz6iy0kfbbkerrmczfnv4r3davqplbn33ysrl7ses'
        const dateStr = new Date().toISOString().slice(0, 10);
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
        
        console.log(apiCall);


        fetch(apiCall).then(function(res){
            if(res.status!==200){
                response({word:'ERROR',speech:'ERROR',  desc: 'There was a problem in loading the Word of the Day'});
                return;
            }
            res.json().then(function(data){
                response({word:data.word, speech:data.definitions[1].partOfSpeech, desc: data.note});
            });
        }).catch(function(err) {
            response({word:'ERROR', speech:'ERROR',  desc: 'There was a problem in loading the Word of the Day'});
             
        });

    }
        
    return true;
});