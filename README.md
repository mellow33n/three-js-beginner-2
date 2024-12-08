# Three js beginner task 1

Train basic geometries and animation. Using vanilla js, three js.

1. Landing page contain some fancy background.
2. Landing page contain a header with some long title and navigation bar.
3. Users can move to the top immediately if the header disappears while scrolling. For this one i use common technique with display style on button tag. Display set to "block" when window.croll.Y > offsetHeigt of nav tag.
4. Each section is located one under the other, full screen height.
5. Each section contain title, description and slightly floated 3D primitive.
6. When user scroll down: the 3D shape that moves to the center of the viewport, smoothly appear by sliding in.
When user scroll up: the 3D shape that moves beyond the edges of the viewport, smoothly disappear by sliding away by some trajectory. 

I realize this action by change value in object.positon.x. Value will change depending on the change in the percentage of the viewport of the card section. If the viewport of the card decreases - then the figure disappears.

Logic map of application:
1. We create Header and Main jsx elements, inherit dom three. We set property elementsLenght to 5. Its elements quantity at the page. 
2. At Header we create navbar, long tittle and UpButton. UpButton is contain at header group because it depend of the nav.
3. At Main we calc visibility in custom hook useVisibility. This hook do it by native method getBoundingClientRect. Then we provide this value to Scene element. Also we provide index.
4. At Scene we start use react-three/fiber with Canvas element. For animation we use our custom element RotatingObject. We provide to it geometry data and visibility percent.
5. At RotatingObject we use hook react-three/fiber useFrame for rotation and change position of the object on depending with visibility card in viewport. 
