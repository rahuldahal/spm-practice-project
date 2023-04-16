import MD5 from 'crypto-js/md5';
import { student, students } from '../constants/students';

export default function Cards(): JSX.Element {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 p-4">
      {students
        .sort((a, b) => a.rollNo - b.rollNo)
        .map((student, index) => {
          const { rollNo, fullname, email, work, social } = student;
          return (
            <Card
              key={index}
              rollNo={rollNo}
              fullname={fullname}
              email={email}
              work={work}
              social={social}
            />
          );
        })}
    </div>
  );
}

function Card({ rollNo, fullname, email, work, social }: student): JSX.Element {
  const emailHash = MD5(email).toString();

  return (
    <div className="flex items-center justify-center flex-col gap-2 p-5 w-full sm:w-72 h-full bg-gray-100 border rounded-2xl">
      <img
        src={`https://www.gravatar.com/avatar/${emailHash}`}
        className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110"
      />

      <h5 className="text-gray-900 text-lg font-bold">{fullname}</h5>

      <em className="block">{work.position}</em>

      <p className="text-gray-600">
        <i className="fa-solid fa-building fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
        <a href={work.url} className="ml-2  text-purple-600">
          {work.companyName}
        </a>
      </p>

      <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
        <a href={social.github}>
          <i className="fa-brands fa-github fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
        </a>
        <a href={social.linkedIn}>
          <i className="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
        </a>
        <a href={social.facebook}>
          <i className="fa-brands fa-facebook fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
        </a>
      </div>
    </div>
  );
}
