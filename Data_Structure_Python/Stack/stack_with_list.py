from secrets import choice
from xml.dom.minidom import Element


stack =[]
def push():
    if len(stack) == limit:
        print("The list is full")
    else:
        element = input("Enter the element: ")
        stack.append(element)
        print(stack)

def pop_element():
    if not stack:
        print("The stack is empty")
        
    else:
        e = stack.pop()
        print("Removed element: ",e)
        print(stack)

limit = int(input("Limit of stack: "))
while True:
    print("Select the operation \n1. push\n2. pop\n3.quit")
    choice = int(input())

    if choice == 1:
        push()
    elif choice == 2:
        pop_element()
    elif choice == 3:
        break
    else:
        print("Enter the correct operation")