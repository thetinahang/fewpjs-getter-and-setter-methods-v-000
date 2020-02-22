// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  const pi = Math.PI;

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.radius * 2 * pi;
  }

  get area() {
    return this.radius * this.radius * pi;
  }

  set diameter(radius) {

  }

  set circumference(radius) {

  }

  set area(radius) {

  }
}
