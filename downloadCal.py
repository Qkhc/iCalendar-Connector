import urllib.request
import time

starttime= time.time()
while True:
    print("tick")
    data = urllib.request.urlretrieve($YOUR_ICAL_FILE, 'testcalfile.ics')
    # Every x seconds we sleep
    time.sleep(60.0 - ((time.time() - starttime) % 60.0))
