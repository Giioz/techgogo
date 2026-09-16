import { TeamMember, StudentStory, DonationBacker } from "@/types";

export const ABOUT_MISSION = {
  headlineKa: "ქალთა ეკონომიკური გაძლიერება ციფრული ტექნოლოგიების მეშვეობით",
  headlineEn: "Economic Empowerment of Women Through Digital Technology",
  leadKa:
    "TechGogo არის ინოვაციური სოციალური საწარმო ქვემო ქართლში (მარნეული), რომელიც აერთიანებს რეგიონულ ციფრულ სკოლასა და კრეატიულ სარეკლამო სააგენტოს. ჩვენი მიზანია ქალებს, მარტოხელა დედებსა და ეთნიკური უმცირესობების წარმომადგენლებს მივცეთ მაღალანაზღაურებადი ციფრული პროფესიების დაუფლებისა და რეალურ კომერციულ პროექტებში დასაქმების შესაძლებლობა.",
  leadEn:
    "TechGogo is an innovative digital social enterprise in Kvemo Kartli (Marneuli), merging a regional digital academy with a creative advertising agency. We empower women, single mothers, and ethnic minority youth to master high-demand digital professions and step directly into paid commercial employment.",
  entity: "ა(ა)იპი „ვი2თექ ჯორჯია“ (NNLE 'We2Tech Georgia')",
  idCode: "400343561",
  address: "მარნეული, გიორგაძის ქ. # 1 (Marneuli, Giorgadze St. #1)",
  legalAddress: "ქ. თბილისი, რიონჰესის ქ. # 7ა (7a Rionhesi St., Tbilisi)",
  phone: "+995 577 137 111",
  email: "info@techgogo.ge",
};

