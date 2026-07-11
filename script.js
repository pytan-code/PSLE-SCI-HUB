        let activeLabTopic = "livingThings";
        let activeLabToolState = "qtype";
        let activeAiMode = "grader"; // "grader", "linker", "quizzer"
        let currentTab = "study";
        let currentLevel = "all";
        let currentTheme = "all";
        let searchQuery = "";
        let activeRecallEnabled = false;

        let currentFlashcardIndex = 0;
        let showingFlashcardAnswer = false;

        // Render Sidebar Topic options for Selection
        function populateSelectors() {
            const labSelect = document.getElementById("lab-topic-select");
            const quizSelect = document.getElementById("quiz-topic-select");
            const conceptA = document.getElementById("ai-concept-a");
            const conceptB = document.getElementById("ai-concept-b");
            
            labSelect.innerHTML = "";
            quizSelect.innerHTML = "";
            conceptA.innerHTML = "";
            conceptB.innerHTML = "";
            
            syllabusData.forEach(topic => {
                const opt1 = document.createElement("option");
                opt1.value = topic.key;
                opt1.textContent = `[${topic.level}] ${topic.name}`;
                labSelect.appendChild(opt1);

                const opt2 = document.createElement("option");
                opt2.value = topic.key;
                opt2.textContent = `[${topic.level}] ${topic.name}`;
                quizSelect.appendChild(opt2);

                const optA = document.createElement("option");
                optA.value = topic.key;
                optA.textContent = `[${topic.level}] ${topic.name}`;
                conceptA.appendChild(optA);

                const optB = document.createElement("option");
                optB.value = topic.key;
                optB.textContent = `[${topic.level}] ${topic.name}`;
                conceptB.appendChild(optB);
            });
            
            // Set Initial Values
            labSelect.value = "livingThings";
            quizSelect.value = "livingThings";
            conceptA.value = "digestive";
            conceptB.value = "circulatory";
        }

        // Switch Navigation Tabs
        window.switchTab = function(tabName) {
            currentTab = tabName;
            const studyBtn = document.getElementById("tab-btn-study");
            const practiceBtn = document.getElementById("tab-btn-practice");
            const studySection = document.getElementById("tab-section-study");
            const practiceSection = document.getElementById("tab-section-practice");
    
            // Updated sidebars
            const sidebarTop = document.getElementById("sidebar-filters-top");
            const sidebarBottom = document.getElementById("sidebar-filters-bottom");
    
            const searchInput = document.getElementById("search-input-container");

            if (tabName === "study") {
                studyBtn.className = "border-b-4 border-teal-600 text-teal-700 font-bold px-4 py-3 text-sm flex items-center gap-2 transition-all";
                practiceBtn.className = "border-b-4 border-transparent text-slate-500 hover:text-slate-800 font-bold px-4 py-3 text-sm flex items-center gap-2 transition-all";
                studySection.classList.remove("hidden");
                practiceSection.classList.add("hidden");
        
                // Unhide both pieces
                sidebarTop.classList.remove("hidden");
                sidebarBottom.classList.remove("hidden");
        
                searchInput.classList.remove("hidden");
            } else {
                practiceBtn.className = "border-b-4 border-teal-600 text-teal-700 font-bold px-4 py-3 text-sm flex items-center gap-2 transition-all";
                studyBtn.className = "border-b-4 border-transparent text-slate-500 hover:text-slate-800 font-bold px-4 py-3 text-sm flex items-center gap-2 transition-all";
                studySection.classList.add("hidden");
                practiceSection.classList.remove("hidden");
        
                // Hide both pieces
                sidebarTop.classList.add("hidden");
                sidebarBottom.classList.add("hidden");
        
                searchInput.classList.add("hidden");
                
                // Initialize Practice components on load
                loadLabPracticeTopic();
                loadQuizTopic();
            }
        };

        // Render Study Hub Topics Cards
        function renderTopics() {
            const container = document.getElementById("topics-container");
            container.innerHTML = "";

            const filtered = syllabusData.filter(item => {
                const matchesLevel = currentLevel === "all" || item.level === currentLevel;
                const matchesTheme = currentTheme === "all" || item.theme === currentTheme;
                const matchesSearch = searchQuery === "" || 
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    item.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (item.connections && item.connections.toLowerCase().includes(searchQuery.toLowerCase())) ||
                    (item.keywords && item.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase())));

                return matchesLevel && matchesTheme && matchesSearch;
            });

            document.getElementById("filtered-count-text").textContent = `${filtered.length} of ${syllabusData.length} topics shown`;

            const clearBtn = document.getElementById("reset-filter-badge");
            if (currentLevel !== "all" || currentTheme !== "all" || searchQuery !== "") {
                clearBtn.classList.remove("hidden");
            } else {
                clearBtn.classList.add("hidden");
            }

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center text-slate-400 font-sans">
                        <i class="fa-solid fa-clipboard-question text-4xl mb-2 text-slate-300 font-sans"></i>
                        <p class="font-semibold text-slate-600 font-sans">No matching syllabus notes found.</p>
                        <p class="text-xs text-slate-400 font-sans font-sans font-sans">Adjust the sidebar filter or try searching another keyword!</p>
                        <button onclick="resetAllFilters()" class="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-1.5 rounded-lg text-xs transition-colors font-sans">
                            Show All Syllabus Notes
                        </button>
                    </div>
                `;
                return;
            }

            filtered.forEach(topic => {
                let themeIcon = "fa-layer-group";
                let themeColor = "bg-slate-100 text-slate-700";
                
                if (topic.theme === "Diversity") {
                    themeIcon = "fa-leaf";
                    themeColor = "bg-emerald-100 text-emerald-800";
                } else if (topic.theme === "Cycles") {
                    themeIcon = "fa-arrows-spin";
                    themeColor = "bg-blue-100 text-blue-800";
                } else if (topic.theme === "Systems") {
                    themeIcon = "fa-diagram-project";
                    themeColor = "bg-purple-100 text-purple-800";
                } else if (topic.theme === "Interactions") {
                    themeIcon = "fa-compress";
                    themeColor = "bg-orange-100 text-orange-800";
                } else if (topic.theme === "Energy") {
                    themeIcon = "fa-bolt";
                    themeColor = "bg-yellow-100 text-yellow-800";
                }

                let processedNotes = topic.notes;
                if (activeRecallEnabled && topic.keywords && topic.keywords.length > 0) {
                    topic.keywords.forEach(keyword => {
                        const regex = new RegExp(`\\b(${keyword}s?)\\b`, 'gi');
                        processedNotes = processedNotes.replace(regex, `<span class="keyword-hidden" onclick="revealKeyword(this)" title="Click to reveal term">$1</span>`);
                    });
                }

                const card = document.createElement("div");
                card.className = "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-200 hover:shadow-md";
                card.innerHTML = `
                    <div class="p-4 bg-slate-50/50 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-sans font-sans">
                        <div>
                            <div class="flex items-center gap-1.5 mb-1 flex-wrap font-sans font-sans">
                                <span class="bg-indigo-100 text-indigo-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase font-sans font-sans font-sans font-sans">${topic.level}</span>
                                <span class="${themeColor} text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase flex items-center gap-1 font-sans font-sans">
                                    <i class="fa-solid ${themeIcon}"></i> ${topic.theme}
                                </span>
                            </div>
                            <h3 class="font-bold text-slate-800 text-sm sm:text-base font-sans font-sans font-sans">
                                ${topic.name}
                            </h3>
                        </div>
                        <button onclick="askBuddyAbout('${topic.name}')" class="bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 whitespace-nowrap self-end sm:self-auto font-sans font-sans">
                            <i class="fa-solid fa-robot"></i> Explain Topic
                        </button>
                    </div>

                    <div class="p-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-sans font-sans">
                        ${processedNotes}
                    </div>

                    <div class="px-4 py-2 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] sm:text-xs text-slate-400 font-sans font-sans">
                        <span>
                            <i class="fa-solid fa-circle-nodes mr-1 text-slate-300"></i> Syllabus Linkage: 
                            <span class="text-slate-600 font-semibold">${topic.connections}</span>
                        </span>
                        <div class="flex gap-2">
                            <button onclick="editTopic(${topic.id})" class="text-slate-400 hover:text-teal-600" title="Edit node"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onclick="deleteTopic(${topic.id})" class="text-slate-400 hover:text-rose-600" title="Delete node"><i class="fa-solid fa-trash font-sans"></i></button>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Active Recall keyword reveal
        window.revealKeyword = function(element) {
            if (element.classList.contains("keyword-hidden")) {
                element.classList.remove("keyword-hidden");
                element.classList.add("keyword-revealed");
            } else {
                element.classList.remove("keyword-revealed");
                element.classList.add("keyword-hidden");
            }
        };

        // Filter via cross-syllabus connection points
        window.filterByLinkage = function(keyword, theme) {
            currentLevel = "all";
            currentTheme = "all";
            searchQuery = keyword;
            
            document.getElementById("global-search").value = keyword;
            document.getElementById("active-level-badge").textContent = "All Grades";
            document.getElementById("active-theme-badge").textContent = "All Themes";
            
            document.querySelectorAll(".level-btn").forEach(b => {
                b.className = "level-btn bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1.5 rounded-lg text-center font-bold text-xs transition-all font-sans font-sans";
                if (b.dataset.level === "all") {
                    b.className = "level-btn active bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1.5 rounded-lg text-center font-bold text-xs transition-all font-sans font-sans";
                }
            });

            document.querySelectorAll(".theme-btn").forEach(b => {
                b.className = "theme-btn hover:bg-slate-50 text-slate-700 px-3 py-2 rounded-xl text-left font-medium text-xs transition-all flex items-center justify-between font-sans font-sans";
                if (b.dataset.theme === "all") {
                    b.className = "theme-btn active bg-teal-50 border border-teal-200 text-teal-800 px-3 py-2 rounded-xl text-left font-semibold text-xs transition-all flex items-center justify-between font-sans font-sans font-sans";
                }
            });

            renderTopics();
        };

        // Update Study Sidebar Theme Counts
        function updateThemeCountBadges() {
            const themes = ["Diversity", "Cycles", "Systems", "Interactions", "Energy"];
            document.getElementById("count-all").textContent = syllabusData.length;
            themes.forEach(t => {
                const count = syllabusData.filter(item => item.theme === t).length;
                const badge = document.getElementById(`count-${t.toLowerCase()}`);
                if (badge) badge.textContent = count;
            });
        }

        // Action Bindings for Filter Sidebars
        document.getElementById("level-filters").addEventListener("click", (e) => {
            const btn = e.target.closest(".level-btn");
            if (!btn) return;
            document.querySelectorAll(".level-btn").forEach(b => b.className = "level-btn bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1.5 rounded-lg text-center font-bold text-xs transition-all");
            btn.className = "level-btn active bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1.5 rounded-lg text-center font-bold text-xs transition-all";
            currentLevel = btn.dataset.level;
            document.getElementById("active-level-badge").textContent = currentLevel === "all" ? "All Grades" : currentLevel;
            renderTopics();
        });

        document.getElementById("theme-filters").addEventListener("click", (e) => {
            const btn = e.target.closest(".theme-btn");
            if (!btn) return;
            document.querySelectorAll(".theme-btn").forEach(b => b.className = "theme-btn hover:bg-slate-50 text-slate-700 px-3 py-2 rounded-xl text-left font-medium text-xs transition-all flex items-center justify-between");
            btn.className = "theme-btn active bg-teal-50 border border-teal-200 text-teal-800 px-3 py-2 rounded-xl text-left font-semibold text-xs transition-all flex items-center justify-between";
            currentTheme = btn.dataset.theme;
            document.getElementById("active-theme-badge").textContent = currentTheme === "all" ? "All Themes" : currentTheme;
            renderTopics();
        });

        document.getElementById("global-search").addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderTopics();
        });

        // Toggle Studio AI modes
        window.setAiMode = function(mode) {
            activeAiMode = mode;
            const modes = ["grader", "linker", "quizzer"];
            modes.forEach(m => {
                const tab = document.getElementById(`ai-tab-${m}`);
                const panel = document.getElementById(`ai-panel-${m}`);
                if (m === mode) {
                    tab.className = "flex-1 py-1.5 rounded-lg text-center bg-indigo-600 text-white transition-all";
                    panel.classList.remove("hidden");
                } else {
                    tab.className = "flex-1 py-1.5 rounded-lg text-center hover:bg-white/5 text-slate-300 transition-all font-sans";
                    panel.classList.add("hidden");
                }
            });
            document.getElementById("ai-studio-output-console").classList.add("hidden");
        };

        // Practice Q-C-E Underlining Tool in Lab
        window.setLabTool = function(tool) {
            activeLabToolState = tool;
            const tools = ["qtype", "concept", "evidence"];
            tools.forEach(t => {
                const btn = document.getElementById(`lab-qce-tool-${t}`);
                btn.className = "p-1.5 text-[10px] font-bold rounded border-b-4 border-slate-200 bg-slate-50 text-slate-600 text-center transition-all font-sans font-sans";
            });
            const activeBtn = document.getElementById(`lab-qce-tool-${tool}`);
            let borderCol = "border-blue-500 bg-blue-50 text-blue-800";
            if (tool === "concept") borderCol = "border-emerald-500 bg-emerald-50 text-emerald-800";
            if (tool === "evidence") borderCol = "border-amber-500 bg-amber-50 text-amber-800";
            activeBtn.className = `p-1.5 text-[10px] font-bold rounded border-b-4 ${borderCol} text-center transition-all font-sans font-sans`;
        };

        window.loadLabPracticeTopic = function() {
            activeLabTopic = document.getElementById("lab-topic-select").value;
            const practice = practiceDatabase[activeLabTopic];
            
            if (!practice) return;

            const text = practice.qceQuestion;
            const words = text.split(" ");
            const targetBox = document.getElementById("lab-annotator-box");
            targetBox.innerHTML = "";

            words.forEach((word, idx) => {
                const span = document.createElement("span");
                span.className = "cursor-pointer hover:bg-slate-200 px-0.5 rounded transition-all mr-1 my-0.5 inline-block font-sans";
                span.innerText = word;
                span.dataset.index = idx;
                span.onclick = () => {
                    const cls = `qce-${activeLabToolState}`;
                    if (span.classList.contains(cls)) {
                        span.classList.remove(cls);
                    } else {
                        span.classList.remove("qce-qtype", "qce-concept", "qce-evidence");
                        span.classList.add(cls);
                    }
                };
                targetBox.appendChild(span);
            });

            document.getElementById("lab-cer-choice").value = "";
            document.getElementById("lab-cer-evidence").value = "";
            document.getElementById("lab-cer-reason").value = "";
            document.getElementById("lab-cer-draft-output").classList.add("hidden");
            document.getElementById("ai-student-answer").value = "";
            document.getElementById("ai-studio-output-console").classList.add("hidden");
        };

        window.resetLabQCE = function() {
            const spans = document.querySelectorAll("#lab-annotator-box span");
            spans.forEach(span => {
                span.classList.remove("qce-qtype", "qce-concept", "qce-evidence");
            });
        };

        window.revealModelQCE = function() {
            const practice = practiceDatabase[activeLabTopic];
            if (!practice) return;
            resetLabQCE();

            const spans = document.querySelectorAll("#lab-annotator-box span");
            spans.forEach(span => {
                const idx = parseInt(span.dataset.index);
                if (practice.qceAnswer.qtype.includes(idx)) span.classList.add("qce-qtype");
                if (practice.qceAnswer.concept.includes(idx)) span.classList.add("qce-concept");
                if (practice.qceAnswer.evidence.includes(idx)) span.classList.add("qce-evidence");
            });
        };

        window.revealModelCER = function() {
            const practice = practiceDatabase[activeLabTopic];
            if (!practice) return;

            document.getElementById("lab-cer-choice").value = practice.cerModel.c;
            document.getElementById("lab-cer-evidence").value = practice.cerModel.e;
            document.getElementById("lab-cer-reason").value = practice.cerModel.r;
            generateLabCERAnswer();
        };

        window.generateLabCERAnswer = function() {
            const choice = document.getElementById("lab-cer-choice").value.trim();
            const evidence = document.getElementById("lab-cer-evidence").value.trim();
            const reasoning = document.getElementById("lab-cer-reason").value.trim();
            const outputBox = document.getElementById("lab-cer-draft-output");
            const textContent = document.getElementById("lab-cer-text-content");

            if (!choice && !evidence && !reasoning) {
                outputBox.classList.add("hidden");
                return;
            }

            outputBox.classList.remove("hidden");
            textContent.innerHTML = `
                <p class="text-xs text-slate-700 leading-relaxed font-sans"><strong class="text-blue-700">[Choice/Claim]</strong> ${choice || "<em>(Missing selection)</em>"}</p>
                <p class="text-xs text-slate-700 leading-relaxed mt-1 font-sans"><strong class="text-amber-700">[Evidence]</strong> ${evidence || "<em>(Missing observations)</em>"}</p>
                <p class="text-xs text-slate-700 leading-relaxed mt-1 font-sans"><strong class="text-emerald-700">[Reasoning]</strong> ${reasoning || "<em>(Missing scientific explanation)</em>"}</p>
            `;
        };

        // Theme Quizzes Dynamic Load
        window.loadQuizTopic = function() {
            const topicKey = document.getElementById("quiz-topic-select").value;
            const quiz = practiceDatabase[topicKey];
            const quizBlock = document.getElementById("quiz-block");

            if (!quiz) return;

            let htmlContent = "";
            quiz.mcqs.forEach((mcq, qIdx) => {
                htmlContent += `
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span class="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Question ${qIdx + 1} of 5 (MCQ)</span>
                        <p class="font-semibold text-slate-800 text-xs sm:text-sm mt-2 font-sans">${mcq.q}</p>
                        
                        <div class="mt-3 space-y-2 font-sans">
                            ${mcq.options.map((opt, idx) => `
                                <label class="flex items-center gap-2.5 p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors text-xs text-slate-700">
                                    <input type="radio" name="mcq-option-${qIdx}" value="${idx}" class="accent-teal-600">
                                    <span>${opt}</span>
                                </label>
                            `).join("")}
                        </div>
                        <button onclick="gradeSingleMCQ(${qIdx}, ${mcq.correct}, '${mcq.explanation.replace(/'/g, "\\'")}')" class="mt-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all font-sans">Submit Question ${qIdx + 1}</button>
                        <div id="mcq-feedback-${qIdx}" class="hidden mt-3 p-3 rounded-lg text-xs font-medium font-sans"></div>
                    </div>
                `;
            });

            htmlContent += `
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-4">
                    <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Part B: Structured Open-Ended (Apply C-E-R Writing)</span>
                    <p class="font-bold text-slate-800 text-xs sm:text-sm mt-2 font-sans">${quiz.oeq.q}</p>
                    <p class="text-[10px] text-slate-400 mt-1"><i class="fa-solid fa-lightbulb text-amber-500"></i> Target keywords: ${quiz.oeq.expectedKeywords.join(", ")}</p>

                    <div class="mt-3 space-y-3 font-sans">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">State your Choice & Evidence (Draft statement)</label>
                            <input type="text" id="quiz-oeq-ce" placeholder="Enter what you choose and observed..." class="w-full text-xs p-2.5 bg-white border rounded-lg focus:ring-1 focus:ring-teal-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1 font-sans">State your scientific Reasoning (Syllabus Concept)</label>
                            <textarea id="quiz-oeq-r" rows="2" placeholder="Enter scientific reason explaining why it happened..." class="w-full text-xs p-2.5 bg-white border rounded-lg focus:ring-1 focus:ring-teal-500 outline-none"></textarea>
                        </div>
                    </div>

                    <button onclick="gradeOEQ(${JSON.stringify(quiz.oeq.expectedKeywords)})" class="mt-3 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all">Submit Answer</button>
                    <div id="oeq-feedback" class="hidden mt-3 p-4 rounded-xl border font-sans"></div>
                </div>
            `;

            quizBlock.innerHTML = htmlContent;
        };

        window.gradeSingleMCQ = function(qIdx, correctIndex, explanation) {
            const checked = document.querySelector(`input[name="mcq-option-${qIdx}"]:checked`);
            const feedbackBox = document.getElementById(`mcq-feedback-${qIdx}`);

            if (!checked) {
                feedbackBox.className = "mt-3 p-2 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-medium font-sans";
                feedbackBox.textContent = "Please select an option first!";
                feedbackBox.classList.remove("hidden");
                return;
            }

            const selectedIdx = parseInt(checked.value);
            feedbackBox.classList.remove("hidden");

            if (selectedIdx === correctIndex) {
                feedbackBox.className = "mt-3 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-medium font-sans";
                feedbackBox.innerHTML = `<p><i class="fa-regular fa-circle-check mr-1 text-emerald-600"></i> <strong>Correct Answer!</strong></p><p class="mt-1 text-slate-600 font-sans">${explanation}</p>`;
            } else {
                feedbackBox.className = "mt-3 p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-lg text-xs font-medium font-sans";
                feedbackBox.innerHTML = `<p><i class="fa-regular fa-circle-xmark mr-1 text-rose-600 font-sans"></i> <strong>Incorrect, try again!</strong></p><p class="mt-1 text-slate-600 font-sans">${explanation}</p>`;
            }
        };

        window.gradeOEQ = function(keywordsList) {
            const ceText = document.getElementById("quiz-oeq-ce").value.toLowerCase();
            const rText = document.getElementById("quiz-oeq-r").value.toLowerCase();
            const combinedInput = `${ceText} ${rText}`;
            const feedbackBox = document.getElementById("oeq-feedback");

            let matchedKeywords = [];
            keywordsList.forEach(kw => {
                if (combinedInput.includes(kw.toLowerCase())) matchedKeywords.push(kw);
            });

            feedbackBox.classList.remove("hidden");
            const scorePercent = Math.round((matchedKeywords.length / keywordsList.length) * 100);

            let feedbackClass = "bg-rose-50 border-rose-200 text-rose-800";
            let remark = "Need to emphasize scientific vocabulary!";
            if (scorePercent >= 75) {
                feedbackClass = "bg-emerald-50 border-emerald-200 text-emerald-800 font-sans";
                remark = "Excellent choice of primary science keywords!";
            } else if (scorePercent >= 40) {
                feedbackClass = "bg-amber-50 border-amber-200 text-amber-800 font-sans";
                remark = "Good start, but missing key scientific explanations.";
            }

            const topicKey = document.getElementById("quiz-topic-select").value;
            const modelAnswer = practiceDatabase[topicKey].oeq.correctCER;

            feedbackBox.className = `mt-3 p-4 rounded-xl border ${feedbackClass} text-xs font-sans`;
            feedbackBox.innerHTML = `
                <div class="flex justify-between items-center mb-2 font-sans">
                    <span class="font-bold flex items-center gap-1 font-sans"><i class="fa-solid fa-graduation-cap font-sans"></i> Answering Analysis (${scorePercent}%)</span>
                    <span class="bg-white/80 px-2 py-0.5 rounded font-extrabold uppercase text-[9px] text-slate-700 font-sans">${remark}</span>
                </div>
                <p class="mb-2 font-sans font-sans"><strong>Your Keyword Hits:</strong> ${matchedKeywords.length > 0 ? matchedKeywords.map(k => `<span class="bg-white/90 border px-1.5 py-0.5 rounded text-slate-700 font-bold mx-0.5 inline-block font-sans">${k}</span>`).join(" ") : "<em class='text-slate-400 font-sans'>None detected. Remember to use terms like 'poor conductor', 'air', 'escape'!</em>"}</p>
                
                <div class="mt-3 pt-3 border-t border-slate-200/50 text-slate-700 bg-white/60 p-2 rounded-lg font-sans">
                    <span class="font-bold text-teal-800 block mb-1 font-sans">Standard Model Answer:</span>
                    <p class="mb-1 font-sans"><strong class="text-blue-700">[Choice]</strong> ${modelAnswer.c}</p>
                    <p class="mb-1 font-sans"><strong class="text-amber-700">[Evidence]</strong> ${modelAnswer.e}</p>
                    <p class="font-sans"><strong class="text-emerald-700">[Reasoning]</strong> ${modelAnswer.r}</p>
                </div>
            `;
        };

        // Flashcards Controls
        window.nextFlashcard = function() {
            currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
            showingFlashcardAnswer = false;
            document.getElementById("flashcard-text").innerText = flashcards[currentFlashcardIndex].q;
            document.getElementById("flashcard-box").className = "bg-amber-50/50 border border-amber-200 rounded-xl p-3 text-center min-h-[100px] flex flex-col justify-between font-sans";
        };

        window.revealFlashcardAnswer = function() {
            showingFlashcardAnswer = !showingFlashcardAnswer;
            if (showingFlashcardAnswer) {
                document.getElementById("flashcard-text").innerHTML = `<strong>Answer:</strong><br>${flashcards[currentFlashcardIndex].a}`;
                document.getElementById("flashcard-box").className = "bg-green-50 border border-emerald-200 rounded-xl p-3 text-center min-h-[100px] flex flex-col justify-between font-sans";
            } else {
                document.getElementById("flashcard-text").innerText = flashcards[currentFlashcardIndex].q;
                document.getElementById("flashcard-box").className = "bg-amber-50/50 border border-amber-200 rounded-xl p-3 text-center min-h-[100px] flex flex-col justify-between font-sans";
            }
        };

        // Modal Add / Edit operations
        const modal = document.getElementById("add-topic-modal");
        let editingId = null;

        document.getElementById("open-add-modal").addEventListener("click", () => {
            editingId = null;
            document.getElementById("add-topic-form").reset();
            document.querySelector("#add-topic-modal h3").textContent = "Add New Topic Summary Node";
            modal.classList.remove("hidden");
        });

        const closeModal = () => {
            modal.classList.add("hidden");
            editingId = null;
        };

        document.getElementById("close-modal-btn").addEventListener("click", closeModal);
        document.getElementById("cancel-modal-btn").addEventListener("click", closeModal);

        document.getElementById("add-topic-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const level = document.getElementById("modal-level").value;
            const theme = document.getElementById("modal-theme").value;
            const name = document.getElementById("modal-name").value;
            const connections = document.getElementById("modal-links").value || "General Link";
            const kw = document.getElementById("modal-keywords").value;
            const keywords = kw ? kw.split(",").map(k => k.trim()).filter(Boolean) : [];
            const notesText = document.getElementById("modal-notes").value;

            let formattedNotes = notesText;
            if (!notesText.includes("<")) {
                const bullets = notesText.split("\n").filter(Boolean);
                formattedNotes = `
                    <div class="space-y-2 font-sans font-sans">
                        <ul class="list-disc pl-5 space-y-1">
                            ${bullets.map(b => `<li>${b}</li>`).join("")}
                        </ul>
                    </div>
                `;
            }

            if (editingId !== null) {
                const idx = syllabusData.findIndex(t => t.id === editingId);
                if (idx !== -1) {
                    syllabusData[idx] = { ...syllabusData[idx], level, theme, name, connections, keywords, notes: formattedNotes };
                }
            } else {
                const newId = syllabusData.length > 0 ? Math.max(...syllabusData.map(t => t.id)) + 1 : 1;
                syllabusData.push({ id: newId, level, theme, name, connections, keywords, notes: formattedNotes });
            }

            closeModal();
            updateThemeCountBadges();
            renderTopics();
        });

        window.editTopic = function(id) {
            const topic = syllabusData.find(t => t.id === id);
            if (!topic) return;

            editingId = id;
            document.getElementById("modal-level").value = topic.level;
            document.getElementById("modal-theme").value = topic.theme;
            document.getElementById("modal-name").value = topic.name;
            document.getElementById("modal-links").value = topic.connections;
            document.getElementById("modal-keywords").value = topic.keywords.join(", ");

            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = topic.notes;
            const bullets = tempDiv.querySelectorAll("li");
            if (bullets.length > 0) {
                document.getElementById("modal-notes").value = Array.from(bullets).map(li => li.innerText).join("\n");
            } else {
                document.getElementById("modal-notes").value = tempDiv.innerText.trim();
            }

            document.querySelector("#add-topic-modal h3").textContent = "Edit Summary Node";
            modal.classList.remove("hidden");
        };

        window.deleteTopic = function(id) {
            if (confirm("Are you sure you want to remove this topic node?")) {
                syllabusData = syllabusData.filter(t => t.id !== id);
                updateThemeCountBadges();
                renderTopics();
            }
        };

        // ✨ AI PRACTICE STUDIO INTERACTION CONTROLLERS WITH RETRY AND BACKOFF
        async function runAiAnswerGrader() {
            const studentAns = document.getElementById("ai-student-answer").value.trim();
            if (!studentAns) {
                alert("Please write your answer in the box first!");
                return;
            }

            const loader = document.getElementById("ai-studio-loader");
            const output = document.getElementById("ai-studio-output-console");
            const resultBox = document.getElementById("ai-studio-result");

            document.getElementById("ai-loader-text").textContent = "Analyzing C-E-R structure & keyword hits...";
            loader.classList.remove("hidden");
            output.classList.add("hidden");

            const activeData = practiceDatabase[activeLabTopic];
            const prompt = `
                Syllabus Topic: ${activeData.title}
                Exam Question: ${activeData.qceQuestion}
                Model Answering Key (C-E-R):
                Choice: ${activeData.cerModel.c}
                Evidence: ${activeData.cerModel.e}
                Reasoning: ${activeData.cerModel.r}

                Student's Drafted Answer: "${studentAns}"

                Task: Grade the student's answer like a friendly Singapore Primary Science specialist tutor.
                Provide your evaluation in brief HTML formatting with three quick sections:
                1. <strong>C-E-R Structure Assessment</strong>: Note if the student clearly stated their Claim, cited the Evidence/Observations, and linked them to the correct scientific Reasoning.
                2. <strong>Keyword Hits & Missing Terms</strong>: Identify correct terms used and list mandatory science keywords they missed.
                3. <strong>Encouraging Next Steps</strong>: How to re-draft for full marks. Remember: never refer to poor conductors as "insulators". Avoid complex jargon.
            `;

            const ans = await getGeminiResponse(prompt);
            loader.classList.add("hidden");
            output.classList.remove("hidden");
            resultBox.innerHTML = ans;
        }

        async function runAiConceptLinker() {
            const conceptAKey = document.getElementById("ai-concept-a").value;
            const conceptBKey = document.getElementById("ai-concept-b").value;

            const nameA = practiceDatabase[conceptAKey]?.title || "Concept A";
            const nameB = practiceDatabase[conceptBKey]?.title || "Concept B";

            const loader = document.getElementById("ai-studio-loader");
            const output = document.getElementById("ai-studio-output-console");
            const resultBox = document.getElementById("ai-studio-result");

            document.getElementById("ai-loader-text").textContent = "Connecting systems & searching cross-grade connections...";
            loader.classList.remove("hidden");
            output.classList.add("hidden");

            const prompt = `
                Connect these two Singapore Primary Science Syllabus topics:
                Topic 1: ${nameA}
                Topic 2: ${nameB}

                Task: Explain how these two distinct syllabus areas link together and work collectively. Keep your explanation very friendly, clear, and perfectly tailored for a primary school student. Use simple analogies and bullet points where useful. Avoid complex terms.
            `;

            const ans = await getGeminiResponse(prompt);
            loader.classList.add("hidden");
            output.classList.remove("hidden");
            resultBox.innerHTML = ans;
        }

        async function runAiQuizzer() {
            const loader = document.getElementById("ai-studio-loader");
            const output = document.getElementById("ai-studio-output-console");
            const resultBox = document.getElementById("ai-studio-result");

            document.getElementById("ai-loader-text").textContent = "Generating a custom mock PSLE science question...";
            loader.classList.remove("hidden");
            output.classList.add("hidden");

            const activeData = practiceDatabase[activeLabTopic];
            const prompt = `
                Generate a brand-new, unseen Primary Science open-ended experimental question based on the topic: ${activeData.title}.
                Do not reuse the existing question (${activeData.qceQuestion}).
                
                Provide your response in clean HTML format:
                1. <strong>Mock Exam Question</strong>: Describe a simple, realistic experimental setup with variables and ask a "Why", "Explain", or "Compare" question.
                2. <strong>Keyword Clues</strong>: Suggest 3 critical science terms the student should include in their response.
                3. <details class="mt-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100 cursor-pointer"><summary class="font-bold text-teal-800">Toggle to Reveal Model C-E-R Answer Key</summary><div class="mt-2 text-slate-700">Write out a perfect Choice, Evidence, and Reasoning model response. Do not use the term "insulator" for heat.</div></details>
            `;

            const ans = await getGeminiResponse(prompt);
            loader.classList.add("hidden");
            output.classList.remove("hidden");
            resultBox.innerHTML = ans;
        }

        window.copyAiStudioResult = function() {
            const text = document.getElementById("ai-studio-result").innerText;
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert("Feedback copied to clipboard!");
        };

        // Gemini AI Study Buddy Call Integration
        const chatBox = document.getElementById("chat-box");
        const chatInput = document.getElementById("chat-input");
        const chatForm = document.getElementById("chat-form");
        const aiIndicator = document.getElementById("ai-typing-indicator");

        function appendChatMessage(sender, text, isAi = false) {
            const msgDiv = document.createElement("div");
            if (isAi) {
                msgDiv.className = "bg-teal-50 border border-teal-100 text-slate-700 p-3 rounded-2xl rounded-tl-none self-start max-w-[90%] font-sans";
                msgDiv.innerHTML = `
                    <p class="font-bold text-[10px] text-teal-800 mb-0.5"><i class="fa-solid fa-robot mr-1"></i> Science Buddy</p>
                    <div class="text-xs leading-relaxed space-y-1">${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</div>
                `;
            } else {
                msgDiv.className = "bg-slate-100 text-slate-700 p-3 rounded-2xl rounded-tr-none self-end ml-auto max-w-[90%] font-sans";
                msgDiv.innerHTML = `
                    <p class="font-bold text-[9px] text-slate-500 mb-0.5 text-right">You</p>
                    <p class="text-xs">${text}</p>
                `;
            }
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        async function getGeminiResponse(userMessage) {
            aiIndicator.classList.remove("hidden");
            const apiKey = ""; // Handled dynamically in Canvas runtime
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

            const systemPrompt = `
                You are an expert Primary Science Specialist Tutor in Singapore, thoroughly versed in the Singapore MOE Primary Science Syllabus (P3-P6).
                Your tone should be highly encouraging, clear, and perfectly tailored to a primary school student.
                
                Strictly emphasize two structural frameworks in your explanations:
                1. C-E-R (Choice, Evidence, Reasoning) answering technique for structured questions.
                2. Q-C-E (Question Type, Concept/Topic, Evidence) reading and question stem annotation framework.
                
                Highlight core keywords (e.g. "heat flow", "gain heat", "lose heat", "poor conductor", "light travels in straight lines", "blocked", "photosynthesis", "respiration", "adaptation") so students can formulate answers perfectly.
                Avoid difficult words like "methodologies", "propagation", "dynamics", "autonomously", "voraciously", "equilibrium", etc. Use simple words like "methods", "how light travels", "behavior", "on its own", "quickly", "the same temperature".
                Do not refer to poor conductors as "insulators".
            `;

            const payload = {
                contents: [{ parts: [{ text: userMessage }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] }
            };

            let delay = 1000;
            // Strict exponential backoff retrying up to 5 times
            for (let i = 0; i < 5; i++) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (response.ok) {
                        const result = await response.json();
                        const answerText = result.candidates?.[0]?.content?.parts?.[0]?.text;
                        aiIndicator.classList.add("hidden");
                        return answerText || "I'm sorry, I couldn't process that text.";
                    }
                } catch (e) {
                    await new Promise(res => setTimeout(res, delay));
                    delay *= 2;
                }
            }

            aiIndicator.classList.add("hidden");
            return "Oops! I encountered a connection issue. Please double-check your network connection and try again!";
        }

        chatForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const val = chatInput.value.trim();
            if (!val) return;

            appendChatMessage("student", val, false);
            chatInput.value = "";

            const ans = await getGeminiResponse(val);
            appendChatMessage("buddy", ans, true);
        });

        window.askBuddyAbout = async function(topicName) {
            const prompt = `Explain the key concepts of the primary science syllabus topic: "${topicName}". Frame your explanation utilizing the Q-C-E question stem annotation analysis first, then draft a sample PSLE question solved with C-E-R (Choice, Evidence, Reasoning) format. Use simple terms. Avoid calling poor conductors "insulators".`;
            appendChatMessage("student", `Explain "${topicName}" using Q-C-E & C-E-R`, false);
            const ans = await getGeminiResponse(prompt);
            appendChatMessage("buddy", ans, true);
        };

        // Quick prompts click events
        document.querySelectorAll(".quick-prompt-btn").forEach(btn => {
            btn.addEventListener("click", async () => {
                const text = btn.textContent;
                let finalPrompt = text;
                if (text === "Compare Transport Systems") {
                    finalPrompt = "Compare the plant transport tubes (water-carrying & food-carrying) with human circulatory blood vessels. What are the key differences tested in PSLE?";
                } else if (text === "Rate of Evaporation Factors") {
                    finalPrompt = "What are the factors affecting the rate of evaporation? Formulate an explanation of how wind speed increases the rate of evaporation using standard scientific keywords.";
                } else if (text === "Quiz me on C-E-R!") {
                    finalPrompt = "Ask me a challenging, structured PSLE open-ended question about P6 Forces or Ecology. Guide me to analyze the stem using Q-C-E, then grade my draft C-E-R answer.";
                }

                appendChatMessage("student", text, false);
                const ans = await getGeminiResponse(finalPrompt);
                appendChatMessage("buddy", ans, true);
            });
        });

        document.getElementById("clear-chat").addEventListener("click", () => {
            chatBox.innerHTML = `
                <div class="bg-teal-50 border border-teal-100 text-slate-700 p-3 rounded-2xl rounded-tl-none font-sans font-sans">
                    <p class="font-semibold text-[11px] text-teal-800 mb-1 font-sans"><i class="fa-solid fa-robot mr-1 font-sans"></i> Science Buddy</p>
                    <p class="text-xs font-sans">Chat log cleared! What science topics shall we explore next?</p>
                </div>
            `;
        });

        // App Bootup
        window.onload = function() {
            populateSelectors();
            updateThemeCountBadges();
            renderTopics();
            // Start flashcards
            document.getElementById("flashcard-text").innerText = flashcards[0].q;
        };
// Reset all filters back to default
window.resetAllFilters = function() {
    currentLevel = "all";
    currentTheme = "all";
    searchQuery = "";
    
    // Reset the visible search input box if it exists
    const searchInput = document.getElementById("global-search");
    if (searchInput) {
        searchInput.value = "";
    }
    
    // Refresh the topics on the screen
    renderTopics();
};
