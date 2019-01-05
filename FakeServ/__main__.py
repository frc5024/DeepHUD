from networktables import NetworkTables

NetworkTables.initialize()
table = NetworkTables.getTable('SmartDashboard/DeepHUD')

mode = 0

while True:
	input()
	mode = int(not bool(mode))
	