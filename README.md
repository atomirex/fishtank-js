# fishtank-js
Provides a webcam driven parallax effect simulating the feeling of looking through the screen into a fishtank, with the perspective adjustments driven by face detection from the webcam. Could be fairly easily repurposed to any three.js scene.

Very inspired by the work of [Johnny Lee with the head tracking using the Wii sensor bar](http://johnnylee.net/projects/wii/) I hacked up a proof of concept for doing this on the web using no extra hardware and just [Google MediaPipe](https://developers.google.com/mediapipe) and the 3D graphics library [three.js](https://threejs.org). The result is an unholy fusion of mediapipe face detection, three.js example code and some modified mathematics originally by Mr Lee. It is definitely not production ready, largely due to typical media lifecycle problems, but does show that this is viable.

The actual core code here is amazingly short, so don't be scared.

## Running it
The easiest way is to check this link to the running example: (TO BE ADDED)

### The settings
The more accurate your settings the better the effect.
- "FOV (degrees)" - the field of vision, horizontally, of the camera in use, in degrees. Note the internal API uses radians.
- "Above screen" - if the camera is directly above the screen or directly below. Cameras in other locations are not supported.
- "Height (mm)" - the height of the display window in millimetres. (The width is then calculated via the aspect ratio).
- "Inter eye distance (mm)" - the distance between the eyes of the viewer. This is equivalent to the distance between the two dots in the earlier work with the Wii hardware.

### Local build and development
1. Clone this repo
2. `npm install`
3. `npm run dev`
4. Open your browser to the appropriate page
5. Shut your browser again, and open that same page in a new window manually. (This is because the auto refresh code of vite interacts badly with some of the initialization going on here).
6. Move the window to the screen your camera is near
7. Select the camera from the drop down (the other settings can be changed after starting).
8. Notice the parallax effect when you move your head around. Left/right, up/down and in/out will all work. (In the example you can move behind one of the cubes).
9. Break it in some unknown way. Create a bug report and move on with life.

## Known problems
- It's going to be a performance monster, but runs well on current Macs
- The maths is likely to have subtle bugs and precision errors.
- Cameras are either in the centre above or below the screen. No consideration for other configurations.
- Once set at the start the current camera is unalterable. Some attention to teardown and recreation of the streams and so on is required.
- The interactions with the reloading mechanism of the dev server get old fast. Whenever you save a file it will break any current active session.
- I would want to break out the classes HeadTracker and FishtankCamera into another module which could then go on npm with clearing versioning and licensing etc. The example uses an hdr env map from three.js which is cheeky to say the least and should be changed.
- The results of the face detection are shaky. It may be possible to filter them for some applications, but that would introduce latency. It is probably better to hope for improvements in resolution and accuracy in the face detection as things like WebGPU get deployed and that becomes more reasonable. Relatedly, the range in distance from the camera is currently limited. There may be good mileage from switching to a pose detection mechanism, depending on the stability of the output of the pose inference.
- If adapting the maths for a native mobile app make sure to use native inference APIs where available as the difference is dramatic.