export const STRATEGIC_PILLARS = [
  {
    step: 1,
    accent: "orange" as const,
    titleKa: "ხელმისაწვდომი განათლება",
    titleEn: "Accessible Education",
    descKa:
      "შრომის ბაზარზე მოთხოვნადი ციფრული პროფესიების (AI, SMM, გრაფიკული დიზაინი, UI/UX) სწავლება უფასო და სუბსიდირებული პროგრამებით.",
    descEn:
      "Free and subsidized digital education in market-demanded fields (AI, SMM, Graphic Design, UI/UX).",
  },
  {
    step: 2,
    accent: "yellow" as const,
    titleKa: "სტაჟირება წამყვან კომპანიებში",
    titleEn: "Corporate Internships",
    descKa:
      "კურსდამთავრებულთა პრაქტიკული სტაჟირება საქართველოს წამყვან ტექნოლოგიურ და ფინანსურ ორგანიზაციებში (TBC Bank, Terminal, Watergunz).",
    descEn:
      "Practical internships in leading technology and financial enterprises across Georgia.",
  },
  {
    step: 3,
    accent: "purple" as const,
    titleKa: "დასაქმება TechGogo საწარმოში",
    titleEn: "Employment Inside TechGogo",
    descKa:
      "საუკეთესო კურსდამთავრებულების პირდაპირი დასაქმება TechGogo-ს სარეკლამო სააგენტოს კომერციულ შეკვეთებზე.",
    descEn:
      "Direct paid employment for graduates working on TechGogo Creative Agency client retainers.",
  },
  {
    step: 4,
    accent: "orange" as const,
    titleKa: "კორპორატიული პარტნიორობა",
    titleEn: "Partner Hiring Network",
    descKa:
      "რეგიონული ტალანტების დაკავშირება დისტანციურ ვაკანსიებთან თბილისსა და საერთაშორისო ფრილანს პლატფორმებზე.",
    descEn:
      "Connecting regional talent with remote job vacancies in Tbilisi and international freelance marketplaces.",
  },
  {
    step: 5,
    accent: "yellow" as const,
    titleKa: "სარეკლამო სერვისები ბიზნესს",
    titleEn: "Agency Services for Business",
    descKa:
      "მაღალი სტანდარტის მარკეტინგული და ბეჭდური მომსახურება ბიზნესებისა და მუნიციპალიტეტებისთვის, რომლის შემოსავალიც სრულად ხმარდება საგანმანათლებლო ფონდს.",
    descEn:
      "High-standard advertising and print services for companies, where 100% of profits fund future female education.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-teona",
    name: "თეონა ქავთარაშვილი",
    nameEn: "Teona Kavtarashvili",
    role: "დამფუძნებელი, დირექტორი, მკვლევარი",
    roleEn: "Founder, Director, Researcher",
    bio: "სოციალური მეწარმე, გენდერული თანასწორობის აქტივისტი და მკვლევარი. ხელმძღვანელობს TechGogo-ს სტრატეგიულ განვითარებასა და დონორებთან ურთიერთობას.",
    bioEn: "Social entrepreneur, gender equity advocate, and researcher. Leads TechGogo's strategic vision and donor partnerships.",
    accent: "orange",
    tag: "Founder & Director",
    tagEn: "Founder & Director",
  },
  {
    id: "team-lili",
    name: "ლილი ფულერიანი",
    nameEn: "Lili Phuleriani",
    role: "ციფრული მარკეტინგის ლექტორი, SMM სპეციალისტი",
    roleEn: "Marketing Lecturer, SMM Lead",
    bio: "ბლოგერი, ქოფირაითერი და სოციალური მედიის სტრატეგი. ავტორია TechGogo-ს პრაქტიკული მარკეტინგული სილაბუსის და ხელმძღვანელობს სტუდენტების რეალურ პროექტებს.",
    bioEn: "Blogger, copywriter, and social media strategist. Author of TechGogo's marketing syllabus, leading student client projects.",
    accent: "yellow",
    tag: "Marketing Lead",
    tagEn: "Marketing Lead",
  },
  {
    id: "team-nino",
    name: "ნინო თევდორაშვილი",
    nameEn: "Nino Tevdorashvili",
    role: "გრაფიკული დიზაინის ლექტორი, დიზაინერი",
    roleEn: "Design Lecturer, Visual Lead",
    bio: "გრაფიკული დიზაინერი მრავალწლიანი სტუდიური გამოცდილებით. ასწავლის ვექტორულ გრაფიკას, ბრენდინგსა და პოლიგრაფიულ წარმოებას.",
    bioEn: "Graphic designer with extensive agency background. Teaches vector systems, brand identity, and print production.",
    accent: "purple",
    tag: "Design Lead",
    tagEn: "Design Lead",
  },
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: "story-turaj",
    name: "ტურაჯ იბრაგიმოვა",
    nameEn: "Turaj Ibrahimova",
    age: 37,
    location: "მარნეული",
    locationEn: "Marneuli",
    role: "მარტოხელა დედა, SMM სპეციალისტი",
    roleEn: "Single Mother, SMM Specialist",
    course: "ციფრული მარკეტინგი",
    courseEn: "Digital Marketing",
    quote:
      "„TechGogo-მ ჩემი ცხოვრება შეცვალა. 37 წლის ასაკში პირველად ვისწავლე ციფრული მარკეტინგი და დღეს უკვე სააგენტოს გუნდში ვმუშაობ.“",
    quoteEn:
      "“TechGogo transformed my life. At 37, I learned digital marketing from scratch, and today I work on live client projects inside the agency.”",
    fullStory:
      "ტურაჯი მარტოხელა დედაა მარნეულიდან. მანამდე მას არ ჰქონდა ტექნოლოგიური განათლება. კურსის დასრულების შემდეგ მან წარმატებით შეასრულა სარეკლამო კამპანიის პირველი ბრიფი და დღეს TechGogo-ს სააგენტოს კლიენტებისთვის სოციალური მედიის გვერდებს მართავს.",
    fullStoryEn:
      "Turaj is a single mother from Marneuli with no prior tech background. After graduating, she completed her first commercial campaign brief and now actively manages social media accounts for TechGogo Agency clients.",
    accent: "yellow",
  },
  {
    id: "story-keti",
    name: "ქეთი ოქროპირიძე",
    nameEn: "Keti Okropiridze",
    age: 22,
    location: "სოფ. კირიხლო",
    locationEn: "Kirikhlo Village",
    role: "გრაფიკული დიზაინერი",
    roleEn: "Graphic Designer",
    course: "გრაფიკული დიზაინი (ნაკადი 1)",
    courseEn: "Graphic Design (Cohort 1)",
    quote:
      "„სოფლიდან ჩამოსვლა და დიზაინის სწავლა ადრე შეუძლებელი მეგონა. დღეს უკვე საკუთარი პორტფოლიო და პირველი დამკვეთები მყავს.“",
    quoteEn:
      "“Coming from a rural village to study design once felt out of reach. Today I have an established portfolio and my own client roster.”",
    fullStory:
      "ქეთი ოცნებობდა დიზაინერობაზე, თუმცა რეგიონში შესაბამისი სასწავლო ცენტრი არ არსებობდა. TechGogo-ს უფასო კურსზე მან შეისწავლა Adobe Illustrator და Photoshop. დღეს ქეთის მიერ შექმნილი ლოგოები და სარეკლამო პოსტერები რამდენიმე ქართულ ბრენდს ამშვენებს.",
    fullStoryEn:
      "Keti dreamed of becoming a designer, but there were no design academies in her region. On TechGogo's scholarship, she mastered Illustrator and Photoshop. Today her logos and visual identities brand multiple Georgian enterprises.",
    accent: "purple",
  },
  {
    id: "story-aida",
    name: "აიდა ორჯუოვა",
    nameEn: "Aida Orjuova",
    age: 22,
    location: "მარნეული",
    locationEn: "Marneuli",
    role: "კონტენტ კრეატორი, „1+4“ პროგრამის სტუდენტი",
    roleEn: "Content Creator, '1+4' Student",
    course: "AI ხელსაწყოები & SMM",
    courseEn: "AI Tools & SMM",
    quote:
      "„ფინანსური დამოუკიდებლობა ჩემთვის თავისუფლებას ნიშნავს. TechGogo დამეხმარა აღმომეჩინა საკუთარი შესაძლებლობები.“",
    quoteEn:
      "“Financial independence means freedom to me. TechGogo helped me discover my creative capabilities and launch my career.”",
    fullStory:
      "აიდა „1+4“ პროგრამის სტუდენტია. ქართული ენის გაუმჯობესებასთან ერთად მან AI ინსტრუმენტებისა და კონტენტ კრეაციის კურსი გაიარა. დღეს ის ქმნის სამენოვან სარეკლამო კონტენტს და დამოუკიდებელ შემოსავალს იღებს.",
    fullStoryEn:
      "Aida is an ethnic minority student in the '1+4' university program. While advancing her Georgian proficiency, she mastered AI tools and content marketing, now producing trilingual ad copy with independent income.",
    accent: "orange",
  },
];

