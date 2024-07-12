---
title: Journey to Rust
author: Andrew Moon
pubDatetime: 2024-07-07T21:00:00+09:00
postSlug: 2024-07-07-journey-to-rust
featured: true
draft: false
tags:
  - Programming Language
description: How to follow a cult.. for good reasons
---

## Table of Contents

So what have I used my precious time for, after leaving work to finish school? Obviously school stuff would come first(for graduation..), but admittedly the amount of spare time I suddenly got compared to the last 2 years of work was almost overwhelming. In fact, so overwhelming that I honestly felt myself become less productive as I was having trouble managing priorities. My respect for product/project managers have definitely gone up a notch.

Anyways, that doesn't mean I haven't done anything at all. You see, I have a strange tendency of liking 'hip' tech. Any new tech that would stand out as being 'hip' compared to the mainstream, new databases, new programming languages, new paradigms/frameworks... you name it. I've read about them a lot(probably too much), but never really had the time to try them out in my own projects.

<details><summary>What's so hip nowadays? if you ask me..</summary>

On top of my mind,

- Gleam
- Nim
- Zig
- Mojo
- SurrealDB
- SpacetimeDB
- WebGPU
- WebAssembly
- Deno/Bun

Some controversial ones included, I know, but my standards for being 'hip' also largely depends on their actual production usage.

</details>

So, I decided I should delve into one of the more relatively-mainstream-ish projects that could actually end up being useful to learn: Rust. Yes, I still think Rust is 'hip' and 'cool', because it is still rare to find competent companies using Rust where I live.

# Why learn Rust?

This has been a very common question for many people upon hearing about any new programming language, and for Rust in particular, it has been answered in most sensible ways out there. I'm sure you've heard the most of Rust's strengths, so I'll skim them over briefly here to list a few that had stood out to me the most.

- **Systems programming language without the footguns**: Rust is considered to be viable as a "Systems programming language", which basically means its fast enough to be on par with C/C++ with minimum bloat in layman terms. However, what makes Rust unique is that the amount of footguns you'd have to avoid in Rust to get that performance is much lesser than the average C/C++ dev experience, imo. In fact, you get to experience yourself not really being so paranoid about these footguns as you program in Rust, **in comparison**.
- **Fantastic type system, without Haskell**: Although I'd hate to admit it, most of my previous 'production' programming experience comes from Typescript. And to be honest, I really liked the type system in Typescript. Once you get past the weird quirks(such as recursive types) the stuff you can express with types in Typescript is really powerful, but with one caveat: Javascript is not designed to be a typed language. Rust, on the other hand, has an _even better type system_ with first-class support for algebraic data types, pattern matching, and more. The best part: you don't have to be a functional wizard to understand it. To me, it feels like a perfect mix of Go + Typescript, from what I can gather from my past experience of programming languages.

That was enough for me to start learning. I hated programming on the JVM(and having to optimize performance on it in particular), I really didn't enjoy writing in Go due to its famous 'simplicity', and every time I got caught by the quirky parts of Typescript + Javascript, I really wished I had a better alternative at least for my hobby projects. I also didn't want having to actively avoid shooting myself in the foot during my _hobby_ programming sessions as well. Or at least, be able to get out of such footguns with a reasonable amount of debugging effort.

Rust is also famous for the cult-like community that follows behind it, and I'm sure you've found at least some of those people on the internet, suggesting `REWRITE IT IN RUST` for every performance/memory concern on a project ever. Due to my weird tendency of liking 'hip' tech, I've also been interested on how Rust was able to form such a cult behind it, and perhaps join it myself. Don't worry though, I'm not entering my Arch Linux arc yet.

# How to learn Rust?

Let's say you got sold on Rust like I did above. Now it's time to look at the learning materials. I had been bingeing Rust-related content for a long while(probably for like a year), so I had a rough idea of what to look for. Here's a list of resources I found useful:

