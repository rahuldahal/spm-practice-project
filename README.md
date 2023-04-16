# SPM-GIT-PRACTICE

One of us was asked by our instructor Mr. Dhiraj Kumar Jha to show the use of a VCS (GIT, preferably) during the study of software project management. I volunteered to take advantage of the occasion and share my expertise of the VCS and teamwork.

This practice project teaches all the students:

- To collaborate with the team members
- To Stage/Stash, Commit, and Push their work
- To Resolve conflicts while pulling the changes
- To Create, Checkout, Merge, Rebase and Manage branches
- To Learn about Issues and Pull Requests

## How to contribute?

It's actually quite easy. You only need to _add your information_ to one file.

`students.ts` is the name of the file you wish to alter, and it can be found in the `src/constants` directory.

Just add your information as follows:

```ts
{
    rollNo: <YOUR_ROLL_NO>,
    fullname: <YOUR_NAME>,
    email: <YOUR_EMAIL>,
    work: {
      companyName: <COMPANY_NAME>,
      url: <COMPANY_URL>,
      position: <YOUR_POSITION>,
    },
    social: {
      github: <GITHUB_PROFILE_LINK>,
      linkedIn: <LINKEDIN_PROFILE_LINK>,
      facebook: <FACEBOOK_PROFILE_LINK>,
    },
  }, // don't forget to add a comma(trailing comma) at the end
```

**Example**

```ts
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
```
