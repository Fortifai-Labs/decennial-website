import { useEffect, useRef } from 'react';
import * as THREE from 'three';
interface TexturedGlobeProps {
  className?: string;
  /** URL to the texture image to wrap around the globe */
  textureUrl: string;
  /** Enable auto-rotation. Default true */
  autoRotate?: boolean;
  /** Auto-rotation speed. Default 0.002 */
  autoRotateSpeed?: number;
  /** Initial X rotation in radians. Default 0.1 */
  initialRotationX?: number;
  /** Initial Y rotation in radians. Default -0.5 */
  initialRotationY?: number;
  /** Earth's axial tilt in degrees. Default 0 (set to 23.5 for realistic tilt) */
  axialTilt?: number;
  /** Background color of the sphere (visible where texture is transparent). Default transparent */
  backgroundColor?: string;
  /** Ambient light intensity. Default 0.6 */
  ambientLightIntensity?: number;
  /** Directional light intensity. Default 0.8 */
  directionalLightIntensity?: number;
}

const TexturedGlobe: React.FC<TexturedGlobeProps> = ({
  className,
  textureUrl,
  autoRotate = true,
  autoRotateSpeed = 0.002,
  initialRotationX = 0.1,
  initialRotationY = -0.5,
  axialTilt = 0,
  backgroundColor,
  ambientLightIntensity = 0.6,
  directionalLightIntensity = 0.8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const fitDistance = Math.max(280, 280 * (1 / Math.min(width / height, 1)));
    camera.position.z = fitDistance;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Globe group for overall positioning
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Tilt group for axial tilt
    const tiltGroup = new THREE.Group();
    tiltGroup.rotation.z = axialTilt * (Math.PI / 180);
    globeGroup.add(tiltGroup);

    // Rotation group for spin animation
    const rotationGroup = new THREE.Group();
    tiltGroup.add(rotationGroup);

    const GLOBE_RADIUS = 100;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, directionalLightIntensity);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Load texture and create globe
    const textureLoader = new THREE.TextureLoader();
    
    textureLoader.load(
      textureUrl,
      (texture) => {
        // Configure texture for proper mapping
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.colorSpace = THREE.SRGBColorSpace;
        
        // Create sphere geometry
        const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
        
        // Create material with the texture
        const sphereMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          side: THREE.FrontSide,
          roughness: 0.8,
          metalness: 0.1,
        });

        // If background color is specified, add a slightly smaller solid sphere behind
        if (backgroundColor) {
          const bgGeometry = new THREE.SphereGeometry(GLOBE_RADIUS - 0.5, 64, 64);
          const bgMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(backgroundColor),
            roughness: 1,
            metalness: 0,
          });
          const bgSphere = new THREE.Mesh(bgGeometry, bgMaterial);
          rotationGroup.add(bgSphere);
        }

        const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
        rotationGroup.add(globe);
      },
      undefined,
      (error: any) => {
        console.error('Error loading texture:', error);
        
        // Fallback: create a simple colored sphere
        const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
        const sphereMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.8,
          metalness: 0.1,
        });
        const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
        rotationGroup.add(globe);
      }
    );

    // Set initial rotation
    globeGroup.rotation.x = initialRotationX;
    globeGroup.rotation.y = initialRotationY;

    // Interaction state
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    // Mouse events
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      container.style.cursor = 'grabbing';
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        globeGroup.rotation.y += (e.clientX - prevX) * 0.005;
        globeGroup.rotation.x += (e.clientY - prevY) * 0.005;
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        globeGroup.rotation.y += (e.touches[0].clientX - prevX) * 0.005;
        globeGroup.rotation.x += (e.touches[0].clientY - prevY) * 0.005;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      }
    };

    // Add event listeners
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        rotationGroup.rotation.y += autoRotateSpeed;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.position.z = Math.max(280, 280 * (1 / Math.min(w / h, 1)));
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    textureUrl,
    autoRotate,
    autoRotateSpeed,
    initialRotationX,
    initialRotationY,
    axialTilt,
    backgroundColor,
    ambientLightIntensity,
    directionalLightIntensity,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', minHeight: '400px', cursor: 'grab' }}
    />
  );
};

export default TexturedGlobe;