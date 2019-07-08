import urllib.request
import time

starttime= time.time()
while True:
    print("tick")
    data = urllib.request.urlretrieve('$LINK_FOR_CALENDAR', 'testcalfile.ics')
    # Every x seconds we sleep 
    time.sleep(60.0 - ((time.time() - starttime) % 60.0))
