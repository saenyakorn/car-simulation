/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/track.glb --types
*/
import { useEffect } from 'react'

import { useGLTF, useTexture } from '@react-three/drei'

import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

import { ColliderBox } from './ColliderBox'

type GLTFResult = GLTF & {
  nodes: {
    ['Street003_-_applied_transform']: THREE.Mesh
  }
}

const scale = 6

function scalarMultiply(
  [x, y, z]: [x: number, y: number, z: number],
  scalar: number
): [x: number, y: number, z: number] {
  return [x * scalar, y * scalar, z * scalar]
}

export function Track() {
  const { nodes } = useGLTF('/models/track.glb') as GLTFResult
  const colorMap = useTexture('/textures/track.png')

  useEffect(() => {
    colorMap.anisotropy = 16
  }, [colorMap])

  return (
    <>
      <mesh geometry={nodes['Street003_-_applied_transform'].geometry} scale={scale}>
        <meshStandardMaterial toneMapped={false} map={colorMap} />
      </mesh>

      {/* trees */}
      <ColliderBox
        position={scalarMultiply([1.75, 0, 0.5], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([2.5, 0, -1.4], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([0.6, 0, -3.8], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-1.95, 0, -5.18], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-5.55, 0, -3.05], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.4, 0, -1.77], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-7.03, 0, -0.76], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.75, 0, 2.73], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-3.05, 0, 3.4], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-0.83, 0, 3.2], scale)}
        scale={scalarMultiply([0.3, 1, 0.3], scale)}
      />

      {/* arches */}
      <ColliderBox
        position={scalarMultiply([-1.85, 0, 0.385], scale)}
        scale={scalarMultiply([0.05, 1, 0.13], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-1.85, 0, -0.385], scale)}
        scale={scalarMultiply([0.05, 1, 0.13], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-1.85, 0.42, 0], scale)}
        scale={scalarMultiply([0.05, 0.13, 0.9], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-2.28, 0, 0.385], scale)}
        scale={scalarMultiply([0.05, 1, 0.13], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-2.28, 0, -0.385], scale)}
        scale={scalarMultiply([0.05, 1, 0.13], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-2.28, 0.42, 0], scale)}
        scale={scalarMultiply([0.05, 0.13, 0.9], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.39, 0, 1.125], scale)}
        scale={scalarMultiply([0.13, 1, 0.13], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.39, 0, 1.9], scale)}
        scale={scalarMultiply([0.13, 1, 0.13], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.39, 0.42, 1.5125], scale)}
        scale={scalarMultiply([0.13, 0.13, 0.9], scale)}
      />

      {/* pavillions */}
      <ColliderBox
        position={scalarMultiply([-2.86, 0, -0.9], scale)}
        scale={scalarMultiply([0.35, 1, 0.35], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-3.33, 0, -0.9], scale)}
        scale={scalarMultiply([0.35, 1, 0.35], scale)}
      />
      <ColliderBox
        position={scalarMultiply([0.41, 0, 2], scale)}
        scale={scalarMultiply([0.35, 1, 0.35], scale)}
      />

      {/* stand */}
      <ColliderBox
        position={scalarMultiply([-2.3, 0, -2.76], scale)}
        scale={scalarMultiply([1.37, 1, 1.09], scale)}
      />

      {/* racing boards */}
      <ColliderBox
        position={scalarMultiply([-3.08, 0, 0.89], scale)}
        scale={scalarMultiply([0.36, 0.33, 0.03], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-2.53, 0, 0.89], scale)}
        scale={scalarMultiply([0.36, 0.33, 0.03], scale)}
      />

      {/* turn signs */}
      <ColliderBox
        position={scalarMultiply([-4.53, 0, -0.65], scale)}
        scale={scalarMultiply([0.1, 0.5, 0.1], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.15, 0, -0.67], scale)}
        scale={scalarMultiply([0.1, 0.5, 0.1], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-4.9, 0, -0.58], scale)}
        scale={scalarMultiply([0.1, 0.5, 0.1], scale)}
      />
      <ColliderBox
        position={scalarMultiply([-0.3, 0, 1], scale)}
        scale={scalarMultiply([0.1, 0.5, 0.1], scale)}
      />
    </>
  )
}

useGLTF.preload('/models/track.glb')
