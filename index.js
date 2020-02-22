// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.radius * 2 * pi;
  }

  get area() {
    return this.radius * this.radius * pi;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * pi);
  }

  set area(area) {
    this.radiu = Math.sqrt(area/pi);
  }
}
