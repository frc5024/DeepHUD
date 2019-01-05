import camerafeed as camera
import robotdata as sensors
import robosense as rs
import cv2

sensors.useFake("172.16.10.113")

# Program loop
while True:
	# get frame
	cam_frame = camera.getFrame()
	# get sensor data
	sensor_data = sensors.getData()
	print(sensor_data["mode"])
	# process frame
	
	# build overlay
	cam_frame = rs.buildOverlay(cam_frame, sensor_data)
	# display
	cv2.namedWindow('DeepHUD', flags=cv2.WINDOW_GUI_NORMAL)
	cv2.imshow("DeepHUD", cv2.resize(cam_frame,(800,450)))
	
	# exit
	if cv2.waitKey(1) == 27:
		break  # esc to quit
cv2.destroyAllWindows()