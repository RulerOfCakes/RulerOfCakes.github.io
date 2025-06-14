---
title: Embracing Skynet
author: Andrew Moon
pubDatetime: 2025-06-15T06:00:00+09:00
postSlug: 2025-06-15-embracing-skynet
featured: true
draft: false
tags:
  - AI
  - Reflection
description: No, I don't think I will(in the near future).
---

## Table of Contents

---

I've recently come to realize that the power of generative AI has become a more of a serious concern for younger students at my university, especially for Computer Science students. They are now prevalently using generative AI tools like ChatGPT and Copilot to help them with their assignments and exam preparations, with many of them spending less time and effort on studying the topics themselves. At the same time, increasingly more students are expressing their concerns about such powerful AI tools taking over all job opportunities for them in the near future, and how they should be preparing for other jobs to embrace the inevitable rise of [**_Skynet_**](<https://en.wikipedia.org/wiki/Skynet_(Terminator)>).

Maybe it's because I'm pretty much just waiting for graduation at this point with a few years of experience in the industry, but I couldn't help but feel a sense of disconnectivity with the general sentiment of the students around me, especially regarding this topic. So I think it's a good time to share my thoughts on this topic, and what we could do against the inevitable rise of Skynet.

Spoiler alert: _No, I don't think I will._

> This post may contain a bit of ranting about how much I hate buzzword-driven trends in the industry, as I've had enough since the rise of blockchain.

# The Duality of Man: ChatGPT

ChatGPT has now become such a symbolic name for generative AI that it now instills both happiness and joy for 'vibe coders'(I really dislike how this has become another buzzword in the industry now) and buzzword-fueled businessmen, and fear and anxiety for AI doomers. I think most compsci students lie somewhere in the middle, with a few of them being excited about ChatGPT being able to do pretty much everything they have been asked to do in their assignments and toy projects, and a few of them being anxious about how it does these things a little bit _too_ well, realizing how little they know in comparison. It perfectly encapsulates the duality of man, where a student may go through their initial worship phase of infinitely praising the capabilities of LLMs, only to be followed by a phase of despair when they are fronted with the reality of sparse junior job opportunities. Love it or hate it, they still have to deal with it, and most students keep it open in a tab on their browser at any time.

When I returned to university last year after working as a software engineer to finish my degree, I was quite appalled by how many students had ChatGPT open on their laptop screens during literally any session. No matter if they are simply resting at the lounge, or attending a lecture, perhaps doing their assignments, no matter where I went I could not avoid the iconic UI of OpenAI.

