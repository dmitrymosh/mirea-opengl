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

function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 200000 );
    camera.position.x = -10;
    camera.position.z = 0;
    camera.position.y = 10;                 
    
    
    // scene
    
    
    scene = new THREE.Scene();
    camera.lookAt( scene.position );
    //scene.fog = new THREE.Fog( 0xffffff, 30, 50 );
    
	controls = new THREE.EditorControls( camera );
    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff );
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    
    var ambient = new THREE.AmbientLight( 0x707070 );
    scene.add( ambient );

    var directionalLight = new THREE.DirectionalLight( 0xffeedd );
    directionalLight.position.set( 100, 100, 100 );
    scene.add( directionalLight );

    ray = new THREE.Raycaster();
    ray.ray.direction.set( 0, -1, 0 );

    // model
    var maxAnisotropy = renderer.getMaxAnisotropy();
    //var texture1 = THREE.ImageUtils.loadTexture( "./Stone.1.jpg" );
    
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    var texture = new THREE.Texture();
    var loader = new THREE.ImageLoader( manager );
    loader.load( './data/102.png', function ( image ) {

        texture.image = image;
        texture.needsUpdate = true;

    } );
    texture.anisotropy = maxAnisotropy;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 0.01, 0.01 );
    
    var texture1 = new THREE.Texture();
    loader.load( './data/Finishes.Flooring.Wood.Parquet.1.jpg', function ( image ) {

        texture1.image = image;
        texture1.needsUpdate = true;

    } );
    texture1.anisotropy = maxAnisotropy;
    texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
    texture1.repeat.set( 0.005, 0.005 );
    var PI2 = Math.PI * 2;
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

	} ),

	mesh = new THREE.Mesh( new THREE.BoxGeometry( 1000, 1000, 1000 ), material );
	mesh.position.y = 10;
	scene.add( mesh );
    
    /*
    loader.load( 'data/BAL2.obj', 'data/BAL2.mtl', function ( object ) {
        //var str = "A0_1_floor_1_f000".replace(/_/g,".");
        / *
        При двойном щелчке на здании
        1. Приблизить
        2. Спрятать здание и поставить вместо него этажи (крыша не активна) 
        3. Остальные здания остаются видимыми
        При двойном щелчке на этаже
        1. Спрятать всё
        2. показать только план текущего этажа
        3. активны только полупрозрачные комнаты
        * /
        var RE = /([\w\d]+)\.?/g;
        var level1 = /([\w\d]+)\.([\w\d]+)/;
        var level2 = /([\w\d]+)\.([\w\d]+)\.([\w\d]+)/;
        var level3 = /([\w\d]+)\.([\w\d]+)\.([\w\d]+)\.([\w\d]+)/;
        var level4 = /([\w\d]+)\.([\w\d]+)\.([\w\d]+)\.([\w\d]+)\.([\w\d]+)/;

        var tmp_obj = [];
        for(var i = 0; i < 4; i++){
            tmp_obj[i] = [];
        }
        //return;
        var k = object.children.length;
        for(var i = 0; i < k; i++){
            if ( object.children[i] instanceof THREE.Mesh ) {                            
                //object.children[i].visible = false;
                var name = object.children[i].name.replace(/_/g,".");
                object.children[i].name = name;
                if(/building/.test(name)){
                    object.children[i].material = new THREE.MeshPhongMaterial( { map: texture, color: 0xFFFFFF, ambient: 0xFFFFFF} );
                } else if(/roof/.test(name)){
                    object.children[i].material = new THREE.MeshPhongMaterial( { map: texture, color: 0xFFFFFF, ambient: 0xFFFFFF} );
                } else if(/level/.test(name)){
                    object.children[i].material = new THREE.MeshPhongMaterial( { map: texture, color: 0xFFFFFF, ambient: 0xFFFFFF} );
                } else {
                    object.children[i].material = new THREE.MeshPhongMaterial( { map: texture, color: 0xFFFFFF, ambient: 0xFFFFFF} );
                }
                if(level4.test(name)){
                    tmp_obj[3].push(object.children[i]);
                } else if(level3.test(name)){
                    tmp_obj[2].push(object.children[i]);
                } else if(level2.test(name)){
                    tmp_obj[1].push(object.children[i]);
                } else if(level1.test(name)){
                    tmp_obj[0].push(object.children[i]);
                }
                scene.add( object.children[i] );
                k = object.children.length;
                i--;
            }
        }
        
        / *
        var k = object.children.length;
        for(var i = 0; i < k; i++){
            if ( object.children[i] instanceof THREE.Mesh ) {
                if(/floors|roof/.test(object.children[i].name)){
                    object.children[i].material = new THREE.MeshPhongMaterial( { map: texture, color: 0xFFFFFF, ambient: 0xFFFFFF, opacity: 0.5 } );
                    object.children[i].visible = false;
                    objects.push ( object.children[i] );
                    scene.add( object.children[i] );
                    k = object.children.length;
                    i--;
                }
            }

        }
        * /
        /*
        for(var i = 0; i <  tmp_obj[0].length; i++){
            tmp_obj[0][i].visible = true;
            scene.add( tmp_obj[0][i] );
        }
        * /
    } ); */
	var regexp = /B([\d]+)L([\d]+)/; //T([\d]+)N([\d]+)/;
	var loader = new THREE.OBJMTLLoader();
	//var loader = new THREE.OBJLoader();
    loader.load( 'data/mirea_hd.obj', 'data/mirea_hd.mtl', function ( object ) {
	//loader.load( 'data/mirea_hd.obj', function ( object ) {
	
        object.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {
				var result = regexp.exec(child.name);
				if(result){
					child.userData.building = result[1];
					child.userData.level = result[2];
					child.userData.type = result[3];
					child.userData.number = result[4];
					//child.visible = false;
				} else {
					child.visible = true;
				}               
				
            }

        } );

        //object.position.x = 0;
		//var k = 
		object.castShadow = true;
		var vector = new THREE.Vector3(0,0,0);
		object.rotation.x = -PI_2;
        scene.add( object );

    });

    //controls = new THREE.PointerLockControls( camera );
    //controls = new THREE.OrbitControls( camera );
    //controls.addEventListener( 'change', render );
    //scene.add( controls.getObject() );

    //
    
   
    projector = new THREE.Projector();
    raycaster = new THREE.Raycaster();
    
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    //container.appendChild( stats.domElement );
    document.body.appendChild( renderer.domElement );
    //document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    //

    window.addEventListener( 'resize', onWindowResize, false );
    document.addEventListener( 'dblclick', onMouseDblClick, false );
	createMenu();	
	//hideMenu();
}
function hideMenu(){
	
	menu_bottom.hidden = ! menu_bottom.hidden;
	menu_left.hidden = ! menu_left.hidden;
}
function createMenu() {
	
	menu_bottom = document.getElementById( "menu_bottom" );
	for ( var m in buildings ) {

		var button = document.createElement( 'button' );
		button.innerHTML = m;
		menu_bottom.appendChild( button );

		//var url = "models/molecules/" +  MOLECULES[ m ];

		//button.addEventListener( 'click', generateButtonCallback( url ), false );

	}
	menu_left = document.getElementById( "menu_left" );
	for ( var m in levels ) {

		var button = document.createElement( 'button' );
		button.innerHTML = m;
		menu_left.appendChild( button );

		var url = levels[m];
 
		button.addEventListener( 'click', onClickLeftMenu, false );
		//button.onclick = "showLevel(" + url + " )"; 

	}
	menu_right = document.getElementById( "menu_right" );
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

		if ( child instanceof THREE.Mesh ){
			if(child.userData.level !== undefined) {
				if(child.userData.level <= level){
					child.visible = true;
				} else {
					child.visible = false;
				}
			}
		}
	} );
}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    //controls.handleResize();

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

