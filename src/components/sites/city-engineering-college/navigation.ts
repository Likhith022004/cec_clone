export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const origin = "https://cityengineeringcollege.ac.in";

export const topLinks = [
  { label: "AQAR", href: `${origin}/aqar/` },
  { label: "Mandatory Disclosure", href: `${origin}/mandatory-disclousure-cec/` },
  { label: "NAAC", href: `${origin}/naac/` },
  { label: "NIRF", href: `${origin}/nirf/` },
  { label: "IQAC", href: `${origin}/iqac/` },
];

export const navigation: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us/",
    children: [
      { label: "About CEC", href: "/about-us/" },
      { label: "Leadership", href: `${origin}/about-us/leadership/` },
      {
        label: "Vision, Mission, Quality Policy",
        href: `${origin}/about-us/vision-mission-quality-policy/`,
      },
      { label: "MOUs Signed", href: `${origin}/mous-cec/` },
      { label: "Chairman’s Message", href: `${origin}/about-us/chairmans-message/` },
      {
        label: "Vice Chairpersons Message",
        href: `${origin}/about-us/vice-chairpersons-message/`,
      },
      { label: "Principal’s Message", href: `${origin}/about-us/principals-message/` },
      {
        label: "Governing Council Members",
        href: `${origin}/about-us/governing-council-members/`,
      },
    ],
  },
  {
    label: "Academics",
    href: `${origin}/academics/`,
    children: [
      {
        label: "Department",
        href: `${origin}/academics/`,
        children: [
          { label: "Civil Engineering", href: `${origin}/academics/department-of-civil-engineering/` },
          {
            label: "Computer Science & Engineering",
            href: `${origin}/academics/department-of-computer-science-engineering/`,
          },
          {
            label: "IoT and Cybersecurity Engineering",
            href: `${origin}/academics/department-of-iot-and-cybersecurity-including-blockchain-technology-engineering/`,
          },
          { label: "Mechanical Engineering", href: `${origin}/academics/department-of-mechanical-engineering/` },
          {
            label: "Artificial Intelligence and Machine Learning Engineering",
            href: `${origin}/academics/department-of-ai-ml/`,
          },
          {
            label: "Information Science and Engineering",
            href: `${origin}/academics/department-of-information-science-and-engineering/`,
          },
          {
            label: "Electronics and Communication Engineering",
            href: `${origin}/academics/department-of-electronics-and-communication/`,
          },
          {
            label: "Applied Science and Humanities",
            href: `${origin}/academics/departments-applied-science-and-humanities/`,
          },
          { label: "Master of Business Administration", href: `${origin}/academics/department-of-mba/` },
          { label: "Master of Computer Applications", href: `${origin}/academics/department-of-mca/` },
        ],
      },
      {
        label: "Activites",
        href: `${origin}/academics/department-activites/`,
        children: [
          { label: "Artificial Intelligence & Machine Learning Department Activities", href: `${origin}/academics/department-activites/aiml/` },
          {
            label: "Mechanical Engineering Department Activities",
            href: `${origin}/academics/department-activites/mechanical-engineering-department-activities/`,
          },
        ],
      },
      {
        label: "Time Table",
        href: `${origin}/academics/time-table/`,
        children: [{ label: "2nd Semester", href: `${origin}/academics/time-table/2nd-semester/` }],
      },
      { label: "Best Practices", href: `${origin}/academics/best-practices/` },
      { label: "Collaborations and MOUs", href: `${origin}/academics/collaborations-and-mous/` },
      { label: "Library Information and Resources", href: `${origin}/academics/library-information-and-resources/` },
      { label: "Mentor Mentee Programme", href: `${origin}/academics/mentor-mentee-programme/` },
      { label: "NPTELMOOCs", href: `${origin}/academics/nptelmoocs/` },
      { label: "Professional Bodies", href: `${origin}/academics/professional-bodies/` },
    ],
  },
  {
    label: "Programs",
    href: `${origin}/programs/`,
    children: [
      {
        label: "Undergraduate",
        href: `${origin}/programs/undergraduate/`,
        children: [
          {
            label: "B.E in Artificial Intelligence and Machine Learning",
            href: `${origin}/programs/undergraduate/b-e-in-artificial-intelligence-and-machine-learning/`,
          },
          { label: "B.E in Civil Engineering", href: `${origin}/programs/undergraduate/b-e-in-civil-engineering/` },
          {
            label: "B.E in Computer Science",
            href: `${origin}/programs/undergraduate/b-e-in-computer-science-and-engineering/`,
          },
          { label: "B.E – Computer Science (IoT and Cyber Security)", href: "#" },
          {
            label: "B.E in Information Science and Engineering",
            href: `${origin}/programs/undergraduate/b-e-in-information-science-and-engineering/`,
          },
          { label: "B.E in Mechanical Engineering", href: `${origin}/programs/undergraduate/b-e-in-mechanical-engineering/` },
          {
            label: "B.E in Electronics and Communication Engineering",
            href: `${origin}/programs/undergraduate/b-e-in-electronics-and-communication-engineering/`,
          },
          { label: "BBA – Bachelor of Business Administration", href: "#" },
          { label: "BCA – Bachelor of Computer Applications", href: "#" },
        ],
      },
      {
        label: "Postgraduate",
        href: `${origin}/programs/postgraduate/`,
        children: [
          {
            label: "Master of Business Administration",
            href: `${origin}/programs/postgraduate/master-of-business-administration/`,
          },
          {
            label: "Master of Computer Applications",
            href: `${origin}/programs/postgraduate/master-of-computer-applications/`,
          },
          {
            label: "Master in Technology in Computer Science Engineering",
            href: `${origin}/programs/postgraduate/m-tech-in-computer-science-and-engineering/`,
          },
        ],
      },
      {
        label: "Research",
        href: `${origin}/programs/research/`,
        children: [
          {
            label: "Ph.D. in CSE",
            href: `${origin}/programs/research/ph-d-in-computer-science-and-engineering/`,
          },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: `${origin}/admissions/`,
    children: [
      { label: "Programs Offered", href: `${origin}/admissions/programs-offered/` },
      { label: "Prospectus", href: `${origin}/admissions/prospectus/` },
      { label: "Application Form", href: `${origin}/admissions/application-form/` },
      { label: "Fee Structure", href: `${origin}/admissions/fee-structure/` },
      { label: "Institution Bank Details", href: `${origin}/admissions/time-table/` },
    ],
  },
  {
    label: "Faculty",
    href: `${origin}/faculty/`,
    children: [
      {
        label: "Applied Science and Humanities",
        href: `${origin}/academics/departments-applied-science-and-humanities/faculty/`,
      },
      {
        label: "Artificial intelligence and machine learning",
        href: `${origin}/faculty/faculty-profile-of-department-of-aiml/`,
      },
      { label: "Civil Engineering", href: `${origin}/academics/department-of-civil-engineering/` },
      {
        label: "Computer Science & Engineering",
        href: `${origin}/academics/department-of-computer-science-engineering/faculty/`,
      },
      {
        label: "CSE – IoT and Cyber Securit",
        href: `${origin}/academics/department-of-iot-and-cybersecurity-including-blockchain-technology-engineering/faculty/`,
      },
      {
        label: "Information Science & Engineering",
        href: `${origin}/academics/department-of-information-science-and-engineering/faculty/`,
      },
      {
        label: "Electronics and Communication",
        href: `${origin}/academics/department-of-electronics-and-communication/faculty/`,
      },
      {
        label: "Mechanical Engineering",
        href: `${origin}/academics/department-of-mechanical-engineering/faculty/`,
      },
      { label: "Master of Business Administration", href: `${origin}/academics/department-of-mba/faculty/` },
      { label: "Master of Computer Applications", href: `${origin}/academics/department-of-mca/faculty-profile/` },
    ],
  },
  {
    label: "Research",
    href: `${origin}/research/`,
    children: [
      { label: "Objectives", href: `${origin}/research/objectives/` },
      { label: "Research Facilities", href: `${origin}/research/research-facilities/` },
      { label: "Ongoing Projects", href: `${origin}/research/ongoing-projects/` },
      { label: "Publications", href: `${origin}/research/publications/` },
      { label: "Grants", href: `${origin}/research/grants/` },
      { label: "Patents", href: `${origin}/research/patents/` },
      { label: "Research Ethics", href: `${origin}/research/research-ethics/` },
    ],
  },
  {
    label: "Placements",
    href: `${origin}/placements/`,
    children: [
      { label: "Placement Team", href: `${origin}/placements/placement-team/` },
      { label: "Training", href: `${origin}/placements/training/` },
      { label: "Higher Studies Support", href: `${origin}/placements/higher-studies-support/` },
      { label: "Placement Statistics", href: `${origin}/placements/placement-statistics/` },
      { label: "MOUs", href: `${origin}/placements/mous/` },
      { label: "Internship", href: `${origin}/placements/internship/` },
    ],
  },
  {
    label: "Alumni",
    href: `${origin}/alumni/`,
    children: [
      { label: "Overview", href: `${origin}/alumni/` },
      { label: "Alumni Chapters", href: `${origin}/alumni/alumni-chapters/` },
      { label: "Alumni Registration", href: `${origin}/alumni/alumni-registration/` },
      { label: "Committee Members", href: `${origin}/alumni/committee-members/` },
      { label: "Distinguished Alumni", href: `${origin}/alumni/distinguished-alumni/` },
      { label: "News & Gallery", href: `${origin}/alumni/news-gallery/` },
    ],
  },
  { label: "Contact Us", href: `${origin}/contact-us/` },
];

export const highlights = [
  {
    title: "23 years with dedication",
    body: "The college has grown over the past 23 years with dedication to offering quality education.",
  },
  {
    title: "UG Programmes and  PG Programmes",
    body: "CEC offers 09 UG Programmes and 03 PG Programmes in both conventional and emerging areas. 01 department is recognized as a research centre offering PhD degrees.",
  },
  {
    title: "Facilities and Encouragement",
    body: "CEC provides facilities and encouragement for every sports/extracurricular activity that students find interest in.",
  },
  {
    title: "Sports",
    body: "CEC has sports facilities for Cricket, Basketball, Volleyball, Throw Ball, Kho-Kho, Table Tennis, shuttle and other indoor games.",
  },
  {
    title: "Auditorium",
    body: "CEC has a large auditorium with 1000 capacity.",
  },
  {
    title: "Outcome Based Education",
    body: "The college is effectively practicing Outcome Based Education (OBE).",
  },
  {
    title: "Ambiance",
    body: "The highly facilitated landmark building provides a perfect ambiance for creativity and learning.",
  },
  {
    title: "Academic Excellence",
    body: "City Engineering College is known for its academic excellence, friendly welcoming atmosphere, and community spirit.",
  },
  {
    title: "Mentoring",
    body: "Academics here are supplemented with mentoring, peer learning, and counselling to ensure the holistic development of students.",
  },
  {
    title: "Holistic Development of Students",
    body: "Academics here are supplemented with mentoring, peer learning, and counselling to ensure the holistic development of students. It is a centre of talented, experienced teachers who inspire the students to achieve their desired goals. CEC has academic alliances with various industries, institutions, and research organizations to provide industry perspectives to the students. Exceptional talents are given adequate encouragement in their chosen disciplines.",
  },
];

export const programs = [
  { label: "Undergraduate", href: `${origin}/programs/undergraduate/` },
  { label: "Postgraduate", href: `${origin}/programs/postgraduate/` },
  { label: "Research", href: `${origin}/programs/research/` },
];

export const departments = [
  { label: "Civil Engineering", href: `${origin}/academics/department-of-civil-engineering/` },
  {
    label: "Computer Science & Engineering",
    href: `${origin}/academics/department-of-computer-science-engineering/`,
  },
  { label: "Mechanical Engineering", href: `${origin}/academics/department-of-mechanical-engineering/` },
  { label: "AI & ML", href: `${origin}/academics/department-of-ai-ml/` },
  {
    label: "Information Science and Engineering",
    href: `${origin}/academics/department-of-information-science-and-engineering/`,
  },
  {
    label: "Electronics and Communication",
    href: `${origin}/academics/department-of-electronics-and-communication/`,
  },
  {
    label: "Applied Science and Humanities",
    href: `${origin}/academics/departments-applied-science-and-humanities/`,
  },
  {
    label: "Master of Computer Applications",
    href: `${origin}/programs/postgraduate/master-of-computer-applications/`,
  },
  {
    label: "Master of Business Administration",
    href: `${origin}/programs/postgraduate/master-of-business-administration/`,
  },
  {
    label: "Ph.D. in Computer Science and Engineering",
    href: `${origin}/programs/research/ph-d-in-computer-science-and-engineering/`,
  },
];
