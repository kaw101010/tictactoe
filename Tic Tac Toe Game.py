import numpy as np
h = int(input('Enter number: '))
r = 1
a0= []
for i in range(0,h):
    l = []
    for j in range(0,h):
        l.append(str(r))
        r = r+1
    a0.append(l)
a = np.array(a0)
for i in range(0,h):
        print(a[i])
w = True
codes = []
for i in range(0,h):
    codes.append(a[i])
    codes.append(a.transpose()[i])
codes.append(a.diagonal())
codes.append(np.fliplr(a).diagonal())
def check():
    "Checks whether any player has won"
    global w
    for i in codes:
        if list(i).count(list(i)[0])==len(i) and i[0] == 'X':
            print('Player 1 wins')
            w = False
            break
        elif list(i).count(list(i)[0])==len(i) and i[0] == 'O':
            print('Player 2 wins')
            w = False
            break
def p1():
    "Gives player 1 the chance to select the position of 'X"
    if w == True:
        print("Player 1's chance")
        x = int(input('Enter your number to place X: '))
        for i in range(0,h):
            for j in range(0,h):
                if a[i][j] == str(x):
                    a[i][j] = 'X'
    if w == True:
        for i in range(0,h):
            print(a[i])
        check()
    p = True
    while p==True and w == True:
        for i in range(0,h):
                for j in range(0,h):
                    try:
                        if type(int(a[i][j])) == int:
                            p2()
                    except:
                        pass
        else:
            p = False
def p2():
    "Gives player 2 the chance to select the position of 'O'"
    if w == True:
        print("Player 2's chance")
        o = int(input('Enter your number to place O: '))
        for i in range(0,h):
            for j in range(0,h):
                if a[i][j] == str(o):
                    a[i][j] = 'O'
    if w == True:
        for i in range(0,h):
            print(a[i])
        check()
    p = True
    while p==True and w == True:
        for i in range(0,h):
                for j in range(0,h):
                    try:
                        if type(int(a[i][j])) == int:
                            p1()
                    except:
                        pass
        else:
            p = False
p1() 
    
            