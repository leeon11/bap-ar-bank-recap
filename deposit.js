document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositElement = document.getElementById('deposit-input');
    const depositElementString = depositElement.value;
    const depositTotal = parseFloat(depositElementString);


    depositElement.value =''

    if(isNaN(depositTotal)){
        alert ('provide a number')
        return;
    }



  const previousDepositElement = document.getElementById('deposit-total');
  const previousDepositElementString = previousDepositElement.innerText;
  const previousDepositElementTotal = parseFloat(previousDepositElementString);



  const currentTotal = previousDepositElementTotal + depositTotal;

  previousDepositElement.innerText = currentTotal;






 const balanceElement = document.getElementById('Balance-total');
 const balanceElementString = balanceElement.innerText;
 const BalanceTotal= parseFloat(balanceElementString);

 const Balance = BalanceTotal + depositTotal;

 balanceElement.innerText = Balance;



})