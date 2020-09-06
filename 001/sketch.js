//壁を定義
let wall;
//光線を定義
//位置と方向を持つ
let ray;

let particle;

function setup() {
    createCanvas(400,400);
    //壁となる境界線を生成
    wall = new Boundary(300, 100, 300, 300);
    particle = new Particle();
}

function draw() {
    background(0);
    wall.show();
    particle.show();
    ray.show();
    ray.lookAt(mouseX, mouseY);
    //交点のポイントは、光線に対して「交点を取得する」関数を呼び出す(引数：境界線)
    // let pt = ray.cast(wall);
    // //交点が存在する場合は、そのポイントを点で描画する
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}