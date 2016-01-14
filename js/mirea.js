var container, stats, projector, raycaster , INTERSECTED, particleMaterial;
var objects = [];

var camera, scene, renderer, controls, theta = 6;
var radius = 5000;
var time = Date.now();

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var mouse = new THREE.Vector2();
var PI_2 = Math.PI / 2;
var menu_bottom, menu_left; 

var SHADOW_MAP_WIDTH = 4096, SHADOW_MAP_HEIGHT = 4096;
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var rotatingObjects = [];
var mixers = [];

//init();
//animate();
var buildings = {
	"Корпус А": 1,
	"Корпус Б": 2,
	"Корпус В": 3,
	"Корпус Г": 4,
	"Корпус Д": 5,
	"Библиотека": 6,
	"Спортзал": 7,
	"Актовый зал": 8,		
};
var levels = {
	"Общий вид": "6",
	"Уровень 5": "5",
	"Уровень 4": "4",
	"Уровень 3": "3",
	"Уровень 2": "2",
	"Уровень 1": "1",			
};
var commands = {
	"Меню":1,		
};	
var callbackProgress = function( progress, result ) {

    var bar = 250,
        total = progress.totalModels + progress.totalTextures,
        loaded = progress.loadedModels + progress.loadedTextures;

    if ( total )
        bar = Math.floor( bar * loaded / total );

    $( "bar" ).style.width = bar + "px";

};

