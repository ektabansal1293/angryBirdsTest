class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    
    //Reference link : https://medium.com/@jasonbyrne/closer-look-at-firebase-set-versus-update-eceff34d056b
    //"update" updates the fields that we push in and leaves the other ones alone.
    updateCount(count){
        database.ref('/').update({ playerCount : count});
    }


    //"set" will completely replace whatever you have at that reference.
    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }



}