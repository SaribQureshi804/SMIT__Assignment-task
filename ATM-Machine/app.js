let balance = 100000;
let CORRECT_PIN = "1234";
let primary = document.getElementById('atmprimary');
let secondary = document.getElementById("atmsecondary");



secondary.addEventListener("click" , function(){
  
 
});



         
         
         
         // function  checkbalance(balance){
            //      balance = 100000;
            
            //  alert("Your current balance is: " + balance);
            
// }

// function withdraw(balance, withdrawamount){
   //     let updatebalance = balance - withdrawamount;
   //     alert("Please collect your cash: " + withdrawamount + "\nYour updated balance is: " + updatebalance);
   // }
   
   // function deposit(balance, depositamount){
      // let updatebalance = balance + depositamount;
      // alert("You have successfully deposited: " + depositamount + "\nYour updated balance is: " + updatebalance);
      
      // }
      
      // function exit (exit){
         //     alert("Thank you for using our ATM Machine. Goodbye!");
         
         // Toggle function: shows secondary and hides primary. If already showing secondary, toggle back.
         // }
         // function toggleImages() {
      //    if (!primary || !secondary) return;
      //    const isPrimaryVisible = !primary.classList.contains('hidden');
      //    if (isPrimaryVisible) {
      //       primary.classList.add('hidden');
      //       primary.setAttribute('aria-pressed', 'true');
      //       secondary.classList.remove('hidden');
      //    } else {
      //       secondary.classList.add('hidden');
      //       primary.classList.remove('hidden');
      //       primary.setAttribute('aria-pressed', 'false');
      //    }
      // }
      
      // // Authenticate with up to 3 attempts. Returns true on success, false on cancel/failure.
      // function authenticate() {
      //    let attempts = 3;
      //    while (attempts > 0) {
      //       const pin = prompt('Please enter your 4-digit PIN:');
      //       if (pin === null) {
      //          // User cancelled prompt
      //          return false;
      //       }
      //       if (pin === CORRECT_PIN) {
      //          return true;
      //       }
      //       attempts -= 1;
      //       alert(`Incorrect PIN. ${attempts} attempt(s) remaining.`);
      //    }
      //    alert('Too many incorrect attempts. Returning to start.');
      //    return false;
      // }
      
      // // Main ATM flow: shows menu and handles options until user exits or cancels.
      // function startATMProcess() {
      //    if (!authenticate()) return;
      
      //    // Show the secondary image to indicate authenticated state
      //    toggleImages();
      
      //    let keepRunning = true;
      //    while (keepRunning) {
      //       let option = prompt(
      //          'Welcome to ATM Machine\n1. Check balance\n2. Withdraw\n3. Deposit\n4. Exit\nPlease enter option number:'
      //       );
      //       if (option === null) break; // user cancelled
      //       option = parseInt(option, 10);
      
      //       switch (option) {
      //          case 1:
      //             alert('Your current balance is: ' + balance);
      //             break;
      //          case 2: {
      //             let withdrawAmount = prompt('Enter amount to withdraw:');
      //             if (withdrawAmount === null) break;
      //             withdrawAmount = parseFloat(withdrawAmount);
      //             if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      //                alert('Invalid amount entered.');
      //                break;
      //             }
      //             if (withdrawAmount > balance) {
      //                alert('Insufficient funds. Your balance is: ' + balance);
      //                break;
      //             }
      //             balance -= withdrawAmount;
      //             alert(
      //                'Please collect your cash: ' + withdrawAmount + '\nYour updated balance is: ' + balance
      //             );
      //             break;
      //          }
      //          case 3: {
      //             let depositAmount = prompt('Enter amount to deposit:');
      //             if (depositAmount === null) break;
      //             depositAmount = parseFloat(depositAmount);
      //             if (isNaN(depositAmount) || depositAmount <= 0) {
      //                alert('Invalid amount entered.');
      //                break;
      //             }
      //             balance += depositAmount;
      //             alert('You have successfully deposited: ' + depositAmount + '\nYour updated balance is: ' + balance);
      //             break;
      //          }
      //          case 4:
      //             alert('Thank you for using our ATM Machine. Goodbye!');
      //             keepRunning = false;
      //             break;
      //          default:
      //             alert('Invalid option selected. Please try again.');
      //       }
      
      //       if (keepRunning) {
      //          // Ask if user wants another transaction; if not, exit the loop
      //          keepRunning = confirm('Do you want another transaction?');
      //       }
      //    }
      
      //    // After session ends, revert images back to initial state
      //    try {
      //       toggleImages();
      //    } catch (e) {
      //       console.warn('Could not toggle images back:', e);
      //    }
      // }
      
      // // Attach handlers (guard in case elements are missing)
      // if (primary) {
      //    primary.addEventListener('click', startATMProcess);
      //    primary.addEventListener('keydown', function (e) {
      //       if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      //          e.preventDefault();
      //          startATMProcess();
      //       }
      //    });
      // }
      // if (secondary) {
      //    // Allow clicking the secondary image to go back to the primary view
      //    secondary.addEventListener('click', toggleImages);
      // }
      
      // console.log('ATM handlers attached', { primary, secondary });
      
      //  else if (option === 2){