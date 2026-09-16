export interface CourseTranslation {
  id: string;
  title: string;
  category: string;
  instructorRole: string;
  duration: string;
  level: string;
  description: string;
  badge?: string;
}

export interface SubjectTranslation {
  id: string;
  name: string;
  description: string;
}

export interface TranslationData {
  navbar: {
    subjects: string;
    courses: string;
    degrees: string;
    business: string;
    signup: string;
    login: string;
  };
  hero: {
    kicker: string;
    titlePart1: string;
    courseWord: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
    stat1Number: string;
    stat1Label: string;
    stat1Tag: string;
    stat2Number: string;
    stat2Label: string;
    stat2Tag: string;
    stat3Number: string;
    stat3Label: string;
    stat3Tag: string;
  };
  subjects: SubjectTranslation[];
  coursesSection: {
    badge: string;
    titlePart1: string;
    coursesWord: string;
    titlePart2: string;
    subtitle: string;
    viewAll: string;
    enrollNow: string;
    lessonsSuffix: string;
  };
  courses: Record<string, CourseTranslation>;
  learningPreview: {
    badge: string;
    titlePart1: string;
    workspaceWord: string;
    titlePart2: string;
    subtitle: string;
    cohortLabel: string;
    overallProgress: string;
    progressSub: string;
    tabLecture: string;
    tabEditor: string;
    tabNotes: string;
    chapterTag: string;
    askAssistant: string;
    nextLesson: string;
    syllabusTitle: string;
    lessonsCountLabel: string;
    officeHoursTitle: string;
    officeHoursSub: string;
    takeawaysTitle: string;
    takeaway1: string;
    takeaway2: string;
    takeaway3: string;
    lessons: Array<{ title: string; duration: string }>;
  };
  whyTechgogo: {
    badge: string;
    titlePart1: string;
    highlightWord: string;
    titlePart2: string;
    subtitle: string;
    exploreMethodology: string;
    items: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
  testimonials: {
    badge: string;
    titlePart1: string;
    storiesWord: string;
    titlePart2: string;
    subtitle: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
      course: string;
    }>;
  };
  footer: {
    cohortBannerBadge: string;
    bannerTitlePart1: string;
    bannerHighlightWord: string;
    bannerTitlePart2: string;
    bannerSubtitle: string;
    emailPlaceholder: string;
    bannerCta: string;
    bannerNote: string;
    brandDesc: string;
    colSubjects: string;
    colPlatform: string;
    colTeams: string;
    colCompany: string;
    rights: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
}

export const translations: Record<"en" | "ka", TranslationData> = {
  en: {
    navbar: {
      subjects: "Subjects",
      courses: "Courses",
      degrees: "Degrees",
      business: "For Business",
      signup: "Sign up",
      login: "Login",
    },
    hero: {
      kicker: "Self-Paced & Cohort Learning",
      titlePart1: "Find the right",
      courseWord: "course",
      titlePart2: "for you",
      subtitle:
        "Build practical skills with courses designed around your goals. Learn directly from engineers and designers shipping production technology.",
      ctaPrimary: "Find a course",
      ctaSecondary: "Explore courses",
      trustText: "Trusted by 180,000+ developers, designers & creators",
      stat1Number: "40+",
      stat1Label: "Specialized Subjects",
      stat1Tag: "Expanded",
      stat2Number: "120+",
      stat2Label: "Practical Courses",
      stat2Tag: "Updated 2026",
      stat3Number: "180K+",
      stat3Label: "Active Global Learners",
      stat3Tag: "Global",
    },
    subjects: [
      { id: "all", name: "All Subjects", description: "Browse all courses" },
      { id: "ai-ml", name: "AI & Machine Learning", description: "LLMs and Neural Networks" },
      { id: "fullstack", name: "Full-Stack Development", description: "Next.js, React, Node & Go" },
      { id: "design", name: "UI/UX & Product Design", description: "Design Systems & Prototyping" },
      { id: "cloud", name: "Cloud & DevOps", description: "Kubernetes & CI/CD Pipelines" },
      { id: "data", name: "Data Engineering", description: "Kafka, SQL & Lakehouses" },
    ],
    coursesSection: {
      badge: "HANDS-ON CURRICULUM",
      titlePart1: "Featured",
      coursesWord: "courses",
      titlePart2: "crafted by leads.",
      subtitle: "Deep-dive into comprehensive, cohort-based, and self-guided tracks.",
      viewAll: "View all 120+ courses",
      enrollNow: "Enroll Now",
      lessonsSuffix: "lessons",
    },
    courses: {
      "course-1": {
        id: "course-1",
        title: "Applied AI Systems & Agentic Workflows",
        category: "AI & Machine Learning",
        instructorRole: "Ex-Research Lead, DeepMind",
        duration: "8 weeks",
        level: "Intermediate",
        description:
          "Design autonomous agents, fine-tune open-source models, and integrate vector databases into production apps.",
        badge: "Most Popular",
      },
      "course-2": {
        id: "course-2",
        title: "Modern Full-Stack Architecture with Next.js & Go",
        category: "Full-Stack Development",
        instructorRole: "Principal Architect, Vercel Alumni",
        duration: "10 weeks",
        level: "Advanced",
        description:
          "From server components to distributed microservices. Build resilient, high-concurrency cloud applications.",
        badge: "Bestseller",
      },
      "course-3": {
        id: "course-3",
        title: "Design Systems & Editorial UI Engineering",
        category: "UI/UX & Product Design",
        instructorRole: "Design Director, Studio Forma",
        duration: "6 weeks",
        level: "Beginner",
        description:
          "Master typography scales, color harmony, accessible token architecture, and fluid responsive layouts.",
      },
      "course-4": {
        id: "course-4",
        title: "Cloud-Native Infrastructure & Kubernetes at Scale",
        category: "Cloud & DevOps",
        instructorRole: "Staff SRE, Stripe",
        duration: "7 weeks",
        level: "Intermediate",
        description:
          "Construct zero-downtime deployment pipelines, declarative GitOps workflows, and observability meshes.",
      },
      "course-5": {
        id: "course-5",
        title: "Distributed Data Pipelines with Apache Kafka & DuckDB",
        category: "Data Engineering",
        instructorRole: "Data Platform Lead, Snowflake",
        duration: "9 weeks",
        level: "Advanced",
        description:
          "Stream millions of events in real-time, construct modern lakehouses, and automate analytical pipelines.",
        badge: "New Cohort",
      },
      "course-6": {
        id: "course-6",
        title: "Creative Coding & Interactive Canvas Systems",
        category: "UI/UX & Product Design",
        instructorRole: "Interactive Artist & Technologist",
        duration: "5 weeks",
        level: "Beginner",
        description:
          "Synthesize mathematics and art with WebGL, GLSL shaders, and interactive SVG physics simulations.",
      },
    },
    learningPreview: {
      badge: "CALM LEARNING ENVIRONMENT",
      titlePart1: "A distraction-free",
      workspaceWord: "workspace",
      titlePart2: "built for deep focus.",
      subtitle:
        "While our brand is playful, your learning space is designed for maximum clarity, readability, and continuous momentum.",
      cohortLabel: "Cohort 04 • Dr. Aris Thorne",
      overallProgress: "Overall Progress",
      progressSub: "3 of 8 modules complete",
      tabLecture: "Interactive Lecture",
      tabEditor: "Sandbox Editor",
      tabNotes: "Curated Notes",
      chapterTag: "Chapter 3.2 • Multi-Tool Execution Loop",
      askAssistant: "Ask Teaching Assistant",
      nextLesson: "Next: Multi-Agent Swarms",
      syllabusTitle: "Course Syllabus",
      lessonsCountLabel: "5 Lessons",
      officeHoursTitle: "Weekly Live Office Hours",
      officeHoursSub: "Thursday at 5:00 PM EST with Dr. Thorne.",
      takeawaysTitle: "Key Takeaways from Lesson 3",
      takeaway1: "Keep tool definitions declarative with explicit JSON schema validation.",
      takeaway2: "Bound autonomous execution loops with timeouts to prevent unbounded recursion.",
      takeaway3: "Verify outputs before committing changes back to upstream states.",
      lessons: [
        { title: "1. Foundations of Agentic Loops", duration: "18 min" },
        { title: "2. Prompt Synthesis & Memory Buffers", duration: "24 min" },
        { title: "3. Tool Use & Declarative Function Calling", duration: "32 min" },
        { title: "4. Multi-Agent Swarm Orchestration", duration: "45 min" },
        { title: "5. Production Deployment & Telemetry", duration: "29 min" },
      ],
    },
    whyTechgogo: {
      badge: "WHY TECHGOGO",
      titlePart1: "Designed for",
      highlightWord: "tangible results",
      titlePart2: "in modern tech.",
      subtitle:
        "We eliminated boring slides and dry quizzes. You learn by building production-grade software and collaborating with peers.",
      exploreMethodology: "Explore Methodology",
      items: [
        {
          title: "Real Production Code, Not Toy Exercises",
          description:
            "Every assignment is engineered around real scenarios: debugging distributed services, building design systems, and orchestrating AI workflows.",
          tag: "Applied Learning",
        },
        {
          title: "Direct Feedback from Senior Practitioners",
          description:
            "Weekly synchronous teardowns and asynchronous video critique on your pull requests by working engineers from top-tier tech companies.",
          tag: "Live Mentorship",
        },
        {
          title: "Updated Continuously for 2026 Standards",
          description:
            "Curriculum reflects today’s bleeding-edge tooling: Claude & GPT-4o function calling, Next.js Server Components, Rust, Go, and WebGL.",
          tag: "Current Curriculum",
        },
      ],
    },
    testimonials: {
      badge: "STUDENT STORIES",
      titlePart1: "Loved by learners",
      storiesWord: "accelerating",
      titlePart2: "their careers.",
      subtitle:
        "Read unedited perspectives from engineers, product designers, and creative technologists.",
      items: [
        {
          quote:
            "TechGogo feels like working in a high-caliber agency rather than a traditional school. The projects I built landed me interviews at three top European startups.",
          name: "Tariq Al-Mansoor",
          role: "Now Senior Frontend Engineer at Monzo",
          course: "Modern Full-Stack Architecture",
        },
        {
          quote:
            "The design systems course completely reframed how I talk about tokens, responsive cadence, and accessible components with our engineering team.",
          name: "Chloe Dupont",
          role: "Product Design Lead at Alan",
          course: "Design Systems & Editorial UI",
        },
        {
          quote:
            "No hand-waving AI abstractions. We built real autonomous agent loops with eval harnesses. The mentorship feedback on PRs was pure gold.",
          name: "Kenji Sato",
          role: "AI Application Developer",
          course: "Applied AI Systems",
        },
      ],
    },
    footer: {
      cohortBannerBadge: "NEXT COHORT STARTS MONDAY",
      bannerTitlePart1: "Ready to find your next",
      bannerHighlightWord: "breakthrough",
      bannerTitlePart2: "skill?",
      bannerSubtitle:
        "Join over 180,000 learners mastering modern technology. Get instant access to lessons, cohort mentors, and interactive project repos.",
      emailPlaceholder: "Enter your work email...",
      bannerCta: "Get Started Free",
      bannerNote: "No credit card required • 7-day trial on all courses • Cancel anytime",
      brandDesc:
        "A modern online technology education platform dedicated to practical, human-centered, and production-grade mastery.",
      colSubjects: "Subjects",
      colPlatform: "Platform",
      colTeams: "For Teams",
      colCompany: "Company",
      rights: "TechGogo Education Inc. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Preferences",
    },
  },
  ka: {
    navbar: {
      subjects: "მიმართულებები",
      courses: "კურსები",
      degrees: "პროგრამები",
      business: "ბიზნესისთვის",
      signup: "რეგისტრაცია",
      login: "შესვლა",
    },
    hero: {
      kicker: "თვითმართვადი და კოჰორტული სწავლება",
      titlePart1: "იპოვე შენთვის შესაფერისი",
      courseWord: "კურსი",
      titlePart2: "დღესვე",
      subtitle:
        "განივითარე პრაქტიკული უნარები შენს მიზნებზე მორგებული სასწავლო გეგმით. ისწავლე ინჟინრებისა და დიზაინერებისგან, რომლებიც რეალურ პროდუქტებს ქმნიან.",
      ctaPrimary: "იპოვე კურსი",
      ctaSecondary: "კურსების დათვალიერება",
      trustText: "180,000+ დეველოპერის, დიზაინერისა და ინოვატორის ნდობით",
      stat1Number: "40+",
      stat1Label: "სპეციალიზებული საგანი",
      stat1Tag: "განახლებული",
      stat2Number: "120+",
      stat2Label: "პრაქტიკული კურსი",
      stat2Tag: "2026 წლის სტანდარტი",
      stat3Number: "180K+",
      stat3Label: "აქტიური გლობალური მოსწავლე",
      stat3Tag: "მსოფლიო მასშტაბით",
    },
    subjects: [
      { id: "all", name: "ყველა მიმართულება", description: "სრული კატალოგის დათვალიერება" },
      { id: "ai-ml", name: "ხელოვნური ინტელექტი & ML", description: "LLM აგენტები და ნეირონული ქსელები" },
      { id: "fullstack", name: "Full-Stack დეველოპმენტი", description: "Next.js, React, Node და Go" },
      { id: "design", name: "UI/UX & პროდუქტის დიზაინი", description: "დიზაინ სისტემები და პროტოტიპები" },
      { id: "cloud", name: "Cloud & DevOps", description: "Kubernetes, Docker და CI/CD" },
      { id: "data", name: "მონაცემთა ინჟინერია", description: "Kafka, SQL და Lakehouse სისტემები" },
    ],
    coursesSection: {
      badge: "პრაქტიკული კურიკულუმი",
      titlePart1: "რჩეული",
      coursesWord: "კურსები",
      titlePart2: "წამყვანი ექსპერტებისგან.",
      subtitle: "ჩაუღრმავდი ყოვლისმომცველ, კოჰორტულ და პრაქტიკაზე დაფუძნებულ პროგრამებს.",
      viewAll: "ყველა 120+ კურსის ნახვა",
      enrollNow: "ჩაეწერე ახლავე",
      lessonsSuffix: "გაკვეთილი",
    },
    courses: {
      "course-1": {
        id: "course-1",
        title: "გამოყენებითი AI სისტემები & ავტონომიური აგენტები",
        category: "ხელოვნური ინტელექტი & ML",
        instructorRole: "კვლევის ყოფილი ხელმძღვანელი, DeepMind",
        duration: "8 კვირა",
        level: "საშუალო",
        description:
          "ააგე ავტონომიური აგენტები, მოარგე ღია მოდელები შენს მიზნებს და დააკავშირე ვექტორული ბაზები რეალურ აპლიკაციებში.",
        badge: "ყველაზე მოთხოვნადი",
      },
      "course-2": {
        id: "course-2",
        title: "თანამედროვე Full-Stack არქიტექტურა Next.js & Go-თი",
        category: "Full-Stack დეველოპმენტი",
        instructorRole: "მთავარი არქიტექტორი, Vercel-ის ალუმნი",
        duration: "10 კვირა",
        level: "გაღრმავებული",
        description:
          "სერვერული კომპონენტებიდან მასშტაბურ მიკროსერვისებამდე. ააგე სწრაფი, საიმედო და მაღალდატვირთული ქლაუდ სისტემები.",
        badge: "ბესტსელერი",
      },
      "course-3": {
        id: "course-3",
        title: "დიზაინ სისტემები & სარედაქციო UI ინჟინერია",
        category: "UI/UX & პროდუქტის დიზაინი",
        instructorRole: "დიზაინ დირექტორი, Studio Forma",
        duration: "6 კვირა",
        level: "დამწყები",
        description:
          "დაეუფლე ტიპოგრაფიის იერარქიას, ფერთა ჰარმონიას, ტოკენების არქიტექტურასა და ადაპტირებად კომპოზიციებს.",
      },
      "course-4": {
        id: "course-4",
        title: "Cloud-Native ინფრასტრუქტურა & Kubernetes მასშტაბში",
        category: "Cloud & DevOps",
        instructorRole: "Staff SRE, Stripe",
        duration: "7 კვირა",
        level: "საშუალო",
        description:
          "შექმენი უწყვეტი დეპლოის მილსადენები, დეკლარატიული GitOps პროცესები და გაფართოებული მონიტორინგი.",
      },
      "course-5": {
        id: "course-5",
        title: "მონაცემთა ნაკადები Apache Kafka-სა და DuckDB-სთან",
        category: "მონაცემთა ინჟინერია",
        instructorRole: "პლატფორმის ლიდი, Snowflake",
        duration: "9 კვირა",
        level: "გაღრმავებული",
        description:
          "დაამუშავე მილიონობით მოვლენა რეალურ დროში, ააგე თანამედროვე Data Lakehouse და ავტომატიზირებული ანალიტიკა.",
        badge: "ახალი კოჰორტა",
      },
      "course-6": {
        id: "course-6",
        title: "კრეატიული კოდინგი & ინტერაქციული Canvas სისტემები",
        category: "UI/UX & პროდუქტის დიზაინი",
        instructorRole: "ინტერაქციული არტისტი და ტექნოლოგი",
        duration: "5 კვირა",
        level: "დამწყები",
        description:
          "გააერთიანე მათემატიკა და ხელოვნება WebGL-ის, GLSL შეიედერებისა და ინტერაქციული ფიზიკის სიმულაციების დახმარებით.",
      },
    },
    learningPreview: {
      badge: "მშვიდი სასწავლო გარემო",
      titlePart1: "ყურადღების გაფანტვისგან თავისუფალი",
      workspaceWord: "სამუშაო სივრცე",
      titlePart2: "მაქსიმალური ფოკუსისთვის.",
      subtitle:
        "მიუხედავად იმისა, რომ ჩვენი ბრენდი ენერგიული და თამამია, საკლასო სივრცე შექმნილია მაღალი წაკითხვადობისა და კონცენტრაციისთვის.",
      cohortLabel: "კოჰორტა 04 • დოქტორი არის თორნი",
      overallProgress: "საერთო პროგრესი",
      progressSub: "8-დან 3 მოდული დასრულებულია",
      tabLecture: "ინტერაქციული ლექცია",
      tabEditor: "კოდის სავარჯიშო",
      tabNotes: "კონსპექტი და რესურსები",
      chapterTag: "თავი 3.2 • მრავალინსტრუმენტიანი შესრულების ციკლი",
      askAssistant: "კითხვა ასისტენტთან",
      nextLesson: "შემდეგი: Multi-Agent Swarms",
      syllabusTitle: "კურსის სილაბუსი",
      lessonsCountLabel: "5 გაკვეთილი",
      officeHoursTitle: "ყოველკვირეული ლაივ კონსულტაცია",
      officeHoursSub: "ხუთშაბათს 17:00 საათზე ონლაინ დოქტორ თორნთან ერთად.",
      takeawaysTitle: "მე-3 გაკვეთილის მთავარი პუნქტები",
      takeaway1: "ინსტრუმენტების აღწერილობა ყოველთვის შეინახეთ დეკლარატიულ JSON Schema ფორმატში.",
      takeaway2: "შეზღუდეთ ავტონომიური ციკლები ტაიმაუტებით, რათა თავიდან აიცილოთ უსასრულო რეკურსია.",
      takeaway3: "გადაამოწმეთ მიღებული შედეგები ცვლილებების საბოლოო დამტკიცებამდე.",
      lessons: [
        { title: "1. აგენტური ციკლების საფუძვლები", duration: "18 წთ" },
        { title: "2. პრომპტის სინთეზი და მეხსიერების ბუფერი", duration: "24 წთ" },
        { title: "3. ფუნქციების გამოძახება და ხელსაწყოების გამოყენება", duration: "32 წთ" },
        { title: "4. მრავალაგენტიანი გუნდების ორკესტრაცია", duration: "45 წთ" },
        { title: "5. წარმოებაში გაშვება და ტელემეტრია", duration: "29 წთ" },
      ],
    },
    whyTechgogo: {
      badge: "რატომ TECHGOGO",
      titlePart1: "შექმნილია",
      highlightWord: "რეალური შედეგებისთვის",
      titlePart2: "თანამედროვე ინდუსტრიაში.",
      subtitle:
        "ჩვენ უარი ვთქვით მოსაწყენ სლაიდებსა და მშრალ ტესტებზე. თქვენ სწავლობთ რეალური პროდუქტების შენებითა და ექსპერტებთან კოლაბორაციით.",
      exploreMethodology: "მეთოდოლოგიის გაცნობა",
      items: [
        {
          title: "რეალური კოდი და არა სათამაშო ამოცანები",
          description:
            "თითოეული დავალება აგებულია რეალურ სამუშაო გამოცდილებაზე: მიკროსერვისების დებაგინგი, დიზაინ სისტემები და AI აგენტები.",
          tag: "პრაქტიკული სწავლება",
        },
        {
          title: "პირდაპირი უკუკავშირი უფროსი ინჟინრებისგან",
          description:
            "ყოველკვირეული ლაივ განხილვები და დეტალური ვიდეო კომენტარები თქვენს Pull Request-ებზე წამყვანი კომპანიების მენტორებისგან.",
          tag: "ლაივ მენტორობა",
        },
        {
          title: "მუდმივად განახლებადი 2026 წლის სტანდარტებით",
          description:
            "სასწავლო გეგმა ითვალისწინებს უახლეს ხელსაწყოებს: Claude & GPT-4o Tool Use, Next.js Server Components, Rust, Go და WebGL.",
          tag: "აქტუალური კურიკულუმი",
        },
      ],
    },
    testimonials: {
      badge: "სტუდენტების ისტორიები",
      titlePart1: "გამოცდილი იმ მოსწავლეების მიერ, ვინც",
      storiesWord: "დააჩქარა",
      titlePart2: "კარიერული წინსვლა.",
      subtitle:
        "გაეცანით ინჟინრების, პროდუქტის დიზაინერებისა და კრეატიული ტექნოლოგების რეალურ შეფასებებს.",
      items: [
        {
          quote:
            "TechGogo-ში სწავლა მაღალი დონის ციფრულ სააგენტოში მუშაობას ჰგავს. აქ შექმნილი პორტფოლიოს წყალობით სამ ევროპულ სტარტაპში მივიღე მოწვევა.",
          name: "ტარიქ ალ-მანსური",
          role: "ახლა Senior Frontend ინჟინერი, Monzo",
          course: "თანამედროვე Full-Stack არქიტექტურა",
        },
        {
          quote:
            "დიზაინ სისტემების კურსმა სრულად შეცვალა ის, თუ როგორ ვსაუბრობ ტოკენებზე, ადაპტირებად ბადესა და ხელმისაწვდომ კომპონენტებზე დეველოპერებთან.",
          name: "ქლოე დიუპონი",
          role: "პროდუქტის დიზაინის ლიდი, Alan",
          course: "დიზაინ სისტემები & სარედაქციო UI",
        },
        {
          quote:
            "არანაირი ზედაპირული AI თეორია. ჩვენ ავაგეთ რეალური ავტონომიური აგენტები შეფასების სისტემებით. მენტორის კომენტარები PR-ებზე იყო ფასდაუდებელი.",
          name: "კენჯი სატო",
          role: "AI აპლიკაციების დეველოპერი",
          course: "გამოყენებითი AI სისტემები",
        },
      ],
    },
    footer: {
      cohortBannerBadge: "ახალი კოჰორტა იწყება ორშაბათს",
      bannerTitlePart1: "მზად ხარ შენი შემდეგი",
      bannerHighlightWord: "გარღვევისთვის",
      bannerTitlePart2: "ტექნოლოგიებში?",
      bannerSubtitle:
        "შეუერთდი 180,000-ზე მეტ მოსწავლეს. მიიღე მყისიერი წვდომა გაკვეთილებზე, კოჰორტის მენტორებსა და რეალურ პროექტებზე.",
      emailPlaceholder: "შეიყვანეთ თქვენი სამუშაო იმეილი...",
      bannerCta: "დაიწყე უფასოდ",
      bannerNote: "საბანკო ბარათი არ არის საჭირო • 7-დღიანი საცდელი პერიოდი • გაუქმება ნებისმიერ დროს",
      brandDesc:
        "თანამედროვე ონლაინ ტექნოლოგიური განათლების პლატფორმა, ორიენტირებული პრაქტიკულ, ადამიანზე მორგებულ და ინდუსტრიულ შედეგებზე.",
      colSubjects: "მიმართულებები",
      colPlatform: "პლატფორმა",
      colTeams: "გუნდებისთვის",
      colCompany: "კომპანია",
      rights: "TechGogo Education Inc. ყველა უფლება დაცულია.",
      privacy: "კონფიდენციალურობა",
      terms: "მომსახურების პირობები",
      cookies: "Cookie პარამეტრები",
    },
  },
};
