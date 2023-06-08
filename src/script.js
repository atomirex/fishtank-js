import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

import {
    FaceDetector,
    FaceLandmarker,
    FilesetResolver,
} from "@mediapipe/tasks-vision";

const DEG2RAD = (Math.PI * 2) / 360.0;

class FaceDetectorHeadTracker {
    constructor(videoElement) {
        this.videoElement = videoElement; // Where the camera feed comes from
        this.faceDetector = null;
        this.running = false;
        this.lastVideoTime = -1;

        this.onDetected = null;

        // Starting assumptions for all settings
        this.settings = {
            screenHeightMM: 180,
            interEyeDistanceMM: 100, // Distance between the eyes

            cameraDeviceId: null,
            cameraFov: DEG2RAD * 40,
            cameraAboveScreen: true,
            cameraVerticalAngle: 0.0,
        };
    }

    // This has to be called before starting
    setCameraDeviceId(cameraDeviceId) {
        this.settings.cameraDeviceId = cameraDeviceId;
    }

    setScreenHeightMM(screenHeightMM) {
        this.settings.screenHeightMM = screenHeightMM;
    }

    setInterEyeDistanceMM(interEyeDistanceMM) {
        this.settings.interEyeDistanceMM = interEyeDistanceMM;
    }

    setCameraFov(cameraFov) {
        this.settings.cameraFov = cameraFov;
    }

    setCameraAboveScreen(cameraAboveScreen) {
        this.settings.cameraAboveScreen = cameraAboveScreen;
    }

    async detect() {
        if (!this.running) {
            this.running = true;
            await this.faceDetector.setOptions({ runningMode: "VIDEO" });
        }

        let video = this.videoElement;
    
        let startTimeMs = performance.now();
    
        if (this.mediaStream != null && video.currentTime !== this.lastVideoTime) {
            this.lastVideoTime = video.currentTime;
            const detections = this.faceDetector.detectForVideo(video, startTimeMs).detections;
    
            let found = null;
            for (let d of detections) {
                let confidence = d.categories[0].score;
    
                if (confidence > 0.7) {
                    if (found == null) {
                        found = d;
                    } else if (confidence > found.categories[0].score) {
                        found = d;
                    }
                }
            }
    
            if (found != null) {
                if (found.keypoints.length > 1) {
                    const {
                        screenHeightMM, 
                        interEyeDistanceMM, 
                        cameraFov, 
                        cameraAboveScreen,
                        cameraVerticalAngle,
                    } = this.settings;

                    const cameraAspectRatio = video.videoWidth / video.videoHeight;
                    const cameraRadiansPerUnit = (cameraFov / cameraAspectRatio);
    
                    // Get the eyes! They're at 0 and 1!
                    const l = found.keypoints[0];
                    const r = found.keypoints[1];
    
                    const dx = (l.x - r.x) * cameraAspectRatio;
                    const dy = l.y - r.y;
                    const interEyeDistance = Math.sqrt((dx * dx) + (dy * dy));
    
                    const angle = cameraRadiansPerUnit * interEyeDistance / 2.0;
    
                    const z = ((interEyeDistanceMM / 2.0) / Math.tan(angle)) / screenHeightMM;
    
                    const cx = ((l.x + r.x) / 2.0) * cameraAspectRatio;
                    const cy = (l.y + r.y) / 2.0;
    
                    const x = Math.sin(cameraRadiansPerUnit * (cx - (0.5 * cameraAspectRatio))) * z;
                    const relativeVerticalAngle = (cy - 0.375) * cameraRadiansPerUnit;
    
                    let y = (cameraAboveScreen ? -1.0 : 1.0) * ((Math.sin(relativeVerticalAngle + cameraVerticalAngle)) * z);
                    
                    if(this.onDetected != null) {
                        this.onDetected(x, y, z);
                    }
                }
            }
        }
    
        var that = this;
        window.requestAnimationFrame(function() {
            console.log("Detect frame callback");
            that.detect();
        });   
    }
    
    async start() {
        //
        // This totally isn't production ready, largely because of this section.
        //
        // Some much cleaner disposal/recreation is necessary
        //
        var that = this;

        const visionTasks = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");

        this.faceDetector = await FaceDetector.createFromOptions(visionTasks, {
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
                delegate: "GPU"
            },
            runningMode: "IMAGE"
        });

