function onProgress(){
	
}

function onError(){
	
}

function LoadScene( scene_definition ){
	
	
	Load_sc ( scene, scene_definition );
	
}

function Load_sc ( scene, scene_definition){
	var object;
	var loaded;
	var self = this;
	if (("url" in scene_definition) && ("type" in scene_definition)) {
		// загрузка объекта
		switch (scene_definition.type){
			"objmtl" : {
				var loader = new THREE.OBJMTLLoader();
				loader.load( scene_definition.url, scene_definition.material, function ( object ) {
					
					self.object = object;
				}, onProgress, onError );
			},			
			"group" : {
				object = new THREE.Group();
			},			
		}
	} else {		
		object = new THREE.Object3D();
	}
	if ("position" in scene_definition){
		object.position.x = scene_definition.position[0];
		object.position.y = scene_definition.position[1];
		object.position.z = scene_definition.position[2];
	}
	if ("rotation" in scene_definition){
		object.rotation.x = scene_definition.rotation[0];
		object.rotation.y = scene_definition.rotation[1];
		object.rotation.z = scene_definition.rotation[2];
	}
	if ("scale" in scene_definition){
		object.scale.x = scene_definition.scale[0];
		object.scale.y = scene_definition.scale[1];
		object.scale.z = scene_definition.scale[2];
	}
	if ("visible" in scene_definition){
		object.visible = scene_definition.visible;
	}	
	if ("userData" in scene_definition){
		object.userData = scene_definition.userData;
	}
	if ("children" in scene_definition){
		for (key in scene_definition.children) {
			Load_sc ( object, scene_definition.children[key] );
		}
	}
	scene.add( object );
}


var reg = /B([\d]+)L([\d]+)T([\w])([\d]+)/;
