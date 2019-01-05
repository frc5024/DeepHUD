import cv2

cam = cv2.VideoCapture(0)

def getFrame():
	global cam
	ret_val, img = cam.read()
	img = cv2.resize(img, (710,440))
	return img