        const constraints = {
            video: (that.settings.cameraDeviceId == null ? true : {deviceId: that.settings.cameraDeviceId})
        };
    
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                that.mediaStream = stream;

                that.videoElement.srcObject = stream;
                that.videoElement.addEventListener("loadeddata", function() {
                    that.detect();
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

class FaceLandmarkerHeadTracker {
    constructor(videoElement) {
        this.videoElement = videoElement; // Where the camera feed comes from
        this.faceLandmarker = null;
        this.running = false;
        this.lastVideoTime = -1;

        this.onDetected = null;

        // Starting assumptions for all settings
        this.settings = {
            screenHeightMM: 180,
            interEyeDistanceMM: 100, // Distance between the eyes

            cameraDeviceId: null,
            cameraFov: DEG2RAD * 40,
            cameraAboveScreen: true,
            cameraVerticalAngle: 0.0,
        };
    }

    // This has to be called before starting
    setCameraDeviceId(cameraDeviceId) {
        this.settings.cameraDeviceId = cameraDeviceId;
    }

    setScreenHeightMM(screenHeightMM) {
        this.settings.screenHeightMM = screenHeightMM;
    }

    setInterEyeDistanceMM(interEyeDistanceMM) {
        this.settings.interEyeDistanceMM = interEyeDistanceMM;
    }

    setCameraFov(cameraFov) {
        this.settings.cameraFov = cameraFov;
    }

    setCameraAboveScreen(cameraAboveScreen) {
        this.settings.cameraAboveScreen = cameraAboveScreen;
    }

    async detect() {
        if (!this.running) {
            this.running = true;
            await this.faceLandmarker.setOptions({ runningMode: "VIDEO" });
        }

        let video = this.videoElement;
    
        let startTimeMs = performance.now();
    
        if (this.mediaStream != null && video.currentTime !== this.lastVideoTime) {
            this.lastVideoTime = video.currentTime;
            const results = this.faceLandmarker.detectForVideo(video, startTimeMs);
    
            let found = null;

            function getMeanForSetOfLandmarks(landmarks, pointRanges) {
                let count = 0;
                let result = {x: 0.0, y: 0.0, z: 0.0};

                for(const connection of pointRanges) {
                    for(var i=connection.start; i<connection.end; i++) {
                        const l = landmarks[i];
                        result.x += l.x;
                        result.y += l.y;
                        result.z += l.z;
                        count++;
                    }
                }

                if(count > 0) {
                    result.x = result.x / count;
                    result.y = result.y / count;
                    result.z = result.z / count;
                }

                return result;
            }

            if(results && results.faceLandmarks) {
                for(const landmarks of results.faceLandmarks) {
                    // Yes it's an array of an array, with each sub array being a face
                    // There isn't confidence, oddly

                    const leftEye = getMeanForSetOfLandmarks(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS);

                    const rightEye = getMeanForSetOfLandmarks(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS);

                    // Evil hack to recreate a familiar structure
                    found = {keypoints: [leftEye, rightEye ]};
                }
            }
    
            if (found != null) {
                if (found.keypoints.length > 1) {
                    const {
                        screenHeightMM, 
                        interEyeDistanceMM, 
                        cameraFov, 
                        cameraAboveScreen,
                        cameraVerticalAngle,
                    } = this.settings;

                    const cameraAspectRatio = video.videoWidth / video.videoHeight;
                    const cameraRadiansPerUnit = (cameraFov / cameraAspectRatio);
    
                    // Get the eyes! They're at 0 and 1!
                    const l = found.keypoints[0];
                    const r = found.keypoints[1];
    
                    const dx = (l.x - r.x) * cameraAspectRatio;
                    const dy = l.y - r.y;
                    const interEyeDistance = Math.sqrt((dx * dx) + (dy * dy));
    
                    const angle = cameraRadiansPerUnit * interEyeDistance / 2.0;
    
                    const z = ((interEyeDistanceMM / 2.0) / Math.tan(angle)) / screenHeightMM;
    
                    const cx = ((l.x + r.x) / 2.0) * cameraAspectRatio;
                    const cy = (l.y + r.y) / 2.0;
    
                    const x = Math.sin(cameraRadiansPerUnit * (cx - (0.5 * cameraAspectRatio))) * z;
                    const relativeVerticalAngle = (cy - 0.375) * cameraRadiansPerUnit;
    
                    let y = (cameraAboveScreen ? -1.0 : 1.0) * ((Math.sin(relativeVerticalAngle + cameraVerticalAngle)) * z);
                    
                    if(this.onDetected != null) {
                        this.onDetected(x, y, z);
                    }
                }
            }
        }
    
        var that = this;
        window.requestAnimationFrame(function() {
            that.detect();
        });   
    }
    
    async start() {
        //
        // This totally isn't production ready, largely because of this section.
        //
        // Some much cleaner disposal/recreation is necessary
        //
        var that = this;

        const visionTasks = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");

        this.faceLandmarker = await FaceLandmarker.createFromOptions(visionTasks, {
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                delegate: "GPU"
            },
            runningMode: "IMAGE",
            numFaces: 1,
        });

        const constraints = {
            video: (that.settings.cameraDeviceId == null ? true : {deviceId: that.settings.cameraDeviceId})
        };
    
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                that.mediaStream = stream;

                that.videoElement.srcObject = stream;
                that.videoElement.addEventListener("loadeddata", function() {
                    that.detect();
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

const headTracker = new FaceLandmarkerHeadTracker(document.getElementById("camera"));

class FishtankCamera extends THREE.PerspectiveCamera {
    constructor(fov = 50, aspect = 1, near = 0.1, far = 2000) {
        super(fov, aspect, near, far);

        this.target = new THREE.Vector3(0.0, 0.0, 0.0);
        this.up = new THREE.Vector3(0.0, 1.0, 0.0);
    }

    setViewerPosition(x, y, distance) {
        this.viewerPosition = {x: x, y: y, z: distance};
        this.updateProjectionMatrix();
    }

    updateProjectionMatrix() {
        if(this.viewerPosition) {
            const near = this.near;
            const {x, y, z} = this.viewerPosition;

            // Make a projection based on the position
            // This is an adaptation of the parameters used by Johnny Lee in the head tracking 
            // http://johnnylee.net/projects/wii/
            this.projectionMatrix.makePerspective(
                near * (-1.0 * this.aspect + x) / z, 
                near * (1.0 * this.aspect + x) / z, 
                near * (1.0 - y) / z, 
                near * (-1.0 - y) / z,
                near, 
                this.far
            );

            this.position.x = -x;
            this.position.y = y;
            this.position.z = z;

            this.target.set(x, y, 0.0);
            
            this.matrixWorld.lookAt(this.position, this.target, this.up);
            this.matrixWorldInverse.copy(this.matrixWorld);
            this.matrixWorldInverse.invert();

            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        } else {
            super.updateProjectionMatrix();
        }
    }
}

function setupControls() {
    let mediaEnabled = !!navigator.mediaDevices?.getUserMedia;
    if(!mediaEnabled) {
        alert("The browser isn't allowing usermedia access so it won't work");
        return;
    }

    const cameraSelector = document.getElementById("camera-selector");
    cameraSelector.addEventListener("change", function() {
        headTracker.setCameraDeviceId(cameraSelector.value);
    });
    cameraSelector.disabled = true;

    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function() {
        startButton.disabled = true;
        cameraSelector.disabled = true;
        headTracker.start();
    });

    const cameraFovDegInput = document.getElementById("camera-fov-deg");
    cameraFovDegInput.addEventListener("change", function() {
        headTracker.setCameraFov(parseFloat(cameraFovDegInput.value) * DEG2RAD);
    });

    const cameraAboveScreenInput = document.getElementById("camera-above-screen");
    cameraAboveScreenInput.addEventListener("change", function() {
        headTracker.setCameraAboveScreen(cameraAboveScreenInput.checked);
    });

    const displayHeightMMInput = document.getElementById("display-height-mm");
    displayHeightMMInput.addEventListener("change", function() {
        headTracker.setScreenHeightMM(parseFloat(displayHeightMMInput.value));
    });

    const viewerInterEyeDistance = document.getElementById("viewer-inter-eye-distance-mm");
    viewerInterEyeDistance.addEventListener("change", function() {
        headTracker.setInterEyeDistanceMM(parseFloat(viewerInterEyeDistance.value));
    });

    navigator.mediaDevices
        .getUserMedia({video: true})
        .then(() => {
            navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                const cameras = devices.filter(device => device.kind == 'videoinput');
    
                cameraSelector.innerHTML = '';
    
                cameras.forEach(camera => {
                    const opt = document.createElement('option');
                    opt.value = camera.deviceId;
                    opt.text = camera.label || camera.deviceId;
                    cameraSelector.appendChild(opt);
                });

                cameraSelector.disabled = false;

                alert("Please select your camera and press 'START'");
                startButton.disabled = false;
            })
            .catch(error => {
                startButton.disabled = true;
                alert("There was an error getting your cameras, so this won't work");
            });
        })
        .catch((err) => {
            startButton.disabled = true;
            alert("There was an error getting your cameras, so this won't work");
        });
}

export async function start() {
    setupControls();

    const canvas = document.getElementById("canvas");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });

    const scene = new THREE.Scene();

    // Evil access of the three js hdr env map
    new RGBELoader()
        .setPath( 'https://threejs.org/examples/textures/equirectangular/' )
        .load( 'quarry_01_1k.hdr', function ( texture ) {
            texture.mapping = THREE.EquirectangularReflectionMapping;

            // scene.background = texture;
            // Replace the standard bg sphere with one further away
            const geometry = new THREE.SphereGeometry(900, 60, 60);
            geometry.scale(-1, 1, 1); // Invert the normals
            const material = new THREE.MeshBasicMaterial({ map: texture});
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            scene.environment = texture;
        } );

    const projectionCamera = new FishtankCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    projectionCamera.position.z = 5;

    headTracker.onDetected = function(x, y, z) {
        projectionCamera.setViewerPosition(x, y, z);
    };

    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 );
    cubeRenderTarget.texture.type = THREE.HalfFloatType;

