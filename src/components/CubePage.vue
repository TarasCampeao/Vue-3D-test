<template>
	<div class="container-box">
		<h1>Test 3D</h1>
		<div id="background"></div>
	</div>
</template>


<script>
import * as THREE from 'three'
import * as OrbitControls from 'three-orbitcontrols'
import store from '../store'
import wall from '../assets/images/wall-1.jpeg'


export default {
	name: 'CubePage',
	components: {

	},
	data() {
		return {

		}
	},
	mounted() {
		var scene = new THREE.Scene();//adde scene for object
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		var renderer = new THREE.WebGLRenderer();//interaction with WebGL API
		renderer.setSize( window.innerWidth, window.innerHeight );//render dimension, production element
		var controls = new THREE.OrbitControls( camera, renderer.domElement );//added orbit controls
		document.getElementById("background").appendChild(renderer.domElement);//insert into DOM

		controls.update();



		var geometry = new THREE.BoxGeometry( 1, 2, 1 );//definition valur for x,y,z
		//var geometry = new THREE.SphereGeometry( 2, 26, 26 );//create sphere
		var material = new THREE.MeshPhongMaterial( { 
			color: '#433F81',
			wireframe: true,
			// widthSegments: 10, 
			// heightSegments: 10,
			} );//value for mesh element, styles

		var cube = new THREE.Mesh( geometry, material );//we put the values of coordinates and styles in the mesh
		cube.position.x = 2;
		scene.add( cube );//added element to scene




		var cubeMaterials = [
			new THREE.MeshLambertMaterial ( { map: new THREE.TextureLoader().load(wall), side: THREE.DoubleSide } ), //right side
			new THREE.MeshPhongMaterial ( { map: new THREE.TextureLoader().load(wall), side: THREE.DoubleSide } ), //left side
			new THREE.MeshPhongMaterial ( { map: new THREE.TextureLoader().load(wall), side: THREE.DoubleSide } ), //left side
			new THREE.MeshPhongMaterial ( { map: new THREE.TextureLoader().load(wall), side: THREE.DoubleSide } ), //left side
			new THREE.MeshPhongMaterial ( { map: new THREE.TextureLoader().load(wall), side: THREE.DoubleSide } ), //left side
			new THREE.MeshPhongMaterial ( { map: new THREE.TextureLoader().load(wall), side: THREE.DoubleSide } ), //left side

		]
		//create a material, color or image texture
		var material = new THREE.MeshFaceMaterial( cubeMaterials );
		var cube1 = new THREE.Mesh( geometry, material );
		scene.add ( cube1 );


		//camera.position.z = 3;







		//added lights, start
		var light = new THREE.AmbientLight( '#ffffff', 1 );
		//light.position.set( 50, 50, 50 );
		scene.add( light );
		//added lights, end




		camera.position.z = 5;//value for z, sacale object
		camera.position.x = 0;//value for х
		camera.position.y = 0;//value for y




		//animation for oblect
		var animate = function () {
			requestAnimationFrame( animate );

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			cube.rotation.z += 0.01;

			renderer.render( scene, camera );
		};

		animate();


	}
}	
</script>






