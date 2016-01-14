{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {
		"mirea" : {	
			"position" : [ 0, 0, 0 ],
			"rotation" : [ -1.57079, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],		
			"userData" : {
				"building" : 4,
				"level" : 2
			},
			"visible"  : true,
			"children" : {
				"tt" : {
					"type": "obj",
					"url" : "data/mirea_hd.obj",
					"material" : "faceted_white",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"castShadow" : true,
					"receiveShadow" : true
					
				}	
			}
		},
		

		
		"light2": {
			"type"	  : "PointLight",
			"position": [ -1000, 1000, 1000 ],
			"color"   : 16772829,
			"intensity"	 : 1.0
		},
		
		"light3": {
			"type"	  : "AmbientLight",
			"color"   : 263172,
			"intensity"	 : 0.00001
			
		},

		"camera1": {
			"type"  : "PerspectiveCamera",
			"fov"   : 50,
			"aspect": 1.33333,
			"near"  : 1,
			"far"   : 2000,
			"position": [ -100, 100, 0 ],
			"target"  : [ 0, 0, 0 ]
		}

	},
	"materials": {
	
		"faceted_white": {
			"type": "MeshLambertMaterial",
			"parameters": { 
				"color": 12500670, 
				"shading": "flat" 
			}
		},
		"basic_white": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "wireframe": true }
		},
		"basic_refraction": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "envMap": "cube_refraction", "refractionRatio": 0.5, "side": "double"		}
		}
	},
	"textures": {

		"cube_refraction": {
			"url": [
				"data/skybox/px.jpg",
				"data/skybox/nx.jpg",
				"data/skybox/py.jpg",
				"data/skybox/ny.jpg",
				"data/skybox/pz.jpg",
				"data/skybox/nz.jpg"
			],
			"mapping": "CubeRefractionMapping"
		}
	},
	"geometries": {

		"cube": {
			"type"  : "cube",
			"width" : 100,
			"height": 100,
			"depth" : 100,
			"widthSegments"  : 1,
			"heightSegments" : 1,
			"depthSegments"  : 1
		}
	},
	"fogs":	{
		"basic": {
			"type": "linear",
			"color": [1,1,1],
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
		"camera": "camera1"
	}

}