    const cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );
    const reflective = new THREE.MeshStandardMaterial( {
        color: 0xee0044,
        envMap: cubeRenderTarget.texture,
        roughness: 0.05,
        metalness: 0.0,
        clearcoat: 0.2,
        clearcoatRoughness: 0.05,
    } );    

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xcccccc,
        roughness: 0.1,
        metalness: 0.0,
        clearcoat: 0.2,
        clearcoatRoughness: 0.05,
        transmission: 0.0
    });

    const cubeDefs = [
        [0,0,0, 1.0],
        [-2, 0, -8, 1.0],
        [2, 0, -2, 1.0],
        [2, 0, -8, 1.0],
        [3, -2, -5, 1.0],
        [0.15, 0.15, 5.0, 0.25], // Sticking out
        [0.0, -1.5, -0.5, 1.0], // Floor
        [0.0, 1.5, -0.5, 1.0], // Ceiling
    ];

    let cubes = [];
    for(var i=0; i<cubeDefs.length; i++) {
        const def = cubeDefs[i];

        if(i == 0) { // Nonsense temp hack to put torus knot where a cube used to be
            const torus = new THREE.Mesh( new THREE.TorusKnotGeometry(0.5, 0.17, 128, 16), reflective);
            scene.add( torus );

            torus.scale.x = def[3];
            torus.scale.y = def[3];
            torus.scale.z = def[3];

            cubes.push(torus);
        } else {
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            cube.position.x = def[0];
            cube.position.y = def[1];
            cube.position.z = def[2];

            cube.scale.x = def[3];
            cube.scale.y = def[3];
            cube.scale.z = def[3];

            cubes.push(cube);
        }
    } 

    // Left and right would be doable, but need to move when the aspect ratio changes!!!!

    function resized() {
        projectionCamera.aspect = window.innerWidth / window.innerHeight;
        projectionCamera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", resized);
    resized();

    function step() {
        requestAnimationFrame(step);
        cubes[0].rotation.x += 0.01;
        cubes[0].rotation.y += 0.01;
        cubeCamera.update(renderer, scene);
        renderer.render(scene, projectionCamera);
    }

    step();
}

document.body.onload = start;