During the initial launch of Github Copilot when programmers were still cautious about adopting the use of AI tools, there were a lot of discussions online about how juniors should refrain from using such tools to do their work, as it will hinder their ability to learn and grow as a programmer. The reality was that no junior really cared and just used it anyway as long as it worked well enough to spit out some React / Spring / Django / Whatever boilerplate they needed. However, enough time has passed since then to show that the new generation of such early-AI-adopters in their programming careers started using such AI tools with even less base knowledge about their target domain, and they are now more than ever relying on AI tools to do their work for them. They are now called 'vibe coders', using natural language instead of programming languages to do their work, using an LLM instead of an IDE as a development environment. Or perhaps in some rare cases, [indian engineers disguised as AI.](https://www.helsinkitimes.fi/business/27127-builder-ai-collapse-700-indian-engineers-behind-fake-ai-exposed.html)

At this point, I think you may get what I'm trying to say: It looks like I'm blaming the upcoming students/juniors for relying too much on the AI tools instead of studying for themselves to grow their own skills. And it's true; I do firmly believe that, at least at my own university, most students complaining about how AI is taking over their job opportunities are the same students who decided copy-pasting code from ChatGPT and then going out drinking to get wasted rather than studying was a better use of their time as a student. However, before you start raising a counterpoint, I do want to clarify that I don't think it's entirely their fault for reaching this point. But let me go on to explain why I think these concerns are a bit overblown.

## Taking Initiative

I think the main reason for why these concerns start bubbling up is when these firm AI users first _think_ that they faced a tough problem that they cannot solve without AI assistance.

When you don't just let ChatGPT do literally everything and at least try to understand the output, putting in some glue code by yourself to tie the logic up together, you may feel like you are the one doing the coding work by taking initiative, and the LLM is merely being your tool to help amplify your abilities as a programmer.

The reality is that in such cases, you are the one who is being a tool for the LLM doing the core work. Asking for an explanation on a complex topic, and asking for a working implementation of an example for that topic are two entirely different beasts. You've already faced multiple tough problems that you could not have solved without AI assistance at this point: you just haven't realized it yet. But once your trusty LLM fails to perfectly zero-shot a scheduling algorithm for your xv6 operating system assignment, you start to panic. You may end up succeeding depending on your prompt tweaking and how much effort you put into getting the LLM to spit out a working answer, but you are for the first time left with a bitter taste, realizing that you are extremely dependent on AI at this point.

One thing I like about Copilot-style coding assistant AI tools is that compared to chat-based LLMs, they let the programmer take more initiative to write the code they want, and try to figure out the latent thought behind the code you are writing. Most of the time, you will be happy with the clever one-liner results quickly being generated and accepted with a simple tab key, but the core responsibility remains within you to express your own intent and logic in the code first. You can implement a [Trie](https://en.wikipedia.org/wiki/Trie) struct and let Copilot generate the trivial search and insert methods for you, but you are still the one who can first explicitly decide whether it will be having a pointer-based or contiguous array-based structure.

## Is AI really that good _right now_?

Now, the doomer student in the previous scenario who has accepted that AI is simply better than them at coding at this point may be seriously thinking that no matter how much more they study from this point, AI will simply be better than them enough to take over their job opportunities once they near graduation. But is AI really that good?

The answer to this question is rather split in the community, and although there are a lot more 'yes' answers nowadays from people sharing their small episodes about how they were able to use AI to solve a **complex problem**, I think the answer is still a firm 'no' for most cases. The reason is simple: I rarely had such an episode.

GenAI benchmarks are often heavily biased and cherry-picked, and people have been claiming that AI is now able to do everything that a programmer is required to do since day 1 from ChatGPT's launch. I too have also tried using ChatGPT/Gemini/Copilot/Claude/Whatever to help me with my work from time to time because every 3 months another tech influencer is promising that another model had a huge breakthrough and its finally good enough as they promised it to be(source: trust me bro)...

Turns out, just using a less popular language is enough to make using LLMs feel more miserable than struggling with learning it yourself. I've been loving to use Rust as my go-to language for any personal projects for about a year or two, and at the same time I've experienced so much frustration with LLM-generated rust code that I'm simply just not using it anymore. But for a more extreme case: try tackling a topic that's not just boilerplate-fueled JSON manipulation, one that may require some actual understanding and re-interpretation of the problem domain. My recent frustrations with LLMs came from [Implementing physics-based environments for Deep Reinforcement Learning](https://github.com/RulerOfCakes/drlcontrol), [URDF modelling and parsing in Rust](https://github.com/RulerOfCakes/mimic/blob/master/src/urdf.rs), [Implementing DQN in Rust](https://github.com/RulerOfCakes/drl-rs/blob/master/agents/src/algorithms/dqn/agent.rs), and perhaps some work involving FFI(Rust<->Python, C++<->JS<->Python).

You may recognize a pattern here: these are all topics that require a lot of domain knowledge, with less boilerplate code scattered over the internet for LLMs to learn from for their pattern matching process. I can't list the source code here for some other examples I've experienced during work, but I can tell you that this pattern persists when the _problem domain steepens in complexity and requires better fundamental understanding for you to implement by yourself_.

## Is AI really taking over developer jobs right now?

A counterpoint to my rambling above of how AI isn't that good enough may be that no matter how I think about the performance of AI, the reality is that AI is already taking over junior jobs as one could clearly see from all the recent big-tech layoffs. Is this true? There are several factors to be considered here:

- Big tech layoffs were already happening before the serious rise of LLMs with GPT-4, and the largest reason for these layoffs was the abundance of developers in the industry blindly hired during the pandemic. It's not too much of a stretch to say that the side effect of this mass-hiring still persists.
- A lot of the layoffs that are seemingly attributed to AI rather than the pandemic hiring bubble are mostly from the 'big tech' as they say, and not from the smaller companies that actually take up the majority of the job opportunities in the industry. Most companies are rather under a hiring-freeze rather than a layoff in cases where they aren't opening junior roles in comparison to a few years ago.
- The lack of junior roles isn't something that is unique to the programming industry, and could rather be seen as a broader phenomenon of the job market, perhaps rather tied to economics than the performance of AI.

I can't 100% deny that AI is taking over _some_ junior jobs, but I also firmly deny that AI is taking over practically _all_ junior jobs. I'd also like to point out that most of such layoffs are still rather in-line with what I've said about the capabilities of AI in coding above: they still cannot replace engineers who are able to tackle complex problems that require a lot of domain knowledge and understanding, rather than simple web/app development tasks that are often just boilerplate code with a few tweaks here and there.

## Well I get that AI isn't good enough _right now_, but what about the future?

Of course, there could be another optimistic breakthrough in model architecture where finally AGI becomes a reality and everyone is freed from labor, but such scenarios are just poking at fantasy rather than realistic expectations. At least with the current state of AI, most serious researchers will agree that we are still far from getting AI to be as good as the businessmen claim it to be. No one even truly understands how transformers make LLMs work so good, and at the same time, no one truly understands if the LLMs actually do 'think' or not, given the vast amount of data they are trained on. Popular AI researchers such as Yann Lecun have been [expressing such thoughts](https://www.youtube.com/watch?v=N09C6oUQX5M) for a while now, with most recently this [popular paper from Apple](https://machinelearning.apple.com/research/illusion-of-thinking) explaining it in detail.

# So what should we do?

If you're a student/junior, I think the best thing you can do is to find a less-dominated topic that you can work on, and try to grow your domain expertise on it. Subjects such as compilers, graphics, machine learning libraries and such are all ones where LLMs greatly fail to provide good results due to the reasons explained above, and you can use this to your advantage to keep your edge over AI prompting. Surprisingly, learning these topics do not hinder your way away from the more 'mainstream' subjects such as web frontend/backend development, as the unique experience gained from studying such deep topics actually does carry over in the form of simply becoming a better programmer. Furthermore, I've personally been noticing that job oppourtunities for such topics are still quite abundant _in comparison_(although to be honest, these jobs are indeed rare by default), so perhaps it may be a good idea to find some new interests.

Furthermore, more generic job opportunities still do exist, and you just have to be able to show your worth being more than just a ChatGPT prompt engineer. The way to achieve this is simple: stop being a prompt engineer, start being a software engineer. Simply stop fearing and start acting will get you further than you may expect.

# Conclusion

I'm sorry, but it looks like Skynet isn't real for now. I myself have recently been interested in the topic of ML libraries aside from my usual interest in graphics and rust, and have quite enjoyed the recent [Scientific Computing in Rust 2025](https://scientificcomputing.rs/) conference. Such interests are quite beneficial for me as a software engineer, not just because I'm literally interested in them and enjoy learning about them, but also because they help me provide more value to other fellow engineers that lack such domain knowledge. Topics are quite more intertwined than one may expect, and you never know what you may learn from studying a topic that is seemingly unrelated to your current work.

For this reason, I think it's better than ever to become a Jack of all trades during your junior phase, as LLMs do help shave off some time learning the mainstream topics, letting you spend more time on the 'side topics' that were often neglected unless absolutely necessary in the past. As it always is with any new tech trend, this can be a beneficial opportunity to grow your own edge as long as you keep on trying.
