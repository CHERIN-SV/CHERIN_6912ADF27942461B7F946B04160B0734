print("\n\t SORTING THE LIST BASED ON CGPA \n\t ******************************")
class S:
   def sort_students(student_list):
        student_list.sort(key=lambda element:element['CGPA '],reverse=True)
        listToStr = ' '.join([str(elem) for elem in student_list])
        bad_chars = ['{', '}']
        for i in bad_chars:
	          listToStr= listToStr.replace(i, '\n')
        rem_quote = ''.join(i for i in str(listToStr) if i not in "''")    
        print(rem_quote)


lst = []
n = int(input("\n Enter number of elements       : "))

for i in range(0, n):
	ele = {'NAME ' :  str(input(" Enter the Name of student {}    : ".format(i+1))), 
         'ROLL ' : str(input(" Enter the Roll no of student {} : ".format(i+1))), 
         'CGPA ' : float(input(" Enter the CGPA of student {}    : ".format(i+1)))}
	lst.append(ele)

S.sort_students(lst)

