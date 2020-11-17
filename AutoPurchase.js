RBLXApi.loopCount = 0;
RBLXApi.minRobux = 9;
RBLXApi.MaxLoop = 10;
RBLXApi.RunScript = function(){
  if (RBLXApi.robuxCount <= RBLXApi.minRobux){
    console.log("depleted");
  }
  else{
    if (RBLXApi.robuxCount >= 10 && RBLXApi.robuxCount <= 100){
      RBLXApi.BuyGamepass("id", true); // true to automatically delete gamepass after purchase to be bought more time, use just RBLXApi.BuyGamepass("id"); to not buy it multiple times
    }
    else if (RBLXApi.robuxCount >= 100 && RBLXApi.robuxCount <= 500){
      RBLXApi.BuyGamepass("id", true); // Buy gamepass selling for 100 robux
    }
    else if (RBLXApi.robuxCount >= 500){
      RBLXApi.BuyGamepass("id", true); // Buy the gamepass selling for 500 robux
    }
    if (RBLXApi.robuxCount <= RBLXApi.minRobux){

    }
    RBLXApi.loopCount += 1;
    if (RBLXApi.MaxLoop >= RBLXApi.loopCount){
      RBLXApi.launchScript(RBLXApi.userId); // Recounts robux and will relaunch this script, since its ASYNC, you can't just do a get request and save it to a variable, thus you call this function again
    } 
  }
}
