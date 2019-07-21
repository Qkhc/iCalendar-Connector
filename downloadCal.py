import urllib.request
import time

starttime= time.time()
while True:
    print("tick")
    data = urllib.request.urlretrieve('http://p49-caldav.icloud.com/published/2/MTA0NTA4NTI4MDcxMDQ1MMs_O0LBF_P0lr5FF_4-eR9Mv-NuzkyEVCg3_zJuyGtT', 'testcalfile.ics')
    # Every x seconds we sleep
    time.sleep(60.0 - ((time.time() - starttime) % 60.0))
