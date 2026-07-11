// Highly accurate, fully developed PSLE Syllabus Database structured around Singapore Science Syllabus
let syllabusData = [
    {
        id: 1,
        key: "livingThings",
        level: "P3",
        theme: "Diversity",
        name: "Living and Non-Living Things",
        connections: "P5 Systems (Transport / Circulatory / Respiration)",
        keywords: ["characteristics", "reproduce", "respond to changes", "chlorophyll", "fungi", "bacteria", "decomposers", "spores", "mould growth"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Core Characteristics vs Needs</span>
                    <p class="mt-1 font-sans">Students must strictly separate what living things <strong>need</strong> from what they <strong>do</strong>:</p>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-medium font-sans">
                        <li><strong>What they NEED:</strong> Water, food, and air (essential for survival).</li>
                        <li><strong>What they DO:</strong> They <strong>grow</strong>, <strong>reproduce</strong>, and <strong>respond to changes</strong> in their surroundings.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Plants vs Animals (Observable Differences)</span>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans">
                        <li><strong>Plants:</strong> Contain a green pigment called <strong>chlorophyll</strong> which allows them to <strong>make their own food</strong>. They do not move from place to place.</li>
                        <li><strong>Animals:</strong> Cannot make their own food. They must feed on plants or other animals and can move from place to place on their own.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans font-sans font-sans">3. Fungi & Bacteria (The Decomposers)</span>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans">
                        <li><strong>Fungi:</strong> (e.g. yeast, mushrooms, bread mould). They are NOT plants because they lack chlorophyll and cannot make their own food. They <strong>reproduce by spores</strong>.</li>
                        <li><strong>Bacteria:</strong> <strong>Microscopic</strong>, single-celled living things that split to reproduce.</li>
                        <li>Both act as <strong>decomposers</strong>, obtaining nutrients by breaking down dead plants, animals, or organic matter they grow on.</li>
                    </ul>
                </div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs font-sans">
                    <span class="font-bold text-amber-800 font-sans font-sans"><i class="fa-solid fa-flask mr-1"></i>MOE Investigation focus: Mould Growth Conditions</span>
                    <p class="mt-1 text-slate-700 font-medium">Bread mould requires three specific conditions to grow: <strong>Moisture (Water)</strong>, <strong>Air</strong>, and <strong>Warmth</strong> (darkness is NOT a required condition, but warmth is!).</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        key: "materials",
        level: "P3",
        theme: "Diversity",
        name: "Diversity of Materials",
        connections: "P4 Heat, P4 Light & Shadow",
        keywords: ["strength", "flexibility", "waterproof", "transparency", "floats", "sinks"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans">1. Objects vs Materials</span>
                    <p class="mt-1 font-sans">An object is the item itself (e.g., a bottle), while the <strong>material</strong> is what the object is made of (e.g., plastic, metal, wood, glass, ceramics, fabric).</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans">2. Core Physical Properties</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>Strength:</strong> The ability of a material to support a heavy load without breaking or tearing. (Tested by hanging weights).</li>
                        <li><strong>Flexibility:</strong> The ability of a material to bend without breaking.</li>
                        <li><strong>Waterproof vs Absorbent:</strong> A <strong>waterproof</strong> material does not absorb water. An absorbent material sucks up water.</li>
                        <li><strong>Transparency:</strong> Classified into transparent (allows most light to pass through), translucent (allows some light to pass through), or opaque (allows no light to pass through).</li>
                        <li><strong>Ability to float or sink:</strong> Some materials <strong>float</strong> on water while others <strong>sink</strong>.</li>
                    </ul>
                </div>
                <div class="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl text-xs font-sans">
                    <span class="font-bold text-indigo-800"><i class="fa-solid fa-lightbulb mr-1 font-sans"></i>Answering Sentence Frame:</span>
                    <p class="mt-1 text-slate-700 font-medium">"If this object is made of <strong>metal</strong>, it can support a heavy load because it has high <strong>strength</strong>."</p>
                </div>
            </div>
        `
    },
    {
        id: 13,
        key: "lifecycles",
        level: "P3",
        theme: "Cycles",
        name: "Life Cycles of Plants & Animals",
        connections: "P5 Cycles (Plant & Human Reproduction)",
        keywords: ["germination", "seedling", "reproduce", "stages", "oxygen", "moisture", "warmth", "resembles"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Plant Life Cycle & Germination</span>
                    <p class="mt-1 font-sans">The life cycle of a flowering plant flows from: <strong>Seed &rarr; Seedling &rarr; Adult Plant</strong>.</p>
                    <p class="mt-1 font-sans font-sans">A seed needs 3 conditions for <strong>germination</strong> (W.O.W.):</p>
                    <ul class="list-disc pl-5 font-semibold text-slate-700 font-sans">
                        <li>Water (Moisture)</li>
                        <li>Oxygen (Air)</li>
                        <li>Warmth</li>
                    </ul>
                    <p class="mt-1 text-[11px] text-slate-500 font-sans font-medium"><em>Note: Light is NOT needed for germination! Light is only needed when the seedling develops green leaves to make food.</em></p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans font-sans font-sans font-sans">2. Animal Life Cycles</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans font-sans font-sans font-sans">
                        <li><strong>3-Stage Life Cycle:</strong> Egg &rarr; Nymph/Tadpole &rarr; Adult (e.g., Cockroach, Grasshopper, Frog).
                            <ul class="list-circle pl-5 text-[11px] text-slate-600 font-sans font-medium">
                                <li>A cockroach nymph <strong>resembles</strong> the adult but has no wings and cannot <strong>reproduce</strong>.</li>
                                <li>A frog's young (tadpole) lives in water and breathes with gills, unlike the adult frog.</li>
                            </ul>
                        </li>
                        <li><strong>4-Stage Life Cycle:</strong> Egg &rarr; Larva &rarr; Pupa &rarr; Adult (e.g., Butterfly, Mosquito, Mealworm Beetle).
                            <ul class="list-circle pl-5 text-[11px] text-slate-600 font-sans font-medium">
                                <li>The larva and pupa do not resemble the adult.</li>
                                <li>The pupa stage is inactive and does not feed, while the larva feeds quickly and greedily to grow.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="bg-amber-50 border border-amber-200 p-2 text-xs font-sans font-medium">
                    <span class="font-bold text-amber-800">Why are Cycles important?</span>
                    <p class="text-slate-700 mt-0.5">They ensure the continuity of their own kind so they do not go extinct, and allow us to predict patterns of growth and pest control (e.g., draining stagnant water to break the mosquito life cycle at the egg/larva stages).</p>
                </div>
            </div>
        `
    },
    {
        id: 14,
        key: "magnets",
        level: "P3",
        theme: "Interactions",
        name: "Interaction of Forces (Magnets)",
        connections: "P6 Interactions (Forces)",
        keywords: ["magnetic materials", "attract", "repel", "north-south", "stroke method", "electromagnet", "temporary"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase">1. Properties of Magnets</span>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans">
                        <li>A magnet only attracts <strong>magnetic materials</strong>: Iron, Steel, Cobalt, and Nickel. Non-magnetic metals include Copper, Aluminium, and Gold.</li>
                        <li>Every magnet has two poles: North Pole and South Pole. Magnetic strength is STRONGEST at the poles.</li>
                        <li>Like poles <strong>repel</strong>; unlike poles <strong>attract</strong>.</li>
                        <li><strong>The Suspension Rule:</strong> A freely suspended bar magnet always comes to rest in a <strong>North-South</strong> direction.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Making Temporary Magnets</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans font-sans font-sans">
                        <li><strong>The Stroke Method:</strong> Stroking a magnetic material (like an iron nail) with one pole of a magnet in a single, continuous direction many times.</li>
                        <li><strong>The Electrical Method:</strong> Wrapping wire coils around an iron nail and connecting it to a battery to create an <strong>electromagnet</strong>. The nail becomes a <strong>temporary</strong> magnet only when electric current flows.</li>
                    </ul>
                </div>
                <div class="bg-rose-50 border border-rose-200 p-2.5 rounded-xl text-xs font-sans font-medium font-sans animate-pulse">
                    <span class="font-bold text-rose-800"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Syllabus Crucial Rule:</span>
                    <p class="mt-1 text-slate-700">The ONLY sure test to confirm if an unknown metal bar is a magnet is <strong>repulsion</strong>. A magnet will attract magnetic materials, but can only repel another magnet.</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        key: "digestive",
        level: "P3",
        theme: "Systems",
        name: "Human Digestive System",
        connections: "P5 Human Circulatory & Respiratory Systems",
        keywords: ["digestion", "digestive juices", "absorption", "small intestine", "large intestine", "saliva", "churned"],
        notes: `
            <div class="space-y-2 text-xs sm:text-sm font-sans font-medium">
                <p class="font-bold text-slate-800 text-sm font-sans font-sans">Key Concepts:</p>
                <ul class="list-disc pl-5 space-y-1 font-sans">
                    <li><strong>Digestion</strong> is the breakdown of complex food substances into simple soluble substances.</li>
                    <li><strong>Mouth</strong>: Food is cut into smaller pieces by teeth and mixed with <strong>saliva</strong>. Digestion starts here.</li>
                    <li><strong>Gullet</strong>: Transports food down to the stomach. No digestion or absorption occurs here.</li>
                    <li><strong>Stomach</strong>: Food is mixed and <strong>churned</strong> with highly acidic <strong>digestive juices</strong>. More digestion occurs here.</li>
                    <li><strong>Small Intestine</strong>: Digestion is COMPLETED. Digested food is absorbed into the bloodstream (<strong>absorption</strong>).</li>
                    <li><strong>Large Intestine</strong>: Absorbs excess water and mineral salts from undigested food. No digestion occurs here.</li>
                    <li><strong>Anus</strong>: Removes undigested food (feces) from the body.</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        key: "matter",
        level: "P4",
        theme: "Cycles",
        name: "Cycles in Matter & Its States",
        connections: "P5 Cycles (Water Cycle)",
        keywords: ["mass", "volume", "compress", "fixed shape", "occupies space", "gas", "spill bucket", "displacement"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Core Definition of Matter</span>
                    <p class="mt-1 font-sans">Matter is anything that has <strong>mass</strong> and <strong>occupies space</strong> (has volume). Non-matter includes light, shadows, sound, and heat.</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans">2. Properties of Three States</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>Solids:</strong> Have a <strong>fixed shape</strong> and <strong>fixed volume</strong>. Cannot be compressed.</li>
                        <li><strong>Liquids:</strong> Have <strong>no fixed shape</strong> (takes the shape of its container), but have a <strong>fixed volume</strong>. Cannot be compressed.</li>
                        <li><strong>Gases:</strong> Have <strong>no fixed shape</strong> and <strong>no fixed volume</strong>. <strong>Can be compressed</strong> because their particles are widely spaced with empty spaces between them.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase">3. Core Measuring Methods</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>Displacement Method:</strong> To find the volume of an irregular solid (or an inflated ball), use a <strong>spill bucket</strong> (displacement can). Press the object into water filled to the brim; the volume of overflowing water equals the volume of the object.</li>
                        <li><strong>Air Compression Rule:</strong> When additional air is pumped into a rigid, sealed container, the volume of air remains the same (equal to the container volume), but its <strong>mass increases</strong> because more air is packed inside.</li>
                    </ul>
                </div>
                <div class="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl text-xs font-medium font-sans font-sans">
                    <span class="font-bold text-indigo-800 font-sans"><i class="fa-solid fa-circle-exclamation mr-1"></i>Exam Trap:</span>
                    <p class="mt-1 text-slate-700">"Liam dented a sealed metal container. The volume of air inside decreased, but the <strong>mass of air remained unchanged</strong> because no air could escape the sealed container."</p>
                </div>
            </div>
        `
    },
    {
        id: 15,
        key: "light",
        level: "P4",
        theme: "Energy",
        name: "Energy Forms & Uses (Light & Shadows)",
        connections: "P3 Diversity of Materials (Transparency)",
        keywords: ["straight lines", "reflect", "opaque", "translucent", "transparent", "shadow", "distance", "orientation"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans font-sans font-sans font-sans">1. Light and Vision</span>
                    <p class="mt-1 font-sans font-sans">Light is a form of energy. We see objects because they are light sources OR because they <strong>reflect light</strong> from a source into our eyes. (Mirrors and the Moon are not sources of light!).</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Light Behavior & Interaction</span>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans font-sans">
                        <li><strong>Light travels in straight lines</strong>.</li>
                        <li>When light hits materials, it interacts differently based on transparency:
                            <ul class="list-circle pl-5 text-[11px] text-slate-600 font-sans">
                                <li>Transparent: Allows <strong>most light</strong> to pass through.</li>
                                <li>Translucent: Allows <strong>some light</strong> to pass through.</li>
                                <li>Opaque: Allows <strong>no light</strong> to pass through.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase">3. Shadow Behavior (Tested heavily!)</span>
                    <p class="mt-1 font-sans">A <strong>shadow</strong> is formed when light is <strong>blocked</strong> by an opaque or translucent object.</p>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans font-sans font-sans">
                        <li><strong>Size of Shadow:</strong> To make a shadow <strong>larger</strong>, move the light source closer to the object, or move the screen further away from the object.</li>
                        <li><strong>Shape of Shadow:</strong> Changes based on the <strong>direction or side</strong> of the object facing the light rays.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 16,
        key: "heat",
        level: "P4",
        theme: "Energy",
        name: "Energy Forms & Uses (Heat & Temperature)",
        connections: "P3 Diversity of Materials (Conductors)",
        keywords: ["heat flow", "higher temperature", "lower temperature", "gain heat", "lose heat", "expand", "contract", "poor conductor"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase">1. Heat vs Temperature</span>
                    <p class="mt-1 font-medium font-sans font-sans font-sans"><strong>Heat</strong> is a form of energy. <strong>Temperature</strong> is a measure of the degree of hotness of an object (measured in °C using thermometers or dataloggers).</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Law of Heat Flow</span>
                    <p class="mt-1 font-sans"><strong>Heat flows from a region of higher temperature to a region of lower temperature</strong> until both reach the same temperature.</p>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-medium font-sans">
                        <li>Objects <strong>gain heat</strong> &rarr; temperature increases &rarr; objects <strong>expand</strong> (increase in size).</li>
                        <li>Objects <strong>lose heat</strong> &rarr; temperature decreases &rarr; objects <strong>contract</strong> (decrease in size).</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">3. Good vs Poor Heat Conductors</span>
                    <p class="mt-1 font-sans">Since all materials conduct heat, they are simply grouped by how fast heat flows through them:</p>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans font-sans">
                        <li><strong>Good Conductors of Heat:</strong> Materials that allow heat to flow through them quickly (like metals).</li>
                        <li><strong>Poor Conductors of Heat:</strong> Materials that slow down the flow of heat (like plastics, wood, glass, and <strong>trapped air</strong>). There is no such thing as a complete \"heat blocker\" because heat still flows through them, just very slowly!</li>
                    </ul>
                </div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs font-medium font-sans animate-fade-in font-sans">
                    <span class="font-bold text-amber-800 font-sans"><i class="fa-solid fa-compass mr-1 font-sans"></i>Syllabus Application Focus:</span>
                    <p class="mt-1 text-slate-700"><strong>Expansion Joints:</strong> Bridges and railway tracks have gaps to allow expansion on hot days, preventing buckling.</p>
                    <p class="mt-1 text-slate-700 font-sans font-sans font-sans"><strong>Animal Adaptations:</strong> Thick fur on polar bears traps air. Air is a <strong>poor conductor of heat</strong>, which <strong>reduces the rate of heat loss</strong> from their warm bodies to the cold surroundings.</p>
                </div>
            </div>
        `
    },
    {
        id: 17,
        key: "transport",
        level: "P5",
        theme: "Systems",
        name: "Plant Transport System",
        connections: "P3 Systems (Human Digestive), P5 Human Circulatory",
        keywords: ["water-carrying tubes", "food-carrying tubes", "mineral salts", "sugars", "xylem", "phloem", "upwards", "downwards"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Substances Transported</span>
                    <p class="mt-1 font-sans">For survival and growth, a plant needs a system to move water, mineral salts, and food (sugars) around.</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Two Types of Tubes</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>Water-carrying tubes:</strong> Transport water and dissolved <strong>mineral salts</strong> absorbed by the roots <strong>upwards</strong> to the leaves.</li>
                        <li><strong>Food-carrying tubes:</strong> Transport <strong>sugars</strong> made by the leaves during photosynthesis to all parts of the plant, flowing both <strong>upwards</strong> and <strong>downwards</strong>.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">3. Plant vs. Human Transport Systems</span>
                    <p class="mt-1 font-sans">While humans have a heart to pump blood in closed loops, plants have no heart or pump. Their water and food move in separate, non-connecting tubes, and water strictly travels in one upward direction.</p>
                </div>
                <div class="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl text-xs font-medium font-sans">
                    <span class="font-bold text-indigo-800 font-sans"><i class="fa-solid fa-lightbulb mr-1"></i>Exam Question Focus: Ringing Experiments</span>
                    <p class="mt-1 text-slate-700">If a ring of bark is cut away, removing the outer food-carrying tubes but leaving the inner water-carrying tubes intact, the leaves stay healthy (they still get water). However, a swelling will form above the cut because food made in the leaves cannot travel down to the roots and accumulates there.</p>
                </div>
            </div>
        `
    },
    {
        id: 18,
        key: "circulatory",
        level: "P5",
        theme: "Systems",
        name: "Human Circulatory & Respiratory Systems",
        connections: "P3 Systems (Digestive), P5 Plant Transport",
        keywords: ["circulatory", "respiratory", "gases", "air sacs", "capillaries", "heart", "blood vessels", "oxygen-rich", "carbon dioxide-rich"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Air and Breathing (Respiratory System)</span>
                    <p class="mt-1 font-sans">The respiratory system takes in air (a mixture of <strong>gases</strong> like nitrogen, oxygen, and carbon dioxide). Our lungs contain tiny <strong>air sacs</strong> surrounded by microscopic blood vessels called <strong>capillaries</strong>.</p>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans">
                        <li>In the air sacs, oxygen passes from the air into the blood, and carbon dioxide plus water vapor pass from the blood into the air sacs to be exhaled.</li>
                        <li><strong>Syllabus Warning:</strong> Exhaled air still contains more nitrogen and oxygen than carbon dioxide. It simply has less oxygen and more carbon dioxide than inhaled air!</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Moving Substances (Circulatory System)</span>
                    <p class="mt-1 font-sans font-sans">Consists of the <strong>heart</strong> (the pump), <strong>blood vessels</strong> (carrying tubes), and blood (the medium).</p>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans">
                        <li>The heart pumps <strong>oxygen-rich</strong> blood from the lungs to all parts of the body.</li>
                        <li>The body cells use oxygen and digested food, producing carbon dioxide. This <strong>carbon dioxide-rich</strong> blood is pumped back to the heart, and then to the lungs to remove the gas.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">3. System-to-System Collaboration (Essential for PSLE)</span>
                    <p class="mt-1 font-semibold text-teal-700 font-sans font-sans">The Digestive, Respiratory, and Circulatory Systems must work together:</p>
                    <p class="mt-1 text-slate-700 font-sans">The <strong>digestive system</strong> breaks down food into simple substances, which are absorbed into the blood. The <strong>respiratory system</strong> takes in oxygen. The <strong>circulatory system</strong> then transports both digested food and oxygen to all parts of the body, allowing cells to release energy through respiration to keep us alive.</p>
                </div>
            </div>
        `
    },
    {
        id: 19,
        key: "electrical",
        level: "P5",
        theme: "Systems",
        name: "Electrical Systems",
        connections: "P4 Interactions (Electromagnets), P6 Interactions (Forces)",
        keywords: ["electric circuit", "conductors", "insulators", "series", "parallel", "fused", "resistance", "electric current"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Simple Circuit Basics</span>
                    <p class="mt-1 font-sans">For an <strong>electric current</strong> to flow, there must be a closed loop connected to an energy source (battery/cell).</p>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans">
                        <li><strong>Electrical conductors:</strong> Materials that allow electricity to flow through them easily (like iron, copper, graphite/pencil lead).</li>
                        <li><strong>Electrical insulators:</strong> Materials that block the flow of electricity (like plastic, rubber, glass, dry wood).</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans font-sans">2. Arrangement of Batteries and Bulbs</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>More batteries in series:</strong> Increases electric current, making the bulbs shine brighter. (Batteries must be connected positive pole to negative pole).</li>
                        <li><strong>Bulbs in Series:</strong> Bulbs share the electric current and create more <strong>resistance</strong> (shining dimmer). If one bulb is <strong>fused</strong> (its filament breaks), the circuit becomes open, and all other bulbs go out.</li>
                        <li><strong>Bulbs in Parallel:</strong> Each bulb has its own independent path. They do not share current (shining brighter). If one bulb fuses, the other paths remain closed, and the other bulbs remain lit with unchanged brightness.</li>
                    </ul>
                </div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs font-sans">
                    <span class="font-bold text-amber-800 font-sans font-sans font-sans"><i class="fa-solid fa-bolt mr-1"></i>Electrical Safety & Saving:</span>
                    <p class="mt-1 text-slate-700 font-medium font-sans">Overloading circuits or touching switches with wet hands is dangerous because tap water is an electrical conductor. Saving electricity reduces fuel consumption, protecting our environment.</p>
                </div>
            </div>
        `
    },
    {
        id: 8,
        key: "watercycle",
        level: "P5",
        theme: "Cycles",
        name: "Cycles in Water (Water Cycle)",
        connections: "P4 Cycles (States of Matter), P4 Energy (Heat)",
        keywords: ["melting", "freezing", "boiling", "evaporation", "condensation", "heat gain", "heat loss", "exposed surface area", "humidity", "continuous supply"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Process of State Changes</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans font-medium">
                        <li><strong>Melting:</strong> Solid ice gains heat at 0°C to become liquid water.</li>
                        <li><strong>Boiling:</strong> Liquid water gains heat at 100°C throughout the liquid to become water vapor.</li>
                        <li><strong>Freezing:</strong> Liquid water loses heat at 0°C to become solid ice.</li>
                        <li><strong>Evaporation:</strong> Liquid water gains heat at any temperature (only at the surface) to become water vapor.</li>
                        <li><strong>Condensation:</strong> Warm water vapor touches a cooler surface, loses heat, and turns into liquid water droplets.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Evaporation Rate Factors</span>
                    <p class="mt-1 font-sans">The rate at which water evaporates increases with:</p>
                    <ul class="list-disc pl-5 mt-0.5 space-y-0.5 font-sans font-medium">
                        <li>Higher temperature of the water.</li>
                        <li>Higher wind speed.</li>
                        <li>Larger <strong>exposed surface area</strong>.</li>
                        <li>Lower <strong>humidity</strong> (drier surrounding air).</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans">3. The Natural Water Cycle</span>
                    <p class="mt-1 text-slate-700 font-sans">The Sun heats up water bodies, causing water to evaporate into water vapor. As warm water vapor rises, it meets cooler air higher up, loses heat, and condenses into tiny water droplets to form clouds, eventually returning to Earth as rain.</p>
                    <p class="mt-1 text-teal-800 font-semibold font-sans">Importance: This cycle ensures a <strong>continuous supply</strong> of clean water to support life on Earth. Water must be conserved, and pollution must be prevented to avoid ruining clean water resources.</p>
                </div>
            </div>
        `
    },
    {
        id: 20,
        key: "forces",
        level: "P6",
        theme: "Interactions",
        name: "Interaction of Forces",
        connections: "P4 Interactions (Magnets)",
        keywords: ["force", "gravitational force", "frictional force", "elastic spring force", "opposes motion", "surface roughness", "weight", "mass", "air resistance"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-sans font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. What is a Force?</span>
                    <p class="mt-1 font-sans font-sans">A <strong>force</strong> is a push or a pull. Forces cannot be seen, but their effects can be observed:</p>
                    <ul class="list-disc pl-5 mt-1 space-y-0.5 font-sans font-medium text-slate-700">
                        <li>Change the motion of an object (start, stop, speed up, or slow down).</li>
                        <li>Change the direction of a moving object.</li>
                        <li>Change the shape of an object.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Types of Forces</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1.5 font-sans">
                        <li><strong>Gravitational Force:</strong> A non-contact force that pulls all objects with mass toward the center of the Earth. It gives objects their <strong>weight</strong>.</li>
                        <li><strong>Frictional Force:</strong> A contact force that acts between two surfaces rubbing together and always <strong>opposes motion</strong>.
                            <p class="text-[11px] text-teal-700 font-bold mt-0.5 font-sans font-sans"><i class="fa-solid fa-vial"></i> OPAL Highlight: The surface area of contact does NOT affect frictional force! Frictional force is only affected by surface roughness and the weight of the object.</p>
                        </li>
                        <li><strong>Elastic Spring Force:</strong> Exerted by stretched or compressed elastic materials (springs, rubber bands) to return to their original shapes.</li>
                        <li><strong>Magnetic Force:</strong> Pulls or pushes from a distance between magnets or magnetic materials.</li>
                    </ul>
                </div>
                <div class="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl text-xs font-medium font-sans">
                    <span class="font-bold text-indigo-800"><i class="fa-solid fa-scale-balanced mr-1"></i>Mass vs Weight (Syllabus Difference):</span>
                    <p class="mt-1 text-slate-700 font-sans font-sans"><strong>Mass</strong> is the amount of matter in an object and is constant everywhere. <strong>Weight</strong> is the gravitational force acting on an object and changes depending on the strength of gravitational pull (e.g. an astronaut weighs less on the Moon, but their mass remains the same).</p>
                </div>
            </div>
        `
    },
    {
        id: 21,
        key: "energy_conversions",
        level: "P6",
        theme: "Energy",
        name: "Energy Forms & Conversions",
        connections: "P4 Energy (Heat & Light), P5 Systems (Electrical)",
        keywords: ["kinetic energy", "potential energy", "chemical potential energy", "elastic potential energy", "gravitational potential energy", "energy conversion", "conservation of energy", "depleted"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-medium font-sans font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">1. Core Law of Conservation</span>
                    <p class="mt-1 font-sans">Energy is required for things to do work. The Law of <strong>conservation of energy</strong> states that energy cannot be created or destroyed, but can only be converted from one form to another.</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans">2. Energy Forms</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>Kinetic Energy:</strong> Energy of moving objects (faster speed = more kinetic energy).</li>
                        <li><strong>Potential Energy:</strong> Stored energy. This includes:
                            <ul class="list-circle pl-5 text-[11px] text-slate-600 font-sans font-sans font-sans">
                                <li><strong>Chemical Potential Energy:</strong> Stored in food, coal, oil, natural gas, batteries, and firewood.</li>
                                <li><strong>Gravitational Potential Energy:</strong> Stored in objects due to their height (higher position = more GPE).</li>
                                <li><strong>Elastic Potential Energy:</strong> Stored in stretched or compressed elastic materials (springs, rubber bands).</li>
                            </ul>
                        </li>
                        <li><strong>Other active forms:</strong> Light, sound, electrical, and heat energy.</li>
                    </ul>
                </div>
                <div class="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs font-sans">
                    <span class="font-bold text-amber-800 font-sans"><i class="fa-solid fa-arrows-left-right font-sans"></i>Real-world Play and Safety Rules:</span>
                    <p class="mt-1 text-slate-700 font-sans"><strong>Roller Coaster Conversion:</strong> At the top of a hill, an object has the maximum gravitational potential energy. As it rolls down, this GPE converts into kinetic energy. Height determines the speed of motion.</p>
                    <p class="mt-1 text-slate-700"><strong>Conservation:</strong> Non-renewable energy sources (coal, natural gas, oil) can be <strong>depleted</strong>. We must save energy at home to extend resources.</p>
                </div>
            </div>
        `
    },
    {
        id: 22,
        key: "photosynthesis",
        level: "P6",
        theme: "Energy",
        name: "Energy Forms & Uses (Photosynthesis)",
        connections: "P3 Diversity (Plants), P5 Systems (Plant Transport)",
        keywords: ["photosynthesis", "respiration", "chlorophyll", "light energy", "oxygen", "carbon dioxide", "chemical potential energy", "glucose"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-medium font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans font-sans">1. How Plants Make Food (Photosynthesis)</span>
                    <p class="mt-1 font-sans">Plants contain <strong>chlorophyll</strong> which traps <strong>light energy</strong> from the Sun and converts it into <strong>chemical potential energy</strong> (stored food/sugars/<strong>glucose</strong>):</p>
                    <div class="p-2 bg-slate-100 rounded text-center my-2 font-mono text-[11px] sm:text-xs text-slate-700 font-sans">
                        Carbon Dioxide + Water &rarr; Glucose (Food) + Oxygen
                    </div>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase">2. Breaking Down Food (Respiration)</span>
                    <p class="mt-1 font-sans">All living cells in both plants and animals use oxygen to break down food to get energy for survival processes:</p>
                    <div class="p-2 bg-slate-100 rounded text-center my-2 font-mono text-[11px] sm:text-xs text-slate-700 font-sans font-sans">
                        Glucose + Oxygen &rarr; Carbon Dioxide + Water + Energy
                    </div>
                    <p class="text-[11px] text-teal-700 font-bold mt-1 font-sans"><i class="fa-solid fa-clock"></i> Critical Syllabus Concept: Respiration occurs ALL THE TIME (day and night). Photosynthesis only occurs in the presence of light!</p>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase">3. All Living Things Depend on the Sun</span>
                    <p class="mt-1 font-sans">The Sun is the primary source of energy for all living things. Herbivores eat plants to get energy, and carnivores eat herbivores. Decomposers (fungi, bacteria) get energy by breaking down dead matter. Thus, energy flows from the Sun to all organisms.</p>
                </div>
            </div>
        `
    },
    {
        id: 23,
        key: "ecology",
        level: "P6",
        theme: "Interactions",
        name: "Interactions within the Environment",
        connections: "P3 Diversity (Living things), P6 Energy (Food Webs)",
        keywords: ["habitat", "community", "population", "structural adaptation", "behavioural adaptation", "predator", "prey", "food web", "deforestation", "global warming", "pollution"],
        notes: `
            <div class="space-y-3 text-xs sm:text-sm font-sans font-medium font-sans font-sans">
                <div>
                    <span class="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded tracking-wide uppercase">1. Habitats and Communities</span>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans">
                        <li><strong>Habitat:</strong> The place where an organism lives (e.g. pond, seashore, mangrove, garden, field, tree).</li>
                        <li><strong>Population:</strong> A group of organisms of the same kind living together in a habitat.</li>
                        <li><strong>Community:</strong> All the different populations living and interacting together in a habitat.</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">2. Survival Adaptations</span>
                    <p class="mt-1 font-sans">Organisms have adaptations to survive physical factors (temperature, light, water, air, soil pH) and interact with others:</p>
                    <ul class="list-disc pl-5 mt-1 space-y-1 font-sans font-sans">
                        <li><strong>Structural Adaptation:</strong> Physical body features (e.g. streamline body shape to reduce resistance, thick blubber to retain heat).</li>
                        <li><strong>Behavioural Adaptation:</strong> Specific actions or habits (e.g. migrating, active only at night/nocturnal to avoid heat).</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded tracking-wide uppercase font-sans">3. Energy Flow (Food Webs)</span>
                    <p class="mt-1 font-sans">Interconnected food chains form a **food web**. It shows the transfer of energy from producers (plants) to consumers (animals/predators) and decomposers.</p>
                </div>
                <div class="bg-rose-50 border border-rose-200 p-2.5 rounded-xl text-xs font-medium font-sans">
                    <span class="font-bold text-rose-800"><i class="fa-solid fa-earth-americas mr-1"></i>Man's Impact & Conservation:</span>
                    <p class="mt-1 text-slate-700 font-sans">Human activities like <strong>deforestation</strong> (destroying habitats), industrial emissions (leading to enhanced greenhouse effect and <strong>global warming</strong>), and <strong>pollution</strong> cause extinction and reduce resources. Conservation is vital to protect ecosystems and ensure continuity of life.</p>
                </div>
            </div>
        `
    }
];

// Core Practice Lab & Quiz Database for All 15 Topics (P3-P6, Excluding Cells)
const practiceDatabase = {
    "livingThings": {
        title: "P3 Living & Non-Living Things",
        qceQuestion: "Liam found organism X growing on a rotting tree stump. Organism X did not have green leaves. Explain how organism X obtains food.",
        qceAnswer: { qtype: [12, 13], concept: [14, 15, 16], evidence: [4, 5, 8, 9] },
        cerModel: {
            c: "Organism X cannot make its own food.",
            e: "It is growing on a rotting tree stump and lacks green leaves.",
            r: "Organism X is a fungus, which does not contain chlorophyll to photosynthesize. It acts as a decomposer, absorbing nutrients from the decaying tree stump."
        },
        mcqs: [
            { q: "Which of the following is a basic need of all living things, rather than a capability?", options: ["Growing in size", "Breathes and reproduces", "Food, water, and air", "Responding to surroundings"], correct: 2, explanation: "Water, food, and air are essential needs for survival, whereas growing and reproducing are biological actions." },
            { q: "A cloud moves across the sky when wind blows. Why is a cloud classified as a non-living thing?", options: ["It does not grow.", "Its movement is not an autonomous response to a change in the environment.", "It contains water.", "It can change its shape."], correct: 1, explanation: "Clouds change position purely due to external wind forces, which is not an autonomous response to a change/stimulus." },
            { q: "Why are fungi not classified as plants?", options: ["They reproduce by spores.", "They lack chlorophyll and cannot make their own food.", "They can only grow on land.", "They are microscopic organisms."], correct: 1, explanation: "Unlike plants, fungi do not have chlorophyll to capture light energy for food creation; instead, they absorb nutrients from organic matter." },
            { q: "Which of the following conditions is NOT required for bread mould to grow?", options: ["Moisture", "Warmth", "Light", "Air"], correct: 2, explanation: "Mould does not contain chlorophyll and does not photosynthesize, so light is not required for its growth." },
            { q: "How do bacteria reproduce?", options: ["By producing spores", "By dividing or splitting", "By laying tiny eggs", "By growing seeds"], correct: 1, explanation: "Bacteria are microscopic single-celled organisms that reproduce by dividing or splitting into two cells." }
        ],
        oeq: {
            q: "A slice of dried toast was placed in an open container in a warm room, while a slice of moist bread was placed in a sealed plastic bag in the same room. Which slice will grow mould first? Explain why.",
            expectedKeywords: ["moisture", "mould", "grow", "water", "warmth"],
            correctCER: {
                c: "The slice of moist bread will grow mould first.",
                e: "The slice of dried toast has no moisture, while the moist bread has water inside the sealed bag.",
                r: "Bread mould requires moisture, warmth, and air to grow. The dried toast lacks the water required for spores to grow into mould."
            }
        }
    },
    "materials": {
        title: "P3 Diversity of Materials",
        qceQuestion: "Explain why steel is used to make structural beams for tall buildings instead of fragile glass.",
        qceAnswer: { qtype: [0], concept: [4, 5, 8], evidence: [10] },
        cerModel: {
            c: "Steel is used to make structural beams instead of glass.",
            e: "Glass breaks easily under heavy loads, whereas steel does not.",
            r: "Steel is a material with high strength, allowing it to support heavy loads without breaking, unlike glass which is fragile."
        },
        mcqs: [
            { q: "Which property is tested by hanging heavier weights on strips of different materials until they tear?", options: ["Flexibility", "Strength", "Waterproofness", "Transparency"], correct: 1, explanation: "Strength is defined as the capability to support a heavy load without breaking or tearing." },
            { q: "An object is flexible if it can...", options: ["support heavy loads easily", "allow most light to pass through", "bend without breaking", "prevent water from passing through"], correct: 2, explanation: "Flexibility is the physical property of a material that allows it to bend easily without snapping." },
            { q: "Which of the following materials is transparent, waterproof, and fragile?", options: ["Steel", "Plastic", "Glass", "Ceramic"], correct: 2, explanation: "Glass is transparent (allows most light through), waterproof (does not absorb water), and fragile (breaks easily)." },
            { q: "An engineer wants to build a swimming kickboard. What key properties must the material have?", options: ["Heavy, transparent, absorbent", "Floats on water, waterproof, flexible", "Sinks in water, strong, stiff", "Fragile, translucent, absorbent"], correct: 1, explanation: "A kickboard needs to float on water to support the swimmer, and must be waterproof so it does not gain mass from water." },
            { q: "Which sentence correctly describes a material and its property?", options: ["Fabric is used for raincoats because it is highly absorbent.", "Metal is used for keyrings because it has high strength.", "Glass is used for windows because it is completely opaque.", "Clay is used for flower pots because it is flexible."], correct: 1, explanation: "Metal has high strength and is durable, making it excellent for keyrings that resist snapping." }
        ],
        oeq: {
            q: "Explain why raincoats are made of plastic instead of cotton fabric.",
            expectedKeywords: ["waterproof", "absorb", "plastic", "dry"],
            correctCER: {
                c: "Raincoats are made of plastic instead of cotton fabric.",
                e: "Plastic does not absorb water, while cotton fabric absorbs water quickly.",
                r: "Plastic is waterproof and prevents water from passing through, keeping the wearer dry, whereas cotton fabric is highly absorbent."
            }
        }
    },
    "lifecycles": {
        title: "P3 Life Cycles of Plants & Animals",
        qceQuestion: "Explain why a gardener drains stagnant water pools around the crops to reduce mosquito breeding stages.",
        qceAnswer: { qtype: [0], concept: [10, 11], evidence: [3, 4, 5, 6, 7] },
        cerModel: {
            c: "Draining stagnant water pools reduces the population of mosquito pests.",
            e: "Mosquito eggs, larvae, and pupae develop in stagnant water.",
            r: "Draining stagnant water deprives the mosquito's aquatic stages of their required habitat, successfully breaking their life cycle."
        },
        mcqs: [
            { q: "Which of the following lists the correct conditions needed for a seed to germinate?", options: ["Water, light, and soil", "Water, oxygen, and warmth", "Fertilizer, light, and warmth", "Carbon dioxide, water, and oxygen"], correct: 1, explanation: "Seeds do not need light to germinate; they require Water, Oxygen, and Warmth (W.O.W.)." },
            { q: "Why is the pupa stage of a butterfly considered a stage of dramatic change?", options: ["It eats quickly and greedily.", "It undergoes internal changes to transform into an adult butterfly.", "It flies around to search for food.", "It lays many tiny eggs in water."], correct: 1, explanation: "During the pupa stage, the organism is inactive and does not feed, but undergoes transformation into the winged adult." },
            { q: "How is a cockroach nymph similar to its adult form?", options: ["Both can fly.", "Both can reproduce.", "Both resemble each other in body shape.", "Both go through a pupa stage."], correct: 2, explanation: "Cockroaches have a 3-stage life cycle. The nymph resembles the adult but is smaller, wingless, and cannot reproduce." },
            { q: "At which stage of a plant's life cycle does it begin to make its own food?", options: ["Seed stage", "Seedling stage with leaves", "Flower stage", "Fruit stage"], correct: 1, explanation: "A seedling only photosynthesizes once it grows true green leaves containing chlorophyll. Before that, it gets food from the seed leaves." },
            { q: "Why are life cycles important for the survival of any species?", options: ["To prevent organisms from growing old.", "To ensure the continuity of their own kind so they do not go extinct.", "To allow organisms to fly.", "To help plants move from place to place."], correct: 1, explanation: "Life cycles are repeated patterns of growth and reproduction that ensure the species reproduces and continues to exist." }
        ],
        oeq: {
            q: "A seed was placed on dry cotton wool near a sunny window in a warm room. Explain why the seed did not germinate.",
            expectedKeywords: ["germinate", "water", "moisture", "dry", "oxygen", "warmth"],
            correctCER: {
                c: "The seed did not germinate.",
                e: "The cotton wool was dry.",
                r: "Water is one of the three essential conditions (along with oxygen and warmth) required for germination. Without moisture, the seed cannot begin to grow."
            }
        }
    },
    "magnets": {
        title: "P3 Interaction of Forces (Magnets)",
        qceQuestion: "A magnet attracts iron pins but repels object Y. Explain what we can conclude about object Y.",
        qceAnswer: { qtype: [6], concept: [4, 5], evidence: [1, 2, 3] },
        cerModel: {
            c: "Object Y is a magnet.",
            e: "The magnet attracted the iron pins but repelled object Y.",
            r: "Only the like poles of two magnets can repel each other. Magnetic materials are only attracted, never repelled."
        },
        mcqs: [
            { q: "A magnet attracts iron pins but repels object Y. What can you conclude about object Y?", options: ["Object Y is made of plastic.", "Object Y is a non-magnetic metal like copper.", "Object Y is also a magnet.", "Object Y is made of steel."], correct: 2, explanation: "Repulsion is the only sure test for magnets. Magnetic materials are only attracted; only another magnet can be repelled." },
            { q: "Which of the following is a magnetic metal?", options: ["Aluminium", "Copper", "Nickel", "Gold"], correct: 2, explanation: "The four magnetic materials are Iron, Steel, Nickel, and Cobalt." },
            { q: "When a bar magnet is suspended freely, which direction does it come to rest in?", options: ["East-West", "North-South", "Randomly", "Towards the sun"], correct: 1, explanation: "A freely suspended magnet will always align with the Earth's magnetic field and rest in a North-South direction." },
            { q: "How can you increase the strength of an electromagnet?", options: ["Use a plastic core instead of iron.", "Increase the number of wire turns around the iron nail.", "Decrease the number of batteries.", "Use a shorter wire."], correct: 1, explanation: "Increasing wire coils or adding batteries increases magnetic strength." },
            { q: "Which part of a bar magnet has the strongest magnetic pull?", options: ["The exact center", "Both North and South poles", "The North pole only", "The South pole only"], correct: 1, explanation: "Magnetic strength is always concentrated and strongest at the poles." }
        ],
        oeq: {
            q: "Explain why repulsion is the only sure test to prove that a metal bar is a magnet.",
            expectedKeywords: ["repel", "attract", "magnetic material", "magnet"],
            correctCER: {
                c: "Repulsion is the only sure test to prove a metal bar is a magnet.",
                e: "A magnet attracts magnetic materials as well as the unlike pole of another magnet, but only repels the like pole of another magnet.",
                r: "An unmagnetized steel bar will be attracted to any pole of a magnet, but it will never be repelled. Only another magnet can experience repulsion."
            }
        }
    },
    "digestive": {
        title: "P3 Human Digestive System",
        qceQuestion: "Explain how the human digestive system collaborates with the human circulatory system after we eat.",
        qceAnswer: { qtype: [0], concept: [6, 7], evidence: [1, 2, 3] },
        cerModel: {
            c: "The digestive system and circulatory system work collaboratively.",
            e: "Food is fully digested and absorbed in the small intestine.",
            r: "The absorbed nutrients enter the bloodstream, and the circulatory system pumps this blood to all parts of the body."
        },
        mcqs: [
            { q: "In which part of the human digestive system is digestion completed and nutrients absorbed into the bloodstream?", options: ["Stomach", "Small Intestine", "Large Intestine", "Mouth"], correct: 1, explanation: "Digestion is completed in the small intestine, and digested food is absorbed into the blood through its walls." },
            { q: "What is the primary function of the large intestine?", options: ["To digest proteins.", "To absorb water and mineral salts from undigested food.", "To absorb digested food into the blood.", "To produce acidic digestive juices."], correct: 1, explanation: "No digestion occurs in the large intestine. It only absorbs excess water and salts from undigested waste." },
            { q: "In which of the following organs does digestion NOT take place?", options: ["Mouth", "Gullet", "Stomach", "Small Intestine"], correct: 1, explanation: "The gullet is a muscular tube that simply pushes food down to the stomach. No digestion occurs here." },
            { q: "What is the function of teeth in the mouth during digestion?", options: ["To digest starches chemically.", "To break food into smaller pieces to increase its surface area.", "To absorb water.", "To churn food with acidic juices."], correct: 1, explanation: "Teeth physically break down food, increasing the surface area for digestive juices to act on more quickly." },
            { q: "Why are digestive juices present in the mouth, stomach, and small intestine?", options: ["To wash food down the gullet.", "To chemically break down food into simple soluble substances.", "To absorb water.", "To convert oxygen into energy."], correct: 1, explanation: "Digestive juices contain enzymes that chemically simplify food for absorption." }
        ],
        oeq: {
            q: "Describe how the digestive system works collaboratively with the circulatory system.",
            expectedKeywords: ["small intestine", "blood", "absorbed", "transport", "circulatory", "circulatory system"],
            correctCER: {
                c: "The digestive system and circulatory system work collaboratively.",
                e: "Digested food is absorbed into the bloodstream in the small intestine.",
                r: "The circulatory system then transports these absorbed nutrients through blood vessels to all parts of the body to support cellular respiration."
            }
        }
    },
    "matter": {
        title: "P4 Cycles in Matter & States",
        qceQuestion: "Explain why pumping additional air into a rigid metal tyre does not change its volume.",
        qceAnswer: { qtype: [0], concept: [6, 7, 8], evidence: [1, 2] },
        cerModel: {
            c: "The volume of air inside the rigid tyre remains the same.",
            e: "The tyre has a rigid shape and air is pumped into it.",
            r: "Air is a gas which has no fixed volume and is highly compressible. The pumped air simply compresses, taking up the fixed volume of the rigid tyre."
        },
        mcqs: [
            { q: "Why can air be compressed inside a closed syringe while water cannot?", options: ["Air is a liquid.", "Air has a fixed volume.", "Air is a gas with no fixed volume, and its particles have empty spaces between them.", "Water has no fixed volume."], correct: 2, explanation: "Gases have no fixed volume and can be compressed because their particles are widely spaced with empty spaces between them." },
            { q: "Which state of matter has a fixed volume but no fixed shape?", options: ["Solid", "Liquid", "Gas", "Non-matter"], correct: 1, explanation: "Liquids have a fixed volume but take the shape of their container (no fixed shape)." },
            { q: "If you pump 50cm³ of air into a sealed, rigid 200cm³ container already filled with air, what is the final volume of air inside?", options: ["250 cm³", "200 cm³", "50 cm³", "150 cm³"], correct: 1, explanation: "Air has no fixed volume and can compress, so it will still occupy the entire 200cm³ volume of the rigid container." },
            { q: "How can we find the volume of an irregular solid like a stone?", options: ["Using a ruler to measure its sides", "Using a spill bucket and measuring cylinder", "Weighing it on a beam balance", "Compressing it inside a syringe"], correct: 1, explanation: "We use the displacement method (water overflow/spill bucket) to find the volume of irregular solids." },
            { q: "Which of the following is non-matter?", options: ["Shadow", "Air", "Water", "Ice"], correct: 0, explanation: "Shadow is non-matter because it has no mass and does not occupy space; it is simply a region of darkness." }
        ],
        oeq: {
            q: "Liam inverted an empty glass and pressed it straight down into a tub of water. Explain why water did not enter and fill the glass completely.",
            expectedKeywords: ["air", "occupies space", "enter", "blocked", "escape"],
            correctCER: {
                c: "Water did not enter and fill the glass completely.",
                e: "The glass was inverted and pressed straight down.",
                r: "Air is matter and occupies space. The air trapped inside the glass blocked the water from entering, since air has no way of escaping."
            }
        }
    },
    "light": {
        title: "P4 Energy: Light & Shadows",
        qceQuestion: "Explain why we can see objects around us that do not produce their own light.",
        qceAnswer: { qtype: [0], concept: [5, 6, 7], evidence: [1, 2] },
        cerModel: {
            c: "We see non-luminous objects around us.",
            e: "These objects do not produce light on their own.",
            r: "Light from a source hits the object, reflects off its surface, and travels in straight lines into our eyes."
        },
        mcqs: [
            { q: "A light source is placed at position A, casting a shadow of a wooden doll onto a screen. To make the shadow smaller, what should we do?", options: ["Move the light source closer to the wooden doll.", "Move the wooden doll closer to the light source.", "Move the wooden doll closer to the screen.", "Move the screen further away from the wooden doll."], correct: 2, explanation: "Moving the object closer to the screen (or further from the light source) allows more light rays to pass around it, casting a smaller shadow." },
            { q: "Which of the following is NOT a source of light?", options: ["Firefly", "Mirror", "Lightning", "Burning candle"], correct: 1, explanation: "A mirror does not produce its own light; it only reflects light from other sources." },
            { q: "Why is a shadow formed behind an opaque object?", options: ["Light is reflected in different directions.", "Light is blocked because light travels in straight lines and cannot pass through opaque objects.", "The object absorbs coldness.", "Light bends around the object."], correct: 1, explanation: "Light travels in straight lines. When blocked by an opaque object, light cannot pass through, creating a region of darkness (shadow)." },
            { q: "A material allows some light to pass through. How is this material classified?", options: ["Transparent", "Translucent", "Opaque", "Reflective"], correct: 1, explanation: "Translucent materials allow some light to pass through, creating a blurry outline." },
            { q: "How does the shape of a shadow change?", options: ["It depends on the intensity of the light source.", "It depends on the side of the object facing the light source.", "It depends on the thickness of the screen.", "It depends on the room temperature."], correct: 1, explanation: "The shape of a shadow depends on the orientation (direction or side) of the object relative to the straight light rays." }
        ],
        oeq: {
            q: "Explain why you can see your reflection in a smooth metal mirror but not in a rough wooden plank.",
            expectedKeywords: ["reflect", "smooth", "straight lines", "direction", "scattered"],
            correctCER: {
                c: "A clear reflection is formed on the metal mirror but not the wood.",
                e: "The mirror surface is smooth, while the wooden plank is rough.",
                r: "The smooth metal surface reflects light in a regular, orderly direction into our eyes, whereas the rough surface scatters reflected light in all directions."
            }
        }
    },
    "heat": {
        title: "P4 Energy: Heat & Temperature",
        qceQuestion: "Describe why a cold metal spoon placed in hot tea becomes hot after three minutes.",
        qceAnswer: { qtype: [0], concept: [5, 6, 7], evidence: [1, 2] },
        cerModel: {
            c: "The cold metal spoon becomes hot after three minutes.",
            e: "Spoon is made of metal and is placed in hot tea.",
            r: "Heat flows from a region of higher temperature (hot tea) to lower temperature (cold spoon). Metal is a good conductor of heat, allowing heat to flow into the spoon quickly."
        },
        mcqs: [
            { q: "Why does a metal container feel colder to touch than a plastic container of the same temperature?", options: ["Metal is at a lower temperature than plastic.", "Metal is a good conductor of heat and conducts heat away from the hand faster.", "Plastic is a good conductor of heat and transfers coldness.", "Metal absorbs coldness from the hand."], correct: 1, explanation: "Metal is a good conductor of heat. It conducts heat from the warmer hand away much faster than plastic, making our skin feel colder." },
            { q: "Heat flows from...", options: ["a larger object to a smaller object", "a region of higher temperature to a region of lower temperature", "a region of lower temperature to a region of higher temperature", "good conductors to electrical insulators only"], correct: 1, explanation: "The fundamental law of heat transfer states that heat always flows from a place of higher temperature to a place of lower temperature." },
            { q: "What happens to a metal rod when it is heated?", options: ["It gains heat and contracts.", "It loses heat and expands.", "It gains heat and expands in size.", "It loses mass and becomes shorter."], correct: 2, explanation: "When heated, materials gain heat, their temperature rises, and they expand (increase in volume)." },
            { q: "Why do engineers leave gaps in railway tracks?", options: ["To save metal materials.", "To allow the tracks to expand on hot days without buckling.", "To allow trains to run faster.", "To reduce frictional forces."], correct: 1, explanation: "Tracks expand as they gain heat on hot days. Gaps prevent them from bending and buckling." },
            { q: "Which of the following is a poor conductor of heat?", options: ["Iron rod", "Copper wire", "Trapped air", "Aluminium foil"], correct: 2, explanation: "Air is a poor conductor of heat. Trapping air is highly effective at reducing the rate of heat loss." }
        ],
        oeq: {
            q: "Explain how thick fur helps a polar bear survive in cold environments.",
            expectedKeywords: ["air", "traps", "poor conductor", "rate of heat loss", "body heat"],
            correctCER: {
                c: "Thick fur helps the polar bear keep warm.",
                e: "The thick fur traps a layer of air close to the bear's skin.",
                r: "Air is a poor conductor of heat. The trapped air reduces the rate of heat loss from the bear's warm body to the cold surrounding environment."
            }
        }
    },
    "transport": {
        title: "P5 Plant Transport System",
        qceQuestion: "Explain why water-carrying tubes in plants only transport substances in an upward direction.",
        qceAnswer: { qtype: [0], concept: [1, 2], evidence: [4, 5, 6, 7] },
        cerModel: {
            c: "Water-carrying tubes only flow upwards.",
            e: "Roots absorb water from the soil, which is needed by the leaves.",
            r: "Water is absorbed strictly by the roots from the soil. The water-carrying tubes transport this water and dissolved mineral salts upwards to the leaves for photosynthesis."
        },
        mcqs: [
            { q: "Which tubes are responsible for transporting water from the roots to the leaves, and in which direction do they flow?", options: ["Food-carrying tubes, flowing upwards and downwards", "Water-carrying tubes, flowing upwards only", "Water-carrying tubes, flowing downwards only", "Food-carrying tubes, flowing upwards only"], correct: 1, explanation: "Water-carrying tubes (xylem) strictly transport water and mineral salts upwards from the roots to the leaves." },
            { q: "Where is food made in a flowering plant, and how is it transported?", options: ["Made in roots, transported upwards by water tubes.", "Made in leaves, transported upwards and downwards by food-carrying tubes.", "Made in flowers, transported downwards by gravity.", "Made in stems, transported by veins."], correct: 1, explanation: "Food (sugars) is produced in green leaves during photosynthesis and is transported to all plant parts (upwards and downwards) by food-carrying tubes (phloem)." },
            { q: "How does a plant transport system differ from the human circulatory system?", options: ["Plants have a heart to pump food.", "Plant transport tubes are separate and do not join in a closed continuous loop, and there is no pump.", "Plants use blood vessels to transport water.", "Humans have separate tubes for water and mineral salts."], correct: 1, explanation: "Unlike the closed, heart-driven human circulatory system, plant transport tubes are open-ended, separate systems without a central pump." },
            { q: "What will happen to the leaves of a plant if its water-carrying tubes are blocked?", options: ["They will make more food.", "They will wilt and dry up because water cannot reach them.", "They will swell with food.", "They will grow larger."], correct: 1, explanation: "Leaves require water for survival and photosynthesis; blocking water tubes cuts off water supply, causing wilting." },
            { q: "Which substance is transported by the food-carrying tubes?", options: ["Mineral salts", "Rainwater", "Sugars", "Oxygen"], correct: 2, explanation: "Sugars produced during leaf photosynthesis are transported to roots and stems by food-carrying tubes." }
        ],
        oeq: {
            q: "A farmer cut away a complete ring of bark from the bottom of a tree stem. After a few weeks, the leaves remained healthy, but a swelling was seen above the cut. Explain why.",
            expectedKeywords: ["water-carrying tubes", "food-carrying tubes", "roots", "swelling", "sugars", "bark"],
            correctCER: {
                c: "The leaves stayed healthy while a swelling formed above the cut.",
                e: "The ring removed the outer bark, which contains the food-carrying tubes, but left the inner wood intact.",
                r: "The inner water-carrying tubes were not removed, so water still reached the leaves to keep them healthy. However, sugars made in the leaves could not travel down to the roots because the food-carrying tubes were cut, accumulating above the cut to form a swelling."
            }
        }
    },
    "circulatory": {
        title: "P5 Human Circulatory & Respiratory Systems",
        qceQuestion: "Explain why your heart beats faster when you perform vigorous exercise.",
        qceAnswer: { qtype: [0], concept: [4, 5], evidence: [1, 2] },
        cerModel: {
            c: "The heart beats faster during exercise.",
            e: "Body cells require a more rapid release of energy.",
            r: "Vigorous exercise requires more energy. The heart beats faster to pump oxygen and digested food through blood vessels to active muscle cells for faster respiration."
        },
        mcqs: [
            { q: "What is the composition of carbon dioxide in exhaled air compared to inhaled air?", options: ["Exhaled air consists of 100% carbon dioxide.", "Exhaled air has a higher percentage of carbon dioxide than inhaled air, but still consists mostly of nitrogen and oxygen.", "Exhaled air has no carbon dioxide.", "Inhaled air contains more carbon dioxide than exhaled air."], correct: 1, explanation: "Inhaled air contains about 0.03% carbon dioxide, while exhaled air contains about 4%. The rest of the exhaled air is mostly nitrogen (~78%) and oxygen (~16%)." },
            { q: "Which organ pumps blood rich in oxygen to all parts of the human body?", options: ["Lungs", "Stomach", "Heart", "Air sacs"], correct: 2, explanation: "The heart is the muscular pump that drives oxygenated blood to body tissues and returns deoxygenated blood back to the lungs." },
            { q: "What takes place inside the air sacs of the lungs?", options: ["Digestion of food", "Exchange of oxygen and carbon dioxide gases between the air and blood capillaries", "Production of blood cells", "Filtering of dust particles"], correct: 1, explanation: "Gas exchange occurs across air sac membranes: oxygen diffuses into blood, and carbon dioxide diffuses out of blood into air sacs." },
            { q: "Where does deoxygenated (carbon dioxide-rich) blood flow to after leaving the body tissues?", options: ["Directly back to body tissues", "Pushed to the heart, which pumps it to the lungs to remove carbon dioxide", "Stored in the large intestine", "Flows out of the gullet"], correct: 1, explanation: "The deoxygenated blood returns to the right side of the heart, which pumps it to the lungs to release carbon dioxide and gain oxygen." },
            { q: "Which three human systems must work together to ensure body cells get energy?", options: ["Digestive, nervous, skeletal", "Digestive, respiratory, circulatory", "Excretory, muscular, circulatory", "Respiratory, reproductive, nervous"], correct: 1, explanation: "Digestive (provides glucose), Respiratory (provides oxygen), and Circulatory (transports both to cells) work collaboratively for cell respiration." }
        ],
        oeq: {
            q: "Explain why your breathing rate and heart rate increase when you run a race.",
            expectedKeywords: ["heart rate", "breathing rate", "oxygen", "energy", "faster", "respiration"],
            correctCER: {
                c: "Your heart and breathing rates increase.",
                e: "You are running a race and your body requires more energy.",
                r: "Active running requires more energy. Your breathing rate increases to take in more oxygen, and your heart rate increases to pump oxygen-rich blood faster to working muscles for cellular respiration."
            }
        }
    },
    "electrical": {
        title: "P5 Electrical Systems",
        qceQuestion: "Identify which material, iron or plastic, should be used to complete a gap in a closed circuit to light the bulb.",
        qceAnswer: { qtype: [0], concept: [4, 5], evidence: [1, 2] },
        cerModel: {
            c: "Iron should be used to complete the gap.",
            e: "Iron allows current to flow and light the bulb, while plastic does not.",
            r: "Iron is an electrical conductor which allows electric current to flow through it to close the circuit, unlike plastic which is an electrical insulator."
        },
        mcqs: [
            { q: "Why are electrical wires coated with plastic instead of copper?", options: ["Plastic is an electrical conductor.", "Copper is an electrical insulator.", "Plastic is an electrical insulator that prevents current from passing into our hands, keeping us safe.", "Plastic makes the wire stronger."], correct: 2, explanation: "Copper is a great conductor of electricity, while plastic is an electrical insulator. Coating wires with plastic prevents current from escaping, ensuring safety." },
            { q: "In a series circuit with three bulbs, what happens if one bulb fuses?", options: ["The others shine twice as bright.", "The other bulbs remain lit with unchanged brightness.", "All other bulbs go out because the path is open.", "Current flows backward."], correct: 2, explanation: "A series circuit has only one path. If one bulb's filament breaks, the circuit opens, stopping current flow entirely." },
            { q: "Why do bulbs connected in parallel shine brighter than the same bulbs connected in series with the same battery power?", options: ["Parallel bulbs have higher electrical resistance.", "Parallel bulbs do not share current; each has its own closed path to the battery.", "Series bulbs receive more energy.", "Batteries deplete faster in series."], correct: 1, explanation: "In parallel, each bulb is on an independent path directly connected to the battery, receiving full voltage." },
            { q: "Which of the following is an electrical conductor?", options: ["Rubber glove", "Glass rod", "Pencil lead (graphite)", "Wooden ruler"], correct: 2, explanation: "Graphite/carbon is a non-metal that conducts electricity. Rubber, glass, and wood are electrical insulators." },
            { q: "Why is it dangerous to touch electrical switches with wet hands?", options: ["Water is a poor conductor of heat.", "Water increases the battery voltage.", "Tap water is an electrical conductor, and current can flow through water into our hands, causing an electric shock.", "Water makes the switch rusty."], correct: 2, explanation: "Tap water contains impurities and acts as an electrical conductor, creating a path for current to cause shocks." }
        ],
        oeq: {
            q: "Explain why parallel arrangement of bulbs is preferred for household lighting over series arrangement.",
            expectedKeywords: ["parallel", "series", "fuses", "independent path", "lit"],
            correctCER: {
                c: "Parallel bulb arrangement is preferred for households.",
                e: "In parallel, each bulb has an independent path, unlike series bulbs.",
                r: "If one household bulb fuses in parallel, the other paths remain closed and the remaining bulbs stay lit. In series, a single fused bulb opens the entire circuit, turning off all lights."
            }
        }
    },
    "watercycle": {
        title: "P5 Cycles in Water (Water Cycle)",
        qceQuestion: "Explain how hot soup forms tiny water droplets on the underside of a plastic container lid.",
        qceAnswer: { qtype: [0], concept: [1, 2], evidence: [4, 5] },
        cerModel: {
            c: "Water droplets form on the underside of the lid.",
            e: "The warm water vapor rising from the soup touches the cooler lid.",
            r: "The warm water vapor loses heat to the cooler surface of the plastic lid and condenses to form liquid water droplets."
        },
        mcqs: [
            { q: "Which process of state change in the water cycle involves a loss of heat?", options: ["Melting", "Evaporation", "Boiling", "Condensation"], correct: 3, explanation: "Condensation is the process where gaseous water vapor loses heat to a cooler surface and turns back into liquid water." },
            { q: "Which of the following factors does NOT affect the rate of evaporation of water?", options: ["The presence of light.", "The temperature of the surrounding air.", "The exposed surface area of the water.", "The strength of the wind."], correct: 0, explanation: "Light itself is not a direct factor in evaporation. Heat, wind speed, exposed surface area, and humidity are the core factors. Light only increases evaporation indirectly if it heats up the water." },
            { q: "What happens during evaporation?", options: ["Liquid water gains heat and turns into gaseous water vapor.", "Water vapor loses heat and turns into rain.", "Liquid water turns into solid ice by gaining heat.", "Clouds absorb oxygen and release water."], correct: 0, explanation: "Evaporation is the transition from liquid to gas at any temperature below boiling, which requires heat gain." },
            { q: "What is the primary role of the Sun in the water cycle?", options: ["To push clouds across the ocean.", "To provide heat energy for water to evaporate from oceans and land.", "To cool down the Earth's atmosphere.", "To produce oxygen for clouds."], correct: 1, explanation: "Solar heat drive the water cycle by evaporating surface water into the atmosphere." },
            { q: "Why is the natural water cycle important for life on Earth?", options: ["It prevents the Sun from getting too hot.", "It ensures a continuous supply of clean fresh water to support life.", "It helps plants move from place to place.", "It keeps the soil completely dry."], correct: 1, explanation: "Fresh water falls as rain, replenishing land reservoirs and sustaining terrestrial ecosystems continuously." }
        ],
        oeq: {
            q: "A metal plate was placed above a beaker of boiling water. Drops of water began to form on the underside of the plate. Explain how this happened.",
            expectedKeywords: ["water vapor", "cooler", "loses heat", "condenses", "water droplets"],
            correctCER: {
                c: "Water droplets formed on the underside of the metal plate.",
                e: "Warm water vapor rose from the boiling water and touched the cooler metal plate.",
                r: "The warm water vapor lost heat to the cooler surface of the plate and condensed to form liquid water droplets."
            }
        }
    },
    "forces": {
        title: "P6 Interaction of Forces",
        qceQuestion: "Compare the speed of a toy car sliding on glass and sandpaper, and explain how friction affects it.",
        qceAnswer: { qtype: [0], concept: [10, 11], evidence: [1, 2] },
        cerModel: {
            c: "The toy car moves slower on sandpaper than on glass.",
            e: "Sandpaper has a rougher surface than glass.",
            r: "Sandpaper's rougher surface creates a greater frictional force. Frictional force opposes motion, reducing the speed of the toy car more."
        },
        mcqs: [
            { q: "Which of the following forces is a non-contact force that always acts at a distance?", options: ["Frictional Force", "Gravitational Force", "Elastic Spring Force", "Air Resistance"], correct: 1, explanation: "Gravitational force pulls all objects with mass towards each other without requiring physical contact." },
            { q: "Does contact surface area affect frictional force?", options: ["Yes, larger surface area always increases friction.", "No, contact surface area does NOT affect frictional force.", "Yes, smaller surface area increases friction.", "Only for plastic objects."], correct: 1, explanation: "Friction is only affected by surface roughness and the weight of the object sliding, not by the surface area of contact." },
            { q: "What does gravitational force pull objects towards?", options: ["Towards the Sun", "Towards the center of the Earth", "Towards the magnetic North Pole", "Towards the sky"], correct: 1, explanation: "Earth's gravity pulls all objects on or near its surface towards its center." },
            { q: "What force acts on a compressed spring to return it to its original shape?", options: ["Gravitational force", "Frictional force", "Elastic spring force", "Magnetic force"], correct: 2, explanation: "Elastic spring force acts on any stretched or compressed elastic material to restore its shape." },
            { q: "Why do we apply oil to door hinges?", options: ["To increase gravitational pull.", "To reduce frictional force and eliminate squeaking noise.", "To make the hinges heavier.", "To change the shape of the metal."], correct: 1, explanation: "Oil acts as a lubricant, reducing surface roughness and friction." }
        ],
        oeq: {
            q: "A wooden block slid down a rough rubber ramp slower than down a smooth plastic ramp. Explain why, in terms of forces.",
            expectedKeywords: ["frictional force", "opposes", "rougher", "greater", "motion"],
            correctCER: {
                c: "The block slid down the rough rubber ramp slower.",
                e: "The rubber surface is rougher than the plastic surface.",
                r: "A rougher surface creates a greater frictional force acting between the block and the ramp. Frictional force opposes the motion of the block, slowing it down."
            }
        }
    },
    "energy_conversions": {
        title: "P6 Energy Forms & Conversions",
        qceQuestion: "Explain the energy conversions that occur when a toy car rolled down a high slide and stopped.",
        qceAnswer: { qtype: [0], concept: [10, 11], evidence: [1, 2] },
        cerModel: {
            c: "The car's kinetic energy was converted into heat and sound.",
            e: "The toy car rolled down from a height and eventually stopped on the ground.",
            r: "Its starting gravitational potential energy converted into kinetic energy as it rolled down. Due to friction with the ground, its kinetic energy converted into heat and sound energy until it stopped."
        },
        mcqs: [
            { q: "A metal ball is released from the top of a smooth U-shaped track. As the ball rolls down from the top to the lowest point, what is the energy conversion?", options: ["Kinetic energy &rarr; Gravitational potential energy", "Chemical potential energy &rarr; Kinetic energy", "Gravitational potential energy &rarr; Kinetic energy", "Elastic potential energy &rarr; Heat energy"], correct: 2, explanation: "At the top, the ball has maximum gravitational potential energy. As it rolls down, its height decreases and its speed increases, converting GPE into kinetic energy." },
            { q: "Which of the following stores chemical potential energy?", options: ["A stretched rubber band", "A fully charged battery, food, and fuels", "A moving toy car", "A book resting on a high shelf"], correct: 1, explanation: "Chemical potential energy is stored in food, chemical cells/batteries, and organic fuels (fossil fuels, wood)." },
            { q: "A child bounces on a trampoline. What energy form is stored when the trampoline mat is stretched downwards?", options: ["Gravitational potential energy", "Elastic potential energy", "Kinetic energy", "Sound energy"], correct: 1, explanation: "Stretching or compressing elastic materials stores elastic potential energy." },
            { q: "What is the key takeaway of the Law of Conservation of Energy?", options: ["Energy can be destroyed easily.", "Energy cannot be created or destroyed, only converted from one form to another.", "Energy is always constant in temperature.", "Only batteries store energy."], correct: 1, explanation: "This fundamental law defines energy behavior—it is conserved globally and only changes form." },
            { q: "As a wooden block slides down a ramp, some kinetic energy is converted into which form due to friction?", options: ["Chemical potential energy", "Heat and sound energy", "Gravitational potential energy", "Elastic potential energy"], correct: 1, explanation: "Frictional resistance converts kinetic motion energy into thermal (heat) and sound energy." }
        ],
        oeq: {
            q: "A toy car is pushed forward by a compressed metal spring. Detail the energy conversions from the release of the spring to the movement of the car.",
            expectedKeywords: ["elastic potential energy", "kinetic energy", "converted", "spring", "movement"],
            correctCER: {
                c: "The compressed spring pushes the toy car forward.",
                e: "The compressed spring is released, and the car moves.",
                r: "The elastic potential energy stored in the compressed spring is converted into the kinetic energy of the moving toy car."
            }
        }
    },
    "photosynthesis": {
        title: "P6 Energy Forms & Uses (Photosynthesis)",
        qceQuestion: "Explain how placing a green aquatic plant under a bright lamp affects the oxygen gas produced.",
        qceAnswer: { qtype: [0], concept: [1, 2], evidence: [4, 5] },
        cerModel: {
            c: "More oxygen gas is produced.",
            e: "The green plant is placed closer to the bright lamp.",
            r: "Higher light intensity increases the rate of photosynthesis. The plant's chlorophyll traps more light energy to convert carbon dioxide and water into glucose, releasing more oxygen as a byproduct."
        },
        mcqs: [
            { q: "Which of the following statements about plant processes is completely true?", options: ["Plants only respire during the night and photosynthesize only during the day.", "Photosynthesis converts chemical potential energy into light energy.", "Respiration happens in all living cells all the time (day and night), while photosynthesis only happens in the presence of light.", "Oxygen is absorbed during photosynthesis and released during respiration."], correct: 2, explanation: "Respiration is the continuous breakdown of glucose to release energy for life processes in all living cells. Photosynthesis strictly needs light to allow chlorophyll to make glucose." },
            { q: "What green pigment traps light energy for photosynthesis?", options: ["Cytoplasm", "Chlorophyll", "Stomata", "Cell sap"], correct: 1, explanation: "Chlorophyll, found in chloroplasts of plant cells, traps solar light energy to drive food creation." },
            { q: "Which of the following is the correct equation for photosynthesis?", options: ["Glucose + Oxygen &rarr; Carbon dioxide + Water", "Carbon dioxide + Water &rarr; Glucose + Oxygen", "Oxygen + Water &rarr; Glucose + Carbon dioxide", "Glucose + Water &rarr; Carbon dioxide + Oxygen"], correct: 1, explanation: "Photosynthesis combines carbon dioxide and water in the presence of light and chlorophyll to produce glucose and oxygen." },
            { q: "Why is the Sun considered the primary source of energy for all living things?", options: ["It provides heat to keep the air dry.", "It allows plants to make food, which transfers chemical potential energy to animals through the food web.", "It attracts decomposers.", "It conducts electrical energy."], correct: 1, explanation: "Without solar light, producers cannot make glucose, collapsing the entire ecological energy food web." },
            { q: "At what time of day does cellular respiration occur in a plant?", options: ["Only during the day", "Only during the night", "All the time (both day and night)", "Only when the sun is brightest"], correct: 2, explanation: "Respiration is a continuous process that occurs 24/7 in all living cells to release metabolic energy." }
        ],
        oeq: {
            q: "A potted plant was placed in a dark cupboard for 48 hours. Explain why the plant could not make food.",
            expectedKeywords: ["light energy", "photosynthesis", "chlorophyll", "glucose", "cannot make food"],
            correctCER: {
                c: "The plant could not make food or glucose.",
                e: "It was kept in a completely dark cupboard for 48 hours.",
                r: "Photosynthesis requires light energy. Without light, chlorophyll cannot trap energy to combine carbon dioxide and water into glucose, meaning the plant cannot make food."
            }
        }
    },
    "ecology": {
        title: "P6 Ecology & Environment",
        qceQuestion: "Using the diagram, explain how a thick layer of fat helps penguins survive in cold climates.",
        qceAnswer: { qtype: [0], concept: [10, 11], evidence: [1, 2] },
        cerModel: {
            c: "The thick layer of fat helps penguins keep warm.",
            e: "Penguins have a thick layer of fat under their skin in a cold environment.",
            r: "Fat is a poor conductor of heat. The thick fat layer reduces the rate of heat loss from their warm bodies to the cold surrounding climate."
        },
        mcqs: [
            { q: "Which of the following is a behavioral adaptation that helps an animal survive in its environmental conditions?", options: ["Thick layer of fat or blubber under the skin.", "A streamlined body shape to move faster in water.", "Active only at night (nocturnal) to avoid the hot daytime temperatures.", "Sharp claws to catch prey easily."], correct: 2, explanation: "Being nocturnal is a behavioral action/habit. Blubber, streamlined body shapes, and sharp claws are structural adaptations." },
            { q: "What is the definition of a community in a habitat?", options: ["A group of organisms of the same kind living together.", "All the different populations of organisms living and interacting together in a habitat.", "The non-living things in the ecosystem.", "The weather patterns of the climate."], correct: 1, explanation: "A community consists of multiple interacting populations of different species coexisting within a shared environment." },
            { q: "Which physical factor affects the rate of photosynthesis in a pond habitat?", options: ["Soil pH", "Depth of light penetration", "Wind speed", "Humidity"], correct: 1, explanation: "Photosynthesis requires light. The depth of light penetration in water directly dictates how much light aquatic plants can access to make food." },
            { q: "Which organisms are decomposers in an ecosystem?", options: ["Ferns and mosses", "Fungi and bacteria", "Insects and birds", "Predators and prey"], correct: 1, explanation: "Fungi and bacteria are decomposers that break down decaying organic matter, recycling essential nutrients into the soil." },
            { q: "What is a negative impact of deforestation on environment systems?", options: ["It cools down the Earth's atmosphere.", "It causes habitat loss, which leads to extinction of species.", "It increases oxygen levels in the air.", "It reduces carbon dioxide concentrations."], correct: 1, explanation: "Clearing forests strips organisms of their natural habitats, leading to migration, resource scarcity, and species extinction." }
        ],
        oeq: {
            q: "Explain how Man's clearing of forests (deforestation) affects local animal populations in terms of interactions.",
            expectedKeywords: ["deforestation", "habitat", "extinction", "survival", "resources"],
            correctCER: {
                c: "Deforestation reduces animal populations and can lead to extinction.",
                e: "Trees are cleared, which removes the natural environment for local organisms.",
                r: "Trees provide food and shelter. Removing trees destroys the habitat, causing a shortage of shelter and food resources, leading to death or migration of animal populations."
            }
        }
    }
};

// Extra Quizzes mapping back to database
const quizDatabase = practiceDatabase; 

// Flashcards pool
const flashcards = [
    { q: "What is the only sure test to prove that an object is a magnet?", a: "Repulsion between the object and a known magnet." },
    { q: "Which human digestive organ completes digestion and absorbs food?", a: "The Small Intestine." },
    { q: "What is the function of plant water-carrying tubes?", a: "To transport water and dissolved mineral salts from the roots up to all parts of the plant." },
    { q: "What change of state happens during evaporation?", a: "Liquid turns into gas (water vapor) via heat gain." },
    { q: "What force opposes the movement of objects sliding past each other?", a: "Frictional Force." }
];
