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
    role: "დამფუძნებელი, დირექტორი, მკვლევარი",
    bio: "სოციალური მეწარმე, გენდერული თანასწორობის აქტივისტი და მკვლევარი. ხელმძღვანელობს TechGogo-ს სტრატეგიულ განვითარებასა და დონორებთან ურთიერთობას.",
    accent: "orange",
    tag: "Founder & Director",
  },
  {
    id: "team-lili",
    name: "ლილი ფულერიანი",
    role: "ციფრული მარკეტინგის ლექტორი, SMM სპეციალისტი",
    bio: "ბლოგერი, ქოფირაითერი და სოციალური მედიის სტრატეგი. ავტორია TechGogo-ს პრაქტიკული მარკეტინგული სილაბუსის და ხელმძღვანელობს სტუდენტების რეალურ პროექტებს.",
    accent: "yellow",
    tag: "Marketing Lead",
  },
  {
    id: "team-nino",
    name: "ნინო თევდორაშვილი",
    role: "გრაფიკული დიზაინის ლექტორი, დიზაინერი",
    bio: "გრაფიკული დიზაინერი მრავალწლიანი სტუდიური გამოცდილებით. ასწავლის ვექტორულ გრაფიკას, ბრენდინგსა და პოლიგრაფიულ წარმოებას.",
    accent: "purple",
    tag: "Design Lead",
  },
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: "story-turaj",
    name: "ტურაჯ იბრაგიმოვა",
    age: 37,
    location: "მარნეული",
    role: "მარტოხელა დედა, SMM სპეციალისტი",
    course: "ციფრული მარკეტინგი",
    quote:
      "„TechGogo-მ ჩემი ცხოვრება შეცვალა. 37 წლის ასაკში პირველად ვისწავლე ციფრული მარკეტინგი და დღეს უკვე სააგენტოს გუნდში ვმუშაობ.“",
    fullStory:
      "ტურაჯი მარტოხელა დედაა მარნეულიდან. მანამდე მას არ ჰქონდა ტექნოლოგიური განათლება. კურსის დასრულების შემდეგ მან წარმატებით შეასრულა სარეკლამო კამპანიის პირველი ბრიფი და დღეს TechGogo-ს სააგენტოს კლიენტებისთვის სოციალური მედიის გვერდებს მართავს.",
    accent: "yellow",
  },
  {
    id: "story-keti",
    name: "ქეთი ოქროპირიძე",
    age: 22,
    location: "სოფ. კირიხლო",
    role: "გრაფიკული დიზაინერი",
    course: "გრაფიკული დიზაინი (ნაკადი 1)",
    quote:
      "„სოფლიდან ჩამოსვლა და დიზაინის სწავლა ადრე შეუძლებელი მეგონა. დღეს უკვე საკუთარი პორტფოლიო და პირველი დამკვეთები მყავს.“",
    fullStory:
      "ქეთი ოცნებობდა დიზაინერობაზე, თუმცა რეგიონში შესაბამისი სასწავლო ცენტრი არ არსებობდა. TechGogo-ს უფასო კურსზე მან შეისწავლა Adobe Illustrator და Photoshop. დღეს ქეთის მიერ შექმნილი ლოგოები და სარეკლამო პოსტერები რამდენიმე ქართულ ბრენდს ამშვენებს.",
    accent: "purple",
  },
  {
    id: "story-aida",
    name: "აიდა ორჯუოვა",
    age: 22,
    location: "მარნეული",
    role: "კონტენტ კრეატორი, „1+4“ პროგრამის სტუდენტი",
    course: "AI ხელსაწყოები & SMM",
    quote:
      "„ფინანსური დამოუკიდებლობა ჩემთვის თავისუფლებას ნიშნავს. TechGogo დამეხმარა აღმომეჩინა საკუთარი შესაძლებლობები.“",
    fullStory:
      "აიდა „1+4“ პროგრამის სტუდენტია. ქართული ენის გაუმჯობესებასთან ერთად მან AI ინსტრუმენტებისა და კონტენტ კრეაციის კურსი გაიარა. დღეს ის ქმნის სამენოვან სარეკლამო კონტენტს და დამოუკიდებელ შემოსავალს იღებს.",
    accent: "orange",
  },
];

export const PARTNER_LOGOS = [
  { name: "European Union", label: "ევროკავშირი საქართველოში" },
  { name: "CSRDG", label: "სტრატეგიული კვლევებისა და განვითარების ცენტრი" },
  { name: "UN Women", label: "გაეროს ქალთა ორგანიზაცია" },
  { name: "USAID", label: "აშშ-ის საერთაშორისო განვითარების სააგენტო" },
  { name: "Watergunz", label: "Creative Agency Watergunz" },
  { name: "The Body Shop", label: "The Body Shop Georgia" },
  { name: "GIZ", label: "გერმანიის საერთაშორისო თანამშრომლობის საზოგადოება" },
  { name: "TBC Bank", label: "თიბისი ბანკი" },
  { name: "Terminal", label: "Terminal Co-working" },
];

export const DONATION_CAMPAIGN = {
  goal: 20100,
  raised: 14850,
  backersCount: 84,
  creator: "Giorgi Babunashvili & TechGogo გუნდი",
  titleKa: "ქალთა განათლებისა და ტექნიკური აღჭურვის ფონდი",
  titleEn: "Women's Tech Education & Equipment Fund",
  storyKa:
    "თქვენი დონაცია უშუალოდ ხმარდება ქვემო ქართლში მცხოვრები ქალების, მარტოხელა დედებისა და ეთნიკური უმცირესობების განათლებას: ლეპტოპების შეძენას, ინტერნეტის სუბსიდირებასა და უფასო სასწავლო სტიპენდიებს.",
  storyEn:
    "Your contribution directly powers education for regional women, single mothers, and minority youth in Kvemo Kartli: funding laptops, internet connectivity stipends, and free tuition scholarships.",
  ledger: [
    { id: "b-1", name: "ანონიმური მხარდამჭერი", amount: 500, date: "2026-03-12", comment: "წარმატებები გოგოებს!" },
    { id: "b-2", name: "თამარ გვარამია", amount: 150, date: "2026-03-10", comment: "მადლობა ამ საქმისთვის" },
    { id: "b-3", name: "გიორგი მესხი", amount: 250, date: "2026-03-08", comment: "რეგიონების გაძლიერებას გაუმარჯოს" },
    { id: "b-4", name: "ანა ბერიძე", amount: 100, date: "2026-03-05" },
    { id: "b-5", name: "Tech Enthusiast", amount: 300, date: "2026-03-01", comment: "Grace Hopper Award-ის აღსანიშნავად" },
    { id: "b-6", name: "დავით კ.", amount: 50, date: "2026-02-28" },
    { id: "b-7", name: "მარიამ ჩხეიძე", amount: 200, date: "2026-02-25" },
  ] as DonationBacker[],
};
