import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  stable var currentValue: Float = 1;
  stable var startTime = Time.now();

  Debug.print(debug_show(currentValue));

  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

   public func withdraw(amount: Float){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };

  public query func checkBalance() :async Float {
      return currentValue;
  };

  public func compound(){
    let currentTime = Time.now();
    let timelapsedS = (currentTime - startTime) /1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timelapsedS));
    startTime := currentTime;
  };
};
