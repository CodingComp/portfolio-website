import React, { useState, useEffect, useRef } from 'react';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function ThreeScene(props) {
    const [scene,       setScene] = useState(new THREE.Scene());
    const [camera,     setCamera] = useState(new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ));
    const [renderer, setRenderer] = useState(new THREE.WebGLRenderer({alpha: true, antialias: true}));

    const initializeScene = useRef(true);
    const RenderContainerRef = useRef();

    useEffect(() => {
        if (initializeScene.current) 
        {
            SetupScene();
            PlaceObjects();
            animate();

            initializeScene.current = false;
        }
    });

    function SetupScene() {
        renderer.shadowMap.enabled = true;

        renderer.setSize( window.innerWidth, window.innerHeight );
        RenderContainerRef.current.appendChild(renderer.domElement);
        
        camera.position.set(0,2,5);
        
        if (props.debugMode) {
            const axesHelper = new THREE.AxesHelper(5);
            scene.add(axesHelper);
    
            const gridHelper = new THREE.GridHelper(30);
            scene.add(gridHelper);

            const orbit = new OrbitControls(camera, renderer.domElement);
            orbit.update();
        }         
    }

    function PlaceObjects() {
        // Adds a Cube
        const geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
        const material = new THREE.MeshStandardMaterial( { color: 0x03c6fc } );
        const cube = new THREE.Mesh( geometry, material );
        cube.name = "Cube";
        cube.position.set(3,2,0);
        cube.castShadow = true;
        scene.add(cube);

        // Adds a Plane
        const planeGeometry = new THREE.PlaneGeometry(200,30);
        const planeMaterial = new THREE.MeshStandardMaterial({
            color : 0x2f2f2f,
            side: THREE.DoubleSide
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.y = -0.01;
        plane.receiveShadow = true;
        scene.add(plane);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.set(-30,50,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        if (props.debugMode) {
            const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
            scene.add(dLightHelper);
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        const cube = scene.getObjectByName("Cube");
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    return (
        <div ref={RenderContainerRef} className='RenderView'></div>
    );
}

export default ThreeScene;