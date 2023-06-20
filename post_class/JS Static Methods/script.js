class Account {
    static totalAccount=0;
    static totalBalance=0;
     constructor(accountNum, balance) {
       this.accountNum=accountNum;
       this.balance = balance;
       Account.totalAccount++;
       Account.totalBalance +=balance;
      }
      static returnTotalAccounts(){
        return Account.totalAccount;
      }
      static returnTotalBalance(){
        return Account.totalBalance;
      }
  }