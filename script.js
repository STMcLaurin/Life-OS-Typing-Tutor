 
        // ============================================
        // TYPING TUTOR STATE
        // ============================================
        const TutorState = {
            currentMode: 'home-row',
            isPlaying: false,
            textToType: '',
            typedText: '',
            correctChars: 0,
            incorrectChars: 0,
            startTime: null,
            elapsedSeconds: 0,
            timerInterval: null,
            streakCount: 0,
            bestStreak: 0,
            history: [],
            completedLessons: {},
            currentLessonIndex: 0,
        };

        // ============================================
        // COMPREHENSIVE CONTENT LIBRARY
        // ============================================
        const ContentLibrary = {
            // HOME ROW - Foundation
            'home-row': {
                title: '🏠 Home Row Lesson',
                desc: 'Master the home row keys: A S D F J K L ;',
                lessonKeys: ['a','s','d','f','j','k','l',';'],
                exercises: [
                    'asdf jkl; asdf jkl; a s d f j k l ;',
                    'fjdk sl a; fjdk sl a; f j d k s l a ;',
                    'asdfg hjkl; asdfg hjkl; a s d f g h j k l ;',
                    'dad sad fad lad ask fall lass flask',
                    'ask a lad; fall fast; dad has a flask',
                    'all fall sad; a lass asks dad; flask fast',
                    'asdf jkl; gh asdf jkl; gh asdf jkl;',
                    'a sad lass; a fast lad; all fall down',
                    'dad asks a lass; she falls fast',
                    'asdfg hjkl; asdfg hjkl; asdfg hjkl;',
                ],
            },

            // TOP ROW
            'top-row': {
                title: '🔝 Top Row Lesson',
                desc: 'Master the top row keys: Q W E R T Y U I O P',
                lessonKeys: ['q','w','e','r','t','y','u','i','o','p'],
                exercises: [
                    'qwer tyui op qwer tyui op',
                    'q w e r t y u i o p q w e r t',
                    'wert yuio wert yuio w e r t y u i o',
                    'type quiet rope pour quit ripe',
                    'were your quite port trip tour',
                    'pretty writer power outer upper',
                    'quite typewriter pottery reporter',
                    'query equity pure wire tire trip',
                    'qwert yuiop qwert yuiop qwert',
                    'top row power quiet your tower',
                ],
            },

            // BOTTOM ROW
            'bottom-row': {
                title: '🔽 Bottom Row Lesson',
                desc: 'Master the bottom row keys: Z X C V B N M , . /',
                lessonKeys: ['z','x','c','v','b','n','m',',','.','/'],
                exercises: [
                    'zxcv bnm, ./ zxcv bnm, ./',
                    'z x c v b n m , . / z x c v',
                    'zxcv bnm, zxcv bnm, zxcv bnm',
                    'zoom box move come back next',
                    'zone vice buzz max calm bend',
                    'comma. period, slash/ back. next,',
                    'complex brown fox moves quickly',
                    'zinc black van box man can zen',
                    'zxcv bnm, ./ zxcv bnm, ./ zxcv',
                    'become combine maximum exchange',
                ],
            },

            // CAPITAL LETTERS
            'capitals': {
                title: '🔠 Capital Letters Lesson',
                desc: 'Practice capital letters using the Shift key',
                lessonKeys: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                exercises: [
                    'The Quick Brown Fox Jumps Over The Lazy Dog',
                    'Monday Tuesday Wednesday Thursday Friday',
                    'January February March April May June July',
                    'New York Los Angeles Chicago Houston Phoenix',
                    'Apple Google Microsoft Amazon Tesla Netflix',
                    'John Smith Mary Johnson Robert Williams',
                    'United States Canada Mexico Brazil Argentina',
                    'LifeOS Productivity Success Health Wealth Growth',
                    'Stop Go Wait Run Walk Jump Think Create Build',
                    'ABC DEF GHI JKL MNO PQR STU VWX YZ',
                ],
            },

            // PUNCTUATION
            'punctuation': {
                title: '❗ Punctuation Lesson',
                desc: 'Master punctuation marks: . , ! ? ; : " \' ( ) -',
                lessonKeys: ['.',',','!','?',';',':','"',"'",'(',')','-'],
                exercises: [
                    'Hello! How are you? I am fine, thanks.',
                    'The meeting is at 3:00 PM; don\'t be late.',
                    'She said, "I love this app!" and smiled.',
                    'First, second, third; finally, the end.',
                    'Wow! That\'s amazing! Can you believe it?',
                    'Please bring: food, drinks, and snacks.',
                    'He asked, "What\'s the plan?" I replied, "Wait."',
                    'Yes! No? Maybe... Let\'s go! Stop. Wait...',
                    'The cost is $19.99; it\'s a great deal!',
                    'Schedule: Mon, Tue, Wed; Time: 9:00 AM.',
                ],
            },

            // NUMBERS
            'numbers': {
                title: '🔢 Numbers Lesson',
                desc: 'Practice typing numbers: 0 1 2 3 4 5 6 7 8 9',
                lessonKeys: ['0','1','2','3','4','5','6','7','8','9'],
                exercises: [
                    '1 2 3 4 5 6 7 8 9 0 1 2 3 4 5',
                    '10 20 30 40 50 60 70 80 90 100',
                    'Phone: 555-123-4567 Call today',
                    'Order #48291 shipped on 12/15/2024',
                    'Price: $1,299.99 Save 25% today only',
                    'Room 301 Floor 7 Building 42 Suite 8',
                    'Account: 9876543210 Balance: $5,432.10',
                    'Chapter 1 2 3 4 5 6 7 8 9 10',
                    'My birthday is 07/15/1990 I am 34',
                    'Score: 95 out of 100 Time: 3:45 PM',
                ],
            },

            // SYMBOLS
            'symbols': {
                title: '💲 Symbols Lesson',
                desc: 'Practice special symbols: @ # $ % & * + = < > [ ] { } \\ |',
                lessonKeys: ['@','#','$','%','&','*','+','=','<','>','[',']','{','}','\\','|'],
                exercises: [
                    '@ # $ % & * + = @ # $ % & * + =',
                    'email@domain.com #hashtag $price',
                    '100% complete & done *star* rating',
                    'x + y = z if x < 10 and y > 5',
                    '[Section 1] {Chapter 2} | Pipe',
                    'C:\\Users\\Name\\Documents\\File.txt',
                    'Price: $49.99 (50% off) #deal @store',
                    '<html> <body> <h1>Hello</h1> </body> </html>',
                    '&& || == != <= >= ++ -- ** //',
                    '\\path\\to\\file | grep "pattern"',
                ],
            },
        };

        // ============================================
        // KEYBOARD DEFINITION
        // ============================================
        const keyboardRows = [
            ['`','1','2','3','4','5','6','7','8','9','0','-','='],
            ['q','w','e','r','t','y','u','i','o','p','[',']','\\'],
            ['a','s','d','f','g','h','j','k','l',';',"'"],
            ['z','x','c','v','b','n','m',',','.','/'],
        ];

        const homeRowKeys = ['a','s','d','f','j','k','l',';'];

        // ============================================
        // LOAD/SAVE PROGRESS
        // ============================================
        function loadProgress() {
            try {
                const saved = localStorage.getItem('lifeOS_typingTutor_v2');
                if (saved) {
                    const data = JSON.parse(saved);
                    TutorState.history = data.history || [];
                    TutorState.bestStreak = data.bestStreak || 0;
                    TutorState.completedLessons = data.completedLessons || {};
                }
                updateStatsDisplay();
                updateProgressOverview();
            } catch (e) { console.error('Load failed:', e); }
        }

        function saveProgress() {
            try {
                localStorage.setItem('lifeOS_typingTutor_v2', JSON.stringify({
                    history: TutorState.history.slice(-200),
                    bestStreak: TutorState.bestStreak,
                    completedLessons: TutorState.completedLessons,
                }));
            } catch (e) { console.error('Save failed:', e); }
        }

        function markLessonComplete(mode) {
            if (!TutorState.completedLessons[mode]) {
                TutorState.completedLessons[mode] = { date: new Date().toISOString(), count: 1 };
            } else {
                TutorState.completedLessons[mode].count++;
                TutorState.completedLessons[mode].date = new Date().toISOString();
            }
            saveProgress();
            updateProgressOverview();
            updateModeTabs();
        }

        function isLessonComplete(mode) {
            return !!TutorState.completedLessons[mode];
        }

        function updateStatsDisplay() {
            const recent = TutorState.history.slice(-10);
            const avgWPM = recent.length > 0 ? Math.round(recent.reduce((s, h) => s + h.wpm, 0) / recent.length) : 0;
            const avgAcc = recent.length > 0 ? Math.round(recent.reduce((s, h) => s + h.accuracy, 0) / recent.length) : 100;
            const completedCount = Object.keys(TutorState.completedLessons).filter(k => ContentLibrary[k]).length;
            const totalLessons = Object.keys(ContentLibrary).length;

            document.getElementById('statWPM').textContent = avgWPM;
            document.getElementById('statAccuracy').textContent = avgAcc + '%';
            document.getElementById('statStreak').textContent = '🔥 ' + TutorState.bestStreak;
            document.getElementById('statCompleted').textContent = completedCount + '/' + totalLessons;
        }

        function updateProgressOverview() {
            const container = document.getElementById('progressOverview');
            const lessons = [
                { mode: 'home-row', icon: '🏠', name: 'Home Row' },
                { mode: 'top-row', icon: '🔝', name: 'Top Row' },
                { mode: 'bottom-row', icon: '🔽', name: 'Bottom' },
                { mode: 'capitals', icon: '🔠', name: 'Capitals' },
                { mode: 'punctuation', icon: '❗', name: 'Punct.' },
                { mode: 'numbers', icon: '🔢', name: 'Numbers' },
                { mode: 'symbols', icon: '💲', name: 'Symbols' },
            ];

            container.innerHTML = lessons.map(l => `
                <div class="lesson-progress-dot ${isLessonComplete(l.mode) ? 'completed' : ''}" 
                     onclick="switchMode('${l.mode}')" title="${l.name} Lesson">
                    <span class="dot-icon">${l.icon}</span>
                    <span class="dot-name">${l.name}</span>
                    ${isLessonComplete(l.mode) ? '<span class="dot-check">✅</span>' : ''}
                </div>
            `).join('');
        }

        function updateModeTabs() {
            document.querySelectorAll('.mode-tab').forEach(tab => {
                const mode = tab.dataset.mode;
                if (mode !== 'games' && isLessonComplete(mode)) {
                    tab.classList.add('completed-tab');
                }
            });
        }

        // ============================================
        // KEYBOARD VISUALIZATION
        // ============================================
        function renderKeyboard(lessonKeys) {
            const lessonKeySet = new Set((lessonKeys || []).map(k => k.toLowerCase()));
            
            let html = '<div class="keyboard-visual">';
            keyboardRows.forEach(row => {
                html += '<div class="keyboard-row">';
                row.forEach(key => {
                    let cls = 'key';
                    if (homeRowKeys.includes(key)) cls += ' home-row';
                    if (lessonKeySet.has(key)) cls += ' lesson-key';
                    if (key === ' ') cls += ' space-bar';
                    html += `<div class="${cls}" data-key="${key}">${key.toUpperCase()}</div>`;
                });
                html += '</div>';
            });
            // Space bar row
            html += '<div class="keyboard-row"><div class="key space-bar lesson-key" data-key=" ">SPACE</div></div>';
            html += '</div>';
            return html;
        }

        function highlightKey(key, type) {
            document.querySelectorAll('.key').forEach(k => k.classList.remove('highlight', 'correct-press', 'wrong-press'));
            if (!key) return;
            const lower = key.toLowerCase();
            const keyEl = Array.from(document.querySelectorAll('.key')).find(k => k.dataset.key === lower);
            if (keyEl) {
                if (type === 'correct') keyEl.classList.add('correct-press');
                else if (type === 'wrong') keyEl.classList.add('wrong-press');
                else keyEl.classList.add('highlight');
            }
        }

        // ============================================
        // FINGER GUIDE
        // ============================================
        function renderFingerGuide(currentChar) {
            const fingers = [
                { name: 'L Pinky', keys: 'qa1z`' },
                { name: 'L Ring', keys: 'ws2x' },
                { name: 'L Middle', keys: 'ed3c' },
                { name: 'L Index', keys: 'rfv4tgb5' },
                { name: 'R Index', keys: 'yhn6ujm7' },
                { name: 'R Middle', keys: 'ik8,' },
                { name: 'R Ring', keys: 'ol9.' },
                { name: 'R Pinky', keys: ';p0-=/[]\\\'' },
            ];

            let activeFinger = null;
            if (currentChar) {
                const lower = currentChar.toLowerCase();
                for (const f of fingers) {
                    if (f.keys.includes(lower)) { activeFinger = f.name; break; }
                }
            }

            let html = '<div class="finger-guide">';
            fingers.forEach(f => {
                html += `<div class="finger ${f.name === activeFinger ? 'active' : ''}">
                    <div class="finger-name">${f.name}</div>
                    <div class="finger-keys">${f.keys.split('').join(' ')}</div>
                </div>`;
            });
            html += '</div>';
            return html;
        }

        // ============================================
        // TEXT DISPLAY
        // ============================================
        function renderTextDisplay(text, typed) {
            let html = '';
            for (let i = 0; i < text.length; i++) {
                let cls = 'char';
                if (i < typed.length) {
                    cls += typed[i] === text[i] ? ' correct' : ' incorrect';
                } else if (i === typed.length) {
                    cls += ' current';
                } else {
                    cls += ' remaining';
                }
                const display = text[i] === ' ' ? '&nbsp;' : text[i];
                html += `<span class="${cls}">${escapeChar(display)}</span>`;
            }
            return html;
        }

        function escapeChar(c) {
            if (c === '<') return '&lt;';
            if (c === '>') return '&gt;';
            if (c === '&') return '&amp;';
            return c;
        }

        // ============================================
        // GAME LOGIC
        // ============================================
        function startGame() {
            const mode = TutorState.currentMode;
            let text;

            if (mode === 'games') {
                const restartGame = {
                    speed: startSpeedGame,
                    rain: startFallGame,
                    combo: startComboGame,
                    zen: startZenGame,
                }[TutorState.gameType];
                if (restartGame) restartGame();
                else renderGames(document.getElementById('gameCard'));
                return;
            }

            const lesson = ContentLibrary[mode];
            if (!lesson) return;

            text = lesson.exercises[TutorState.currentLessonIndex % lesson.exercises.length];

            TutorState.textToType = text;
            TutorState.typedText = '';
            TutorState.correctChars = 0;
            TutorState.incorrectChars = 0;
            TutorState.startTime = new Date();
            TutorState.elapsedSeconds = 0;
            TutorState.isPlaying = true;
            TutorState.streakCount = 0;

            clearInterval(TutorState.timerInterval);
            TutorState.timerInterval = setInterval(updateTimer, 1000);

            renderGameCard();
            setTimeout(() => {
                const input = document.getElementById('typingInput');
                if (input) input.focus();
            }, 100);
        }

        function updateTimer() {
            if (!TutorState.isPlaying) return;
            TutorState.elapsedSeconds++;
            document.getElementById('statTime').textContent = TutorState.elapsedSeconds + 's';
        }

        function handleInput() {
            if (!TutorState.isPlaying) return;
            const input = document.getElementById('typingInput');
            if (!input) return;
            
            const typed = input.value;
            TutorState.typedText = typed;

            let correct = 0, incorrect = 0, currentStreak = 0, longestStreak = 0;
            for (let i = 0; i < typed.length; i++) {
                if (i < TutorState.textToType.length && typed[i] === TutorState.textToType[i]) {
                    correct++;
                    currentStreak++;
                    longestStreak = Math.max(longestStreak, currentStreak);
                } else {
                    incorrect++;
                    currentStreak = 0;
                }
            }
            TutorState.streakCount = Math.max(TutorState.streakCount, longestStreak);
            TutorState.correctChars = correct;
            TutorState.incorrectChars = incorrect;

            const wordsTyped = correct / 5;
            const minutes = TutorState.elapsedSeconds / 60;
            const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
            document.getElementById('statWPM').textContent = wpm;

            const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;
            document.getElementById('statAccuracy').textContent = accuracy + '%';

            if (typed.length > 0 && typed.length <= TutorState.textToType.length) {
                const expected = TutorState.textToType[typed.length - 1];
                const actual = typed[typed.length - 1];
                highlightKey(expected, actual === expected ? 'correct' : 'wrong');
            }

            const displayEl = document.getElementById('textDisplay');
            if (displayEl) displayEl.innerHTML = renderTextDisplay(TutorState.textToType, typed);

            if (typed.length < TutorState.textToType.length) {
                const nextChar = TutorState.textToType[typed.length];
                const fingerGuideEl = document.getElementById('fingerGuide');
                if (fingerGuideEl) fingerGuideEl.innerHTML = renderFingerGuide(nextChar);
            }

            if (typed === TutorState.textToType) {
                endGame(true);
            }
        }

        function endGame(completed = false) {
            clearInterval(TutorState.timerInterval);
            TutorState.isPlaying = false;

            const correct = TutorState.correctChars;
            const wordsTyped = correct / 5;
            const minutes = TutorState.elapsedSeconds / 60;
            const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
            const typed = TutorState.typedText;
            const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;

            if (TutorState.streakCount > TutorState.bestStreak) {
                TutorState.bestStreak = TutorState.streakCount;
            }

            TutorState.history.push({
                date: new Date().toISOString(),
                mode: TutorState.currentMode,
                wpm, accuracy,
                time: TutorState.elapsedSeconds,
                textLength: TutorState.textToType.length,
            });

            if (completed && TutorState.currentMode !== 'games') {
                markLessonComplete(TutorState.currentMode);
            }

            saveProgress();
            updateStatsDisplay();
            showResults(wpm, accuracy, completed);
        }

        function showResults(wpm, accuracy, completed) {
            const overlay = document.getElementById('resultsOverlay');
            const card = document.getElementById('resultsCard');

            let grade, emoji;
            if (wpm >= 50 && accuracy >= 95) { grade = 'Excellent!'; emoji = '🏆'; }
            else if (wpm >= 35 && accuracy >= 90) { grade = 'Great Job!'; emoji = '🌟'; }
            else if (wpm >= 20 && accuracy >= 85) { grade = 'Good Work!'; emoji = '👍'; }
            else if (wpm >= 10 && accuracy >= 80) { grade = 'Keep Practicing!'; emoji = '📚'; }
            else { grade = 'You\'re Learning!'; emoji = '💪'; }

            card.innerHTML = `
                <h2>${emoji} ${grade}</h2>
                <div class="big-score">${wpm}</div>
                <p style="color:var(--text-muted)">Words Per Minute</p>
                <div class="results-grid">
                    <div class="result-item"><div class="num" style="color:var(--success)">${accuracy}%</div><div class="lbl">Accuracy</div></div>
                    <div class="result-item"><div class="num" style="color:var(--warning)">${TutorState.elapsedSeconds}s</div><div class="lbl">Time</div></div>
                    <div class="result-item"><div class="num">${TutorState.correctChars}</div><div class="lbl">Correct</div></div>
                    <div class="result-item"><div class="num" style="color:var(--danger)">${TutorState.incorrectChars}</div><div class="lbl">Errors</div></div>
                </div>
                ${completed && TutorState.currentMode !== 'games' ? '<p style="color:var(--success);font-weight:600">✅ Lesson completed! Moving to next exercise.</p>' : ''}
                <div class="game-actions">
                    <button class="btn btn-primary" onclick="closeResults(); startGame();">🔄 Try Again</button>
                    ${TutorState.currentMode !== 'games' ? `<button class="btn btn-outline" onclick="closeResults(); nextExercise();">⏭️ Next Exercise</button>` : ''}
                    <button class="btn btn-outline" onclick="closeResults();">Close</button>
                </div>
            `;
            overlay.classList.add('active');
        }

        function closeResults() {
            document.getElementById('resultsOverlay').classList.remove('active');
        }

        function nextExercise() {
            TutorState.currentLessonIndex++;
            startGame();
        }

        // ============================================
        // TYPING GAMES
        // ============================================
        function renderGames(card) {
            card.innerHTML = `
                <h3>🎮 Typing Games</h3>
                <p style="color:var(--text-muted);margin-bottom:15px">Practice typing while having fun!</p>
                <div class="games-grid">
                    <div class="game-option-card" onclick="startSpeedGame()">
                        <div class="game-icon">⚡</div>
                        <h4>Speed Blitz</h4>
                        <p>Type as many words as possible in 30 seconds!</p>
                    </div>
                    <div class="game-option-card" onclick="startFallGame()">
                        <div class="game-icon">🌧️</div>
                        <h4>Word Rain</h4>
                        <p>Type falling words before they hit the ground!</p>
                    </div>
                    <div class="game-option-card" onclick="startComboGame()">
                        <div class="game-icon">🔥</div>
                        <h4>Combo Challenge</h4>
                        <p>Build combos by typing correctly without mistakes!</p>
                    </div>
                    <div class="game-option-card" onclick="startZenGame()">
                        <div class="game-icon">🧘</div>
                        <h4>Zen Mode</h4>
                        <p>Relax and type at your own pace with calming words.</p>
                    </div>
                </div>
            `;
        }

        // Speed Blitz Game
        function startSpeedGame() {
            TutorState.currentMode = 'games';
            const words = ContentLibrary.words || ['focus','goal','plan','work','task','done','health','wealth','growth'];
            const shuffled = words.sort(() => Math.random() - 0.5);
            TutorState.textToType = shuffled.slice(0, 20).join(' ');
            TutorState.typedText = '';
            TutorState.correctChars = 0;
            TutorState.incorrectChars = 0;
            TutorState.startTime = new Date();
            TutorState.elapsedSeconds = 0;
            TutorState.isPlaying = true;
            TutorState.gameType = 'speed';
            TutorState.gameTimeLeft = 30;

            clearInterval(TutorState.timerInterval);
            TutorState.timerInterval = setInterval(() => {
                TutorState.elapsedSeconds++;
                TutorState.gameTimeLeft--;
                document.getElementById('statTime').textContent = TutorState.gameTimeLeft + 's';
                if (TutorState.gameTimeLeft <= 0) endGame(false);
            }, 1000);

            renderSpeedGameCard();
            setTimeout(() => document.getElementById('typingInput')?.focus(), 100);
        }

        function renderSpeedGameCard() {
            const card = document.getElementById('gameCard');
            card.innerHTML = `
                <h3>⚡ Speed Blitz - <span style="color:var(--warning)">${TutorState.gameTimeLeft}s</span></h3>
                <p style="color:var(--text-muted)">Type as many words as you can before time runs out!</p>
                <div class="text-display-area" id="textDisplay">${renderTextDisplay(TutorState.textToType, TutorState.typedText)}</div>
                <textarea class="typing-input" id="typingInput" placeholder="Type fast! ⚡" oninput="handleSpeedInput()" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
                <div class="game-actions">
                    <button class="btn btn-danger" onclick="endGame(false)">⏹️ Stop</button>
                </div>
            `;
        }

        function handleSpeedInput() {
            handleInput();
        }

        // Word Rain Game
        function startFallGame() {
            TutorState.currentMode = 'games';
            TutorState.gameType = 'rain';
            TutorState.rainWords = ['focus','goal','plan','work','task','health','wealth','growth','mindset','success','money','save','invest','budget','profit','earn','time','manage','habit','routine','learn','read','write','think','create','build','peace','calm','rest','sleep'];
            TutorState.rainActive = [];
            TutorState.rainScore = 0;
            TutorState.rainLives = 5;
            TutorState.isPlaying = true;
            clearInterval(TutorState.timerInterval);

            renderRainGameCard();
            TutorState.timerInterval = setInterval(updateRainGame, 2000);
            TutorState.rainSpawnInterval = setInterval(spawnRainWord, 1500);
        }

        function spawnRainWord() {
            if (!TutorState.isPlaying || TutorState.rainActive.length >= 8) return;
            const word = TutorState.rainWords[Math.floor(Math.random() * TutorState.rainWords.length)];
            TutorState.rainActive.push({
                word,
                x: Math.random() * 70 + 5,
                y: 0,
                id: Date.now(),
            });
            renderRainGameCard();
        }

        function updateRainGame() {
            if (!TutorState.isPlaying) return;
            TutorState.rainActive.forEach(w => w.y += 12);
            TutorState.rainActive = TutorState.rainActive.filter(w => {
                if (w.y > 90) {
                    TutorState.rainLives--;
                    return false;
                }
                return true;
            });
            if (TutorState.rainLives <= 0) {
                endRainGame();
                return;
            }
            renderRainGameCard();
        }

        function checkRainInput() {
            if (!TutorState.isPlaying) return;
            const input = document.getElementById('rainInput');
            if (!input) return;
            const typed = input.value.trim().toLowerCase();
            
            const matchIndex = TutorState.rainActive.findIndex(w => w.word === typed);
            if (matchIndex >= 0) {
                TutorState.rainActive.splice(matchIndex, 1);
                TutorState.rainScore += typed.length * 10;
                input.value = '';
                renderRainGameCard();
            }
        }

        function renderRainGameCard() {
            const card = document.getElementById('gameCard');
            const previousInput = document.getElementById('rainInput');
            const inputValue = previousInput ? previousInput.value : '';
            const shouldRefocus = previousInput && document.activeElement === previousInput;
            card.innerHTML = `
                <h3>🌧️ Word Rain - Score: ${TutorState.rainScore} | Lives: ${'❤️'.repeat(TutorState.rainLives)}</h3>
                <p style="color:var(--text-muted)">Type the falling words before they hit the bottom!</p>
                <div style="position:relative;height:300px;background:#0d0d1a;border-radius:var(--radius-sm);overflow:hidden;margin:10px 0">
                    ${TutorState.rainActive.map(w => `
                        <div style="position:absolute;left:${w.x}%;top:${w.y}%;background:var(--accent);color:white;padding:6px 12px;border-radius:15px;font-weight:600;font-size:0.9em;transition:top 0.5s">${w.word}</div>
                    `).join('')}
                </div>
                <input type="text" class="typing-input" id="rainInput" placeholder="Type word and press Enter..." onkeypress="if(event.key==='Enter')checkRainInput()" autocomplete="off">
                <div class="game-actions">
                    <button class="btn btn-danger" onclick="endRainGame()">⏹️ Stop</button>
                </div>
            `;
            const input = document.getElementById('rainInput');
            input.value = inputValue;
            if (shouldRefocus) input.focus();
        }

        function endRainGame() {
            clearInterval(TutorState.timerInterval);
            clearInterval(TutorState.rainSpawnInterval);
            TutorState.isPlaying = false;
            showToast('Game Over! Score: ' + TutorState.rainScore, 'success');
            switchMode('games');
        }

        // Combo Challenge
        function startComboGame() {
            TutorState.currentMode = 'games';
            TutorState.gameType = 'combo';
            const words = ContentLibrary.words || ['focus','goal','plan','work','task'];
            TutorState.comboWords = words.sort(() => Math.random() - 0.5).slice(0, 10);
            TutorState.comboIndex = 0;
            TutorState.comboStreak = 0;
            TutorState.comboScore = 0;
            TutorState.isPlaying = true;
            TutorState.textToType = TutorState.comboWords[TutorState.comboIndex];
            TutorState.typedText = '';

            renderComboGameCard();
            setTimeout(() => document.getElementById('typingInput')?.focus(), 100);
        }

        function handleComboInput() {
            const input = document.getElementById('typingInput');
            if (!input || !TutorState.isPlaying) return;
            const typed = input.value.trim();
            
            if (typed === TutorState.textToType) {
                TutorState.comboStreak++;
                TutorState.comboScore += TutorState.comboStreak * 10;
                TutorState.comboIndex++;
                
                if (TutorState.comboIndex >= TutorState.comboWords.length) {
                    showToast('Combo Master! Score: ' + TutorState.comboScore, 'success');
                    switchMode('games');
                    return;
                }
                
                TutorState.textToType = TutorState.comboWords[TutorState.comboIndex];
                TutorState.typedText = '';
                input.value = '';
                renderComboGameCard();
            }
        }

        function renderComboGameCard() {
            const card = document.getElementById('gameCard');
            card.innerHTML = `
                <h3>🔥 Combo Challenge - Score: ${TutorState.comboScore}</h3>
                <p style="color:var(--text-muted)">Combo: <span style="color:var(--warning);font-size:1.3em">${TutorState.comboStreak}x</span></p>
                <div class="text-display-area" style="font-size:2em;text-align:center">${TutorState.textToType}</div>
                <input type="text" class="typing-input" id="typingInput" placeholder="Type the word and press Enter..." onkeypress="if(event.key==='Enter')handleComboInput()" autocomplete="off">
                <div class="game-actions">
                    <button class="btn btn-danger" onclick="switchMode('games')">⏹️ Stop</button>
                </div>
            `;
        }

        // Zen Mode
        function startZenGame() {
            const zenWords = ['peace','calm','rest','sleep','water','food','breathe','relax','gentle','quiet','still','soft','warm','light','ease','flow','slow','kind','love','hope','joy','rest','dream','smile','grace','bloom','rise','glow'];
            TutorState.textToType = zenWords.sort(() => Math.random() - 0.5).join(' ');
            TutorState.typedText = '';
            TutorState.correctChars = 0;
            TutorState.incorrectChars = 0;
            TutorState.elapsedSeconds = 0;
            TutorState.startTime = new Date();
            TutorState.streakCount = 0;
            TutorState.isPlaying = true;
            TutorState.currentMode = 'games';
            TutorState.gameType = 'zen';
            
            clearInterval(TutorState.timerInterval);
            TutorState.timerInterval = setInterval(updateTimer, 1000);
            renderGameCard();
            setTimeout(() => document.getElementById('typingInput')?.focus(), 100);
        }

        function renderZenGameCard() {
            const card = document.getElementById('gameCard');
            card.innerHTML = `
                <h3>🧘 Zen Mode</h3>
                <p style="color:var(--text-muted)">Relax and type at your own pace.</p>
                <div class="text-display-area" id="textDisplay">${renderTextDisplay(TutorState.textToType, TutorState.typedText)}</div>
                <textarea class="typing-input" id="typingInput" placeholder="Type calmly..." oninput="handleInput()" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
                <div class="game-actions">
                    <button class="btn btn-danger" onclick="endGame(false)">⏹️ Stop</button>
                </div>
            `;
        }

        // ============================================
        // RENDER GAME CARD
        // ============================================
        function renderGameCard() {
            const card = document.getElementById('gameCard');
            const mode = TutorState.currentMode;

            if (mode === 'games' && !TutorState.gameType) {
                renderGames(card);
                return;
            }

            if (TutorState.gameType === 'speed') { renderSpeedGameCard(); return; }
            if (TutorState.gameType === 'rain') { renderRainGameCard(); return; }
            if (TutorState.gameType === 'combo') { renderComboGameCard(); return; }
            if (TutorState.gameType === 'zen') { renderZenGameCard(); return; }

            const lesson = ContentLibrary[mode];
            if (!lesson) return;

            card.innerHTML = `
                ${renderKeyboard(lesson.lessonKeys)}
                <h3>${lesson.title}</h3>
                <p class="lesson-desc">${lesson.desc}</p>
                <p style="color:var(--text-muted);font-size:0.8em">Exercise ${TutorState.currentLessonIndex + 1} of ${lesson.exercises.length}</p>
                <div class="progress-bar"><div class="progress-fill" style="width:${((TutorState.currentLessonIndex % lesson.exercises.length) / lesson.exercises.length) * 100}%"></div></div>
                ${TutorState.textToType ? `
                    <div class="text-display-area" id="textDisplay">${renderTextDisplay(TutorState.textToType, TutorState.typedText)}</div>
                    <div id="fingerGuide">${renderFingerGuide(TutorState.typedText.length < TutorState.textToType.length ? TutorState.textToType[TutorState.typedText.length] : null)}</div>
                    <textarea class="typing-input" id="typingInput" placeholder="Start typing here..." oninput="handleInput()" ${!TutorState.isPlaying ? 'disabled' : ''} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
                ` : '<p style="color:var(--text-muted);text-align:center;padding:20px">Click <strong>Start</strong> to begin!</p>'}
                <div class="game-actions">
                    <button class="btn btn-primary" onclick="startGame()">${TutorState.isPlaying ? '🔄 Restart' : '▶️ Start'}</button>
                    ${TutorState.isPlaying ? '<button class="btn btn-danger" onclick="endGame(false)">⏹️ Stop</button>' : ''}
                    <button class="btn btn-outline btn-sm" onclick="TutorState.currentLessonIndex=0;renderGameCard();">↩️ Reset Exercises</button>
                </div>
            `;

            if (TutorState.isPlaying) {
                setTimeout(() => document.getElementById('typingInput')?.focus(), 100);
            }
        }

        // ============================================
        // MODE SWITCHING
        // ============================================
        function switchMode(mode) {
            TutorState.currentMode = mode;
            TutorState.isPlaying = false;
            TutorState.textToType = '';
            TutorState.typedText = '';
            TutorState.gameType = null;
            clearInterval(TutorState.timerInterval);
            clearInterval(TutorState.rainSpawnInterval);

            document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
            document.querySelector(`.mode-tab[data-mode="${mode}"]`)?.classList.add('active');

            closeResults();
            document.getElementById('statTime').textContent = '0s';
            renderGameCard();
        }

        function showToast(msg, type) {
            const t = document.createElement('div');
            t.style.cssText = `position:fixed;top:20px;right:20px;padding:12px 18px;border-radius:8px;z-index:500;font-weight:600;background:${type==='success'?'var(--success)':'var(--danger)'};color:#000;box-shadow:0 8px 25px rgba(0,0,0,0.5);animation:slideRight 0.3s ease;`;
            t.textContent = msg;
            document.body.appendChild(t);
            setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 2500);
        }

        // ============================================
        // INITIALIZATION
        // ============================================
        function init() {
            loadProgress();
            updateStatsDisplay();
            updateProgressOverview();
            updateModeTabs();

            document.querySelectorAll('.mode-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    switchMode(this.dataset.mode);
                });
            });

            document.getElementById('resultsOverlay').addEventListener('click', function(e) {
                if (e.target === this) closeResults();
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && TutorState.isPlaying) endGame(false);
            });

            renderGameCard();
            console.log('⌨️ LifeOS Typing Tutor v2.0 Ready!');
            console.log('📚 Lessons: Home Row | Top Row | Bottom Row | Capitals | Punctuation | Numbers | Symbols');
            console.log('🎮 Games: Speed Blitz | Word Rain | Combo Challenge | Zen Mode');
        }

        init();
