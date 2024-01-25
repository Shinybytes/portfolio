import './threejs1.scss';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Threejs1 = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  const torus = useRef();

  useEffect(() => {
    // Set up renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Create a torus
    const geometry1 = new THREE.TorusGeometry(10, 3, 50, 800);
    const material1 = new THREE.MeshStandardMaterial({ color: 0x0F00FF });
    const torusMesh = new THREE.Mesh(geometry1, material1);
    torus.current = torusMesh;
    scene.add(torusMesh);


    const geometry2 = new THREE.BoxGeometry(3, 3, 3);
    const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube1 = new THREE.Mesh(geometry2, material2);
    cube1.position.set(-1, 5, -2);
    scene.add(cube1);


    const geometry3 = new THREE.BoxGeometry(3, 3, 3);
    const cube2 = new THREE.Mesh(geometry3, material2);
    cube2.position.set(-3, -2, -2);
    scene.add(cube2);

    const geometry4 = new THREE.BoxGeometry(3, 3, 3);
    const cube3 = new THREE.Mesh(geometry4, material2);
    cube3.position.set(2.5, 2, -2);
    scene.add(cube3);


    var pointLight3 = new THREE.PointLight(0xffa500, 3000,50,2); // Orange color
    pointLight3.position.set(2, -1, 3);
    scene.add(pointLight3);



    // Set up camera position
    camera.position.set(-10,8,6);

    // Set up OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(10, 10, 15);
    pointLight.intensity = 100;
    pointLight.lookAt(torusMesh.position);

    const ambientLight = new THREE.AmbientLight(0xffffff);

    const pointLight2 = new THREE.PointLight(0xffffff);
    pointLight2.position.set(-20, 15, -15);
    pointLight2.intensity = 100;
    pointLight2.lookAt(torusMesh.position);

    // Helpers
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const lightHelper2 = new THREE.PointLightHelper(pointLight2);

    // Add elements to the scene
    scene.add(ambientLight, pointLight, pointLight2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the torus
      torusMesh.rotation.x += 0.01;
      torusMesh.rotation.y += 0.005;

      cube1.rotation.x += 0.01;
      cube1.rotation.y += 0.01;
      
      cube2.rotation.x -= 0.03;
      cube2.rotation.y += 0.006;
 
      
      cube3.rotation.x += 0.02;
      cube3.rotation.y -= 0.005;
      
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Listen for the window resize event
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.remove();
    };
  }, []);

  return <div id="scene-container" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />;
};

export default Threejs1;

