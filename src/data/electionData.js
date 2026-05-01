export const electionSteps = [
  {
    id: "registration",
    title: "Voter Registration",
    icon: "ClipboardCheck",
    color: "bg-blue-500",
    description: "The first step is getting your name on the electoral roll.",
    details: "Before you can vote, you must be registered. The election commission updates the voter list periodically. You need valid ID and proof of residence to register.",
    whyItMatters: "Without registration, you cannot vote. This ensures only eligible citizens participate and prevents voter fraud.",
    whoIsInvolved: "Eligible citizens, Election Commission officials",
    commonMistakes: "Waiting until the last minute, or assuming you are registered because you have other government IDs.",
    example: "A 18-year-old student applying for their first Voter ID card online."
  },
  {
    id: "verification",
    title: "Voter List Verification",
    icon: "Search",
    color: "bg-indigo-500",
    description: "Checking your name on the published electoral roll.",
    details: "The election commission publishes a draft and then a final electoral roll. Citizens must verify their details are correct.",
    whyItMatters: "Sometimes names are accidentally omitted or details are wrong. Checking early allows time for corrections.",
    whoIsInvolved: "Registered voters",
    commonMistakes: "Not checking the list and discovering on voting day that your name is missing.",
    example: "Checking your name via SMS or the election commission website a month before polls."
  },
  {
    id: "nomination",
    title: "Candidate Nomination",
    icon: "FileText",
    color: "bg-purple-500",
    description: "Candidates officially declare their intention to run.",
    details: "Individuals representing political parties or running independently submit their nomination papers, including an affidavit of assets and criminal records.",
    whyItMatters: "This is when the choices for voters are finalized and made public.",
    whoIsInvolved: "Candidates, Political Parties, Returning Officer",
    commonMistakes: "Filling out forms incorrectly, leading to rejection of the nomination.",
    example: "A local leader filing papers at the Returning Officer's office with their supporters."
  },
  {
    id: "scrutiny",
    title: "Scrutiny & Withdrawal",
    icon: "FileSearch",
    color: "bg-pink-500",
    description: "Checking candidate papers and finalising the list.",
    details: "The Returning Officer checks all nomination papers for validity. After scrutiny, candidates have a window to withdraw their names if they choose.",
    whyItMatters: "Ensures only legally qualified candidates are on the ballot.",
    whoIsInvolved: "Returning Officer, Candidates, Election Observers",
    commonMistakes: "Candidates providing false information in their affidavits.",
    example: "A candidate's paper is rejected because they are underage."
  },
  {
    id: "campaigning",
    title: "Campaigning Period",
    icon: "Megaphone",
    color: "bg-orange-500",
    description: "Candidates try to win over voters.",
    details: "Parties release manifestos, hold rallies, and use media to convince citizens to vote for them. This period ends 48 hours before polling begins.",
    whyItMatters: "This is the primary way voters learn about candidates' promises and policies.",
    whoIsInvolved: "Candidates, Political Parties, Voters, Media",
    commonMistakes: "Voters believing unverified information or fake news during this high-emotion period.",
    example: "A candidate holding a town hall meeting to discuss local issues."
  },
  {
    id: "mcc",
    title: "Model Code of Conduct",
    icon: "Scale",
    color: "bg-yellow-500",
    description: "Rules for fair play during elections.",
    details: "A set of guidelines issued by the Election Commission to regulate political parties and candidates, especially the ruling party, to ensure a level playing field.",
    whyItMatters: "Prevents the ruling party from misusing government resources for campaigning.",
    whoIsInvolved: "Political Parties, Candidates, Election Commission",
    commonMistakes: "Parties announcing new welfare schemes right before the election to influence voters.",
    example: "A government minister is stopped from using an official vehicle for a campaign rally."
  },
  {
    id: "polling",
    title: "Polling Day",
    icon: "CheckSquare",
    color: "bg-green-500",
    description: "The day citizens cast their votes.",
    details: "Voters go to their designated polling booths, verify their identity, and cast their vote secretly using a ballot paper or Electronic Voting Machine (EVM).",
    whyItMatters: "The ultimate expression of democratic power.",
    whoIsInvolved: "Voters, Polling Officials, Security Personnel",
    commonMistakes: "Going to the wrong polling booth or forgetting valid ID.",
    example: "Standing in line at a local school to press the button on the EVM."
  },
  {
    id: "counting",
    title: "Counting Day",
    icon: "Calculator",
    color: "bg-teal-500",
    description: "Tallying the votes to determine the winner.",
    details: "Votes are counted under strict security and in the presence of candidate representatives. Results are declared progressively.",
    whyItMatters: "Translates the will of the people into the final outcome.",
    whoIsInvolved: "Counting Officials, Election Observers, Candidate Agents",
    commonMistakes: "Declaring a winner before official results are announced based on early trends.",
    example: "Watching the news as the Returning Officer announces the final tally for a constituency."
  },
  {
    id: "results",
    title: "Results & Formation",
    icon: "Award",
    color: "bg-cyan-500",
    description: "The winner takes office.",
    details: "The winning candidate is given a certificate of election. The party or coalition with a majority forms the government.",
    whyItMatters: "The conclusion of the electoral process and the beginning of the new government's term.",
    whoIsInvolved: "Elected Representatives, Head of State (e.g., President/Governor)",
    commonMistakes: "Assuming the process is over immediately; legal challenges to the result can still happen.",
    example: "The leader of the winning party is sworn in as the new Chief Minister or Prime Minister."
  }
];

