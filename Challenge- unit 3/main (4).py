print("\t\t LINEAR SEARCH PRODUCT - STATIONARY PRODUCTS \n\t\t ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
def LinearSearchProduct(ProductList ,TargetProduct):
  indices=[]
  for index,Product in enumerate(ProductList):
    if Product == TargetProduct:
      indices.append(index)
  return indices
Product : list[str]
Product =['RULER','SHARPNER','ERASER','PEN','PENCIL','BOX','CALCULATOR','NOTEBOOKS','RULER','SHARPNER','ERASER','PEN','PENCIL','BOX','CALCULATOR','NOTEBOOKS','RULER','SHARPNER','ERASER','PEN','PENCIL','BOX','CALCULATOR','NOTEBOOKS','RULER','SHARPNER','ERASER','PEN','PENCIL','BOX','CALCULATOR','NOTEBOOKS']
p=['RULER','SHARPNER','ERASER','PEN','PENCIL','BOX','CALCULATOR','NOTEBOOKS']
print("\n Here are the list of stationary products")
for i in range(len(p)):
    print("\n\t\t => {}".format(p[i]))
target= str(input("\n Enter the target product : "))
T = target.upper()
result = LinearSearchProduct(Product,T)
print("\n Indices of the stationary product {} in a list : {} ".format(T.lower(),result))
  


  
  