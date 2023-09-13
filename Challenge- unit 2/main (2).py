print("\t\t\t WELCOME TO NAAN MUDHALVAN BANK \n\t\t\t ****************************** \n ")
class BankAccount:
    def __init__(self,ac,name,balance=0.0):
        self.__name = str(input("Enter your name              : "))
        self.__ac = int(input("Enter your account number    : "))
        self.__balance = balance
        print("\n\t\t\t\t WELCOME ",self.__name.upper(),"! \n ")
    def deposit(self):
        amount=int(input("\nEnter the amount to deposit  : "))
        if amount >= 0:
          self.__balance+=amount
          print("Total amount after deposited : {}".format(self.__balance))
        else:
          print("Invalid deposit amount . Please deposit a positve amount .")
    def withdraw(self):
        amount=int(input("Enter the amount to withdraw : "))
        if(amount < 0):
             print("Invalid withdraw amount . Please deposit a positve amount .")
        else:
             self.__balance-=amount
             if(amount>self.__balance):
                 print('Insufficient Balance!')
             else:
                 print("Total amount after withdrew  : {}".format(self.__balance))
    def display(self):
          print("  Current balance for {} (Account #{}) is {} ".format(self.__name,self.__ac,self.__balance))
    def displays(self):
          print("\n  Bank balance for {} (Account #{}) is {} ".format(self.__name.upper(),self.__ac,self.__balance))
          
a=BankAccount("","",balance=50000)
a.display()
a.deposit()
a.withdraw()
a.displays()
print("\n\t\t\t\t THANK YOU ...!")