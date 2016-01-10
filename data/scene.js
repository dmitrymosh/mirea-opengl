var SceneData = {

	"objects": [
		// всё здание 
		{
			// все объекты грузятся из файла в эту группу в children
			// 
			"type" : "objmtl", // фактически, этот объект будет типа THREE.Group
			"url"  : "mirea.obj",
			"material" : "mirea.mtl",
			"position" : [ 0, 0, 0 ],
			"rotation" : [ 0, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],
			"visible"  : true,
			"children" : [
				// корпус А
				{
					"type" : "group",
					"userData" : {
						"building_name" : "А",
						"building" : 1,
					},
					"visible"  : true,
					"select" : /B1[\w\d]+)/,
					"children" : [
						// Этаж 1
						{
							"type" : "group",
							"userData" : {
								"level" : 1,
								"level_name" : "1",
							},
							"visible"  : true,
							"select" : /B1L1T[\w\d]+)/,
						}
						
						// Этаж 2
						{
							"type" : "group",
							"userData" : {
								"level" : 2,
							},
							"visible"  : true,	
							"select" : /B1L2T[\w\d]+)/,
						}
					]
				}
			]			
		}
	}
}