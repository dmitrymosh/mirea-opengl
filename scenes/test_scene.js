{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {	
        "ground" : {
            "geometry" : "plane",
            "material" : "mirea_ground",
            "position" : [ 0, 0, 0 ],
            "rotation" : [ -1.57, 0, 0 ],
            "scale"	   : [ 1, 1, 1 ],	
            "visible"  : true			
        },	
		"mirea" : {	            
			"position" : [ 0, 0, 0, -40, 0, 77 ],
			"rotation" : [ -1.57, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],	
			"visible"  : true,
			"children" : {				
				"build1" : {
					"position" : [ -72.445, -177.962, 4 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 1
					},
					"children" : {
						"B1L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"level1" : {
									"type": "obj",
									"url" : "data/B1L1.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						},
						"B1L2" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {
								"level2" : {
									"type": "obj",
									"url" : "data/B1L2.obj",
									"material" : "stone",
									"position" : [ 0, 0, 4 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B1L3" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {
								"level3" : {
									"type": "obj",
									"url" : "data/B1L3.obj",
									"material" : "stone3",
									"position" : [ 0, 0, 9 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						}				
					}
				},
				
				"build2" : {
					"position" : [ -34.328, 8.333, 0 ],
					"rotation" : [ 0, 0, -1.57 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 2
					},
					"children" : {
						"B2L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 1
							},
							"children" : {
								"B2L1_obj" : {
									"type": "obj",
									"url" : "data/B2L1.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						},
						"B2L2" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"B2L2_obj" : {
									"type": "obj",
									"url" : "data/B2L2.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 4 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B2L3" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {	
								"B2L3_obj" : {
									"type": "obj",
									"url" : "data/B2L3.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 8 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B2L4" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {	
								"B2L4_obj" : {
									"type": "obj",
									"url" : "data/B2L4.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 12 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B2L5" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {	
								"B2L5_obj" : {
									"type": "obj",
									"url" : "data/B2L5.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 16 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						}							
					}
				},
				"build3" : {
					"position" : [ -34.628, -68.269, 0 ],
					"rotation" : [ 0, 0, -1.57 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 3
					},
					"children" : {
						"B3L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 1
							},
							"children" : {
								"B3L1_obj" : {
									"type": "obj",
									"url" : "data/B3L1.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						},
						"B3L2" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"B3L2_obj" : {
									"type": "obj",
									"url" : "data/B3L2.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 4 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B3L3" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {	
								"B3L3_obj" : {
									"type": "obj",
									"url" : "data/B3L3.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 8 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B3L4" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {	
								"B3L4_obj" : {
									"type": "obj",
									"url" : "data/B3L4.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 12 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B3L5" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {	
								"B3L5_obj" : {
									"type": "obj",
									"url" : "data/B3L5.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 16 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						}							
					}
				},
				"build4" : {
					"position" : [ -90.843, 112.862, 0 ],
					"rotation" : [ 0, 0, -0.9250 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 4
					},
					"children" : {
						"B4L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 1
							},
							"children" : {
								"level1" : {
									"type": "obj",
									"url" : "data/B4L1.obj",
									"material" : "stone",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						},
						"B4L2" : {
							"position" : [ 0, 0, 4 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"level2" : {
									"type": "obj",
									"url" : "data/B4L2.obj",
									"material" : "stone",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B4L3" : {
							"position" : [ 0, 0, 8 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {	
								"level3" : {
									"type": "obj",
									"url" : "data/B4L3.obj",
									"material" : "stone",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B4L4" : {
							"position" : [ 0, 0, 12 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {	
								"level4" : {
									"type": "obj",
									"url" : "data/B4L4.obj",
									"material" : "stone",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B4L5" : {
							"position" : [ 0, 0, 16 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {	
								"level4" : {
									"type": "obj",
									"url" : "data/B4L5.obj",
									"material" : "stone",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						}							
					}
				},
				"build5" : {
					"position" : [ -34.628, -145.76, 0 ],
					"rotation" : [ 0, 0, -1.57 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 5
					},
					"children" : {
						"B5L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 1
							},
							"children" : {
								"B5L1_obj" : {
									"type": "obj",
									"url" : "data/B5L1.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						},
						"B5L2" : {
							"position" : [ 0, 0, 4 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"B5L2_obj" : {
									"type": "obj",
									"url" : "data/B5L2.obj",
									"material" : "stone2",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B5L3" : {
							"position" : [ 0, 0, 8 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {	
								"B5L3_obj" : {
									"type": "obj",
									"url" : "data/B5L3.obj",
									"material" : "stone3",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B5L4" : {
							"position" : [ 0, 0, 12 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {	
								"B5L4_obj" : {
									"type": "obj",
									"url" : "data/B5L4.obj",
									"material" : "stone4",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						},
						"B5L5" : {
							"position" : [ 0, 0, 16 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {	
								"B5L5_obj" : {
									"type": "obj",
									"url" : "data/B5L5.obj",
									"material" : "stone5",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
							}
						}							
					}
				},
                "build6" : {
					"position" : [ -177.751, 54.699, 4 ],
					"rotation" : [ 0, 0, 0.645 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 6
					},
					"children" : {
						"B6L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"level1" : {
									"type": "obj",
									"url" : "data/B6L1.obj",
									"material" : "faceted_white1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						}
                    }
                },
                "build7" : {
					"position" : [ -137.016, -61.075, 4 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true,	
					"userData" : {
						"building" : 7
					},
					"children" : {
						"B7L1" : {
							"position" : [ 0, 0, 0 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {
								"level1" : {
									"type": "obj",
									"url" : "data/B7L1.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true
								}
							}
						}
                    }
                }
			}
		},

		
		"light1": {
			"type"	  : "PointLight",
			"position": [ 0, 300, 0, -500, 300, 500 ],
			"color"   : 16777166,
			"intensity"	 : 0.0
		},
		"light2": {
			"type"	  : "PointLight",
			"position": [-500, 300, 500 ],
			"color"   : 16777166,
			"intensity"	 : 2.0
		},		
		
		"light_cube" : {
            "geometry" : "cube1",
            "material" : "faceted_white1",
            "position" : [ -90.843, 20, 112.862 ],
            "rotation" : [ 0, 0, 0 ],
            "scale"	   : [ 1, 1, 1 ],	
            "visible"  : false			
        },	
		"camera1": {
			"type"  : "PerspectiveCamera",
			"fov"   : 50,
			"aspect": 1.33333,
			"near"  : 1,
			"far"   : 2000,
			"position": [ -300, 100, 300 ], 
			"target"  : [ 0, 0, 0 ]
		}

	},
	"materials": {
	
		"faceted_white1": {
			"type": "MeshLambertMaterial",
			"parameters": { 
				"color": 12500670, 
				"shading": "flat" 
			}
		},
		"faceted_white2": {
			"type": "MeshLambertMaterial",
			"parameters": { 
				"color": 12500670, 
				"shading": "flat" 
			}
		},
		"faceted_white3": {
			"type": "MeshLambertMaterial",
			"parameters": { 
				"color": 12500670, 
				"shading": "flat" 
			}
		},
		"faceted_white4": {
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
			"parameters": { "color": 16777215, "envMap": "cube_refraction", "refractionRatio": 0.5 }
		},
		"mirea_ground": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "mirea_ground" }
		},
		"stone1": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "stone1" }
		},
		"stone2": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "stone2" }
		},
		"stone3": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "stone3" }
		},
		"stone4": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "stone4" }
		},
		"stone5": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 16777215, "map": "stone5" }
		},
		"glass": {
			"type": "MeshLambertMaterial",
			"parameters": { "color": 1052742, "envMap": "stone5", "opacity": 0.25, "transparent": true }
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
		},
        "mirea_ground": {
			"url": "data/hd_mirea.jpg",
			"anisotropy": 4
		},
        "stone1": {
			"url": "data/102.png",
			"anisotropy": 4
		},
        "stone2": {
			"url": "data/102.png",
			"anisotropy": 4
		},
        "stone3": {
			"url": "data/102.png",
			"anisotropy": 4
		},
        "stone4": {
			"url": "data/102.png",
			"anisotropy": 4
		},
        "stone5": {
			"url": "data/102.png",
			"anisotropy": 4
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
		},
		"cube1": {
			"type"  : "cube",
			"width" : 5,
			"height": 5,
			"depth" : 5,
			"widthSegments"  : 1,
			"heightSegments" : 1,
			"depthSegments"  : 1
		},
		"plane": {
			"type"   : "plane",
			"width"  : 585,
			"height" : 434,
			"widthSegments"  : 50,
			"heightSegments" : 50
		}
	},	
		
	"fogs":	{
		"basic": {
			"type": "linear",
			"color": [0,0,0],
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
