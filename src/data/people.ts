// EDIT PEOPLE HERE. Entries appear in file order within each category.
// Categories: pi, postdoc, graduate, undergraduate. Empty categories are hidden.
// Put photos in public/images/people/ and use /images/people/filename.jpg below.
// Optional: photo, cv, cvLabel, email, office, phone, website. Omit unused fields.
// bio accepts plain text or trusted HTML links and <br /><br /> paragraph breaks.
// Original profiles and alumni notes came from the archived site; newer entries
// and degree updates were supplied by the group. Review older details before publishing.
export interface Person {
  id: string;
  name: string;
  category: 'pi' | 'postdoc' | 'graduate' | 'undergraduate';
  photo?: string;
  bio: string;
  cv?: string;
  cvLabel?: string;
  email?: string;
  office?: string;
  phone?: string;
  website?: string;
}

export const people: Person[] = [
  {
    "id": "hrant-hratchian",
    "name": "Hrant P. Hratchian",
    "category": "pi",
    "photo": "/images/people/hrant-hratchian.jpg",
    "bio": "Hrant P. Hratchian is Professor in the <a href=\"https://chemistry.ucmerced.edu\">Department of Chemistry and Biochemistry</a> and <a href=\"https://graduatedivision.ucmerced.edu\">Vice Provost and Dean for Graduate Education</a> at the <a href=\"https://www.ucmerced.edu\">University of California Merced</a>. A Michigan native, he obtained his B.S. degree in chemistry from <a href=\"https://www.emich.edu\">Eastern Michigan University</a> (Ypsilanti, MI) and completed doctoral studies under the tutelage of <a href=\"http://chem.wayne.edu/schlegel/\">Professor H. Bernhard Schlegel</a> at <a href=\"https://wayne.edu\">Wayne State University</a> (Detroit, MI) where he was an NSF-IGERT Graduate Fellow. From 2005-2008 he was the Ernest R. Davidson Postdoctoral Fellow at <a href=\"https://indiana.edu\">Indiana University</a> (Bloomington, IN), where he worked with <a href=\"http://php.indiana.edu/~krgroup/\">Professor Krishnan Raghavachari</a>. From 2008-2013, he was a Research Scientist at <a href=\"http://gaussian.com/\">Gaussian, Inc.</a> (Wallingford, CT). In 2013, he joined the faculty at the <a href=\"https://www.ucmerced.edu\">University of California Merced</a> in the <a href=\"https://chemistry.ucmerced.edu\">Department of Chemistry & Biochemistry</a>.<br /><br />Professor Hratchian has served in a number of additional leadership roles at UC Merced, including as <a href=\"https://chemistry.ucmerced.edu\">Chemistry & Biochemistry Department</a> Chair, Interim co-Director of Cyberinfrastructure and Research Computing, and as Chair of the Academic Senate's Graduate Council. Professor Hratchian has been honored with a <a href=\"https://www.hellmanfoundation.org/hellman-fellows.html\">Hellman Foundation Fellowship</a> and an <a href=\"https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=503214\">NSF CAREER</a> award. He and his research group have received extramural funding support from the <a href=\"https://www.acs.org/content/acs/en/funding-and-awards/grants/prf.html\">Petroleum Research Fund</a>, <a href=\"https://www.hellmanfoundation.org/\">Hellman Family Foundation</a>, <a href=\"https://www.nsf.gov/\">National Science Foundation</a>, and the <a href=\"https://www.energy.gov/science/bes/basic-energy-sciences\">Department of Energy</a>. Professor Hratchian’s research interests include the development and application of efficient computational chemistry methods to explore the unique properties of transition metals and catalyzed chemical transformations.",
    "email": "hhratchian@ucmerced.edu",
    "office": "ACS 223",
    "phone": "209.228.2478",
    "cv": "/cv/hrant-hratchian.pdf",
    "cvLabel": "CV (as of 3/15/2025)"
  },
  {
    "id": "abigail-gyamfi",
    "name": "Abigail Gyamfi",
    "category": "graduate",
    "photo": "/images/people/abigail-gyamfi.jpg",
    "bio": "Abigail O. Gyamfi is a Ph.D. student at the University of California, Merced. She obtained her B.Sc. (Hons) in Chemistry and M.Sc. Occupational and Environmental Health and Safety degrees from the <a href=\"https://www.nkrumah.edu.zm/home/\">Kwame Nkrumah University of Science and Technology</a>, Kumasi, Ghana. Currently, her research interest lies in computational investigation of three-center, two-electron chemical bond in halogen bonding interactions."
  },
  {
    "id": "brianna-aguilar-solis",
    "name": "Brianna Aguilar-Solis",
    "category": "graduate",
    "photo": "/images/people/brianna-aguilar-solis.jpg",
    "bio": "Brianna is a Ph.D. student at the University of California, Merced, jointly studying in the Hratchian and Pribram-Jones Groups. She obtained her A.S.T. in Chemistry at Bakersfield College and her B.S. in Chemistry at the University of California, Berkeley. While at Berkeley she conducted research with Dr. Eric Neuscamman and at LBNL with Dr. Sinéad Griffin. Her current research interests lie in investigating excitation methods, including the application of single-determinant methods to model complex excited states possessing unpaired electrons."
  },
  {
    "id": "li-ji",
    "name": "Li Ji",
    "category": "graduate",
    "bio": "Li Ji is a graduate student in the Hratchian Group."
  },
  {
    "id": "joseph-kelleher",
    "name": "Joseph Kelleher",
    "category": "graduate",
    "bio": "Joseph Kelleher is a graduate student in the Hratchian Group."
  },
  {
    "id": "amanda-padam",
    "name": "Amanda Padam",
    "category": "graduate",
    "bio": "Amanda Padam is a graduate student in the Hratchian Group."
  }
];

