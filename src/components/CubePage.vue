<template>
	<div class="container-box">
		<div id="background"></div>
	</div>
</template>


<script>
import * as THREE from 'three'
import * as OrbitControls from 'three-orbitcontrols'
import store from '../store'


export default {
	name: 'CubePage',
	components: {

	},
	data() {
		return {

		}
	},
	mounted() {
		var scene = new THREE.Scene();//добавляємо сцену розміщення об'єкту
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		var renderer = new THREE.WebGLRenderer();//взаємодія з WebGL API
		renderer.setSize( window.innerWidth, window.innerHeight );//рендеринг розмірів, продукування елементу

		var controls = new THREE.OrbitControls( camera, renderer.domElement );//підключаємо обертання елементу вручну

		document.getElementById("background").appendChild(renderer.domElement);//вставляємо в DOM

		//camera.position.set( 1, 1, 1 ); ???
		controls.update();



		//var geometry = new THREE.BoxGeometry( 1, 2, 1 );//визначення значень по осях x,y,z
		var geometry = new THREE.SphereGeometry( 2, 20, 20 );//створюємо сферу
		var material = new THREE.MeshBasicMaterial( { 
			color: '#433F81',
			wireframe: true,
			// widthSegments: 10, 
			// heightSegments: 10,
			} );//вказуємо значення для сітки елементу, тобто його стилізація

		var cube = new THREE.Mesh( geometry, material );//поміщаємо значення координат та стилів в сітку, де буде знаходитися наш об'єкт
		scene.add( cube );//передаємо виконаний елемент в сцену, для відображення


		camera.position.z = 10;//віддаляє або приближає об'єкт, свого роду масштабування
		camera.position.x = 0;//зміщення по осі х
		camera.position.y = 0;//зміщення по осі y




		//анімуємо об'єкт
		var animate = function () {
			requestAnimationFrame( animate );

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			//cube.rotation.z += 0.01;

			renderer.render( scene, camera );
		};

		animate();


	}
}	
</script>






