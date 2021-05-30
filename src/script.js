import { mesh2 } from  './components/component'

import './style.css'
import gsap from 'gsap'
import * as THREE from 'three'
import isWindows from 'is-windows'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
console.log(OrbitControls)

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add( mesh )


scene.add( mesh2 )

// size
const size = {
    width: 800,
    height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
scene.add(camera)

// renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height)


// clock
const clock = new THREE.Clock()

gsap.to(mesh.position, {duration: 1, delay : 1,  x : 2})
gsap.to(mesh.position, {duration: 1, delay : 2,  x : 0})


// controlls
const controlls = new OrbitControls(camera, canvas)
controlls.enableDamping = true

// animation
const tick = () => {

    // camera
    controlls.update()

    // render
    window.requestAnimationFrame(tick)
    renderer.render(scene, camera)
}

tick()