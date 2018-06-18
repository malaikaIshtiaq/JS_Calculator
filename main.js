var mem = 0
var output = 0

function mClear(reset){
   reset=0;
   mem = parseInt(reset)
    document.getElementById("display").value = '';
   return mem;
}
function mPlus(displayedValue){
   mem = parseInt(mem)+parseInt(displayedValue);
    document.getElementById("display").value = mem;
   return mem;
}
function mMinus(displayedValue){
   mem = parseInt(mem)-parseInt(displayedValue);
    document.getElementById("display").value = mem;
   return mem;
}
function mRecall(mem){
    document.getElementById("display").value = mem;
}
 
window.addEventListener('keydown',function (event) {
  if (event.which == 187) {
    $("#equals").trigger("click");
    return false;
  }
});
$('input[type=text]').on('keydown', function(e) {
    if (event.which == 13) {
    $("#equal").trigger("click");
    return false;
  }
});

function PlusMinus()
 {
  if  (Current.indexOf("e") != -1)  //if there is an exponent:
    { var epos = Current.indexOf("e-");
      if (epos != -1)
         { Current = Current.substring(0,1+epos) + Current.substring(2+epos); //clip -ve exp 
         } else
         { epos = Current.indexOf("e");
           Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos); //insert
         };
    } else                         //there is NO exponent:
    {  if ( Current.indexOf("-") == 0 )
         { Current = Current.substring(1);
         } else
         { Current = "-" + Current;
         };
    };
  document.Calculator.Display.value = Current;
 }
function Operate(op)            //STORE OPERATION e.g. + * / etc.
 {
  if (op.indexOf("*") > -1) { Operation = 1; };       //codes for *
  if (op.indexOf("/") > -1) { Operation = 2; };       // slash (divide)
  if (op.indexOf("+") > -1) { Operation = 3; };       // sum
  if (op.indexOf("-") > -1) { Operation = 4; };       // difference

  Memory = Current;                 //store value
  Current = "0";                     //or we could use "0"
  document.Calculator.Display.value = Current;
 }
function Calculate()            //PERFORM CALCULATION (= button)
 { 
  if (Operation == 1) { Current = eval(Memory) * eval(Current); };
  if (Operation == 2) { Current = eval(Memory) / eval(Current); };
  if (Operation == 3) { Current = eval(Memory) + eval(Current); };
  if (Operation == 4) { Current = eval(Memory) - eval(Current); };
  Operation = 0;                //clear operation
  Memory    = "0";              //clear memory
  document.Calculator.Display.value = Current;
 }
var input = '';
$(':button').click(function() {
  input = $(this).attr("value");
 if (input === '.') {
      if (input === '.' + '.') {
        input = '';
      }
    }
});
function FixCurrent()
 {
  Current = document.Calculator.Display.value;
  Current = "" + parseFloat(Current);
  if (Current.indexOf("NaN") != -1)
    { Current = "Aargh! I don't understand";
    };
  document.Calculator.Display.value = Current;
 }
