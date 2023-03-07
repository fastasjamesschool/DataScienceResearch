#!/usr/bin/env python

# word count reducer

import sys
 
last_key = None
running_total = 0
 
for line in sys.stdin:
   line = line.strip()
   this_key, value = line.split("\t", 1)
   value = int(value)

   # keep processing current key 
   if last_key == this_key:
       running_total += value
   else:  # begin processing new key
       if last_key:  # but first output last key and total
           print(last_key, "\t", running_total)

       # process new key
       running_total = value
       last_key = this_key

# end of reducer job, output last key and total if we have not yet done so  
if last_key == this_key:
   print(last_key, "\t", running_total) 