var callbackFinished = function ( result ) {

    loaded = result;

    $( "message" ).style.display = "none";
    $( "progressbar" ).style.display = "none";

    result.scene.traverse( function ( object ) {

        if ( object.userData.rotating === true ) {

            rotatingObjects.push( object );

        }

        if ( object instanceof THREE.Mesh ) {

            if( object.geometry && object.geometry.animations && object.geometry.animations.length > 0 ) {

                var mixer = new THREE.AnimationMixer( object );
                mixer.addAction( new THREE.AnimationAction( object.geometry.animations[0] ) );
                mixers.push( mixer );

            }

        }

    } );

    //

    $( "progress" ).style.display = "none";

    camera = loaded.currentCamera;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
	
	controls = new THREE.EditorControls( camera, renderer.domElement );
	// controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
	// controls.enableDamping = false;
	// controls.dampingFactor = 0.25;
	// controls.enableZoom = true;
	
    scene = loaded.scene;
	scene.add(createSkyBox());
	createMenu();

};
function $( id ) {

    return document.getElementById( id );

}
function init() {

    container = document.createElement( 'div' );
	document.body.appendChild( container );

	var loadScene = createLoadScene();

	camera = loadScene.camera;
	scene = loadScene.scene;

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	renderer.domElement.style.position = "relative";
	container.appendChild( renderer.domElement );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	stats.domElement.style.right = '0px';
	stats.domElement.style.zIndex = 100;
	container.appendChild( stats.domElement );
	

    ray = new THREE.Raycaster();
    ray.ray.direction.set( 0, -1, 0 );
    
    projector = new THREE.Projector();
    raycaster = new THREE.Raycaster();
    
    

    $( "progress" ).style.display = "block";

	THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

	var loader = new THREE.SceneLoader();

	loader.addGeometryHandler( "binary", THREE.BinaryLoader );
	loader.addGeometryHandler( "ctm", THREE.CTMLoader );
	loader.addGeometryHandler( "vtk", THREE.VTKLoader );
	loader.addGeometryHandler( "stl", THREE.STLLoader );

	loader.addHierarchyHandler( "obj", THREE.OBJLoader );
	loader.addHierarchyHandler( "dae", THREE.ColladaLoader );
	loader.addHierarchyHandler( "utf8", THREE.UTF8Loader );

	loader.callbackProgress = callbackProgress;

	loader.load( "scenes/test_scene.js", callbackFinished );

	//

	window.addEventListener( 'resize', onWindowResize, false );
	
	//document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		
	//hideMenu();
        
	//var regexp = /B([\d]+)L([\d]+)/; //T([\d]+)N([\d]+)/;
	//var loader = new THREE.OBJMTLLoader();
	//var loader = new THREE.OBJLoader();
    // loader.load( 'data/mirea_hd.obj', 'data/mirea_hd.mtl', function ( object ) {
	// //loader.load( 'data/mirea_hd.obj', function ( object ) {
	
        // object.traverse( function ( child ) {

			// if ( child instanceof THREE.Mesh ) {
				// var result = regexp.exec(child.name);
				// if(result){
					// child.userData.building = result[1];
					// child.userData.level = result[2];
					// child.userData.type = result[3];
					// child.userData.number = result[4];
					// //child.visible = false;
				// } else {
					// child.visible = true;
				// }               
				// child.castShadow = true;
                // child.receiveShadow = true;
            // }

        // } );

        // //object.position.x = 0;
		// //var k = 
		
		// var vector = new THREE.Vector3(0,0,0);
		// object.rotation.x = -PI_2;
        // scene.add( object );

    // });

    
    //
	
	//hideMenu();
}
function createSkyBox(){
	// Skybox
	var path = "data/skybox/";
	var format = '.jpg';
	var urls = [
		path + 'px' + format, path + 'nx' + format,
		path + 'py' + format, path + 'ny' + format,
		path + 'pz' + format, path + 'nz' + format
	];

	var textureCube = THREE.ImageUtils.loadTextureCube( urls, THREE.CubeRefractionMapping );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube, refractionRatio: 0.5 } );
	var shader = THREE.ShaderLib[ "cube" ];
	shader.uniforms[ "tCube" ].value = textureCube;

	var material = new THREE.ShaderMaterial( {

		fragmentShader: shader.fragmentShader,
		vertexShader: shader.vertexShader,
		uniforms: shader.uniforms,
		depthWrite: false,
		side: THREE.BackSide

	} );
	mesh = new THREE.Mesh( new THREE.BoxGeometry( 1000, 1000, 1000 ), material );
	mesh.position.y = 10;
	return mesh;
}
function createLoadScene() {

    var result = {

        scene:  new THREE.Scene(),
        camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 )

    };

    result.camera.position.z = 100;
    result.scene.add( result.camera );

    var object, geometry, material, light, count = 500, range = 200;

    material = new THREE.MeshLambertMaterial( { color:0xffffff } );
    geometry = new THREE.BoxGeometry( 5, 5, 5 );

    for( var i = 0; i < count; i++ ) {

        object = new THREE.Mesh( geometry, material );

        object.position.x = ( Math.random() - 0.5 ) * range;
        object.position.y = ( Math.random() - 0.5 ) * range;
        object.position.z = ( Math.random() - 0.5 ) * range;

        object.rotation.x = Math.random() * 6;
        object.rotation.y = Math.random() * 6;
        object.rotation.z = Math.random() * 6;

        object.matrixAutoUpdate = false;
        object.updateMatrix();

        result.scene.add( object );

    }

    result.scene.matrixAutoUpdate = false;

    light = new THREE.PointLight( 0xffffff );
    result.scene.add( light );

    light = new THREE.DirectionalLight( 0x111111 );
    light.position.x = 1;
    result.scene.add( light );

    return result;

}
function hideMenu(){
	
	menu_bottom.hidden = ! menu_bottom.hidden;
	menu_left.hidden = ! menu_left.hidden;
}
function createMenu() {
	
	menu_bottom = document.createElement( 'div' );
	document.body.appendChild( menu_bottom );
	menu_bottom.id = "menu_bottom" ;
	for ( var m in buildings ) {

		var button = document.createElement( 'button' );
		button.innerHTML = m;
		menu_bottom.appendChild( button );

		//var url = "models/molecules/" +  MOLECULES[ m ];

		//button.addEventListener( 'click', generateButtonCallback( url ), false );

	}
	menu_left = document.createElement( 'div' );
	document.body.appendChild( menu_left );
	menu_left.id = "menu_left" ;
	
	for ( var m in levels ) {

		var button = document.createElement( 'button' );
		button.innerHTML = m;
		menu_left.appendChild( button );

		var url = levels[m];
 
		button.addEventListener( 'click', onClickLeftMenu, false );
		//button.onclick = "showLevel(" + url + " )"; 

	}
	
	menu_right = document.createElement( 'div' );
	document.body.appendChild( menu_right );
	menu_right.id = "menu_right" ;
	for ( var m in commands ) {

		var button = document.createElement( 'button' );
		button.innerHTML = m;
		menu_right.appendChild( button );

		var url = commands[ m ];

		button.addEventListener( 'click', function ( event ) { hideMenu(); }, false );

	}
}
function onClickLeftMenu( event ) {
	
	m = event.currentTarget.innerHTML;
	var level = levels[m];
	scene.traverse( function ( child ) {

		if(child.userData.level !== undefined) {
			if(child.userData.level <= level){
				child.visible = true;
			} else {
				child.visible = false;
			}
		}
	} );
}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize();

    render();

}

