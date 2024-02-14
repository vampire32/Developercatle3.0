"use client"
import React, { useState, useEffect } from "react";
import Sketch from "react-p5";


const Particle = ({ p5, particles }) => {
  const pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
  const vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
  const size = 5;

  const update = () => {
    pos.add(vel);
    edges();
  };

  const draw = () => {
    p5.stroke("#00FFFF");
    p5.fill("salmon");
    p5.circle(pos.x, pos.y, size * 2);
  };

  const edges = () => {
    if (pos.x < 0 || pos.x > p5.width) {
      vel.x *= -1;
    }
    if (pos.y < 0 || pos.y > p5.height) {
      vel.y *= -1;
    }
  };

  const createParticles = () => {
    particles.forEach((particle) => {
      const d = p5.dist(pos.x, pos.y, particle.pos.x, particle.pos.y);
      if (d < 120) {
        const alpha = p5.map(d, 0, 120, 0, 0.25);
        p5.stroke(`rgba(255, 255, 255, ${alpha})`);
        p5.line(pos.x, pos.y, particle.pos.x, particle.pos.y);
      }
    });
  };

  return {
    update,
    draw,
    createParticles,
  };
};

const ParticleComponent= () => {
  const [particles, setParticles] = useState([]);

  const setup = (p5, parent) => {
    setParticles([]);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parent);

    const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
    for (let i = 0; i < particlesLength; i++) {
      setParticles((prevParticles) => [
        ...prevParticles,
        Particle({ p5, particles: prevParticles }),
      ]);
    }
  };

  const draw = (p5) => {
    p5.background("#000");

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
      particle.createParticles();
    });
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className="app">
      <h1>Particles</h1>
      <Sketch windowResized={windowResized} setup={setup} draw={draw} />
    </div>
  );
};

export default ParticleComponent;
