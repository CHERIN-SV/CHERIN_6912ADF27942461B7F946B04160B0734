print("\t\t FINDING LEAP YEAR OR NOT \n\t\t ************************ \n")
year = int(input("Enter the year : "))
if(year % 4 == 0)&(year % 100 != 0):
  print(year,"is a leap Year")
elif(year % 400==0):
  print(year,"is a leap Year")
else:
  print(year,"is not a leap Year")