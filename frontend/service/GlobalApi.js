import { supabase } from '../src/lib/supabase.js';

const CreateNewResume = async (data) => {
  const resumeData = {
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
    themeColor: "#C9A962",
    userEmail: "",
    userName: "",
    ...data.data,
  };

  const documentId = Date.now().toString();
  const userEmail = data.data.userEmail || "";
  const userName = data.data.userName || "";

  const { data: insertedData, error } = await supabase
    .from('user_resumes')
    .insert([
      {
        document_id: documentId,
        user_email: userEmail,
        user_name: userName,
        resume_data: resumeData
      }
    ])
    .select();

  if (error) {
    console.error("Error creating resume:", error);
    throw error;
  }

  const createdResume = {
    ...resumeData,
    id: insertedData[0].id,
    documentId: insertedData[0].document_id
  };

  return {
    data: {
      data: createdResume,
    },
  };
};

const GetUserResumes = async (userEmail) => {
  const { data, error } = await supabase
    .from('user_resumes')
    .select('*')
    .eq('user_email', userEmail);

  if (error) {
    console.error("Error fetching resumes:", error);
    throw error;
  }

  const formattedResumes = data.map(item => ({
    id: item.id,
    documentId: item.document_id,
    ...item.resume_data
  }));

  return {
    data: {
      data: formattedResumes,
    },
  };
};

// Always use document_id (text column) — never filter on id (uuid column) with a timestamp string
const GetResumeById = async (documentId) => {
  const { data, error } = await supabase
    .from('user_resumes')
    .select('*')
    .eq('document_id', String(documentId))
    .single();

  if (error) {
    console.error("Error fetching resume:", error);
    return {
      data: {
        data: {
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
    };
  }

  return {
    data: {
      data: {
        id: data.id,
        documentId: data.document_id,
        ...data.resume_data
      },
    },
  };
};

const UpdateResumeDetail = async (documentId, data) => {
  const existing = await GetResumeById(documentId);
  const currentData = existing?.data?.data || {};

  const { id: _id, documentId: _docId, ...resumeDataToSave } = {
    ...currentData,
    ...data.data
  };

  const { data: updatedData, error } = await supabase
    .from('user_resumes')
    .update({ resume_data: resumeDataToSave })
    .eq('document_id', String(documentId))
    .select()
    .single();

  if (error) {
    console.error("Error updating resume:", error);
    return { data: { data: null } };
  }

  return {
    data: {
      data: {
        id: updatedData.id,
        documentId: updatedData.document_id,
        ...updatedData.resume_data
      },
    },
  };
};

const DeleteResumeById = async (documentId) => {
  const { error } = await supabase
    .from('user_resumes')
    .delete()
    .eq('document_id', String(documentId));

  if (error) {
    console.error("Error deleting resume:", error);
    return { data: { success: false } };
  }

  return { data: { success: true } };
};

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};