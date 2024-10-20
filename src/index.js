import * as BABYLON from 'babylonjs';
import { createScene } from './scene';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true, {stencil:true});

// Создаём сцену
const scene = createScene(engine, canvas);

// Добавляем объекты на сцену


// Запуск рендеринга
engine.runRenderLoop(() => {
    scene.render();
});

// Адаптация сцены при изменении размера окна
window.addEventListener('resize', () => {
    engine.resize();
});