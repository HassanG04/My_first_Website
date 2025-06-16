document.addEventListener('DOMContentLoaded', function () {
    // ========== DARK MODE ==========
    function initializeDarkMode() {
        const isDark = localStorage.getItem('dark-mode') === 'enabled';
        const icon = document.querySelector('#darkModeToggle i');
        if (isDark) {
            document.body.classList.add('dark-mode');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.body.classList.remove('dark-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    initializeDarkMode();

    const darkToggleBtn = document.getElementById('darkModeToggle');
    if (darkToggleBtn) {
        darkToggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            const isEnabled = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isEnabled ? 'enabled' : 'disabled');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    // ========== CTA BUTTON ==========
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            const responses = [
                "Fun Fact: I love RTS videogames!",
                "My LinkedIn would feel honored to have you!",
                "Feel free to ask me for anything.",
                "Check the Hobbies.",  // this line exists
                "Don't hesitate to contact me."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            document.getElementById('ctaResponse').textContent = randomResponse;

            if (ctaButton.textContent === 'Click Me!') {
                ctaButton.textContent = 'Click again!';
            }
        });
    }

    // ========== ACTIVE NAV LINK ==========
    const currentPage = location.pathname.split('/').pop();
    if (currentPage) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ========== TRANSLATION TOGGLE ==========
    let currentLang = 'en';

    const translations = {
        // Navbar and Global
        "Home": "الرئيسية",
        "About": "عنّي",
        "About Me": "عنّي",
        "Hobbies": "الهوايات",
        "Translate to Arabic": "ترجم إلى العربية",
        "Translate to English": "ترجم إلى الإنجليزية",

        // index.html
        "Hello, I'm": "مرحبًا، أنا",
        "Welcome to my personal portfolio website.": "مرحبًا بك في موقعي الشخصي.",
        "Quick Introduction": "مقدمة سريعة",
        "My Skills": "مهاراتي",
        "Web Development": "تطوير الويب",
        "Experience with HTML, CSS, JavaScript, and frameworks like Bootstrap.": "خبرة في HTML و CSS و JavaScript وأطر مثل Bootstrap.",
        "Creative Thinking": "التفكير الإبداعي",
        "Experience with Video Editing, Problem solving and": "خبرة في تحرير الفيديو وحل المشكلات و",
        "Design": "التصميم",
        "Creating visually appealing and user-friendly interfaces.": "إنشاء واجهات جذابة وسهلة الاستخدام.",
        "Problem Solving": "حل المشكلات",
        "Analytical thinking and creative solutions to complex problems.": "تفكير تحليلي وحلول إبداعية للمشاكل المعقدة.",
        "Want to know more?": "هل تريد معرفة المزيد؟",
        "Click Me!": "اضغط عليّ!",
        "Click again!": "اضغط مرة أخرى!",
        "Check the Hobbies.": "اطلع على الهوايات.",
        "Feel free to ask me for anything.": "لا تتردد في سؤالي عن أي شيء.",
        "Don't hesitate to contact me.": "لا تتردد في التواصل معي.",
        "My LinkedIn would feel honored to have you!": "سيسعدني انضمامك إلى حسابي على لينكد إن!",
        "Fun Fact: I love RTS videogames!": "معلومة ممتعة: أحب ألعاب الفيديو الإستراتيجية!",

        // about.html
        "My Story": "قصتي",
        "I was born in Alexandria, Egypt. Went to Sidi Gaber Language School where I have met a lot of brothers. They got me into coding and made me love it!": "ولدت في الإسكندرية، مصر. التحقت بمدرسة سيدي جابر للغات حيث تعرفت على الكثير من الأصدقاء. هم من جعلوني أحب البرمجة!",
        "That's why I entered this field, because it's fun!": "لهذا السبب دخلت هذا المجال، لأنه ممتع!",
        "More information:": "معلومات إضافية:",
        "Currently Student at AAST AI": "طالب حاليًا في الأكاديمية العربية للعلوم والتكنولوجيا تخصص الذكاء الاصطناعي",
        "Finished CCNA": "أنهيت دورة CCNA",
        "Fast Learner": "أتعلم بسرعة",
        "I love working in creative and respectful enviroment.": "أحب العمل في بيئة إبداعية ومحترمة.",
        "Education": "التعليم",
        "Arab Academy for Science and Technology": "الأكاديمية العربية للعلوم والتكنولوجيا",
        "Artificial Intelligence Degree, Data Science": "بكالوريوس في الذكاء الاصطناعي، تخصص علوم البيانات",
        "4 Years, Participated in:": "4 سنوات، شاركت في:",
        "ECPC": "المسابقة المصرية للبرمجة ECPC",
        "RoboCup junior": "روبوكاب للناشئين",
        "RoboCup at Home": "روبوكاب للمنازل",

        // hobbies.html
        "My Hobbies": "هواياتي",
        "Problem solving": "حل المشكلات",
        "I participated in coding contests because I love solving problems.": "شاركت في مسابقات البرمجة لأنني أحب حل المشكلات.",
        "Gaming": "الألعاب",
        "Sometimes I blow off some STEAM by playing video games!": "أحيانًا أرفه عن نفسي بلعب ألعاب الفيديو!",
        "Video Editing": "تحرير الفيديو",
        "I love editing quality videos in my free time!": "أحب تحرير مقاطع فيديو بجودة عالية في وقت فراغي!",
        "Check CodeForces!": "اطلع على حسابي في CodeForces!",
        "Add me on STEAM!": "أضفني على ستيم!",
        "Check my work!": "شاهد أعمالي!",
        "Check my YouTube channel!": "اطلع على قناتي على يوتيوب!",
        "Experience with Video Editing, Problem solving and more!": "خبرة في تحرير الفيديو وحل المشكلات والمزيد!",
        "Experience with HTML, CSS, JavaScript, and frameworks like Bootstrap.": "خبرة في HTML و CSS و JavaScript وأطر مثل Bootstrap.",
        "Experience with HTML, CSS, JavaScript, and frameworks like Bootstrap.": "خبرة في HTML و CSS و JavaScript وأطر مثل Bootstrap.",
        "Web Development": "تطوير الويب",
        "I'm an aspiring AI student with passion for creativity, problem-solving, and development.": "أنا طالب ذكاء اصطناعي طموح لدي شغف بالإبداع، وحل المشكلات، والتطوير.",
        "Check the Hobbies.": "اطلع على الهوايات.",
        "My LinkedIn would feel honored to have you!": "سيسعدني انضمامك إلى حسابي على لينكد إن!",
        "Fun Fact: I love RTS videogames!": "معلومة ممتعة: أحب ألعاب الفيديو الإستراتيجية!",
        "Feel free to ask me for anything.": "لا تتردد في سؤالي عن أي شيء.",
        "Don't hesitate to contact me.": "لا تتردد في التواصل معي.",
        "Click Me!": "اضغط عليّ!",
        "Click again!": "اضغط مرة أخرى!",
        "Check the Hobbies.": "اطلع على الهوايات.",
    };


    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        translateBtn.addEventListener('click', function () {
            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(el => {
                const key = el.getAttribute('data-key');
                const text = translations[key];
                if (text) {
                    el.textContent = (currentLang === 'en') ? text : key;
                }
            });

            // Toggle button text
            translateBtn.textContent = currentLang === 'en' ? "Translate to English" : "Translate to Arabic";

            // Flip language
            currentLang = currentLang === 'en' ? 'ar' : 'en';
        });
    }
});
