{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {

        "man" : {
            "type": "obj",
            "url" : "obj/male02/male02.obj",
            "material" : "phong_man",
            "position" : [ -10, -10, -25 ],
            "rotation" : [ 0, 0, 0 ],
            "scale"	   : [ 0.2, 0.2, 0.2 ],
            "visible"  : true
        }

	},	

	"fogs":	{
		"basic": {
			"type": "linear",
			"color": [1,0,0],
			"near": 1,
			"far": 1000
		},

		"exponential": {
			"type": "exp2",
			"color": [1,1,1],
			"density": 0.005
		},

		"black": {
			"type": "exp2",
			"color": [0,0,0],
			"density": 0.005
		}
	},

	"defaults": {
		"bgcolor": [0,0,0],
		"bgalpha": 1,
		"camera": "camera1",
		"fog": "black"
	}

}
