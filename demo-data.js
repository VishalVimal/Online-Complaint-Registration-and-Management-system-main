// Demo Data Store - In-memory storage for demo mode
// This allows the app to run without MongoDB

const demoUsers = [
  {
    username: "demo",
    password: "demo123",
    email: "demo@fixit.com",
    userId: "demo001"
  },
  {
    username: "user",
    password: "user123",
    email: "user@fixit.com",
    userId: "user001"
  }
];

const demoAdmins = [
  {
    name: "admin",
    password: "admin123"
  }
];

const demoOfficers = [
  {
    officerName: "officer1",
    officerId: "off001"
  },
  {
    officerName: "officer2",
    officerId: "off002"
  }
];

// In-memory storage for complaints
let demoComplaints = [
  {
    _id: "complaint001",
    id: "complaint001",
    title: "Broken Street Light",
    address: "123 Main Street, City",
    gMapURL: "https://maps.google.com",
    imageURL: "https://via.placeholder.com/400x300?text=Street+Light",
    date: new Date().toLocaleDateString(),
    approvalStatus: "Pending",
    workStatus: "-",
    officerAppointed: "-",
    userID: "demo001"
  },
  {
    _id: "complaint002",
    id: "complaint002",
    title: "Pothole on Road",
    address: "456 Oak Avenue, City",
    gMapURL: "https://maps.google.com",
    imageURL: "https://via.placeholder.com/400x300?text=Pothole",
    date: new Date().toLocaleDateString(),
    approvalStatus: "Yes",
    workStatus: "Started",
    officerAppointed: "officer1",
    userID: "demo001"
  }
];

// Helper functions
const findUser = (username) => {
  return demoUsers.find(u => u.username === username);
};

const findUserById = (userId) => {
  return demoUsers.find(u => u.userId === userId);
};

const findAdmin = (name) => {
  return demoAdmins.find(a => a.name === name);
};

const findOfficer = (officerName) => {
  return demoOfficers.find(o => o.officerName === officerName);
};

const getComplaintsByUserId = (userId) => {
  return demoComplaints.filter(c => c.userID === userId);
};

const getComplaintsByOfficer = (officerName) => {
  return demoComplaints.filter(c => c.officerAppointed === officerName);
};

const getAllComplaints = () => {
  return demoComplaints;
};

const addComplaint = (complaint) => {
  const newComplaint = {
    _id: `complaint${Date.now()}`,
    id: `complaint${Date.now()}`,
    ...complaint,
    date: new Date().toLocaleDateString(),
    approvalStatus: "Pending",
    workStatus: "-",
    officerAppointed: "-"
  };
  demoComplaints.push(newComplaint);
  return newComplaint;
};

const updateComplaint = (id, updates) => {
  const index = demoComplaints.findIndex(c => c._id === id || c.id === id);
  if (index !== -1) {
    demoComplaints[index] = { ...demoComplaints[index], ...updates };
    return demoComplaints[index];
  }
  return null;
};

const deleteComplaint = (id) => {
  const index = demoComplaints.findIndex(c => c._id === id || c.id === id);
  if (index !== -1) {
    demoComplaints.splice(index, 1);
    return true;
  }
  return false;
};

const addUser = (userData) => {
  const newUser = {
    ...userData,
    userId: `user${Date.now()}`
  };
  demoUsers.push(newUser);
  return newUser;
};

const getAllUsers = () => {
  return demoUsers;
};

const getAllOfficers = () => {
  return demoOfficers;
};

module.exports = {
  demoUsers,
  demoAdmins,
  demoOfficers,
  demoComplaints,
  findUser,
  findUserById,
  findAdmin,
  findOfficer,
  getComplaintsByUserId,
  getComplaintsByOfficer,
  getAllComplaints,
  addComplaint,
  updateComplaint,
  deleteComplaint,
  addUser,
  getAllUsers,
  getAllOfficers
};

