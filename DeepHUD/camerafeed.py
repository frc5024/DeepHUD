import cv2
import numpy as np
from urllib.request import urlopen

cam_url = "http://roborio-5024-frc.local:1181/stream.mjpg"

bytes = b""

try:
	video_stream = urlopen(cam_url)
	use_feed = True
except:
	use_feed = False

video_stream = urlopen(cam_url)
use_feed = True

# try:
# 	cam = cv2.VideoCapture(1)
# except:
# 	cam = cv2.VideoCapture(0)

def getFrame():
	global cam
	global use_feed
	global video_stream
	global bytes
	
	if use_feed:
		bytes += video_stream.read(1024)
		a = bytes.find(b"\xff\xd8")
		b = bytes.find(b"\xff\xd9")
		if a != -1 and b != -1:
			jpg = bytes[a:b+2]
			bytes = bytes[b+2:]
			img = cv2.imdecode(np.fromstring(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)
		else:
			return 0
	else:
		ret_val, img = cam.read()
	img = cv2.resize(img, (710,440))
	return img