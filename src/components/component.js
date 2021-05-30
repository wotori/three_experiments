import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'blue' })
export const mesh2 = new THREE.Mesh(geometry, material)
mesh2.position.y = 2

 