- [Rustlings](https://github.com/rust-lang/rustlings): A set of exercises to learn the basics of Rust. Fun and engaging, straight to the point, and helps you get confident enough to start writing some actual code afterwards. Highly recommended.
- [100 exercises to learn rust](https://github.com/mainmatter/100-exercises-to-learn-rust): Similar to Rustlings, but with more focus on how to write 'application code' rather than the basic syntax itself. If you already have some average application developer experience, this will help you be able to relate your past experiences and transfer your knowledge over to Rust faster. The main author of the exercise(Luca Palmieri) has also written a [great book](https://www.zero2prod.com/index.html) on a similar topic, which is also highly praised by the community.
- [No Boilerplate](https://www.youtube.com/@NoBoilerplate): A developer channel focused on Rust-related content. Simple, concise, straight to the point, great content overall. Highly recommended if you're someone like me that enjoys learning something new every once in a while through random videos.

And also this [awesome list](https://github.com/ImplFerris/LearnRust) that someone made, which contains all sorts of learning materials including the ones above. In reality though, you'll have to experience some of the hard parts yourself to really get into it, such as lifetimes, macros, and the infamous async rust.

# How to use Rust?

Now the materials listed above are all fine and dandy to get a good grasp of Rust, but what about actually using it in a project? Although an avid Rust fan could argue that there's no limits to whre you can use Rust, which I would actually agree with, I've also personally found that the more you get to use the weird/hard parts of the language, the more you get accustomed to using the language. Austin Henley has a great [article](https://austinhenley.com/blog/morechallengingprojects.html) on such challenging projects, and I'm currently trying to learn graphics programming in Rust in particular, starting with a basic ray tracer. In the near future I'm anticipating to learn and use [wgpu](https://wgpu.rs/) and perhaps the Vulkan API to experiment with more advanced concepts, as graphics also aligns with my current hobby interests.

To use Rust as an optimal choice however would be a different story, and I'm still in the process of figuring that out. From my point of view, I would definitely try out using Rust over some other language if I were to make something like these:

- A Web Server([Axum](https://github.com/tokio-rs/axum))
- A heavy computation library(WebAssembly/FFI, [wasm-pack](https://github.com/rustwasm/wasm-pack) is also awesome)
- A CLI tool([ratatui](https://ratatui.rs/))
- Parser utilities([nom](https://github.com/rust-bakery/nom), [chumsky](https://github.com/zesterer/chumsky))

# And some rust-ic materials

As a final note for this post, I'd like to share some of my favorite materials on rust around the internet that I've found useful lately:

- [Rust Atomics](https://marabos.nl/atomics/foreword.html): A good deep-dive into Rust's low level concurrency primitives, where you also get to implement them yourself.
- [ECS in Rust](https://ianjk.com/ecs-in-rust/): A guide to the famous Entity-Component system in Rust, especially popular for rust-based game engines such as [Bevy](https://bevyengine.org/).
- [Why is building a UI in Rust so hard?](https://www.warp.dev/blog/why-is-building-a-ui-in-rust-so-hard): A functional introduction into how UI programming in Rust is different from your average UI dev experience in other languages, written by the [Warp](https://www.warp.dev/) engineering team. Personally, I enjoyed using their product as it especially helped me a lot during my first year as a software engineer.
- [wg-async: Submitted Stories](https://rust-lang.github.io/wg-async/vision/submitted_stories.html): A collection of stories from the Rust async working group, where you get to explicitly see the amount of pain you could experience from the 'weird parts' of async Rust. Amusing and informative to read if you haven't experienced some of these yet, hightly relatable and PTSD-inducing if otherwise. Side note: I still don't understand `std::pin::Pin`.
- [Jon Gjengset - Towards Impeccable Rust](https://www.youtube.com/watch?v=qfknfCsICUM): Awesome talk on how to write 'impeccable' Rust code, with strict tests and performance profiling, without writing useless tests like the average TDD unit test advocate. Especially interesting on some concurrency-related problems he discusses during the video.
