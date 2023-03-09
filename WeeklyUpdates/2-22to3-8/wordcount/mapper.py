#!/usr/bin/env python

#word count mapper

import sys

print("starting mapper")

# get input from standard input, STDIN, one line at a time
for line in sys.stdin:
    print(line)
    line = line.strip() #remove leading and trailing whitespaces
    words = line.split() #split the line into words and returns as a list
    for word in words:
        #write the results to standard output, STDOUT
        print (word,"\t",1) #Emit key = word and value = 1
