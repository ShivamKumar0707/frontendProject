import React from 'react';

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Shivam Kumar',
    role: 'Frontend Developer',
 image: 'https://play-lh.googleusercontent.com/tRskOsrRr5WqQQFFT4bgmxbTUh1qFbj9P58TguS5m-fvEdSyX7xTeQfjXTkT9ELh_A',  },
  {
    id: 2,
    name: 'Anjali Sharma',
    role: 'UI/UX Designer',
 image: 'https://play-lh.googleusercontent.com/tRskOsrRr5WqQQFFT4bgmxbTUh1qFbj9P58TguS5m-fvEdSyX7xTeQfjXTkT9ELh_A',  },
//   {
//     id: 3,
//     name: 'Rahul Verma',
//     role: 'Backend Developer',
//     image: 'https://play-lh.googleusercontent.com/tRskOsrRr5WqQQFFT4bgmxbTUh1qFbj9P58TguS5m-fvEdSyX7xTeQfjXTkT9ELh_A',
//   },
//   {
//     id: 4,
//     name: 'Sneha Gupta',
//     role: 'Project Manager',
//  image: 'https://play-lh.googleusercontent.com/tRskOsrRr5WqQQFFT4bgmxbTUh1qFbj9P58TguS5m-fvEdSyX7xTeQfjXTkT9ELh_A',  },
];

const Team = () => {
  return (
    <div className="p-6 min-h-screen max-w-[430px]  ">
      <h2 className="text-3xl font-bold flex justify-center text-center text-white mb-8">Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-blue-400 p-4 rounded-lg shadow text-center transition hover:shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-800">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
