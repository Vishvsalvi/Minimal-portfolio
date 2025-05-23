import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, Form, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Project from "./components/Project";
import Article from "./components/Article";
import ArticlePage from "./components/ArticlePage";
import HomePage from "./components/HomePage";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function App() {
  const [email, setEmail] = React.useState("");
  const [showAllProjects, setShowAllProjects] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription email:", email);
    setEmail("");
  };

  const projects = [
    {
      id: 1,
      title: "Zip2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3-n7-5xsnISs4oqzuj6WYN6Qt3Dnu_3LCg&s",
      description: "A technology company that provided online city guides and directory software to newspapers. It was sold to Compaq in 1999 for $307 million. Zip2 is also a gene that encodes a protein called ZIP2, a zinc transporter.",
      link: "https://zip2.com",
      year: "1995 - 1999"
    },
    {
      id: 2,
      title: "PayPal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvOgtP8SY8nNyDEHlKsMW4fWeChg0VVvCgg&s",
      description: "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers.",
      link: "https://paypal.com",
      year: "1999 - 2002"
    },
    {
      id: 3,
      title: "Tesla",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOuF-NAPvG9MBvilaA12yuQ5anIYJQkkw-w&s",
      description: "Tesla, Inc. is an American multinational automotive and clean energy company. Headquartered in Austin, Texas, it designs, manufactures and sells battery electric vehicles, stationary battery energy.",
      link: "https://tesla.com",
      year: "2008 - current"
    },
    {
      id: 4,
      title: "SpaceX",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C1je5qfrN4zboaSX68d-PiHG5Wfov131uw&s",
      description: "SpaceX is responsible for the development of the Falcon 9 and Falcon Heavy launch vehicles, and the Dragon spacecraft. We are going to Mars!",
      link: "https://spacex.com",
      year: "2002 - current"
    },
    {
      id: 5,
      title: "x.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHORmfdA2JY7PMFeIfQWM4JPBT9BBZCYUpA&s",
      description: "X, formerly known as Twitter, is an American social media platform. It is a social media platform that allows users to send and receive messages, images, videos, and other content. It is also an AI company.",
      link: "https://x.com",
      year: "2006 - current"
    }
  ]
  
  const articles = [
    {
      id: 1,
      title: " ⚡ The future is electric",
      date: "Jan 22, 2024",
      content: `Let's be real. Gasoline cars are a relic of the past — like floppy disks, fax machines, or Blockbuster. They pollute, they break down, they're loud, and their efficiency is embarrassingly low. Internal combustion engines convert less than 30% of the fuel's energy into motion. The rest is wasted as heat, noise, and complexity. That's not just inefficient — it's absurd.

Electric vehicles (EVs), on the other hand, are fundamentally superior. And not just slightly better — *orders of magnitude* better. They're cleaner, faster, quieter, and smarter. Every vehicle powered by electrons instead of explosions is a step toward a future where transportation is sustainable, scalable, and actually enjoyable.

## 🔋 Batteries Are the New Oil

People used to say EVs could never compete because of battery limitations. Well, they were wrong. Battery energy density is improving year over year. Costs are plummeting. Range anxiety is being replaced by charging confidence. We're already seeing EVs that go 400+ miles on a single charge — and that's just the beginning.

The battery pack in an EV isn't just a gas tank replacement. It's part of a digital nervous system. It communicates, self-monitors, adapts. And unlike engines that degrade with every mile, battery software can get *better* over time. That's something a gas car will never do.

## 🤖 EVs Don't Just Drive — They Think

Modern electric cars are computers on wheels. Over-the-air updates mean you wake up to a car that's smarter than it was yesterday. Your EV can learn your habits, adapt to your schedule, even navigate itself while you nap (we're getting there). Gas cars? They're stuck in time. They'll never learn, never improve, never evolve.

That's like comparing a horse to a Falcon 9.

## ⚡ Charging Isn't a Problem — It's a Feature

"Charging takes too long" is a lazy argument. You don't refuel your phone at a gas station — you plug it in while you sleep. Same with your EV. Wake up every morning to a full battery. Long trip? Superchargers are fast, everywhere, and getting faster. Besides, stopping for 15 minutes on a 300-mile journey is a *feature*, not a bug. Stretch your legs. Grab a coffee. Your brain needs a recharge, too.

## 🌍 The Big Picture: Planet A

Look — we only have one planet. There is no backup Earth. Climate change is real, and tailpipe emissions are a massive contributor. Transitioning to electric cars isn't just a cool tech upgrade — it's a moral imperative. The faster we ditch fossil fuels, the better the odds that future generations inherit a planet that isn't on fire.

Every EV on the road is a statement. It says: **"I believe in science. I believe in progress. And I'm not waiting for the future — I'm driving it."**

## 🚀 In Closing

The future is electric. Not because it's trendy. Not because it's politically correct. But because it's just… **better**.

Gasoline cars had a good run. But like all outdated tech, they're destined for museums and *Mad Max* reruns. The revolution has already started — and the battery is fully charged.`
    },
    {
      id: 2,
      title: "🚀 Mars: Humanity's Greatest Adventure Begins",
      date: "Feb 15, 2024",
      content: `Mars isn't just another planet. It's our backup drive for civilization. It's the ultimate test of human ingenuity. And it's the most important mission our species has ever undertaken.

Some people ask, "Why Mars?" The better question is: "Why not?"

## 🌍 Earth Is Fragile — Mars Is Insurance

Let's face facts: Earth is a single point of failure for human consciousness. Asteroid impacts, supervolcanic eruptions, nuclear war, climate catastrophe — there are countless ways our home planet could become uninhabitable. Not tomorrow, not next year, but eventually.

Mars represents something profound: a second chance. A backup planet. The first step toward becoming a multi-planetary species. If something terrible happens to Earth, humanity doesn't end with it.

## 🚀 SpaceX: Making the Impossible Inevitable

When SpaceX was founded, people said we were crazy. "Private rockets? Reusable boosters? Landing rockets like in science fiction movies?" They laughed.

We're not laughing now.

Every Falcon 9 landing is a middle finger to the word "impossible." Every Dragon mission proves that private industry can do what governments said only they could do. And Starship? Starship is going to change everything.

## 🏗️ Building a City on Mars

This isn't about planting a flag and taking selfies. We're talking about building a self-sustaining city. Think domes, underground habitats, solar farms, and manufacturing facilities. Think terraforming — slowly transforming Mars into a second Earth.

The technical challenges are staggering:
- **Transportation**: Getting there alive (and with enough cargo)
- **Life support**: Breathing, eating, drinking on a dead planet
- **Energy**: Solar panels, nuclear reactors, maybe even fusion
- **Manufacturing**: Building everything from scratch, with local materials
- **Psychology**: Keeping people sane on a 6-month journey and a hostile world

But here's the thing about "impossible" problems: they're only impossible until someone solves them.

## 🌌 The Long-Term Vision

Mars is just the beginning. Once we crack the code for Mars, we can go anywhere: Europa, Titan, the moons of Jupiter. Eventually, other star systems. We're talking about spreading human consciousness across the galaxy.

This isn't science fiction. This is the roadmap for the next 100 years.

## ⏰ Time Is Running Out

We have a narrow window of opportunity. Right now, Earth is peaceful enough and wealthy enough to fund interplanetary expansion. That won't always be true. Climate change, resource depletion, political instability — any of these could derail the Mars mission for decades or centuries.

We need to go to Mars while we still can. While we still have the luxury of thinking long-term.

## 🚀 The Future Is Multi-Planetary

Some people say we should fix Earth's problems before going to Mars. That's like saying we should solve poverty before developing the internet. Progress isn't linear. Innovation in one area drives breakthroughs in another.

The technologies we develop for Mars — life support, resource utilization, sustainable energy — will make life better on Earth, too.

Mars isn't running away from Earth's problems. It's running toward humanity's future.

**See you on the Red Planet. 🚀**`
    },
    {
      id: 3,
      title: "🧠 Neuralink: The Future Is Already in Your Head",
      date: "Mar 10, 2024", 
      content: `Your brain is the most sophisticated computer in the known universe. 86 billion neurons. Trillions of connections. Processing power that makes the world's fastest supercomputers look like pocket calculators.

But here's the problem: your brain is isolated. Trapped behind bone and skin. Limited to the glacially slow interface of typing, speaking, and gesturing.

Neuralink is about to change that forever.

## 🧠 The Bandwidth Problem

Think about it: your brain processes information at petaflop speeds, but your output is limited to about 40 words per minute of typing. That's like trying to empty the ocean through a straw.

Your thoughts move at the speed of lightning. Your ability to communicate them moves at the speed of... well, typing class.

This is the ultimate technological bottleneck. And Neuralink is the solution.

## ⚡ Direct Neural Interface

Imagine downloading information directly into your brain. Learning Mandarin in an afternoon. Mastering calculus while you sleep. Accessing the entire internet with a thought.

Imagine uploading your thoughts directly to the cloud. Sharing memories, emotions, experiences — not through clumsy words, but through direct neural transmission.

This isn't distant science fiction. The first Neuralink patients are already moving cursors with their minds, typing at speeds that would make professional typists jealous.

## 🩺 Medical Miracles First

Before we get to superhuman capabilities, Neuralink is solving real medical problems:

- **Paralysis**: Restoring movement to people who've lost it
- **Blindness**: Bypassing damaged eyes to send visual data directly to the brain
- **Depression**: Treating mental illness with unprecedented precision
- **Memory loss**: Helping people with dementia regain their memories
- **Seizures**: Predicting and preventing epileptic episodes

Every medical breakthrough brings us closer to enhancement applications.

## 🤖 AI-Human Symbiosis

Here's the really wild part: Neuralink isn't just about connecting brains to computers. It's about connecting brains to AI.

Instead of competing with artificial intelligence, we'll merge with it. Your biological neurons working in harmony with digital ones. Human creativity plus machine processing power.

The result? A new kind of intelligence that's greater than the sum of its parts.

## 🔒 Privacy and Security

"But what about privacy?" "What if someone hacks my brain?"

Fair questions. The security implications are real, and we're taking them seriously. Brain-computer interfaces will need military-grade encryption. Neural firewalls. Thought-level authentication.

But consider this: your phone already knows where you go, who you talk to, what you search for. A direct neural interface might actually be *more* private — no more typing passwords, no more leaving digital footprints.

## 🌍 The Democratization of Intelligence

Today, access to information is limited by education, geography, and economic status. With Neuralink, everyone gets equal access to the sum of human knowledge.

A child in rural Africa could have the same neural capabilities as a PhD from MIT. The playing field doesn't just level — it disappears entirely.

## ⚠️ The Transition Period

Let's be honest: the early adopters are taking a risk. Brain surgery isn't trivial. The technology will improve over time. But someone has to go first.

The paralyzed patients using Neuralink today are heroes. They're not just regaining lost abilities — they're pioneering the future of human consciousness.

## 🚀 Beyond Human

This is ultimately about human potential. For 300,000 years, *Homo sapiens* has been limited by biology. We couldn't fly until we built airplanes. We couldn't see distant galaxies until we built telescopes.

Neuralink is the next step in that journey. Not just augmenting our bodies, but augmenting our minds.

We're about to become something new. Something better. Something that would seem like magic to our ancestors.

**The future isn't coming. It's thinking its way here. 🧠**`
    }
  ]

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage 
            projects={projects}
            articles={articles}
            email={email}
            setEmail={setEmail}
            showAllProjects={showAllProjects}
            setShowAllProjects={setShowAllProjects}
            handleSubmit={handleSubmit}
          />
        } 
      />
      <Route 
        path="/article/:id" 
        element={<ArticlePage articles={articles} />} 
      />
    </Routes>
  );
}