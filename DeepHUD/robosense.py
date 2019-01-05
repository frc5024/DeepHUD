import cv2
from scipy.interpolate import interp1d

speed_bar_top = 13
speed_bar_bottom = 427
speed_bar_mid = (speed_bar_top + speed_bar_bottom) /2

top_mid    = interp1d([0,1], [speed_bar_mid, speed_bar_top])
bottom_mid = interp1d([-1,0], [speed_bar_bottom, speed_bar_mid])

def buildOverlay(frame, sensors):
	# Draw speed background
	cv2.rectangle(frame,(10,10),(20,430),(0,255,0),3)
	
	# Draw speed bar
	speed = sensors["speed"]
	
	if speed > 0:
		bar_bottom = speed_bar_mid
		bar_top    = top_mid(speed)
	else:
		bar_top    = speed_bar_mid
		bar_bottom = bottom_mid(speed)
	
	# round to pixels
	bar_bottom = int(round(float(bar_bottom)))
	bar_top    = int(round(float(bar_top)))
	
	cv2.rectangle(frame,(13,bar_top),(17,bar_bottom),(0,0,255),3)
	
	# Draw hud text
	
	return frame