import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      url: error.config?.url,
    });

    
    let errorMessage = 'An error occurred';
    
    if (error.response) {
      
      errorMessage = error.response.data?.message || 
                     error.response.data?.error ||
                     `Server error: ${error.response.status}`;
    } else if (error.request) {
      
      errorMessage = 'Cannot connect to server. Make sure backend is running on http://localhost:5000';
    } else {
     
      errorMessage = error.message;
    }

    
    const enhancedError = new Error(errorMessage);
    enhancedError.originalError = error;
    throw enhancedError;
  }
);


export const getResumes = () => api.get("/resumes");


export const getResumeById = (id) => api.get(`/resumes/${id}`);


export const createResume = (resume) => api.post("/resumes", resume);


export const updateResume = (id, resume) => api.put(`/resumes/${id}`, resume);


export const deleteResume = (id) => api.delete(`/resumes/${id}`);