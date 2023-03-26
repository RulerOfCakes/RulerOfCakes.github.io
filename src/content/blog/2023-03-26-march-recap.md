---
title: March Recap
author: Andrew Moon
pubDatetime: 2023-03-26T17:00:00Z
postSlug: 2023-march-recap
featured: true
draft: false
tags:
  - Retrospective
  - Software Engineering
  - Learning
description: Notable learnings & events in March 2023.
---

Normally I wouldn't write these types of posts, but starting from now on I think I'll leave a retrospective post for each month. I'll _try_ to keep it short and sweet, and write a separate post for each notable event.

## Table of contents

## Events

Here are some of the events I've attended in person & virtually in March 2023.

### CloudCon in GO - GDG Golang Korea X GDG Cloud Korea

<figure>
  <img
    src="/assets/posts/2023-march-recap/Cloudcon_in_go.jpg"
    alt=""
  />
  <figcaption style="text-align:center;">
    Google for Startups Campus @ Seoul, March 11
  </figcaption>
</figure>

Had a bunch of interesting sessions based on utilizing GCP & Golang. Having a quick overview on the serverless parts of GCP & hearing some quirks about actual production usage from the experienced speakers was definitely helpful. I really want to use GCP for my next toy project, especially its serverless capabilities & some of its data services such as BigQuery, Cloud Spanner & AlloyDB. I did hear that they are very expensive compared to the alternatives(namely AWS), but I guess I'll find out as I try it myself.

It was also their first offline event in a while after the pandemic, so I got the experience all the awkwardness from re-engaging in offline networking events as everyone was quite unfamiliar again with these meetings. I'm an awkward person in general so I was glad to have everyone else in an awkward state as well, looking forward to similar future events.

other virtual events I've attended are as follows.

- #### State of Unreal
  The introduction of their new beginner-friendly scripting language: `Verse`, was quite interesting. C++ is definitely one of the major hurdles for beginners to Unreal, and sometimes visual scripting with Blueprints just doesn't cut it. I'm excited to see how this new language will be received by the community, kind of like GDScript from the Godot Engine.
- #### Datadog Webinar - From Frontend to Backend
  Honestly was a bit disappointing, but I guess it's understandable since it was a webinar. I was hoping for more technical details, but it was mostly just a sales pitch for Datadog. I'll have to spend some time myself to actually get into Datadog and see how it works.

---

## Learnings

Here are some interesting learnings of the month that I thought were worth mentioning.

### CRA vs Vite, and the world of Javascript bundlers