export const PARTNER_LOGOS = [
  { name: "European Union", label: "ევროკავშირი საქართველოში", labelEn: "European Union in Georgia" },
  { name: "CSRDG", label: "სტრატეგიული კვლევებისა და განვითარების ცენტრი", labelEn: "Center for Strategic Research and Development (CSRDG)" },
  { name: "UN Women", label: "გაეროს ქალთა ორგანიზაცია", labelEn: "UN Women Georgia" },
  { name: "USAID", label: "აშშ-ის საერთაშორისო განვითარების სააგენტო", labelEn: "USAID Georgia" },
  { name: "Watergunz", label: "Creative Agency Watergunz", labelEn: "Creative Agency Watergunz" },
  { name: "The Body Shop", label: "The Body Shop Georgia", labelEn: "The Body Shop Georgia" },
  { name: "GIZ", label: "გერმანიის საერთაშორისო თანამშრომლობის საზოგადოება", labelEn: "German International Cooperation (GIZ)" },
  { name: "TBC Bank", label: "თიბისი ბანკი", labelEn: "TBC Bank" },
  { name: "Terminal", label: "Terminal Co-working", labelEn: "Terminal Co-working" },
];

export const DONATION_CAMPAIGN = {
  goal: 20100,
  raised: 14850,
  backersCount: 84,
  creator: "Giorgi Babunashvili & TechGogo გუნდი",
  creatorEn: "Giorgi Babunashvili & TechGogo Team",
  titleKa: "ქალთა განათლებისა და ტექნიკური აღჭურვის ფონდი",
  titleEn: "Women's Tech Education & Equipment Fund",
  storyKa:
    "თქვენი დონაცია უშუალოდ ხმარდება ქვემო ქართლში მცხოვრები ქალების, მარტოხელა დედებისა და ეთნიკური უმცირესობების განათლებას: ლეპტოპების შეძენას, ინტერნეტის სუბსიდირებასა და უფასო სასწავლო სტიპენდიებს.",
  storyEn:
    "Your contribution directly powers education for regional women, single mothers, and minority youth in Kvemo Kartli: funding laptops, internet connectivity stipends, and free tuition scholarships.",
  ledger: [
    {
      id: "b-1",
      name: "ანონიმური მხარდამჭერი",
      nameEn: "Anonymous Supporter",
      amount: 500,
      date: "2026-03-12",
      comment: "წარმატებები გოგოებს!",
      commentEn: "Best of luck to all the women!",
    },
    {
      id: "b-2",
      name: "თამარ გვარამია",
      nameEn: "Tamar Gvaramia",
      amount: 150,
      date: "2026-03-10",
      comment: "მადლობა ამ საქმისთვის",
      commentEn: "Thank you for this wonderful mission",
    },
    {
      id: "b-3",
      name: "გიორგი მესხი",
      nameEn: "Giorgi Meskhi",
      amount: 250,
      date: "2026-03-08",
      comment: "რეგიონების გაძლიერებას გაუმარჯოს",
      commentEn: "Here's to empowering regional talent!",
    },
    {
      id: "b-4",
      name: "ანა ბერიძე",
      nameEn: "Ana Beridze",
      amount: 100,
      date: "2026-03-05",
    },
    {
      id: "b-5",
      name: "Tech Enthusiast",
      nameEn: "Tech Enthusiast",
      amount: 300,
      date: "2026-03-01",
      comment: "Grace Hopper Award-ის აღსანიშნავად",
      commentEn: "In celebration of the Grace Hopper Award win!",
    },
    {
      id: "b-6",
      name: "დავით კ.",
      nameEn: "Davit K.",
      amount: 50,
      date: "2026-02-28",
    },
    {
      id: "b-7",
      name: "მარიამ ჩხეიძე",
      nameEn: "Mariam Chkheidze",
      amount: 200,
      date: "2026-02-25",
    },
  ] as DonationBacker[],
};
