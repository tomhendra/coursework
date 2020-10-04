<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Creative Coding Club: GSAP Express</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Tweening Basics](#11-tweening-basics)
    - [1.1.1. GSAP Object: Tweens & Timelines](#111-gsap-object-tweens--timelines)
  - [1.2. Basic Tween](#12-basic-tween)

## 1. Introduction

Bring your webpages, banners, and online games to life with GSAP3. This course for absolute beginners will guide you through the best parts of the GSAP API.

- [Course link](https://www.creativecodingclub.com/courses/gsap-3-express).

### 1.1. Tweening Basics

#### 1.1.1. GSAP Object: Tweens & Timelines

**The GSAP Object**

- GSAP used to consist of several separate tools:
  - TweenLite
  - TweenMax
  - TimelineLite
  - TimeLineMax
- In version 3.0 these were all consolidated to one `gsap` object.
- The `gsap` object is our access point to everything that the engine does.
- The `gsap` object can:
  - Create animations.
  - Configure settings.
  - Register plugins, eases and effects.
  - Gives global controls over all animations.

Being a beginner course, we will concentrate on the animations part.

- The `gsap` object has 3 main methods for creating Tweens and optionally adding them to timelines.

1. `gsap.to()`
2. `gsap.from()`
3. `gsap.fromTo()`

**Tweens**

- In its simplest form a Tween can change a single property of a single object over time.
- In the example `gsap.to(".star", { x: 750, duration: 3 })` the first parameter is the _target_, and the second is the _vars object_.
- The vars object accepts special properties. `duration` is considered special because it is not an animation property.
- The `x` is shorthand for `translateX()` in CSS.
- One of the most important things to know about GSAP is that every animation has a _virtual playhead_.
- Just like After Effects have a playhead to allow scrub, GSAP has one too.
- Whenever the playhead of an animation advances, that is when GSAP will apply the changes to the properties that we want.
- Tweens can be moved to any point in time, played forwards, played backwards, paused, restarted and sped up or slowed down over time.
- We can also inspect Tweens by obtaining information programmatically.
- Tweens are powerful. A Tween can change multiple properties of multiple objects over time, with staggered start times.

**Timelines**

- A timeline is a container for multiple _child Tweens_.
- We have a bunch of advanced controls like repeat and delay.
- One of the most powerful things about GSAP Timelines is the advanced sequencing options.
- We can have Tweens overlap. We can insert gaps. We can insert timelines inside of timelines.

### 1.2. Basic Tween