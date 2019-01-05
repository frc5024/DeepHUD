from networktables import NetworkTables

# As a client to connect to a robot
NetworkTables.initialize(server='roborio-5024-frc.local')
table = NetworkTables.getTable('SmartDashboard/DeepHUD')

def reloadTable():
	global table
	NetworkTables.initialize(server='roborio-5024-frc.local')
	table = NetworkTables.getTable('SmartDashboard/DeepHUD')

def getData():
	global table
	# dummy data
	time  = table.getNumber("time",  0.0)
	speed = table.getNumber("speed", 0.0)
	mode  = table.getNumber("mode",    0)
	
	# Return the list of everything
	return {
		"time" : time,
		"speed": speed,
		"mode" : mode
	}