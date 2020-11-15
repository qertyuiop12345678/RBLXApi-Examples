RBLXApi.RunScript = function(){
  RBLXApi.setStatus("t");
  RBLXApi.setDescription("est");
  RBLXApi.setPin(2222);
  RBLXApi.unlockPin(2222);
  RBLXApi.deletePin();
  // You might want to do some setTimeouts on those functions since the script is running async, thus get requests wont be timed correctly, so you might unlockpin before setting pin, deleting pin before unlocking it, etc
  RBLXApi.changePassword("oldPassword", "newPassword");
  RBLXApi.changeUsername("TEST", "password");
  RBLXApi.blockUser(1);
  RBLXApi.unblockUser(1);
  // More soon
}
