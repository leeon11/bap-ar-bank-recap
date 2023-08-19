document.getElementById('btn-withdraw').addEventListener('click', function(){
  

    const withdrawElement = document.getElementById('withdraw-input');
    const withdrawElementString = withdrawElement.value;
    const withdrawTotal = parseFloat(withdrawElementString);


    withdrawElement.value = ''

    if(isNaN(withdrawTotal)){
        alert ('please provide a number')
        return;
    }

    
   




    const withdrawPreviousBalance = document.getElementById('withdraw-total');
    const withdrawPreviousBalanceString = withdrawPreviousBalance.innerText;
    const withdrawPreviousBalanceTotal = parseFloat(withdrawPreviousBalanceString);





    const balanceElement = document.getElementById('Balance-total');
    const balanceElementString = balanceElement.innerText;
    const BalanceTotal= parseFloat(balanceElementString);






    


    const Balance = BalanceTotal - withdrawTotal;


    if(withdrawTotal > BalanceTotal){
        alert ('baap ar bank a ato taka nai')
        return;
    }

    const currentTotalWithdraw = withdrawPreviousBalanceTotal + withdrawTotal;

    withdrawPreviousBalance.innerText = currentTotalWithdraw;

    balanceElement.innerText = Balance;

})