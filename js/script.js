function TransferMoney() {
  var receivername = document.getElementById("receivername").value;
  var amount = parseInt(document.getElementById("amount").value);
  var sendername = document.getElementById("sendername").value;
  var senderbankaccount = sendername + "BankBalance";
  var samount = parseInt(document.getElementById(senderbankaccount).innerHTML);
  if (amount > samount) {
    alert("Insufficient Balance");
  } else {
    var receiverbankaccount = receivername + "BankBalance";

    var receiverfinbal =
      parseInt(document.getElementById(receiverbankaccount).innerHTML) + amount;
    var senderfinbal =
      parseInt(document.getElementById(senderbankaccount).innerHTML) - amount;
    document.getElementById(senderbankaccount).innerHTML = senderfinbal;
    document.getElementById(receiverbankaccount).innerHTML = receiverfinbal;
    alert(`Transaction successful`);

    // transaction history
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(
      `${sendername} transferred ₹${amount} to  ${receivername} on ${Date()}. `
    );
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}
