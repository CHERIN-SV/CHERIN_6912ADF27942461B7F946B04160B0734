def factorial(n):
  if n==0:
    return 1
  else:
    return n*factorial(n-1)
print("\t\t THE FACTORIAL OF THE NUMBER \n\t\t *************************** \n")
num = int(input("Enter a number        : "))
print("The factorial of {} is : {}".format(num,factorial(num)))