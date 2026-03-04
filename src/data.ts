export type Category = string;

export interface KeyConcept {
  name: string;
  description: string;
}

export interface Takeaway {
  name: string;
  description: string;
}

export interface DetailedActivity {
  name: string;
  summary: string;
  supplyList?: string[];
  steps?: string[];
  openEndedQuestions?: string[];
  practicalTips?: string[];
}

export interface Method {
  id: string;
  title: string;
  categories: Category[];
  subtitle: string;
  description: string;
  keyConcepts: KeyConcept[];
  keywords: string[];
  detailedActivities: DetailedActivity[];
  practicalTakeaways: Takeaway[];
  imageUrls: string[];
}

export const CATEGORIES: Category[] = ['All', 'ECEC', 'Youth Work', 'Elderly Group', 'Community', 'Play', 'Arts', 'Music', 'Movement', 'Drama', 'Storytelling'];

export const METHODS: Method[] = [
  {
    id: '1',
    title: 'Play-Based Learning',
    categories: ['ECEC', 'Play', 'Youth Work', 'Drama'],
    subtitle: 'A pedagogical approach where children (and adults) learn through self-directed, intrinsically motivated activity.',
    description: 'In social pedagogy, play is not seen as "time off" from learning, but as the primary site where social skills, emotional regulation, and cognitive flexibility are built. Research shows that play stimulates the frontal cortex, responsible for executive function and social brain development.',
    keyConcepts: [
      { name: 'Intrinsic Motivation', description: 'The activity is done for its own sake, not for an external reward.' },
      { name: 'Agency', description: 'The learner chooses what to do, how to do it, and when to stop.' },
      { name: 'Safe Uncertainty', description: 'Play creates a "laboratory" where individuals can take risks and fail without real-world consequences.' }
    ],
    keywords: ['Free role play', 'Outdoor nature play', 'Guided play', 'Fantasy play'],
    practicalTakeaways: [
      { name: 'Protect the Flow', description: 'If a learner is deeply engaged in play, do not interrupt them for a "scheduled" lesson. The engagement is the lesson.' },
      { name: 'Stop Sanitizing Environments', description: 'Removing all risk creates fragile individuals. Provide "safe-enough" challenges that require problem-solving.' }
    ],
    detailedActivities: [
      { 
        name: '1. Free Role Play — "Playing Market"', 
        summary: 'Children set up and run an imaginary marketplace, freely assigning roles (seller, buyer, cashier) and negotiating social rules through play.',
        supplyList: [
          'Empty food boxes, play fruit/vegetables, or real packaged goods',
          'A small table or shelf as the "shop counter"',
          'Play money or self-made paper coins',
          'Bags, baskets, and a toy cash register (or box)',
          'Price tags and markers for children to write/draw on'
        ],
        steps: [
          'Introduce the idea by asking if children have ever been to a market or store',
          'Set out materials and let children freely decide what the shop sells',
          'Encourage children to assign roles among themselves without adult direction',
          'Step back and observe; only enter the play if invited or if social conflict needs gentle mediation',
          'Allow 20–30 minutes of uninterrupted play, then invite a brief group reflection circle'
        ],
        openEndedQuestions: [
          '"What does your shop sell — and why did you choose those things?"',
          '"What happens if someone wants something but doesn\'t have enough money?"',
          '"How did you decide who gets to be the shopkeeper?"',
          '"What would make your shop even better tomorrow?"'
        ],
        practicalTips: [
          'Resist the urge to correct pricing logic or role assignments — the negotiation is the learning',
          'Rotate the market theme weekly (bakery, post office, flower shop) to keep imaginative engagement fresh',
          'Use the play scenario later as a basis for a group-dictated story or drawing activity'
        ]
      },
      { 
        name: '2. Guided Thematic Play — "The Lost Forest Animal"', 
        summary: 'The educator introduces a small toy animal that is "lost" and needs help finding its home, then steps back as children co-create the story and solution collaboratively.',
        supplyList: [
          'One small toy or puppet animal (e.g., a hedgehog or fox)',
          'A simple map drawn on paper or a large cloth',
          'Building blocks, fabric pieces, or cushions for constructing a "forest"',
          'Optional: small natural items (pine cones, bark, leaves) for scenery'
        ],
        steps: [
          'Bring out the toy animal and tell the children in a warm, calm voice: "This little hedgehog woke up this morning and couldn\'t find its way home. Can we help?"',
          'Invite children to build a "forest" using available materials',
          'Let children negotiate the animal\'s journey, obstacles, and resolution entirely',
          'Gently introduce complications if energy wanes: "Oh no — it\'s starting to rain. What should the hedgehog do?"',
          'Close with the animal "thanking" the group and a short reflection circle'
        ],
        openEndedQuestions: [
          '"Where do you think the hedgehog\'s home might be?"',
          '"What might be scary in the forest at night?"',
          '"How can we make sure the hedgehog feels safe?"',
          '"If the hedgehog had a friend to travel with, what would that friend be like?"'
        ],
        practicalTips: [
          'Keep the educator\'s role minimal after launch — the dramatic tension of the "problem" sustains engagement naturally',
          'The same toy animal can reappear over several weeks in new situations, building narrative continuity',
          'Document children\'s solutions with photos to revisit during group story time'
        ]
      },
      { 
        name: '3. Outdoor Nature Play — "The Mud Kitchen"', 
        summary: 'Children engage in open-ended sensory and imaginative play outdoors using mud, water, stones, and natural materials to "cook," build, and experiment freely.',
        supplyList: [
          'A low outdoor table or wooden pallet as the "kitchen counter"',
          'Old pots, pans, ladles, and spoons',
          'Buckets of water and a patch of accessible soil or sandbox',
          'Natural loose parts: pine cones, sticks, pebbles, leaves, berries (non-toxic)',
          'Waterproof aprons or old clothes'
        ],
        steps: [
          'Set up the mud kitchen area before children arrive with materials visible and accessible',
          'Introduce briefly: "Today the outdoor kitchen is open — you can make anything you like"',
          'Provide no further instruction; allow children to self-organize roles and "menus"',
          'Spend time alongside children as a quiet, interested presence — ask questions rather than suggest',
          'Allow adequate cleanup time as part of the activity (washing hands, putting tools away)'
        ],
        openEndedQuestions: [
          '"What are you cooking today — can you tell me about it?"',
          '"What happens to the mud when you add more water? What about less?"',
          '"How do you know when it\'s ready?"',
          '"What would your dish taste like if it were real?"'
        ],
        practicalTips: [
          'Schedule mud kitchen sessions for at least 40 minutes — sensory and social depth takes time to develop',
          'Avoid correcting "recipes" or suggesting better techniques; the mess is intentional and developmentally valuable',
          'Take observational notes on social dynamics (who leads, who follows, how conflicts resolve) to inform planning'
        ]
      },
      { 
        name: '4. Construction and Building Play — "Build a Home for Everyone"', 
        summary: 'Small groups use blocks and loose materials to collaboratively design and build a shared structure (a house, castle, or animal home), practicing negotiation, spatial reasoning, and shared decision-making.',
        supplyList: [
          'Unit blocks or LEGO/Duplo sets (sufficient for group sharing)',
          'Cardboard tubes, flat cardboard pieces, fabric scraps',
          'Small figurines or animals to populate the structure',
          'Paper and crayons for optional "planning drawings"'
        ],
        steps: [
          'Gather a small group (3–4 children) and present the challenge: "We need to build a home that has a space for everyone in our group — what do we need?"',
          'Offer 2–3 minutes for children to discuss or sketch ideas before building begins',
          'Step back and let the construction unfold; intervene only if conflict becomes stuck',
          'About 10 minutes before clean-up, invite children to do a "tour" of their building and describe each part',
          'Document the finished structure with a photo and display it with children\'s own captions'
        ],
        openEndedQuestions: [
          '"How will everyone fit? What does each person need in their space?"',
          '"What happens if the building falls — is that a problem or an opportunity?"',
          '"What is the most important part of a home? How will you build that?"',
          '"If you could add one more thing, what would it be?"'
        ],
        practicalTips: [
          'Avoid providing a model or image to copy — the design process is more valuable than the product',
          'Mixed-age pairing (4 and 6 year-olds together) enriches the negotiation dynamic considerably',
          'Return to the structure the following day and ask: "What would you change now?" to develop reflective thinking'
        ]
      },
      { 
        name: '5. Fantasy and Superhero Play — "The Helper Heroes"', 
        summary: 'Children invent their own superhero characters with unique helping powers, then use those characters to solve a community problem they identify themselves — merging imaginative play with social awareness.',
        supplyList: [
          'Fabric capes or scarves (plain or self-decorated)',
          'Simple craft supplies: stickers, tape, markers for making "hero badges"',
          'A "problem map" — a large sheet of paper with a simple drawing of the neighborhood or daycare',
          'Optional: cardboard for making shields or helper tools'
        ],
        steps: [
          'Open the session: "Today we\'re going to create our own Helper Heroes — heroes whose power is helping people"',
          'Give each child a scarf or cape and time to design their own hero badge (name + power)',
          'Present a community "problem" on the map (e.g., "The park is lonely because no one visits" or "The animals in the forest are cold")',
          'Invite children to use their hero powers collaboratively to solve the problem through play',
          'Close with each hero sharing what they did and why — a brief spoken reflection in character'
        ],
        openEndedQuestions: [
          '"What is your hero\'s special power — and who does it help most?"',
          '"What is the biggest problem in our neighborhood that a hero could fix?"',
          '"Can your power work alone, or do you need another hero\'s help?"',
          '"How does your hero feel after helping someone?"'
        ],
        practicalTips: [
          'Allowing children to name their own powers (rather than choosing from a list) produces far richer and more personally meaningful play',
          'Link the session to the group\'s real social dynamics — if a child is experiencing exclusion, a "power of friendship" hero can be gently scaffolded',
          'The hero characters can be revisited across weeks as recurring characters in group storytelling and drawing projects'
        ]
      }
    ],
    imageUrls: [
      'https://cdn.pixabay.com/photo/2024/01/24/22/22/knight-8530654_1280.jpg?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '2',
    title: 'Music and Singing',
    categories: ['ECEC', 'Youth Work', 'Elderly Group', 'Community', 'Music'],
    subtitle: 'They involve the use of rhythm, melody, and harmony as a "Common Third"—a shared activity that bridges the gap between the pedagogue and the participant.',
    description: 'Neurologically, group singing releases oxytocin and synchronizes heart rates, creating an immediate sense of physiological and social "belonging" that verbal communication often fails to achieve. Music supports sensory integration, language acquisition, emotional attunement between child and educator, and a shared sense of communal identity.',
    keyConcepts: [
      { name: 'Entrainment', description: 'The synchronization of organisms to an external rhythm.' },
      { name: 'Non-Verbal Connection', description: 'Building relationships without the need for spoken language.' },
      { name: 'Democracy of Sound', description: 'Every voice matters and contributes to the whole.' }
    ],
    keywords: ['Instrument exploration', 'Rhythm and percussion', 'Community Choirs'],
    practicalTakeaways: [
      { name: 'Ditch the "Talent" Myth', description: 'Social pedagogy isn\'t about being a virtuoso. It’s about participation. If you can breathe, you can contribute to a rhythm.' },
      { name: 'Use Pulse to De-escalate', description: 'In high-stress environments, introducing a steady, slow rhythm can physically calm a room faster than shouting instructions.' }
    ],
    detailedActivities: [
      { 
        name: 'Instrument exploration', 
        summary: 'Free exploration of simple instruments (xylophones, shakers, bells) encourages creativity, cause-and-effect reasoning, and cooperative music-making' 
      },
      { 
        name: 'Rhythm and percussion', 
        summary: 'Children use hand drums, clapping, and body percussion to internalize rhythm, develop motor coordination, and build collective timing' 
      },
      { 
        name: 'Community Choirs', 
        summary: 'Low-barrier singing groups focused on the health benefits of "ensemble" work rather than performance perfection.' 
      },
      { 
        name: 'Therapeutic Songwriting', 
        summary: 'Collaboratively writing lyrics to process trauma or celebrate community identity.' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'Visual Arts and Crafts',
    categories: ['Youth Work', 'Arts', 'Community', 'ECEC'],
    subtitle: 'Visual arts and crafts utilize physical media—paint, clay, wood, or textiles—to externalize internal thoughts and feelings.',
    description: 'This method emphasizes the "Common Third," where the focus is on the object being created together, reducing the intensity of direct eye contact or "interrogation-style" support. They provide a non-verbal channel for emotional processing and support children\'s developing sense of self and belonging within their community.',
    keyConcepts: [
      { name: 'Materiality', description: 'Engaging with physical substances to ground the self.' },
      { name: 'Externalization', description: 'Moving internal feelings into an external object.' },
      { name: 'Persistence', description: 'Developing focus and dedication through craft.' }
    ],
    keywords: ['Free drawing', 'Mural making', 'Craft and textile', 'Nature art'],
    practicalTakeaways: [
      { name: 'Process Over Product', description: 'Never judge the quality of the art. The value lies in the conversation that happened while the hands were busy.' },
      { name: 'The Third Chair', description: 'Use the artwork as a "third person" in the room. Instead of asking "How do you feel?", ask "What is happening in this painting?"' }
    ],
    detailedActivities: [
      { 
        name: 'Free drawing and painting', 
        summary: 'Open-ended drawing with varied materials (watercolors, charcoal, clay) encourages individual expression and narrative visualization without adult-imposed templates' 
      },
      { 
        name: 'Collaborative mural making', 
        summary: 'Large-format group painting projects cultivate shared ownership, turn-taking, and collective identity' 
      },
      { 
        name: 'Craft and textile work', 
        summary: 'Age-appropriate weaving, sewing, and material exploration rooted in the Finnish käsityö tradition develop fine motor skills, patience, and cultural continuity' 
      },
      { 
        name: 'Nature art and land art', 
        summary: 'Creating art with natural materials (leaves, stones, sticks) outdoors merges aesthetic expression with ecological awareness and sensory engagement' 
      },
      { 
        name: 'Children\'s self-portrait projects', 
        summary: 'Drawing or painting self-portraits at different points in the year supports identity development, self-reflection, and emotional awareness' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '4',
    title: 'Community Arts',
    categories: ['Youth Work', 'Arts', 'Community', 'Elderly Group'],
    subtitle: 'Community arts is the collective practice of art-making aimed at social change, community health, and neighborhood solidarity.',
    description: 'Unlike "fine art," which is often elitist, community art is rooted in the belief that everyone is an artist and that creative expression is a human right.',
    keyConcepts: [
      { name: 'Inclusivity', description: 'Everyone has the right to participate in cultural life.' },
      { name: 'Public Presence', description: 'Art belongs in the community, not just in galleries.' },
      { name: 'Political Agency', description: 'Using art to voice community needs and advocate for change.' }
    ],
    keywords: ['Environment design', 'Art installations', 'Festivals', 'Protest Art'],
    practicalTakeaways: [
      { name: 'Art is a Utility', description: 'Treat art like plumbing or electricity—it’s a necessary part of a functioning community, not a luxury.' },
      { name: 'Invite the Critics', description: 'Don\'t just work with people who like art. Involve the people who "don\'t do art" to ensure the project has true community roots.' }
    ],
    detailedActivities: [
      { 
        name: 'Child-led environment design', 
        summary: 'Children co-design their classroom spaces (choosing display themes, arranging materials), exercising agency over their shared learning environment' 
      },
      { 
        name: 'Community art installations', 
        summary: 'Small groups create collaborative artworks (collage, textile, sculpture) that are displayed in shared community spaces like libraries or community centers, building civic identity' 
      },
      { 
        name: 'Community Festivals', 
        summary: 'Arts-based events that celebrate local history and diverse cultural identities.' 
      },
      { 
        name: 'Protest Art', 
        summary: 'Collective banner-making or street theater designed to influence local policy.' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '5',
    title: 'Dance and Movement',
    categories: ['Youth Work', 'Movement', 'Community', 'ECEC'],
    subtitle: 'Dance and movement use the body as the primary tool for social pedagogy.',
    description: 'It acknowledges that trauma and social exclusion are often "held" in the body as tension or restricted movement. By moving together, participants reclaim their physical agency and develop spatial awareness.',
    keyConcepts: [
      { name: 'Proprioception', description: 'Awareness of the body in space.' },
      { name: 'Somatic Release', description: 'Releasing emotional tension through physical movement.' },
      { name: 'Relational Space', description: 'Understanding how our bodies interact with others in a shared environment.' }
    ],
    keywords: ['Spontaneous movement', 'Mirror games', 'Narrative movement', 'Circle dances'],
    practicalTakeaways: [
      { name: 'Move First, Talk Second', description: 'If a group is stuck or lethargic, have them stand up and stretch. You cannot have a flexible mind in a frozen body.' },
      { name: 'Respect the Bubble', description: 'Movement is high-vulnerability. Always allow participants to opt-out or stay in their "comfort zone" until trust is earned.' }
    ],
    detailedActivities: [
      { 
        name: 'Spontaneous movement and dancing to music', 
        summary: 'Children move freely to varying tempos and styles, building body awareness, emotional expressivity, and joyful social participation' 
      },
      { 
        name: 'Mirror games', 
        summary: 'Paired or group mirroring exercises build social attunement, non-verbal communication, and sensitivity to others\' bodies' 
      },
      { 
        name: 'Narrative movement', 
        summary: 'Moving as characters from stories or animals develops imaginative embodiment and bridges drama with physical learning' 
      },
      { 
        name: 'Circle dances and folk dance', 
        summary: 'Traditional Finnish circle games and folk dances build cultural identity, rhythmic coordination, and community bonds' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '6',
    title: 'Participatory Theatre and Drama',
    categories: ['Youth Work', 'Drama', 'Community', 'Elderly Group'],
    subtitle: 'Participatory theatre uses drama as a "rehearsal for life." Participants act out real-world problems to find solutions.',
    description: 'Participants act out real-world problems to find solutions, shifting from passive "spectators" to active "spect-actors." In Finland, the Creation POP intergenerational participatory theatre project uses drama and theatre to promote older adults\' social inclusion and facilitate meaningful knowledge exchange between generations.',
    keyConcepts: [
      { name: 'Rehearsal for Reality', description: 'Practicing responses to difficult situations in a safe environment.' },
      { name: 'Empathy Building', description: 'Stepping into the shoes of another character to understand their perspective.' },
      { name: 'Dialogue-Driven', description: 'Using dramatic scenarios to spark conversation and debate.' }
    ],
    keywords: ['Puppet storytelling', 'Role-play drama', 'Forum Theatre', 'Image Theatre'],
    practicalTakeaways: [
      { name: 'Don\'t Give Advice, Show Options', description: 'Instead of telling someone how to handle a situation, have them act it out three different ways.' },
      { name: 'Break the Fourth Wall', description: 'The facilitator (the "Joker") should constantly ask the group, "Is this realistic? What would you do differently?"' }
    ],
    detailedActivities: [
      { 
        name: 'Puppet storytelling', 
        summary: 'Children create and enact stories using handmade puppets, developing narrative structure, empathy for characters, and collaborative authorship' 
      },
      { 
        name: 'Role-play drama', 
        summary: 'Children take on social roles (doctor, shopkeeper, parent) in structured scenarios facilitated by the educator, exploring social norms and relationships' 
      },
      { 
        name: 'Forum Theatre', 
        summary: 'A play depicting a problem is shown; then, the audience is invited to step on stage and change the outcome.' 
      },
      { 
        name: 'Image Theatre', 
        summary: 'Using bodies to create "human statues" that represent abstract concepts like "power" or "poverty."' 
      },
      { 
        name: 'Shadow theatre', 
        summary: 'Children create shadow puppets and project stories using light, merging visual arts, storytelling, and dramatic play into a single collaborative experience' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516280440502-62f5431b9138?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '7',
    title: 'Narrative and Storytelling',
    categories: ['ECEC', 'Storytelling', 'Youth Work', 'Elderly Group'],
    subtitle: 'Narrative and storytelling involve the intentional use of stories to make sense of the world and our place in it.',
    description: 'Social pedagogy uses storytelling to challenge "dominant narratives" (e.g., "I am a failure") and replace them with "preferred narratives" (e.g., "I am someone who has survived challenges"). Narrative methods recognize children as cultural producers and meaning-makers, not passive receivers, which support language development, identity formation, and the ability to process lived experience through story.',
    keyConcepts: [
      { name: 'Meaning-Making', description: 'Constructing personal significance from events.' },
      { name: 'Metaphor', description: 'Using symbols to discuss difficult topics indirectly.' },
      { name: 'Co-authorship', description: 'Creating stories together to build shared understanding.' }
    ],
    keywords: ['Child-dictated storybooks', 'Story stones', 'Story massage', 'Circle story building'],
    practicalTakeaways: [
      { name: 'Watch Your Language', description: 'The stories you tell about participants (in reports or meetings) become the stories they believe about themselves.' },
      { name: 'The Power of "Yet"', description: 'Shift the story from "I can\'t do this" to "I haven\'t learned to do this yet."' }
    ],
    detailedActivities: [
      { 
        name: 'Child-dictated storybooks', 
        summary: 'Children narrate their own invented stories to educators who transcribe them verbatim, after which the child illustrates and "reads" the book to the group, building authorship and literacy' 
      },
      { 
        name: 'Story stones and loose-parts storytelling', 
        summary: 'Children use natural or handmade objects to construct and narrate stories, supporting symbolic representation and creative sequencing' 
      },
      { 
        name: 'Story massage', 
        summary: 'Gentle, consent-based touch routines combined with simple narratives support sensory awareness, emotional security, and social bonding' 
      },
      { 
        name: 'Circle story building', 
        summary: 'Collaborative "chain stories" where each child contributes one element build listening skills, narrative coherence, and social cooperation' 
      },
      { 
        name: 'Digital storytelling', 
        summary: 'Age-appropriate photo-story projects where children photograph their environment and narrate meaning around the images, connecting technology, narrative, and participatory learning' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '8',
    title: 'Narrative and Biographical Methods',
    categories: ['Elderly Group', 'Storytelling', 'Community'],
    subtitle: 'Narrative and biographical methods focus on the systematic exploration of a person\'s life history.',
    description: 'By looking at the "arc" of a life, social pedagogues help individuals understand how their past has shaped their present and how they can exert agency over their future.',
    keyConcepts: [
      { name: 'Lifespan Perspective', description: 'Viewing current behavior in the context of an entire life history.' },
      { name: 'Subjective Truth', description: 'Valuing the individual\'s perception of their history over objective facts.' },
      { name: 'Reflexivity', description: 'The ability to look back on one\'s life and learn from it.' }
    ],
    keywords: ['Life-Lining', 'Biographical Interviews', 'Memory Work'],
    practicalTakeaways: [
      { name: 'Validate the Struggle', description: 'Don\'t gloss over the hard parts of someone\'s biography. Acknowledging the "valleys" is essential for valuing the "peaks."' },
      { name: 'Identify the Hero', description: 'Every survivor has "heroic" moments in their biography. Find them, name them, and use them as the foundation for future growth.' }
    ],
    detailedActivities: [
      { 
        name: 'Life-Lining', 
        summary: 'Drawing a timeline of "peaks" (highs) and "valleys" (lows) to identify patterns of resilience.' 
      },
      { 
        name: 'Biographical Interviews', 
        summary: 'Semi-structured conversations that allow a person to tell their "whole story" without being interrupted by a checklist.' 
      },
      { 
        name: 'Memory Work', 
        summary: 'Using objects, photos, or smells to trigger forgotten memories and integrate them into a coherent identity.' 
      }
    ],
    imageUrls: [
      'https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=800&auto=format&fit=crop'
    ]
  }
];