// Alumni: edit each line or add another string.
export const alumni: string[] = [
  "Christian Dwyer (M.S., 2026)",
  "Cristian Sarabia (Ph.D., 2026)",
  "Andrew Bovill (Ph.D., 2026)",
  "Abdulrahman Zamani (Ph.D., 2023)",
  "Madison Martin (M.S., 2022)",
  "Emma Brass (B.S., 2022), graduate student at UC Irvine",
  "Jorge Vazquez (B.S., 2022)",
  "Jonathan Loera (B.S., 2022), graduate student at UCLA",
  "Héctor H. Corzo (Postdoc 2019-2021), Postdoc at Oakridge National Laboratory",
  "Ali AbouTaka (Ph.D., 2021), Postdoc at Sandia National Laboratory (California)",
  "Samantha Bidwell (Ph.D., 2021), Assistant Professor at Elmira College",
  "Hassan Harb (Ph.D., 2021), Postdoc at Argonne National Laboratory",
  "Lee Thompson (Postdoc 2014-2017), Assistant Professor at the University of Louisville",
  "Xianghai Sheng (Ph.D., 2019), Software Engineer at Google",
  "Stephen Flaherty",
  "Lisa Gong (graduate student at UC Davis)",
  "Yogev Gluzman (B.S., 2019), graduate student at University of Minnesota",
  "Bryce Fairless (B.S., 2019), graduate student at Indiana University",
  "Anissa Abdullah (B.S., 2019)",
  "Preston Griffon, (B.S., 2018), graduate student at George Washington University",
  "Susana Calderon, (B.S., 2018), graduate student at Virginia Tech University",
  "Sheyda Partovi (B.S., 2017), graduate student at Indiana University",
  "Nicole Giddings (B.S., 2015), graduate student at University of South Florida",
  "Euna Chung (B.S., 2015)",
  "Ashlee Chan (B.S., 2015)",
  "Nicole Degregorio (B.S., 2014), graduate student at Indiana University",
  "Victor Lee (B.S., 2014), graduate student at University of Washington"
];
