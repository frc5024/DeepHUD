from networktables import NetworkTables

NetworkTables.initialize()
table = NetworkTables.getTable('SmartDashboard/DeepHUD')

mode = 0

while True:
	input()
	mode = 0 if mode == 1 else 1
	