export const glossaryTerms = [
  { term: "Constituency", definition: "A specific geographical area that elects one representative to a legislative body." },
  { term: "Nomination", definition: "The formal process where a candidate puts their name forward to stand in an election." },
  { term: "Ballot", definition: "The system or piece of paper used to record a person's vote." },
  { term: "Polling Booth", definition: "The designated location where voters go to cast their vote." },
  { term: "Electorate", definition: "All the people in a country or area who are entitled to vote in an election." },
  { term: "Turnout", definition: "The percentage of eligible voters who actually cast a ballot in an election." },
  { term: "Invalid Vote", definition: "A vote that cannot be counted because the ballot was marked incorrectly or was spoiled." },
  { term: "Returning Officer", definition: "The official responsible for overseeing the election in a specific constituency and declaring the result." },
  { term: "Manifesto", definition: "A public declaration of policies, promises, and aims issued by a political party before an election." },
  { term: "EVM", definition: "Electronic Voting Machine, a device used to record votes electronically instead of using paper ballots." }
];

export const quizQuestions = [
  {
    question: "Which step happens first in the election process?",
    options: ["Candidate Nomination", "Voter Registration", "Campaigning", "Polling Day"],
    correctAnswer: 1,
    hint: "Before anyone can run or campaign, there needs to be a list of people who can vote."
  },
  {
    question: "What is the purpose of the Model Code of Conduct?",
    options: ["To tell voters who to vote for", "To ensure fair play and a level playing field", "To count the votes faster", "To decide the election dates"],
    correctAnswer: 1,
    hint: "It's a set of rules meant to prevent unfair advantages, especially by the party currently in power."
  },
  {
    question: "What does 'Scrutiny of Nominations' mean?",
    options: ["Counting the votes secretly", "Checking candidates' papers to see if they are valid", "Voters checking if their name is on the list", "Media interviewing candidates"],
    correctAnswer: 1,
    hint: "Think of it as an official background and paperwork check for the people who want to run."
  },
  {
    question: "Who is responsible for declaring the election result in a specific constituency?",
    options: ["The Police Chief", "The Sitting Prime Minister/President", "The Returning Officer", "The Media"],
    correctAnswer: 2,
    hint: "This is a specific, neutral election official assigned to oversee the process in that area."
  },
  {
    question: "What is an election manifesto?",
    options: ["A list of all registered voters", "The machine used to vote", "A document where a party lists its promises and policies", "The official certificate given to the winner"],
    correctAnswer: 2,
    hint: "It's basically a party's 'to-do list' or pitch to the voters about what they will do if they win."
  }
];

export const timelineEvents = [
  { date: "Oct 15", title: "Announcement of Election", status: "completed" },
  { date: "Nov 01", title: "Last Day for Registration", status: "completed" },
  { date: "Nov 10", title: "Last Day for Nominations", status: "completed" },
  { date: "Nov 12", title: "Scrutiny of Nominations", status: "completed" },
  { date: "Nov 15", title: "Last Day for Withdrawal", status: "completed" },
  { date: "Nov 16 - Dec 13", title: "Campaign Period", status: "active" },
  { date: "Dec 15", title: "Polling Day", status: "upcoming" },
  { date: "Dec 18", title: "Counting of Votes", status: "upcoming" },
  { date: "Dec 20", title: "Declaration of Results", status: "upcoming" }
];
