// All_categories.jsx

import ExerciseCard from './ExerciseCard';

const AllCategories = () => {
  const categories = [
    {
      title: 'Yoga Asanas',
      description: 'Improve flexibility and strength with traditional Yoga poses.',
      imageUrl: '/images/yoga-asanas.jpg',
      link: '/exercises/yoga-asanas',
    },
    {
      title: 'Pranayama',
      description: 'Enhance your breathing and lung capacity with Pranayama techniques.',
      imageUrl: '/images/pranayama.jpg',
      link: '/exercises/pranayama',
    },
    {
      title: 'Dands and Baithaks',
      description: 'Explore the traditional Indian fitness routines for building endurance.',
      imageUrl: '/images/dands-baithaks.jpg',
      link: '/exercises/dands-baithaks',
    },
    {
      title: 'Vyayam',
      description: 'Discover physical exercises rooted in ancient Indian traditions.',
      imageUrl: '/images/vyayam.jpg',
      link: '/exercises/vyayam',
    },
    {
      title: 'Talwarbazi',
      description: 'Learn the art of sword fighting with Talwarbazi.',
      imageUrl: '/images/talwarbazi.jpg',
      link: '/exercises/talwarbazi',
    },
    {
      title: 'Silambam',
      description: 'Master the ancient martial art of Silambam using sticks and swords.',
      imageUrl: '/images/silambam.jpg',
      link: '/exercises/silambam',
    },
    {
      title: 'Kalaripayattu',
      description: 'Engage in one of the oldest fighting systems in the world from Kerala.',
      imageUrl: '/images/kalaripayattu.jpg',
      link: '/exercises/kalaripayattu',
    },
    {
      title: 'Gatka',
      description: 'Learn Gatka, a traditional martial art form from Punjab.',
      imageUrl: '/images/gatka.jpg',
      link: '/exercises/gatka',
    },
  ];

  return (
    <div className="all-categories">
      {categories.map((category, index) => (
        <ExerciseCard
          key={index}
          title={category.title}
          description={category.description}
          imageUrl={category.imageUrl}
          link={category.link}
        />
      ))}
    </div>
  );
};

export default AllCategories;
