type work = {
  companyName: string;
  url: string;
  position: string;
};

type social = {
  github: string;
  linkedIn: string;
  facebook: string;
};

export type student = {
  rollNo: number;
  fullname: string;
  email: string;
  work: work;
  social: social;
};

export const students: student[] = [
  {
    rollNo: 22,
    fullname: 'Rahul Dahal',
    email: 'rdaahal@gmail.com',
    work: {
      companyName: 'Leapfrog Technology, Inc.',
      url: 'https://www.lftechnology.com',
      position: 'Former ASE',
    },
    social: {
      github: 'https://github.com/rahuldahal',
      linkedIn: 'https://www.linkedin.com/in/rahuldahal/',
      facebook: 'https://www.facebook.com/rdaahal',
    },
  },
];
