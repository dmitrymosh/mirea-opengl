{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {	
        	
		"mirea" : {
			"position" : [ 0, 0, 0, -40, 0, 77 ],
			"rotation" : [ -1.57, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],	
			"visible"  : true,
			"children" : {				
				"ground" : {
					"type": "obj",
					"url" : "data/ground.obj",
					"material" : "mirea_ground",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],	
					"visible"  : true			
				},	
				"trees" : {
					"type": "obj",
					"url" : "data/ground_trees.obj",
					"material" : "green",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],	
					"visible"  : false			
				},					
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building1/Level1/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building1/Level1/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building1/Level1/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building1/Level1/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building1/Level1/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building1/Level1/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B1L2" : {
							"position" : [ 0, 0, 4 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building1/Level2/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building1/Level2/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building1/Level2/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building1/Level2/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building1/Level2/floors.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building1/Level2/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"grounds" : {
									"type": "obj",
									"url" : "data/Building1/Level2/grounds.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}								
							}
						},
						"B1L3" : {
							"position" : [ 0, 0, 8 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building1/Level3/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building1/Level3/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building1/Level3/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building1/Level3/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building1/Level3/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building1/Level3/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building1/Level3/roofs.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B1L4" : {
							"position" : [ 0, 0, 12 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building1/Level4/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building1/Level4/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building1/Level4/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building1/Level4/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building1/Level4/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building1/Level4/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building1/Level4/roofs.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B1L5" : {
							"position" : [ 0, 0, 16 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 6
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building1/Level5/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building1/Level5/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building1/Level5/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building1/Level5/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building1/Level5/roofs.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building2/Level1/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building2/Level1/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building2/Level1/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building2/Level1/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building2/Level1/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building2/Level1/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B2L2" : {
							"position" : [ 0, 0, 4 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building2/Level2/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building2/Level2/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building2/Level2/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building2/Level2/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building2/Level2/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building2/Level2/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B2L3" : {
							"position" : [ 0, 0, 8 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building2/Level3/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building2/Level3/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building2/Level3/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building2/Level3/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building2/Level3/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building2/Level3/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B2L4" : {
							"position" : [ 0, 0, 12 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building2/Level4/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building2/Level4/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building2/Level4/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building2/Level4/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building2/Level4/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building2/Level4/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B2L5" : {
							"position" : [ 0, 0, 16 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building2/Level5/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building2/Level5/roofs.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building2/Level5/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building3/Level1/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building3/Level1/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building3/Level1/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building3/Level1/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building3/Level1/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building3/Level1/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B3L2" : {
							"position" : [ 0, 0, 4 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 2
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building3/Level2/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building3/Level2/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building3/Level2/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building3/Level2/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building3/Level2/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building3/Level2/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B3L3" : {
							"position" : [ 0, 0, 8 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 3
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building3/Level3/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building3/Level3/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building3/Level3/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building3/Level3/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building3/Level3/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building3/Level3/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B3L4" : {
							"position" : [ 0, 0, 12 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 4
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building3/Level4/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building3/Level4/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building3/Level4/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building3/Level4/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building3/Level4/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building3/Level4/windows.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								}
								
							}
						},
						"B3L5" : {
							"position" : [ 0, 0, 16 ],
							"rotation" : [ 0, 0, 0 ],
							"scale"	   : [ 1, 1, 1 ],
							"visible"  : true,	
							"userData" : {
								"level" : 5
							},
							"children" : {
								"wall" : {
									"type": "obj",
									"url" : "data/Building3/Level5/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building3/Level5/roofs.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building3/Level5/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building4/Level1/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building4/Level1/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building4/Level1/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building4/Level1/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building4/Level1/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building4/Level1/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building4/Level2/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building4/Level2/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building4/Level2/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building4/Level2/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building4/Level2/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building4/Level2/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building4/Level3/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building4/Level3/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building4/Level3/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building4/Level3/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building4/Level3/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building4/Level3/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building4/Level4/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building4/Level4/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building4/Level4/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building4/Level4/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building4/Level4/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building4/Level4/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building4/Level5/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building4/Level5/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building4/Level5/roofs.obj",
									"material" : "asfalt",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building5/Level1/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building5/Level1/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building5/Level1/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building5/Level1/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building5/Level1/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building5/Level1/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building5/Level2/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building5/Level2/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building5/Level2/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building5/Level2/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building5/Level2/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building5/Level2/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building5/Level3/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building5/Level3/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building5/Level3/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building5/Level3/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building5/Level3/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building5/Level3/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building5/Level4/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"glass" : {
									"type": "obj",
									"url" : "data/Building5/Level4/glass.obj",
									"material" : "glass",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"stairs" : {
									"type": "obj",
									"url" : "data/Building5/Level4/stairs.obj",
									"material" : "stone1",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building5/Level4/doors.obj",
									"material" : "basic_brown",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"floors" : {
									"type": "obj",
									"url" : "data/Building5/Level4/floors.obj",
									"material" : "basic_white",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"windows" : {
									"type": "obj",
									"url" : "data/Building5/Level4/windows.obj",
									"material" : "basic_white",
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
								"wall" : {
									"type": "obj",
									"url" : "data/Building5/Level5/walls.obj",
									"material" : "rakuska",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"roofs" : {
									"type": "obj",
									"url" : "data/Building5/Level5/roofs.obj",
									"material" : "asfalt",
									"position" : [ 0, 0, 0 ],
									"rotation" : [ 0, 0, 0 ],
									"scale"	   : [ 1, 1, 1 ],
									"visible"  : true	
								},
								"doors" : {
									"type": "obj",
									"url" : "data/Building5/Level5/doors.obj",
									"material" : "basic_brown",
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
									"material" : "rakuska",
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
									"material" : "asfalt",
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
			"type"	  : "AmbientLight",
			"color"   : 6710886,
			"intensity"	 : 1.0
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
			"position": [ -300, 200, -100 ], 
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
			"type": "MeshLambertMaterial",
			"parameters": { "color": 16777215 }
		},
		"basic_black": {
			"type": "MeshLambertMaterial",
			"parameters": { "color": 6908265 }
		},
		"basic_brown": {
			"type": "MeshLambertMaterial",
			"parameters": { "color": 10824234 }
		},
		"green": {
			"type": "MeshLambertMaterial",
			"parameters": { "color": 3887672 }
		},
		"basic_refraction": {
			"type": "MeshLambertMaterial",
			"parameters": { "color": 16777215, "envMap": "cube_refraction", "refractionRatio": 0.5 }
		},
		"mirea_ground": {
			"type": "MeshLambertMaterial",
			"parameters": { "color": 16777215, "map": "mirea_ground" }
		},
		"stone1": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "stone1", "bumpMap": "stone1", "bumpScale": -0.1, "wrap" : "repeat"}
		},
		"stone2": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "stone2", "bumpMap": "stone2", "bumpScale": -0.1, "wrap" : "repeat" }
		},
		"stone3": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "stone3", "bumpMap": "stone3", "bumpScale": -0.1, "wrap" : "repeat" }
		},
		"stone4": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "stone4", "bumpMap": "stone4", "bumpScale": -0.1, "wrap" : "repeat" }
		},
		"stone5": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "stone5", "bumpMap": "stone5", "bumpScale": -0.1, "wrap" : "repeat" }
		},
		"rakuska": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "rakuska", "bumpMap": "rakuska", "bumpScale": -0.1, "wrap" : "repeat" }
		},
		"glass": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 1052742, "opacity": 0.25, "transparent": true }
		},
		"asfalt": {
			"type": "MeshPhongMaterial",
			"parameters": { "color": 16777215, "map": "asfalt", "bumpMap": "asfalt", "bumpScale": -0.1, "wrap" : "repeat" }
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
			"anisotropy": 4,
			"repeat" : [ 4, 4 ]			
		},
        "stone2": {
			"url": "data/102.png",
			"repeat" : [ 16, 16 ],
			"anisotropy": 4
			
		},
        "stone3": {
			"url": "data/102.png",
			"repeat" : [ 16, 16 ],
			"anisotropy": 4
		},
        "stone4": {
			"url": "data/102.png",
			"repeat" : [ 16, 16 ],
			"anisotropy": 4
		},
        "stone5": {
			"url": "data/102.png",
			"repeat" : [ 16, 16 ],
			"anisotropy": 4
		},
        "rakuska": {
			"url": "data/22rakushechnik.jpg",
			"repeat" : [ 16, 16 ],
			"anisotropy": 4
		},
        "asfalt": {
			"url": "data/asfalt.jpg",
			"repeat" : [ 8, 32 ],
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
