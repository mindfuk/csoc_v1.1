/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'HHq9B0Rrg8gRrnr7SGl4wZ1XR4s2',
      username: 'Randy',
      fullName: 'Randy rocks',
      emailAddress: 'thisfakemailfor1@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    { 
      userId: '2',
      username: 'Abhishek',
      fullName: 'Abbhishek Mamdabad',
      emailAddress: 'abhishek@gmail.com',
      following: [],
      followers: ['HHq9B0Rrg8gRrnr7SGl4wZ1XR4s2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'Swamy',
      fullName: 'Swamy Akash',
      emailAddress: 'akashposa40@gmail.com',
      following: [],
      followers: ['HHq9B0Rrg8gRrnr7SGl4wZ1XR4s2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'Harini',
      fullName: 'Harini Kalwa',
      emailAddress: 'kalwaharinireddy@gmail.com',
      following: [],
      followers: ['HHq9B0Rrg8gRrnr7SGl4wZ1XR4s2'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
