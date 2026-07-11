const STORAGE_KEY = "resumes";

const getResumes = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
};

const saveResumes = (resumes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));
};

const CreateNewResume = (data) => {
  const resumes = getResumes();

  const newResume = {
    id: Date.now().toString(),
    documentId: Date.now().toString(),

    // Personal Details
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
    achievements: "",

    // Summary
    summery: "",

    // Education
    education: [],

    // Experience
    Experience: [],

    // Skills
    skills: [],

    themeColor: "#C9A962",

    // User Info
    userEmail: "",
    userName: "",

    // Incoming data
    ...data.data,
  };

  resumes.push(newResume);
  saveResumes(resumes);

  return Promise.resolve({
    data: {
      data: newResume,
    },
  });
};

const GetUserResumes = (userEmail) => {
  const resumes = getResumes().filter(
    (item) => item.userEmail === userEmail
  );

  return Promise.resolve({
    data: {
      data: resumes,
    },
  });
};

const GetResumeById = (id) => {
  const resume = getResumes().find(
    (item) => item.documentId == id || item.id == id
  );

  return Promise.resolve({
    data: {
      data:
        resume || {
          firstName: "",
          lastName: "",
          jobTitle: "",
          address: "",
          phone: "",
          email: "",
          linkedinUrl: "",
          githubUrl: "",
          portfolioUrl: "",
          achievements: "",
          summery: "",
          education: [],
          Experience: [],
          skills: [],
          userEmail: "",
          userName: "",
        },
    },
  });
};

const UpdateResumeDetail = (id, data) => {
  const resumes = getResumes();

  const index = resumes.findIndex(
    (item) => item.documentId == id || item.id == id
  );

  if (index !== -1) {
    resumes[index] = {
      ...resumes[index],
      ...data.data,
    };

    saveResumes(resumes);

    return Promise.resolve({
      data: {
        data: resumes[index],
      },
    });
  }

  return Promise.resolve({
    data: {
      data: null,
    },
  });
};

const DeleteResumeById = (id) => {
  const resumes = getResumes().filter(
    (item) => item.documentId != id && item.id != id
  );

  saveResumes(resumes);

  return Promise.resolve({
    data: {
      success: true,
    },
  });
};

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};