function onDocumentMouseMove( event ) {

    event.preventDefault();

    mouse.x = ( ( event.clientX) / window.innerWidth ) * 2 - 1;
    mouse.y = - ( (event.clientY) / window.innerHeight ) * 2 + 1;
    //mouse.x = ( event.clientX );
    //mouse.y = - ( event.clientY );
    var vector = new THREE.Vector3(  1, mouse.x, mouse.y );
    //projector.unprojectVector( vector, camera );
    //vector.unproject(camera);

    raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

    var intersects = raycaster.intersectObjects( scene.children );
    
    if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex + 0x7F7F7F );
        }
        if(mouse.click){            
            //camera.position = scene.children[10].geometry.boundingSphere.center.clone();            
            //var targetCenter = intersects[ 0 ].object.geometry.boundingSphere.center.clone();
            //var vector = new THREE.Vector3( 10000, 0, 0 );
            //vector.applyAxisAngle(vector,45*Math.PI/180);
            controls.focus(intersects[ 0 ].object, true);
            controls.rotateEx(new THREE.Vector3( 0, 45*Math.PI/180, 0 ));
            mouse.click = false;
        }

    } else {

        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

        INTERSECTED = null;
        if(mouse.click){
            mouse.click = false;
        }
    }
    //render();	
}

function onDocumentMouseDown( event ) {

    event.preventDefault();

    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );

    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    var intersects = raycaster.intersectObjects( objects );

    if ( intersects.length > 0 ) {

        //intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );

        var particle = new THREE.Sprite( particleMaterial );
        particle.position = intersects[ 0 ].point;
        particle.scale.x = particle.scale.y = 16;
        scene.add( particle );

    }

    /*
    // Parse all the faces
    for ( var i in intersects ) {

        intersects[ i ].face.material[ 0 ].color.setHex( Math.random() * 0xffffff | 0x80000000 );

    }
    */
}
function onMouseDblClick( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    if(event.button == 0) 
        mouse.click = true;
}

//

function animate() {

    requestAnimationFrame( animate );
    //controls.update();
	render();	
    stats.update();                
}

function render() {

    //theta += 0.1;

    //camera.position.x = mouse.x;//radius * Math.sin( THREE.Math.degToRad( theta ) );
    //camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    //camera.position.z = mouse.y;//radius * Math.cos( THREE.Math.degToRad( theta ) );
    //camera.lookAt( scene.position );

    // find intersections
    //var mouse = controls.getMouseProjectionOnBall();
    
    
    
    //if(mouse.click){
    //    mouse.click = false;
    //}
    renderer.render( scene, camera );
    
}

/*
B1L2TW

Building 1
Level 2
Type Wall

B1L2TF

Building 1
Level 2
Type Floor

*/