I recently had a chance to migrate a project that uses `CRA`, better known as `Create React App`, to `Vite`. I had watched through the whole ordeal of deprecating `CRA` in favor of `Vite` in the official react docs([link to the infamous pull request](https://github.com/reactjs/react.dev/pull/5487)), and after their decision was made to do so, I also wanted to do the same thing to our own project as the long build times during development were becoming a real pain.

[`Vite`](https://vitejs.dev/) is known to be much more focused on richer development experiences, and also provides better performance as well. One of the core differences between these two is how they handle `bundling`. `CRA` uses [`Webpack`](https://webpack.js.org/) under the hood, while `Vite` uses [`Rollup`](https://rollupjs.org/) for production builds, and [`esbuild`](https://esbuild.github.io/) for dependency pre-bundling on development.

Many frontend developers are familiar with `Webpack`, but `Rollup` and `esbuild` are relatively new to the scene. I had been taking `Webpack` for granted while I was first learning frontend development, but I've come to realize that it's actually a very complex tool, and it's not easy to understand how it works. I've also come to realize that `Webpack` is not the only tool that can do the job, and there are actually many other tools that can do the same thing, but with different tradeoffs.

It had been long since I was messing around with these concepts as for the past year I had only been doing serverside development. With the recent decision of migrating to Vite, I came across a bunch of errors related to `esbuild` during the process which finally re-sparked my interest on this subject. I was pleasantly surprised by how fast `esbuild` is in comparison to `Webpack`, and was quite satisfied with the results after the migration.

Later I realized that there's an even faster competitor from Vercel, [`Turbopack`](https://turbo.build/pack), which is written in Rust compared to `esbuild` being written in Go. Naturally I had also discovered [`Turborepo`](https://turbo.build/repo) as well. I think it is a bit too early for those Turbo-tools to be adopted to our production environment, but seeing how fast and convenient they are, I'm definitely wanting to try these out myself in the future.

<figure>
  <img
    src="/assets/posts/2023-march-recap/turbopack-speed.PNG"
    alt=""
  />
  <figcaption style="text-align:center;">
    A comparison of build speeds with 1,000 React components in a Next.js project, according to the official Turbopack website.
  </figcaption>
</figure>

### The Wet Codebase

Source: [The wet codebase - Dan Abramov](https://www.youtube.com/watch?v=17KCHwOwgms)

[Transcript](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase)

_The Wet Codebase_ is a talk by Dan Abramov, the creator of Redux & core member of the **React team @ Meta**. In this talk, he talks about the importance of code quality, and how to achieve it. He also talks about the importance of code readability, and how to achieve it.

But this isn't your typical talk about clean code & architecture, it's actually about suggesting 'bad practices' to your team's codebase, and why you shouldn't be tied down by the infamous book of _Clean Code_ and its principles.

He calls it 'the wet codebase', because his main example was about how he tried too hard to write `DRY(Don't repeat yourself)` code, but ended up with a monsterous codebase that was hard to maintain, eventually resulting in an entire rewrite/refactor. The main takeaway is that: don't try to modularize / abstract your code preemptively unless it has come to the point where it actually is necessary. Even if it seems like a great opportunity for a simple abstraction: most of the time you'll end up needing specific tunings for each use case, so a little bit of copy & pasting around really shouldn't hurt until things grow in scale.

Dan Abramov isn't the only person who's bringing up these subjects on online talks and blog posts; as time goes on I see more and more of those 'tech talks' talking about the pitfalls of abstraction, and _OOP / Inheritance_ as a prime example. With the recent rise of popular programming languages that focus on the developer experience such as _Rust_, _Go_ and even _Typescript_, and frameworks from these languages such as _Leptos(Rust frontend)_, _Astro.js(Javascript frontend)_, _Bevy(Rust game engine)_ to name a few... people are starting to take a step back and rethink about the age old principles of software engineering.

<details><summary>Short rant</summary>

Gone are the days of treating **OOP** as the de facto way of programming enterprise-grade service applications; No longer do people tell you to memorize _DRY_, _SOLID_, _KISS_, _YAGNI_ and _Clean Code_ in your head to try to write decent code. (I guess some still do though)

Personally I prefer the mixture of Functional Programming alongside a subtle amount of OOP, just like how Typescript, or even better, Rust is typically written in. I think it's a good balance between the two, and it's a good way to write code that's both easy to read and easy to maintain. Kotlin also does this pretty well(and there are amazing FP libraries for Kotlin such as [`Arrow`](https://arrow-kt.io/)), but due to it being based on the JVM, which makes it impossible to escape from Java, it's not a favorable choice for me.

It was always those little things that had irritated me the most when I started learning programming. All those 'basic principles' you had to memorize, and all those abstract concepts of 'best practices' you had to follow. But as I got more experienced, I started to realize that these principles are just that: principles. They're not rules, they're not laws, they're more like general guidelines if anything. If you can understand why these guidelines exist, and what problematic situations they're trying to solve, you don't really need to memorize them. You can just use your own judgement to decide whether or not you should follow them.

In my opinion, one of the dumbest question materials in technical interviews is asking you about the meaning of those acronyms. You really don't need to memorize the entirety of `HATEOAS` to be able to build a proper REST API(If I were to be really nitpicky here like _one of those people_ then sure, it probably woudn't end up suitable for the strict definition, but you know what I mean), and you don't need to memorize what each letter of `SOLID` stands for to write a _solid_ application in classic OOP fashion. Sure it helps if you do, but really it's not what you should be checking for when it comes to seeing the technical ability of a developer. Don't get me wrong, some acronyms do provide meaningful value in areas where concepts are used directly without abstraction, such as `ACID`. But let's be honest here: you aren't going to leave code reviews on your team's code about how your colleague isn't following the Liskov Substitution Principle of SOLID in his/her code. Talk about a remark that provides no value. We aren't robots that can be programmed to follow a set of rules and be aware of them at all times, we're humans that can use our own judgement to make decisions. Let's trust our intuition, and provide evaluation based on said intuition of others as well.

</details>

Here are some of my favorite videos and articles that talk about similar subjects:

- [The Flaws of Inheritance - CodeAesthetic](https://www.youtube.com/watch?v=hxGOiiR9ZKg)
- [Why TDD Sucks - ThePrimeagen](https://www.youtube.com/watch?v=VB3Vh9Vf724)
- [The Wrong Abstraction - Sandi Metz](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction)

Of course these are opinionated videos but I think they're all good takes to keep in mind.

## TTL(Things To Learn)

I'm going to keep this same list for all recap posts, and just update it as I go along.

<details><summary>Full List</summary>

- ### Tech

  - #### Golang & Concurrency
    I've got the basics down from work but I need to spend some proper time on the fundamentals
  - #### Rust
    I've been meaning to learn this for a while now, and I think it's time to finally do it.. after Go that is
  - Webassembly
  - #### Docker & Kubernetes
    Not my favourite subject, but it'll help to know the details for my current work
  - #### Vector Databases
    With the recent rise of AI SaaS products, learning about this will probably help me build fun toy projects. One of my interests is to build my own personal AI assistant(with all my personal data fed into it, what could possibly go wrong :shrug:), and I think this is a good place to start.
  - #### Linux Fundamentals

    My worst nightmare that I never want to face, but eventually will have to go through..

  - Godot Engine
  - Unreal Engine 5

- ### Math & Algorithms

  these are really just for competitive programming & game development. probably unrelated to what I do for work right now

  - Basic Combinatorics
  - Basic Graph Theory
  - Basic Number Theory
  - Basic Linear Algebra
  - Basic Probability Theory

    I think I have a general understanding of those basic math topics, but the generic 'hard problems' that always drag me down on competitive programming websites like Codeforces always comes from math. I need to get better at this.

  - General Graph Matching Algorithms

- ### Hobbies
  - #### Blender & 3D Modelling Fundamentals
    I've purchased an expensive course for this a while ago, but I haven't really gotten around to it yet.
  - #### Electric guitar
    Learning the guitar on my own from scratch seems really unmotivating. Thinking about taking some lessons...
    </details>
